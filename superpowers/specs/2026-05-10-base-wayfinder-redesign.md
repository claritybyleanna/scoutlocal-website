# ScoutLocal Base Wayfinder Redesign

## Direction

ScoutLocal should feel like a calm wayfinding app for military-family needs, not a marketplace feed. The primary mental model is Waymo/Uber Rides: the app asks where the user is trying to go or what they need, then gets out of the way.

## Visual References

Keep:
- Waymo destination-first hierarchy: one obvious search/destination field.
- Uber Rides whitespace: generous, calm, focused.
- Simple splash/onboarding from the reference board: logo-first, photo-led welcome, bottom action panel.

Avoid:
- DoorDash/Uber Eats orange marketplace energy.
- Lex-style dense text, loud header color, and too many competing chips/icons.
- Airbnb-style image-dominant feed where photos overpower the decision.
- Promo-card clutter and competing calls to action.

## UI Principles

1. Destination first: Home leads with “What do you need near Fort Johnson?” and a large search field.
2. Calm surfaces: use white and soft gray backgrounds with sage as the only frequent accent.
3. Fewer competing elements: business cards should prioritize name, category, trust badge, and one save affordance.
4. Homey but not cute: warm language in onboarding and empty states, but no playful clutter.
5. Native feeling: consistent icons, clear touch targets, and a stable bottom tab bar.

## Screen Changes

### Splash and Onboarding

Replace the current form-heavy first impression with a photo-led welcome:
- Full-screen warm community/base-adjacent image placeholder.
- Small ScoutLocal wordmark at top.
- Bottom sheet with title “Find trusted help near your base.”
- Supporting text: “ScoutLocal helps military families find reliable local businesses and spouse-owned shops.”
- Primary action “Get started.”
- Secondary action “I’m a business owner.”
- Sign-in remains available but quiet.

### Home

Home becomes a wayfinding dashboard:
- Top: small location label and selected base.
- Main headline: “What do you need near Fort Johnson?”
- Large rounded search field.
- Horizontal destination chips: Childcare, Auto, Healthcare, Pet Care, Restaurants.
- A compact “Trusted nearby” section with polished business rows/cards.
- Coming Soon base state uses the same layout language but focuses on the waitlist message and Explore link.

### Business Cards

Cards become cleaner and less wireframe-like:
- Soft gray app background with white cards.
- Slightly more vertical breathing room.
- Thumbnail remains 64px, but card hierarchy improves.
- Badge row is secondary and never competes with the name.
- Heart/save uses a consistent icon-like glyph, not loud color.

### Detail Page

Detail page becomes action-oriented:
- Photo area remains but should not dominate the whole screen.
- Business name and trust signals immediately visible.
- Contact actions become a horizontal row: Call, Website, Email.
- Details are grouped into quiet sections.
- Report link remains low-emphasis.

## Acceptance Criteria

- Home visually reads as “find what you need” before “browse a feed.”
- Onboarding no longer starts as a generic form.
- No orange primary UI.
- No dense green header block.
- No crowded multi-color chip/header patterns.
- Tests and TypeScript pass.

