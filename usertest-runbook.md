# ScoutLocal — User Testing Runbook

How to run a web-based usability session from scratch.

---

## Prerequisites

- Node.js installed (already have it for the Expo project)
- Supabase project is live with `usertest_events` migration applied
- An admin account in Supabase (`role = 'admin'` in `profiles`)

---

## Step 1 — Apply the migration

In your Supabase SQL editor, run:

```
supabase/migrations/202606040001_usertest_events.sql
```

Verify: `SELECT count(*) FROM public.usertest_events;` returns 0.

---

## Step 2 — Add the analytics env var

In your `.env` file (local) or Vercel project settings (production):

```
EXPO_PUBLIC_USERTEST_ANALYTICS=1
```

This flag enables screen-view logging. It's off by default so production
mobile builds are unaffected.

---

## Step 3 — Run locally

```bash
npm install            # picks up react-dom, react-native-web, @expo/metro-runtime
npm run web            # starts at http://localhost:8081
```

Open the facilitator landing page:

```
web/usertest/index.html   ← open directly in browser (file://) for local tests
```

The CTA link on the landing page points to `http://localhost:8081?study=2026-06-fort-polk`.

---

## Step 4 — Deploy to Vercel (production sessions)

```bash
npm run build:web      # outputs dist/
```

Then in Vercel:
1. Create a new project → import from Git or drag `dist/` folder
2. Set environment variables:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_USERTEST_ANALYTICS=1`
3. Deploy → copy the production URL (e.g. `https://scoutlocal-web.vercel.app`)

Update `APP_URL` in `web/usertest/index.html` to your production URL, then
host the landing page at the same domain or separately (static file, Notion
page, email link — anything that can link to the app URL with `?study=`).

---

## Step 5 — Configure Supabase auth redirect URLs

In Supabase → Authentication → URL Configuration:

**Site URL:**
```
https://scoutlocal-web.vercel.app
```

**Redirect URLs (add all):**
```
http://localhost:8081/**
https://scoutlocal-web.vercel.app/**
```

Without this, magic link sign-in and OAuth will fail on web with a
"redirect_uri_mismatch" error.

---

## Step 6 — Create test accounts

Option A — disposable accounts per tester:
1. Open the deployed app URL
2. Have each tester sign up with their own email
3. No admin action needed — they proceed through onboarding normally

Option B — magic link invites:
1. In Supabase → Authentication → Users → Invite user
2. Send the invite link to the tester
3. They click it, set a password, and land in the app

---

## Step 7 — Send participants the landing page link

Share this URL with testers:

```
https://scoutlocal-web.vercel.app/usertest/?study=2026-06-fort-polk
```

(Or your custom domain / Vercel URL. The `?study=` value is the cohort name
you'll filter by in the admin panel.)

To open a different cohort later, just change the study ID:

```
?study=2026-07-fort-bragg
```

---

## Step 8 — Review results

1. Open the app → Profile → Admin panel → **User tests** tab
2. Enter the study ID and tap **Go**
3. You'll see:
   - Summary metrics (participants, screen views, sessions)
   - Per-participant ordered screen timelines with time deltas between steps

Tip: high delta between onboarding and the first `home` view means the
onboarding flow is slow or confusing. High delta on `explore` with no
`detail` events means people couldn't find what they wanted.

---

## Pilot checklist

Before your first real session, run a smoke test yourself:

- [ ] Sign up → onboarding completes → lands on Home
- [ ] Search works, category pills filter results
- [ ] Open a listing → save it → check Favorites tab
- [ ] Open the Events card → EventsScreen loads
- [ ] Gate status strip visible on Home
- [ ] Sign out → can sign back in
- [ ] Admin panel → User tests → see your own session events
- [ ] `sessions` table shows a row with `platform = 'web'`

---

## Known web limitations

| Feature | Status |
|---|---|
| Push notifications | Skipped — tester sees "download the app" copy |
| Photo upload in listings | Native only — alert shown if triggered |
| Deep linking via Expo scheme (`scoutlocal://`) | Not available in browser |
| Session replay / heatmaps | Not included — screen events only |

---

## Keeping the demo HTML as a fallback

`ScoutLocal-Clickthrough-Demo.html` (static prototype) still works for
offline demos or design reviews. Don't delete it.
