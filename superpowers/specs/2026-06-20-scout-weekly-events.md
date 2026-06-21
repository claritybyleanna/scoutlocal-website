# Scout Weekly Events Website Feature

## Goal

Add a global Scout widget that gives Fort Polk families a reason to revisit the site before the full app launch.

The first release shows events happening during the current Sunday-Saturday week at Fort Polk, allows visitors to submit missing events for admin review, and invites visitors to join a weekly email list. The Scout experience opens from a floating icon on public website pages instead of living as a standalone page.

## User Experience

### Global Entry Point

Every public website page gets a floating Scout button anchored to the bottom right, similar to a chat launcher.

- The button opens an on-page Scout widget.
- It uses the ScoutLocal wayfinder/arrow visual language.
- It does not appear on private AMSE pages.
- It should not cover important mobile content or bottom actions.

### Scout Widget

Load the widget from `docs/assets/js/scout-events.js` on public pages.

Widget title:

> What's happening this week at Fort Polk?

Widget behavior:

- Calculate the current week from Sunday through Saturday in the visitor's local time.
- Query published Fort Polk event records for that week.
- Render them inside the floating panel.
- If no events are available, show a calm empty state and keep the submit path visible.
- Include a clear `Missing something?` link or button.
- Include a beta/signup prompt after 20 seconds.

Event cards show:

- Event title
- Day and time
- Location name
- Short description
- Link/RSVP button when available

### Missing Event Submission

Clicking `Missing something?` opens a text-only event form.

Fields:

- Event name, required
- Hosted by, required
- Day, required and not limited to the current week
- Start time
- End time
- Location name, optional
- Address, required
- Description/details
- Link/RSVP URL

No flyer/image upload in v1.

Success copy:

> Your event has been sent for review and will be live within 24 hours.

After success, the UI returns to the weekly event panel.

### Weekly Email Prompt

On public pages, show a popup after 20 seconds:

> Want to get this in a weekly email?

The popup uses the same data questions as the Join Beta form. It uses the existing website lead capture endpoint rather than creating a separate email system.

Fields:

- Email
- Name
- I am a...
- Your connection to the military
- Nearest base
- Email opt-in checkbox

Behavior:

- Submit through the same `resend-sync-contact` path used by existing website beta forms.
- Use `sourcePage = "scout-weekly-events-widget"` or equivalent.
- Store Fort Polk as the base context.
- Treat this as beta/weekly-events interest, not as event submission.
- If closed or submitted, do not repeatedly interrupt the same session.

## Data Flow

### Reading Events

The public website can read published events directly from `public.intel_items` because current RLS allows anonymous users to select published rows.

Query rules:

- `type = "event"`
- `status = "published"`
- `base = Fort Polk`
- `starts_at` from the current Sunday at 00:00 through the next Sunday at 00:00
- sort by `starts_at`

### Submitting Events

Public website submissions should not receive broad anonymous insert rights on `intel_items`.

Create a small Supabase Edge Function for public event submissions. The function:

- Accepts the text-only form payload.
- Validates required fields and date order.
- Resolves the Fort Polk `base_id`.
- Inserts a draft row into `public.intel_items`.
- Sets `type = "event"`.
- Sets `status = "draft"`.
- Sets `audience = []` and `tags = []`.
- Leaves `submitted_by = null` because the website submitter is not signed in.

This keeps the same admin review workflow as in-app event submissions: admin reviews draft Scout events and publishes approved ones.

## Admin Behavior

No new admin screen is required for v1.

Website event submissions should appear in the existing admin Scout moderation queue alongside in-app draft events.

Admin approval should continue to change `intel_items.status` from `draft` to `published`.

## SEO and Launch Notes

- Do not add a standalone Scout page to the sitemap or primary navigation for v1.
- Keep the AMSE page private/unlisted and excluded.
- Use Fort Polk in public copy.
- Use structured, descriptive page metadata for search.

## Verification

- Visit normal public pages and confirm the floating Scout icon opens the Fort Polk weekly event widget.
- Confirm published events outside the current Sunday-Saturday range do not show.
- Confirm draft events do not show publicly.
- Submit a missing event and confirm it appears in the admin draft event queue.
- Confirm the success message appears and the UI returns to the weekly event panel.
- Confirm the weekly email popup submits through the existing lead capture path.
- Confirm the floating Scout button appears on normal public pages and not on the AMSE page.
