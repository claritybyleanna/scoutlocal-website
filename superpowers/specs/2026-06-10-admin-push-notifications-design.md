# Admin Push Notifications Design

## Goal

Build a secure, reliable push-notification system that a full ScoutLocal admin can test from TestFlight and use to send immediate or scheduled announcements.

The first release supports:

- Sending a test notification to every registered device belonging to the current admin
- Sending to all users or users assigned to one selected base
- Drafts, scheduled notifications, immediate sends, editing, and cancellation
- Destinations for Home, Scout, Favorites, Profile, Events, Deals, a specific business, or a specific event
- Recipient estimates, extra confirmation for all-user sends, and delivery history
- A user-facing Notification Settings screen with permission status and one master announcements toggle

Only profiles whose role is exactly `admin` can manage or send notifications.

## Current-System Gaps

The existing partial implementation cannot support the goal safely or reliably:

- `profiles.push_token` stores only one device token per user.
- Device tokens are registered only during onboarding, so returning users and reinstalled TestFlight builds may not register.
- The existing Edge Function trusts client-provided sender information and does not verify that the caller is a full admin.
- The current composer supports only immediate sends and does not estimate recipients, confirm broad sends, manage drafts, schedule messages, or show history.
- Scheduled delivery has no durable queue or worker.
- Notification payloads have no destination-routing contract.
- Base records do not contain a timezone.

## Architecture

Supabase is the source of truth and durable notification queue. Expo Push delivers notifications to iOS devices.

1. Every signed-in native device registers or refreshes its Expo push token in `push_devices`.
2. The admin composer creates and updates records in `push_notifications` through authenticated Edge Functions.
3. Edge Functions derive the sender from the caller's JWT and verify that the caller's profile role is exactly `admin`.
4. Immediate sends are claimed and delivered by the server.
5. Supabase Cron invokes a scheduled-delivery worker every minute. The worker atomically claims due notifications and sends them once.
6. Expo push tickets and delivery summaries are recorded for history and troubleshooting.
7. Notification payloads include a validated destination object used by the app's tap router.

## Data Model

### `bases`

Add:

- `timezone text NOT NULL DEFAULT 'America/Chicago'`

The value must be an IANA timezone identifier. Base-targeted schedules use the selected base's timezone, including daylight-saving transitions.

### `push_devices`

One row represents one registered app installation.

- `id uuid primary key`
- `user_id uuid references profiles(id)`
- `expo_push_token text unique`
- `platform text`
- `device_name text null`
- `app_version text null`
- `enabled boolean default true`
- `last_registered_at timestamptz`
- `disabled_at timestamptz null`
- `created_at timestamptz`
- `updated_at timestamptz`

Users can read and manage their own device rows. Service-role functions can manage all rows. Invalid or unregistered Expo tokens are disabled rather than deleted.

### `notification_preferences`

One row per user for the first release:

- `user_id uuid primary key references profiles(id)`
- `announcements_enabled boolean default true`
- `created_at timestamptz`
- `updated_at timestamptz`

The server excludes users whose master announcements toggle is off. The admin's test-to-my-devices action intentionally bypasses this preference so permission and delivery can be tested.

### `push_notifications`

The durable draft, schedule, and send record:

- `id uuid primary key`
- `created_by uuid references profiles(id)`
- `title text`
- `body text`
- `audience_type text`: `self`, `all`, or `base`
- `audience_id uuid null`
- `audience_name text`
- `destination_type text`
- `destination_id uuid null`
- `status text`: `draft`, `scheduled`, `sending`, `sent`, `partially_sent`, `failed`, or `canceled`
- `scheduled_for timestamptz null`
- `schedule_timezone text null`
- `estimated_recipient_count integer null`
- `attempted_count integer default 0`
- `delivered_count integer default 0`
- `failed_count integer default 0`
- `error_summary text null`
- `claimed_at timestamptz null`
- `sent_at timestamptz null`
- `canceled_at timestamptz null`
- `created_at timestamptz`
- `updated_at timestamptz`

The server stores scheduled times as UTC plus the IANA timezone used by the admin interface. Drafts and scheduled records remain editable. Sent, sending, failed, partially sent, and canceled records are immutable except for server-managed delivery fields.

### `push_delivery_attempts`

Stores per-device delivery outcomes for troubleshooting and invalid-token cleanup:

- `id uuid primary key`
- `notification_id uuid references push_notifications(id)`
- `device_id uuid references push_devices(id)`
- `expo_ticket_id text null`
- `status text`
- `error_code text null`
- `error_message text null`
- `created_at timestamptz`
- `updated_at timestamptz`

## Server Interfaces

All notification-management endpoints require an authenticated JWT and verify `profiles.role = 'admin'`. Client-provided sender IDs are ignored.

### Admin Management Function

An authenticated Edge Function supports explicit actions:

- `estimate`: validate audience and return the current eligible device and user counts
- `create_draft`
- `update_draft`
- `schedule`
- `update_scheduled`
- `cancel`
- `send_now`
- `list`

Input validation includes title and body length, audience shape, destination shape, future schedule time, base timezone, and allowed status transitions.

`send_now` and scheduled delivery use an atomic database claim so concurrent retries cannot send the same notification twice.

### Scheduled Worker

Supabase Cron invokes a service-role worker every minute. The worker:

1. Atomically claims due `scheduled` rows.
2. Resolves eligible devices at send time.
3. Sends Expo messages in batches of at most 100.
4. Records ticket outcomes.
5. Disables tokens Expo reports as unregistered.
6. Marks each notification `sent`, `partially_sent`, or `failed`.

### Recipient Resolution

- `self`: every enabled device owned by the authenticated admin; bypasses announcement preference
- `all`: enabled devices for users with announcements enabled
- `base`: enabled devices for users whose `selected_base_id` matches the chosen base and whose announcements are enabled

Recipient estimates report both unique users and eligible devices because one user may have multiple devices. Delivery history records device-level attempted, delivered, and failed counts.

## Notification Destination Contract

Each Expo message includes a versioned data payload:

```json
{
  "schemaVersion": 1,
  "notificationId": "uuid",
  "destination": {
    "type": "home|scout|favorites|profile|events|deals|business|event",
    "id": "optional uuid"
  }
}
```

`business` and `event` require an ID. All other destinations reject an ID.

When a notification is tapped:

- Tab destinations open the matching tab.
- Events and Deals open their matching overlay screens.
- Business and event destinations open the matching detail view.
- Missing or inaccessible business/event records fall back to Explore or Events respectively.
- Invalid or unsupported payloads fall back to Home.

The app handles taps from background, foreground, and cold-start states.

## Profile Navigation

Profile has an internal tab switcher that is separate from the app's bottom navigation:

- `Account`: the existing profile, base, listing, feedback, and admin-panel links
- `Notification Settings`: available to every signed-in user
- `Push Notifications`: available only when `profile.role = 'admin'`

The admin Push Notifications tab contains the Compose and History views described below. It is not part of the Admin Panel. The existing Admin Panel remains focused on listings, reports, users, Scout moderation, user tests, and feedback.

## Admin Push Notifications Experience

The full-admin-only Profile tab has Compose and History views.

### Compose

The admin can:

- Choose Test my devices, All ScoutLocal users, or one active base
- Enter a title and message with visible character limits
- Choose a destination
- Search and select a specific business or event when required
- Preview the notification
- Save as draft, send now, or schedule

Scheduling behavior:

- Base audiences use the selected base's IANA timezone.
- All-user and self-test audiences use the admin device timezone captured when scheduled.
- The interface displays the timezone beside the selected date and time.

Before sending or scheduling, the app requests a fresh recipient estimate. The review screen shows unique users, eligible devices, audience, destination, and schedule. All-user sends require an additional explicit confirmation.

### History

History groups notifications into Drafts, Scheduled, and Sent.

- Drafts can be edited or deleted.
- Scheduled notifications can be edited or canceled before they are claimed.
- Sent history shows audience, destination, unique-user estimate, attempted devices, delivered devices, failed devices, sender, and send time.
- Failed and partially sent records expose an error summary.

## User Experience

### Device Registration

Native devices register or refresh their Expo push token:

- After a successful sign-in
- When an authenticated app launches or returns to the foreground
- After the user enables notifications from Notification Settings

Registration uses the EAS project ID when requesting an Expo push token. Permission denial never blocks sign-in or app use.

On sign-out, the current installation's device row is disabled so a later user on the same device does not receive the previous user's notifications.

### Notification Settings

Profile includes a Notification Settings screen with:

- Current iOS notification permission status
- Enable Notifications button when permission can still be requested
- Open iOS Settings button when permission is denied
- Master ScoutLocal announcements toggle
- Count of enabled devices registered to the account

The toggle controls server-side eligibility. Turning it off does not revoke the operating-system permission.

## Security

- Only exact-role full admins can estimate, create, edit, cancel, schedule, list, or send admin notifications.
- `admin_limited`, business owners, and regular users are rejected server-side.
- The server derives the admin identity from the authenticated JWT.
- RLS prevents users from reading or modifying other users' device records or preferences.
- Admin notification records are readable and manageable only through admin-authorized policies or Edge Functions.
- Service-role credentials remain server-side.
- Destination IDs and audience IDs are validated against existing records.
- Send operations are idempotent and use atomic claims.

## Error Handling

- Validation errors return actionable messages without changing notification state.
- A schedule that is no longer in the future is rejected.
- Editing or canceling a notification that has already been claimed returns a conflict.
- Zero-recipient estimates are shown before confirmation; sending with zero eligible devices is blocked except for a self-test, where the error explains that no admin device is registered.
- Partial Expo failures are recorded and visible in history.
- Invalid Expo tokens are disabled.
- Network or Expo service failures leave a durable failed or partially sent record that can be inspected; automatic re-sending is not included in the first release to avoid accidental duplicates.

## Testing

### Unit And Integration Tests

- Authorization accepts only full admins.
- Audience resolution correctly handles self, all, and base targets.
- Announcement preferences exclude opted-out users except during self-tests.
- Multiple devices for one user are all selected without duplicating a device.
- Draft and schedule status transitions enforce edit and cancellation rules.
- Atomic claims prevent duplicate sends.
- Schedule conversion respects IANA timezone and daylight-saving transitions.
- Destination payload validation enforces IDs only where required.
- Tap routing opens each destination and applies fallbacks.
- Invalid Expo tokens are disabled.
- Success, partial failure, total failure, and zero-recipient results are recorded accurately.

### TestFlight Acceptance Flow

1. Sign into the full admin account on one or more TestFlight devices.
2. Open Notification Settings, enable notifications, and confirm the registered-device count.
3. Send Test my devices and confirm every registered admin device receives it.
4. Tap notifications for each destination category and verify routing.
5. Save and edit a draft.
6. Schedule, edit, and cancel a notification.
7. Schedule a second notification and confirm it sends without the admin app being open.
8. Send to a selected base after reviewing the recipient estimate.
9. Verify delivery counts and any failures in Sent history.

## Out Of Scope For First Release

- `admin_limited` or business-owner sending
- Household, branch, arrival-stage, interest, or combined audience filters
- Separate user preference toggles for events, deals, and base updates
- Quiet hours
- Recurring notifications
- Automatic retry of failed sends
- Rich media, custom sounds, or notification action buttons
