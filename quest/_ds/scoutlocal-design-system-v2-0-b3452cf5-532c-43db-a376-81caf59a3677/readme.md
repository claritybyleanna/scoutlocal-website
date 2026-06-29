# ScoutLocal Design System

The brand, foundations, components, and product recreations for **ScoutLocal** — a
local directory built for military families. ScoutLocal is a product of **Novalyse LLC**.

> **What ScoutLocal is.** One in three U.S. military families move every 2–3 years on PCS
> orders, and spend months rebuilding the everyday places that anchor home — childcare,
> mechanic, salon, vet, gym, coffee shop. ScoutLocal is a free, human-verified directory of
> local businesses near each installation, plus a weekly community events feed, so families
> "belong faster after every move." It is free for families to use and free for businesses to
> list — that's the only promise the product makes.

**Two products are represented here:**
1. **Marketing website** — the `.com` that explains the product to families and businesses
   and drives beta sign-ups. (Full source available — see below.)
2. **Mobile app** — the directory itself: Explore, Saved, and a Scout events feed.
   (Reconstructed from the website's in-app marketing screenshots + shared tokens; the app's
   own source was not provided.)

---

## Sources

This system was built by reading the ScoutLocal website codebase:

- **GitHub:** https://github.com/claritybyleanna/scoutlocal-website (`main`)
  - `assets/css/site.css` — the canonical token + component CSS the tokens here are lifted from.
  - `index.html`, `businesses/index.html` — homepage and business-owner page (component patterns).
  - `assets/img/*` — all brand photography, app screenshots, and the Scout FAB.
  - `wayfinder.svg` — the brand mark.

Related repos by the same author (not used directly, but useful context):
`claritybyleanna/Scout-Local`, `claritybyleanna/Claritybyleanna`.

**Explore the website repo further** to recreate product surfaces with higher fidelity — it
holds the live CSS, the interactive JS (event widget, carousels), and additional pages
(families, how-it-works, features, FAQ, legal) not yet recreated here.

---

## Content fundamentals

How ScoutLocal writes. The voice is **warm, plain-spoken, and quietly reassuring** — it talks
to a family who just got orders and is starting over, again. It is confident without hype.

- **Person & address.** Speaks to "you" (the family or the owner); the company is "we."
  Inclusive of the whole community: "built with and for military families."
- **Casing.** Display headlines and the app's page titles are frequently **lowercase**
  ("explore.", "saved.", "scout.", "belong faster after every move."). Section eyebrows and
  meta labels are **lowercase or UPPERCASE mono** ("02 / how it works", "near fort polk /
  pet services"). Sentence case for body. The wordmark is lowercase: "scout local".
- **Tone.** Calm, concrete, anti-hype. It names the real things a day needs ("childcare,
  auto repair, pet care… coffee, gym, library") rather than abstractions. It is explicit
  about trust ("every badge means one specific thing") and explicit about being free
  ("$0 — always free. That's the only promise we're making").
- **Anti-patterns it avoids.** No growth-hacky urgency, no "revolutionary," no streaks/points
  ("built to be useful and get out of the way — no reason to keep scrolling"). No exclamation
  marks. No jargon.
- **Punctuation as voice.** A single **rust-colored period** closes the wordmark and app
  titles ("scout local**.**", "saved**.**"). Em-dashes carry the reassuring asides
  ("a softer landing after every PCS — so you can rebuild your routine").
- **Emoji.** None. The brand never uses emoji.
- **Representative lines.**
  - "Belong faster after every move."
  - "Open the app, find the routine, settle in."
  - "Be the clear, current answer." (to business owners)
  - "Trust signals families actually read."
  - "Free for families. Free for businesses."

---

## Visual foundations

A **warm paper-and-ink** system: cream surfaces, near-black ink, a single rust accent, with
sage (trust) and peach (warmth) doing the supporting work.

- **Color.** Backgrounds are warm creams (`--bg #f6f1ea` → `--soft` → `--paper`), never pure
  white. Text is warm near-black ink. **Rust `#b25e3c`** is the only true accent (links,
  eyebrows, the period). **Sage** is the trust/"open-now"/verified color; **peach** is warmth,
  highlights, glows, and the CTA color on dark bands. See the Colors cards.
- **Type.** Three families: **Outfit** for display (700–800, letter-spacing −.035 to −.045em,
  line-height ~0.95, often lowercase); **Geist** for body & UI; **Geist Mono** for eyebrows,
  section numbers, and meta (uppercase, +.1em tracking, or lowercase paths). Headlines are big
  and tightly tracked; the homepage h1 reaches ~104px.
- **The signature headline move.** One phrase in a headline gets a **peach highlighter**
  (`linear-gradient(transparent 60%, var(--peach) 60% 93%, transparent 93%)`) — a flat marker
  swipe sitting low behind the text. Used once per headline, never on body.
- **Backgrounds & texture.** Flat warm fills, no patterns. Heroes carry a soft **radial peach
  glow** blurred into a corner (`radius:50%; filter:blur(20px)`). Dark sections (`--ink`) add a
  faint warm radial in one corner. Full-bleed **photography bands** (the reaching hands, local
  business photos) break up the cream; business hero uses a half-sharp / half-blurred photo with
  a cream gradient fade (`bc-fade`) into the copy.
- **Imagery.** Warm, natural-light, candid and human — community moments and real local-business
  owners. Never cold, corporate, or stocky. Photos sit in 12–16px-radius frames or run full-bleed.
- **Corner radii.** Pills/buttons/badges are fully round (999px). Inputs and dark bands 7–8px.
  Cards 18–24px (feature cards 18, large grids/dashboards 24–26). Tiny inline tags 4–5px.
- **Cards.** Warm `--paper` fill, **1px `--line` hairline border**, and a **low, wide,
  brown-cast shadow** (`0 26px 54px -42px #6c5038`) — soft elevation, never a hard drop shadow.
  Dashed dividers (`1px dashed --line`) separate rows inside cards.
- **Borders & dividers.** Hairline `--line` everywhere — section tops, grid cell edges (the
  site builds grids out of shared 1px borders), list-row separators. This editorial ruled-grid
  is a core motif.
- **Buttons.** Pill-shaped. Primary = ink fill / white text; on dark = peach fill / ink text;
  ghost = text with a 1px underline (`btn-ghost`). All carry a small trailing arrow on CTAs.
- **Badges & pills.** Trust badges are bordered pills with an emblem icon (Verified Local =
  neutral shield, Military Spouse Owned = sage figure, Founding Partner = peach star). Filter
  chips toggle bordered → solid ink. "Live"/beacon pills add a **pulsing sage dot**.
- **Motion.** Restrained. Hover = `translateY(-1px)` lift on buttons, `-2px` on cards;
  color shifts to rust on links. Easing `cubic-bezier(.2,.8,.2,1)`, ~.18s for interactions,
  ~.45–.7s for carousels/fades. Carousels cross-fade or slide. The only looping animation is the
  beacon "ping" pulse (and it respects `prefers-reduced-motion`).
- **Press states.** Subtle scale-down on the app FAB (`scale(.98)`); buttons rely on the lift.
- **Transparency & blur.** The sticky header is `rgba(246,241,234,.9)` + `backdrop-filter:
  blur(14px)`. Modals use a `rgba(23,21,15,.46)` scrim + blur. Photo fades use cream gradients.
- **Layout.** Centered `min(1240px, 100% - 48px)` container. Sticky 68px header. Generous
  64–92px section rhythm. Section headers use a `180–200px` mono-eyebrow column beside the
  headline/body.

---

## Iconography

- **Style.** Custom **inline SVG, line icons** — ~1.6px stroke, round caps and joins, drawn on a
  24px grid, in `currentColor` (so they inherit ink / rust / sage). They are simple and
  geometric (shield+check for verified, figure for milspouse, star for founding, paper-airplane
  arrow for the brand mark and "go" affordances). No filled icon set, no icon font, no third-party
  library in the source.
- **The wayfinder.** The brand mark is a paper-airplane / scout arrow (`wayfinder.svg`,
  `assets/img/` references). It doubles as the app's center navigation FAB
  (`scout-fab-default.png` / `scout-fab-active.png`, copied into `assets/img/`).
- **Where they live.** Reusable emblem icons are baked into the `Badge` component. The common
  "arrow" glyph is on `Button` (the trailing CTA arrow). Screen-specific glyphs (bell, funnel,
  location pin) are drawn inline in the UI kits.
- **Emoji & unicode.** No emoji, ever. The only non-icon glyph used decoratively is the
  rust **period** in the wordmark. Mono meta uses `·` and `/` as separators.
- **Substitutions.** None needed — all icons are reproduced as inline SVG from the source. If you
  need a broader icon set for new surfaces, match the spec above (24px grid, ~1.6px stroke, round
  caps, currentColor) rather than pulling in a library.

> **Fonts note:** Outfit, Geist, and Geist Mono are all served from Google Fonts (as in the live
> site), imported in `tokens/fonts.css`. No local font binaries are shipped. If you want
> self-hosted `@font-face` files instead, send them over and they'll be wired in.

---

## Index / manifest

Root entry: **`styles.css`** (import-only) → pulls in every token + font file.

```
styles.css                      Global entry (consumers link this one file)
tokens/
  fonts.css                     @import of Outfit / Geist / Geist Mono (Google Fonts)
  colors.css                    Surfaces, ink, rust, peach, sage + semantic aliases
  typography.css                Families, weights, display/body/mono scales, tracking
  spacing.css                   Spacing scale, radii, shadows, layout, motion
components/
  core/      Button · Eyebrow · Card · Stat        (+ core.card.html)
  badges/    Badge · Pill · LivePill               (+ badges.card.html)
  forms/     Field · Accordion                     (+ forms.card.html)
  content/   ListingRow                            (+ content.card.html)
guidelines/                     Foundation specimen cards (Colors / Type / Spacing / Brand)
ui_kits/
  website/   Marketing site recreation (Home + Businesses) — index.html
  app/       Mobile app recreation (Explore / Saved / Events) — index.html
assets/img/                     Logos, app screenshots, brand photography, Scout FAB
wayfinder.svg                   Brand mark
SKILL.md                        Agent-Skill manifest for downloading into Claude Code
```

**Components** (mount from `window.ScoutLocalDesignSystem_b3452c` after loading `_ds_bundle.js`):
`Button`, `Eyebrow`, `Card`, `Stat`, `Badge`, `Pill`, `LivePill`, `Field`, `Accordion`,
`ListingRow`. Each ships a `.d.ts` contract and a `.prompt.md` usage note.

The Design System tab renders every `@dsCard`-tagged file: the foundation cards in `guidelines/`,
the four component cards, and both UI-kit previews.
