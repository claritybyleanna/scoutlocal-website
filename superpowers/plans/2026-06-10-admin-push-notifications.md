# Admin Push Notifications Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build secure TestFlight push notifications managed from a full-admin-only Push Notifications tab inside Profile, with device registration, user settings, destinations, drafts, scheduling, and delivery history.

**Architecture:** Supabase stores registered devices, preferences, notification queue records, and delivery attempts. Authenticated Edge Functions enforce exact-role full-admin authorization and deliver through Expo Push; a database cron job invokes the scheduled worker. Focused app modules handle device registration and destination routing, while Profile composes separate Account, Notification Settings, and admin Push Notifications views.

**Tech Stack:** Expo SDK 54, React Native, TypeScript, `expo-notifications`, Supabase Postgres/RLS/Edge Functions/Cron, Expo Push API, Vitest, Deno tests.

---

## File Structure

**Create**

- `supabase/migrations/202606100001_push_notifications.sql`: queue schema, RLS, database helpers, and cron schedule.
- `supabase/functions/_shared/push-notifications.ts`: server validation, recipient resolution, batching, and delivery helpers.
- `supabase/functions/_shared/push-notifications.test.ts`: server helper tests.
- `supabase/functions/manage-push-notifications/index.ts`: authenticated admin CRUD/estimate/send endpoint.
- `supabase/functions/process-scheduled-push-notifications/index.ts`: service-role scheduled worker.
- `src/domain/pushNotifications.ts`: shared app types, destination validation, and response parsing.
- `src/domain/pushNotifications.test.ts`: app-domain tests.
- `src/lib/pushDeviceRegistration.ts`: permission, token registration, refresh, and disable-current-device logic.
- `src/lib/pushDeviceRegistration.test.ts`: registration behavior tests.
- `src/hooks/usePushNotificationRouting.ts`: foreground/cold-start notification response handling.
- `src/screens/NotificationSettingsScreen.tsx`: user permission and master preference UI.
- `src/screens/PushNotificationsScreen.tsx`: full-admin Profile workspace shell.
- `src/components/push/PushNotificationComposer.tsx`: compose, destination selection, preview, and review flow.
- `src/components/push/PushNotificationHistory.tsx`: drafts, scheduled, and sent history.

**Modify**

- `docs/superpowers/specs/2026-06-10-admin-push-notifications-design.md`: record Profile-tab navigation decision.
- `src/domain/types.ts`: add base timezone and push-notification types used by screens.
- `src/screens/ProfileScreen.tsx`: add internal Profile tabs and render focused child screens.
- `src/screens/AdminPanelScreen.tsx`: remove the old Send Push Notification entry.
- `src/screens/OnboardingFlow.tsx`: delegate token registration to the shared registration module.
<<<<<<< ours
- `src/screens/ScoutScreen.tsx`: accept a notification-selected event/intel item and open its detail modal.
- `App.tsx`: register devices after auth/foreground, disable on sign-out, route taps, and remove the old send-notification overlay.
- `app.json`: ensure iOS background/notification configuration remains explicit.
- `package.json` and `package-lock.json`: add the Expo-compatible native date/time picker.
=======
- `App.tsx`: register devices after auth/foreground, disable on sign-out, route taps, and remove the old send-notification overlay.
- `app.json`: ensure iOS background/notification configuration remains explicit.
>>>>>>> theirs
- `supabase/functions/send-push-notification/index.ts`: remove after replacement is deployed and verified.

## Task 1: Commit The Approved Profile-Tab Design Change

**Files:**
- Modify: `docs/superpowers/specs/2026-06-10-admin-push-notifications-design.md`

- [ ] **Step 1: Verify the spec describes Profile navigation**

Run:

```bash
rg -n "Profile Navigation|Push Notifications tab|not part of the Admin Panel" docs/superpowers/specs/2026-06-10-admin-push-notifications-design.md
```

Expected: all three concepts are present.

- [ ] **Step 2: Check formatting**

Run:

```bash
git diff --check -- docs/superpowers/specs/2026-06-10-admin-push-notifications-design.md
```

Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/specs/2026-06-10-admin-push-notifications-design.md
git commit -m "docs: place push notifications in profile"
```

## Task 2: Add Shared App Notification Contracts

**Files:**
- Create: `src/domain/pushNotifications.ts`
- Create: `src/domain/pushNotifications.test.ts`
- Modify: `src/domain/types.ts`

- [ ] **Step 1: Write failing destination-contract tests**

Test these behaviors:

```ts
expect(parsePushDestination({ type: "scout" })).toEqual({ type: "scout" });
expect(parsePushDestination({ type: "business", id: "biz-1" })).toEqual({ type: "business", id: "biz-1" });
expect(parsePushDestination({ type: "business" })).toEqual({ type: "home" });
expect(parsePushDestination({ type: "home", id: "unexpected" })).toEqual({ type: "home" });
expect(parseNotificationResponseData({ schemaVersion: 99 })).toEqual({ type: "home" });
```

- [ ] **Step 2: Run the test and verify RED**

Run:

```bash
npx vitest run src/domain/pushNotifications.test.ts
```

Expected: FAIL because `pushNotifications.ts` does not exist.

- [ ] **Step 3: Implement the shared contracts**

Define:

```ts
export type PushAudience = { type: "self" | "all" | "base"; id?: string; name: string };
export type PushDestination =
  | { type: "home" | "scout" | "favorites" | "profile" | "events" | "deals" }
  | { type: "business" | "event"; id: string };
export type PushNotificationStatus =
  | "draft" | "scheduled" | "sending" | "sent" | "partially_sent" | "failed" | "canceled";
```

Add strict `parsePushDestination` and `parseNotificationResponseData` functions that fall back to `{ type: "home" }`. Add `timezone?: string | null` to `Base`.

- [ ] **Step 4: Run tests and typecheck**

```bash
npx vitest run src/domain/pushNotifications.test.ts
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts src/domain/types.ts
git commit -m "feat(push): add notification contracts"
```

## Task 3: Add The Durable Queue Schema And Security Policies

**Files:**
- Create: `supabase/migrations/202606100001_push_notifications.sql`

- [ ] **Step 1: Write the migration with explicit constraints**

Create:

- `bases.timezone` with default `America/Chicago`
- `push_devices`
- `notification_preferences`
- `push_notifications`
- `push_delivery_attempts`

Add checks for allowed platform, audience, destination, delivery-attempt, and notification-status values. Add partial indexes for due scheduled notifications and enabled devices.

- [ ] **Step 2: Add exact-role authorization and RLS**

Create `app_private.is_full_admin()` if absent:

```sql
SELECT EXISTS (
  SELECT 1 FROM public.profiles
  WHERE id = auth.uid() AND role = 'admin'
);
```

Policies must allow:

- Users to read/upsert/update only their own `push_devices` and `notification_preferences`
- Full admins to read notification queue/history
- No direct authenticated-client insert/update/delete access to `push_notifications` or `push_delivery_attempts`
- Service role to operate normally through RLS bypass

- [ ] **Step 3: Add atomic database helpers**

Add security-definer functions:

```sql
claim_push_notification(notification_id uuid, expected_status text)
claim_due_push_notifications(batch_limit integer default 25)
```

Each function must atomically transition eligible rows to `sending`; already-claimed rows return nothing.

- [ ] **Step 4: Add scheduled worker cron**

Enable `pg_cron` and `pg_net`, then schedule a one-minute HTTP POST to `process-scheduled-push-notifications`. Store the worker authorization secret in Supabase Vault; do not embed a service-role key in SQL.

- [ ] **Step 5: Verify migration locally or in a disposable Supabase branch**

Run:

```bash
npx supabase db reset
```

Expected: all migrations apply without errors. If this project is not linked for local reset, run the migration in a disposable Supabase branch and verify tables, policies, helper functions, and cron job there.

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/202606100001_push_notifications.sql
git commit -m "feat(push): add notification queue schema"
```

## Task 4: Build And Test Server Validation And Delivery Helpers

**Files:**
- Create: `supabase/functions/_shared/push-notifications.ts`
- Create: `supabase/functions/_shared/push-notifications.test.ts`

- [ ] **Step 1: Write failing Deno tests**

Cover:

- Only role `admin` passes `assertFullAdmin`
- `self` bypasses preference filtering
- `all` and `base` exclude disabled devices and opted-out users
- Duplicate device tokens are deduplicated
- Business/event destinations require IDs
- Other destinations reject IDs
- Expo messages contain `schemaVersion`, `notificationId`, and destination
- Expo batches contain at most 100 messages
- Expo `DeviceNotRegistered` results are identified for disabling

- [ ] **Step 2: Run the tests and verify RED**

```bash
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: FAIL because the helper module does not exist.

- [ ] **Step 3: Implement minimal helpers**

Export focused functions:

```ts
assertFullAdmin(profile: { role?: string } | null): void
validateNotificationInput(input: unknown): ValidatedNotificationInput
buildExpoMessages(notification: NotificationRecord, devices: PushDevice[]): ExpoMessage[]
chunkMessages(messages: ExpoMessage[], size?: number): ExpoMessage[][]
classifyExpoTickets(devices: PushDevice[], tickets: ExpoTicket[]): DeliveryResult
```

Keep Supabase queries behind injected interfaces so recipient resolution is testable without live network calls.

- [ ] **Step 4: Run Deno tests**

```bash
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add supabase/functions/_shared/push-notifications.ts supabase/functions/_shared/push-notifications.test.ts
git commit -m "feat(push): add secure delivery helpers"
```

## Task 5: Replace The Insecure Send Function With Admin Management

**Files:**
- Create: `supabase/functions/manage-push-notifications/index.ts`
- Modify later: `supabase/functions/send-push-notification/index.ts`

- [ ] **Step 1: Add endpoint-level tests to the shared test file**

Add table-driven cases for allowed transitions:

```ts
draft -> draft
draft -> scheduled
draft -> sending
scheduled -> scheduled
scheduled -> canceled
```

Reject editing/canceling `sending`, `sent`, `partially_sent`, `failed`, or `canceled`.

- [ ] **Step 2: Run the test and verify RED**

```bash
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: FAIL on missing status-transition validation.

- [ ] **Step 3: Implement `manage-push-notifications`**

Support actions:

```ts
<<<<<<< ours
"estimate" | "create_draft" | "update_draft" | "delete_draft" | "schedule" |
=======
"estimate" | "create_draft" | "update_draft" | "schedule" |
>>>>>>> theirs
"update_scheduled" | "cancel" | "send_now" | "list"
```

For every request:

1. Create a user-scoped Supabase client from the request Authorization header.
2. Resolve `auth.getUser()`.
3. Load the caller's profile and require exact role `admin`.
4. Validate input and destination records.
5. Use a service-role client only after authorization succeeds.

For `send_now`, claim the record atomically, resolve recipients at send time, send Expo batches, insert delivery attempts, disable invalid tokens, and finalize counts/status.

- [ ] **Step 4: Verify authorization manually**

Invoke the deployed preview function with tokens for a regular user, `admin_limited`, and full admin.

Expected:

- Regular user: `403`
- `admin_limited`: `403`
- Full admin: successful estimate response

- [ ] **Step 5: Commit**

```bash
git add supabase/functions/manage-push-notifications/index.ts supabase/functions/_shared/push-notifications.ts supabase/functions/_shared/push-notifications.test.ts
git commit -m "feat(push): add admin notification management"
```

## Task 6: Add The Scheduled Notification Worker

**Files:**
- Create: `supabase/functions/process-scheduled-push-notifications/index.ts`
- Modify: `supabase/functions/_shared/push-notifications.test.ts`

- [ ] **Step 1: Write failing worker tests**

Test:

- Due scheduled rows are claimed once
- Future rows remain scheduled
- One failed notification does not stop the rest of the batch
- Final statuses are `sent`, `partially_sent`, or `failed`

- [ ] **Step 2: Run and verify RED**

```bash
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: FAIL on missing worker orchestration helper.

- [ ] **Step 3: Implement the worker**

Require the cron secret header. Claim up to 25 due rows, process each independently with shared delivery helpers, and return a summary:

```json
{ "claimed": 2, "sent": 1, "partiallySent": 1, "failed": 0 }
```

- [ ] **Step 4: Run Deno tests**

```bash
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add supabase/functions/process-scheduled-push-notifications/index.ts supabase/functions/_shared/push-notifications.test.ts
git commit -m "feat(push): process scheduled notifications"
```

## Task 7: Build Shared Device Registration

**Files:**
- Create: `src/lib/pushDeviceRegistration.ts`
- Create: `src/lib/pushDeviceRegistration.test.ts`
- Modify: `src/screens/OnboardingFlow.tsx`

- [ ] **Step 1: Write failing registration tests**

Test injected adapters for:

- Web returns `unsupported` without requesting permission
- Granted permission calls `getExpoPushTokenAsync({ projectId })`
- Token is upserted into `push_devices`
- Denied permission returns `denied` without throwing
- Sign-out disables only the current installation token

- [ ] **Step 2: Run and verify RED**

```bash
npx vitest run src/lib/pushDeviceRegistration.test.ts
```

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement registration functions**

Export:

```ts
getNotificationPermissionState()
registerCurrentPushDevice(userId: string, requestPermission: boolean)
disableCurrentPushDevice(userId: string)
```

Use `Constants.expoConfig?.extra?.eas?.projectId` explicitly. Cache the current installation token in module state for sign-out disabling. Never block auth or onboarding on registration failure.

- [ ] **Step 4: Replace onboarding's inline registration**

`OnboardingFlow` should call `registerCurrentPushDevice(uid, true)` when the user chooses Allow Notifications.

- [ ] **Step 5: Run tests and typecheck**

```bash
npx vitest run src/lib/pushDeviceRegistration.test.ts
npm run typecheck
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/pushDeviceRegistration.ts src/lib/pushDeviceRegistration.test.ts src/screens/OnboardingFlow.tsx
git commit -m "feat(push): register every app device"
```

## Task 8: Register Devices During App Lifecycle And Route Notification Taps

**Files:**
- Create: `src/hooks/usePushNotificationRouting.ts`
- Modify: `App.tsx`
<<<<<<< ours
- Modify: `src/screens/ScoutScreen.tsx`
=======
>>>>>>> theirs
- Modify: `src/domain/pushNotifications.test.ts`

- [ ] **Step 1: Write failing routing tests**

Test mapping destinations to app actions:

- `home`, `scout`, `favorites`, `profile` select tabs
- `events`, `deals` open overlays
- Existing business/event records open details
- Missing business falls back to Explore
- Missing event falls back to Events
- Invalid data falls back to Home

- [ ] **Step 2: Run and verify RED**

```bash
npx vitest run src/domain/pushNotifications.test.ts
```

Expected: FAIL on missing routing action mapper.

- [ ] **Step 3: Implement routing hook and app integration**

The hook must process:

- `Notifications.getLastNotificationResponseAsync()` on cold start
- `Notifications.addNotificationResponseReceivedListener()` while running

In `App.tsx`:

- Register the current device after authenticated session resolution
- Refresh registration when AppState becomes active
- Disable the current device before sign-out completes
- Apply routing actions using existing tab/overlay/detail state
<<<<<<< ours
- Pass a notification-selected `intel_items.id` into `ScoutScreen`; have `ScoutScreen` fetch that published item and open its existing event detail modal
=======
>>>>>>> theirs
- Remove `"sendNotification"` from `OverlayScreen` and remove the old overlay block

- [ ] **Step 4: Run tests and typecheck**

```bash
npx vitest run src/domain/pushNotifications.test.ts
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
<<<<<<< ours
git add App.tsx src/screens/ScoutScreen.tsx src/hooks/usePushNotificationRouting.ts src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts
=======
git add App.tsx src/hooks/usePushNotificationRouting.ts src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts
>>>>>>> theirs
git commit -m "feat(push): route notification taps"
```

## Task 9: Add Profile Internal Tabs And Notification Settings

**Files:**
- Create: `src/screens/NotificationSettingsScreen.tsx`
- Modify: `src/screens/ProfileScreen.tsx`
- Modify: `src/screens/AdminPanelScreen.tsx`

- [ ] **Step 1: Add a failing visibility test**

Add a pure helper test proving:

```ts
getProfileTabs("admin") // account, notification_settings, push_notifications
getProfileTabs("admin_limited") // account, notification_settings
getProfileTabs("user") // account, notification_settings
```

- [ ] **Step 2: Run and verify RED**

```bash
npx vitest run src/domain/pushNotifications.test.ts
```

Expected: FAIL on missing `getProfileTabs`.

- [ ] **Step 3: Implement Profile tabs**

Add a compact internal tab switcher below the Profile heading:

- Account
- Notification Settings
- Push Notifications, exact-role full admin only

Keep the existing Profile content under Account. Remove `onSendNotification` from `ProfileScreen` and remove the old notification button from `AdminPanelScreen`.

- [ ] **Step 4: Implement Notification Settings**

Display:

- Permission state
- Enable Notifications or Open iOS Settings action
- Master ScoutLocal announcements switch backed by `notification_preferences`
- Enabled-device count from `push_devices`

After enabling permission, call `registerCurrentPushDevice(profile.id, true)` and refresh the count.

- [ ] **Step 5: Typecheck and manually verify**

```bash
npm run typecheck
```

Expected: PASS. Verify Profile tabs for user, `admin_limited`, and admin seed profiles on web/native.

- [ ] **Step 6: Commit**

```bash
git add src/screens/ProfileScreen.tsx src/screens/NotificationSettingsScreen.tsx src/screens/AdminPanelScreen.tsx src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts App.tsx
git commit -m "feat(push): add profile notification tabs"
```

## Task 10: Build The Admin Composer In The Profile Push Notifications Tab

**Files:**
- Create: `src/screens/PushNotificationsScreen.tsx`
- Create: `src/components/push/PushNotificationComposer.tsx`
- Modify: `src/screens/ProfileScreen.tsx`
<<<<<<< ours
- Modify: `App.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`
=======
>>>>>>> theirs
- Replace/remove: `src/screens/SendNotificationScreen.tsx`

- [ ] **Step 1: Write failing composer-state tests**

Test pure composer helpers:

- Base audience selects the base timezone
- Self/all use the captured admin device timezone
- Business/event destinations require a selection
- All-user send requires extra confirmation
- Send/schedule is blocked at zero eligible devices
- Draft save does not require a recipient estimate

- [ ] **Step 2: Run and verify RED**

```bash
npx vitest run src/domain/pushNotifications.test.ts
```

Expected: FAIL on missing composer helpers.

- [ ] **Step 3: Implement Push Notifications workspace shell**

Inside the full-admin Profile tab, add `Compose` and `History` sub-tabs. `Compose` renders the focused composer component.

<<<<<<< ours
- [ ] **Step 4: Add the native schedule picker**

Run:

```bash
npx expo install @react-native-community/datetimepicker
```

Expected: Expo installs the SDK 54-compatible version and updates both package files.

- [ ] **Step 5: Implement composer and review flow**
=======
- [ ] **Step 4: Implement composer and review flow**
>>>>>>> theirs

Support:

- Self, all, and active-base audience selection
- Title/body character limits
- Destination choices
- Searchable business/event selection
- Notification preview
- Save Draft, Send Now, and Schedule
- Schedule date/time plus visible timezone
- Fresh estimate before send/schedule
- Review modal with unique-user and eligible-device counts
- Additional all-users confirmation

Invoke `manage-push-notifications`; do not write queue records directly from the app.

<<<<<<< ours
Pass all active businesses from `App.tsx` into Profile for the business selector. Load published event candidates from `intel_items` for the selected base, so selected event IDs match notification tap routing.

- [ ] **Step 6: Remove the old partial screen**

Delete `src/screens/SendNotificationScreen.tsx` after all imports and navigation references are removed.

- [ ] **Step 7: Run tests and typecheck**
=======
- [ ] **Step 5: Remove the old partial screen**

Delete `src/screens/SendNotificationScreen.tsx` after all imports and navigation references are removed.

- [ ] **Step 6: Run tests and typecheck**
>>>>>>> theirs

```bash
npx vitest run src/domain/pushNotifications.test.ts
npm run typecheck
```

Expected: PASS.

<<<<<<< ours
- [ ] **Step 8: Commit**

```bash
git add src/screens/ProfileScreen.tsx src/screens/PushNotificationsScreen.tsx src/components/push/PushNotificationComposer.tsx src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts App.tsx package.json package-lock.json
=======
- [ ] **Step 7: Commit**

```bash
git add src/screens/ProfileScreen.tsx src/screens/PushNotificationsScreen.tsx src/components/push/PushNotificationComposer.tsx src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts App.tsx
>>>>>>> theirs
git rm src/screens/SendNotificationScreen.tsx
git commit -m "feat(push): add admin profile composer"
```

## Task 11: Add Draft, Schedule, And Delivery History Management

**Files:**
- Create: `src/components/push/PushNotificationHistory.tsx`
- Modify: `src/screens/PushNotificationsScreen.tsx`
- Modify: `src/components/push/PushNotificationComposer.tsx`

- [ ] **Step 1: Write failing history-grouping tests**

Test:

- Draft statuses group under Drafts
- Scheduled status groups under Scheduled
- Sending/sent/partially_sent/failed/canceled group under Sent
- Drafts expose edit/delete actions
- Scheduled rows expose edit/cancel actions
- Claimed/final rows expose no mutation actions

- [ ] **Step 2: Run and verify RED**

```bash
npx vitest run src/domain/pushNotifications.test.ts
```

Expected: FAIL on missing history helpers.

- [ ] **Step 3: Implement history**

Load records using the management function's `list` action. Show audience, destination, schedule/send time, attempted/delivered/failed device counts, and error summary.

Wire:

- Edit draft
- Delete draft
- Edit scheduled
- Cancel scheduled with confirmation
- Refresh after mutations

- [ ] **Step 4: Run tests and typecheck**

```bash
npx vitest run src/domain/pushNotifications.test.ts
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/push/PushNotificationHistory.tsx src/screens/PushNotificationsScreen.tsx src/components/push/PushNotificationComposer.tsx src/domain/pushNotifications.ts src/domain/pushNotifications.test.ts
git commit -m "feat(push): manage notification history"
```

## Task 12: Configure Native Notifications And Deploy The Backend

**Files:**
- Modify: `app.json`
- Delete after verification: `supabase/functions/send-push-notification/index.ts`

- [ ] **Step 1: Verify native configuration**

<<<<<<< ours
Confirm the `expo-notifications` plugin is present. Do not add the iOS `remote-notification` background mode in this release because ScoutLocal does not execute notification work in the background; tap handling and displayed remote notifications do not require it. Run:
=======
Confirm the `expo-notifications` plugin is present and add explicit iOS background mode only if required by the finalized Expo configuration. Run:
>>>>>>> theirs

```bash
npx expo config --type public
npx expo install --check
```

Expected: notification plugin present and dependencies compatible.

<<<<<<< ours
- [ ] **Step 2: Verify APNs credentials**

Run:

```bash
eas credentials --platform ios
```

Expected: the ScoutLocal iOS app has an active push notification key configured for EAS Build.

- [ ] **Step 3: Apply the migration**
=======
- [ ] **Step 2: Apply the migration**
>>>>>>> theirs

```bash
npx supabase db push
```

Expected: push schema, policies, functions, and cron job exist in production.

<<<<<<< ours
- [ ] **Step 4: Configure secrets**

Set the scheduled-worker secret and any required Expo access token in Supabase secrets/Vault. Verify secrets without printing their values.

- [ ] **Step 5: Deploy functions**
=======
- [ ] **Step 3: Configure secrets**

Set the scheduled-worker secret and any required Expo access token in Supabase secrets/Vault. Verify secrets without printing their values.

- [ ] **Step 4: Deploy functions**
>>>>>>> theirs

```bash
npx supabase functions deploy manage-push-notifications
npx supabase functions deploy process-scheduled-push-notifications
```

Expected: both deploy successfully.

<<<<<<< ours
- [ ] **Step 6: Verify replacement before deleting legacy function**
=======
- [ ] **Step 5: Verify replacement before deleting legacy function**
>>>>>>> theirs

Complete one admin estimate and one test-to-my-devices send through `manage-push-notifications`. Confirm history and delivery attempt rows.

Then:

```bash
git rm supabase/functions/send-push-notification/index.ts
git commit -m "chore(push): remove legacy send function"
```

## Task 13: Full Verification And TestFlight Acceptance

**Files:**
- No new files expected

- [ ] **Step 1: Run all local checks**

```bash
npm test -- --run
npm run typecheck
npx expo install --check
npx expo export --platform ios --output-dir /private/tmp/scoutlocal-push-ios-export
deno test supabase/functions/_shared/push-notifications.test.ts
```

Expected: all pass.

- [ ] **Step 2: Verify server security**

Confirm regular users and `admin_limited` receive `403` from every management action. Confirm only exact-role admin sees the Profile Push Notifications tab.

- [ ] **Step 3: Verify TestFlight acceptance flow**

On at least two registered admin devices:

1. Enable notifications in Profile > Notification Settings.
2. Confirm device count.
3. Send Test my devices.
4. Confirm both devices receive the push.
5. Tap each destination category and verify routing.
6. Save/edit a draft.
7. Schedule/edit/cancel a notification.
8. Schedule a second notification and close the admin app.
9. Confirm cron sends it.
10. Send to a selected base after reviewing estimate.
11. Confirm delivery counts and errors in History.

- [ ] **Step 4: Build and submit**

```bash
git push origin main
eas build --platform ios --profile production
eas submit --platform ios --profile production
```

Expected: the new TestFlight build is submitted successfully.
