# Parked tabs (not live)

Pages here are saved for later but are **not part of the live website**:

- They're removed from the site navigation and footers.
- They're excluded from deployment via `.vercelignore` in the site root.

## What's parked

- **bases/** — the full Bases tab (rollout map + per-base pages). Saved as-is.
- **pricing/** — the previous Pricing tab (Free vs Promote / Beacon $29/mo). Saved as-is.
  The Beacon content from this page now lives on the live **Features** tab (`/features/`),
  reframed as "testing next — 3 free Beacons/month for every business."

## To bring one back

Move the folder back to the site root (e.g. `bases/` next to `families/`),
then re-add its links to the nav and footer. The internal links inside these
pages assume they live at the site root, so they'll work again once restored.
