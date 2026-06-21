# Weekly Scout Events Digest Plan

## Current Status

Built now:

- Scout website widget exists.
- The widget shows Fort Polk events for the current week.
- The widget has an "add an event" submission flow.
- Event submissions are saved as draft Scout events for admin review.
- Event submitter confirmation email code exists in `submit-scout-event`.
- Admin notification email code for new event submissions exists in `submit-scout-event`.
- The "Want this in an email?" widget form exists.
- Weekly email interest is captured through the existing Resend/Supabase contact sync path.

Not built yet:

- Automated weekly Scout events digest.
- Saturday scheduled send.
- `send-weekly-scout-digest` Edge Function.
- Resend Broadcast creation for weekly events.
- Dedicated weekly events segment routing, if a separate Resend segment is wanted.
- Admin preview/dry-run screen or command for the weekly digest.
- Digest send logging beyond the currently planned `email_events` pattern.

## Goal

Send a weekly ScoutLocal email every Saturday with Fort Polk events happening the next Sunday through Saturday.

Example: a Saturday, June 27 send includes events from Sunday, June 28 through Saturday, July 4.

## Email System

Use Resend Broadcasts for the actual email send.

Resend should handle:

- broadcast delivery
- the audience or segment
- unsubscribe handling
- deliverability

Supabase should handle:

- selecting the correct approved Fort Polk events
- building the weekly event content
- triggering the Saturday job
- logging send status

## Audience

Create or use a dedicated Resend segment:

```text
Scout Weekly Events - Fort Polk
```

When someone fills out "Want this in an email?" from the Scout widget:

- save them to Supabase `marketing_leads`
- sync them into Resend
- add them to the weekly events segment
- keep their beta lead details: name, role, affiliation, nearest base, and opt-in status

This keeps weekly event emails separate from general beta updates.

## Saturday Job

Add a Supabase Edge Function:

```text
send-weekly-scout-digest
```

The function should run every Saturday morning.

Responsibilities:

1. Calculate the next week window in Fort Polk/Central time:
   - next Sunday 12:00 AM
   - next Saturday 11:59 PM
2. Query approved or public Fort Polk events from the Scout event table.
3. Group events by day.
4. Build the email HTML and plain text.
5. Create a Resend Broadcast for the weekly events segment.
6. Send immediately or schedule for later Saturday morning.
7. Log the broadcast ID and status in `email_events`.

## Email Content

Subject options:

```text
What's happening next week at Fort Polk
```

```text
Fort Polk events for next week
```

Email layout:

- ScoutLocal header
- "What's happening next week at Fort Polk?"
- date range
- events grouped by day
- event name, time, host, location or address, and cost if available
- "Missing something? Add it to Scout"
- app/site CTA
- unsubscribe link

## No Events Rule

For v1, do not send the weekly digest if there are no approved events for the next week.

Instead:

- log `skipped_no_events`
- optionally send an admin note saying the digest was skipped

## Schedule

Simple v1 schedule:

```text
Saturday at 8:00 AM Central
```

Supabase cron runs on UTC. During daylight time, this is:

```text
Saturday 13:00 UTC
```

Later, harden daylight-saving behavior by having the function check `America/Chicago` time before sending.

## Admin Preview

Before enabling the automatic schedule, add a manual dry-run mode:

```json
{
  "dryRun": true
}
```

Dry run should return:

- date range
- event count
- rendered subject
- preview HTML/text
- target segment ID
- no emails sent

This allows the first digest to be reviewed before it goes out.

## Build Order

1. Create or confirm the Resend segment for weekly Fort Polk events.
2. Update `resend-sync-contact` so Scout weekly signups go into that segment.
3. Build the `send-weekly-scout-digest` function.
4. Add dry-run mode.
5. Test with one manual send to an internal/admin email.
6. Add Saturday cron.
7. Add logging to `email_events`.

## Notes

This is a future build item. The current Scout widget captures weekly email interest, but the automated Saturday digest send is not implemented yet.
