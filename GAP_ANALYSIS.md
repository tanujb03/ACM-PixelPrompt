# GAP_ANALYSIS.md — Current codebase vs. DESIGN_THEME.md

Reviewed: `pixelprompt-app/src` (routing, layout, all page components, `index.css`, `index.html` font loading) against the patterns documented in `DESIGN_THEME.md`. Headline finding: **a previous session already did substantial Crency-pattern work**, mainly on the Home page and global chrome (cursor, wave dividers, bottom dock, marquee, hero floating badges). The gap is real but narrower than "start from scratch" — it's mostly (a) numeric token drift, (b) Home's patterns not yet propagated to the other 5 pages, and (c) a handful of Crency's more distinctive components (chat-bubble FAQ, folder-card form, full-screen menu, stacked case-list rows) not built yet anywhere.

---

## Fits as-is (no change needed)

- **Routing** (`App.jsx`) — exact match to the locked route map in `pixelprompt-resources.md`: `/`, `/about`, `/events`, `/team`, `/achievements`, `/contact`, all under a shared `Layout`.
- **Custom cursor** (`CustomCursor.jsx` + `.cursor-you*`) — lime arrow + "You" pill label following the mouse. Confirmed pixel-for-pixel against the live Crency site (down to using the lime accent color). No change needed.
- **Wave dividers** (`WaveDivider.jsx`) — same organic-SVG-curve mechanic as Crency, with `dark-to-light`/`light-to-dark` variants. Component is correct; see "token refinement" below for its hardcoded colors.
- **Bottom floating dock shell** (`BottomBar.jsx` + `.bottom-bar*` in `index.css`) — same 3-segment pill (dot-label / CTA / dot-label), same blurred-dark-pill styling, fixed-center-bottom. Structurally correct; see "needs targeted fixes" below for its static content.
- **Hero floating stat badges** (`Hero.jsx` + `FloatingShape.jsx`) — six rotating/bobbing colored badges with numbers+labels around the giant headline, matching Crency's hero decoration almost exactly (same shape vocabulary: star, decagon, pill, circle).
- **Marquee ticker mechanic** (`AwardsTicker.jsx`, `.marquee-track` keyframe) — infinite horizontal loop, pause-on-hover, fade-masked edges. Correct mechanic, just needs reuse in more places (footer wordmark, case client-logo ticker) rather than a new implementation.
- **Home page section flow** (`Home.jsx`) — hero → marquee → wave → lavender about-teaser → wave → 3 colored service cards → trust → stats → events teaser → final CTA. This sequence already mirrors Crency's homepage rhythm closely. Home is the most Crency-aligned page in the codebase by a wide margin.
- **Font loading** (`index.html`) — Unbounded (hero) + Space Grotesk (display) + Inter (body) loaded via Google Fonts `<link>`, weights 300–900 covered. Reasonable free equivalents for Crency's licensed display font + IBM Plex Sans; no change required unless the team wants literal IBM Plex Sans for the body (optional, low priority).
- **Bubble-hover buttons** (`.btn-bubble`) and **nav link roll-hover** (`.menu-roll*`) — both match Crency's micro-interactions (fill-expand-from-click-point button hover; stacked-line vertical roll on nav link hover).
- **Grain overlay, glassmorphism utilities, pill CTA shapes** — present and consistent with the "Global" section of DESIGN_THEME.md.

## Needs token/style refinement only (component logic is right, values are off)

| Token | Current (`index.css`) | Actual Crency value | Fix |
|---|---|---|---|
| `--color-bg` | `#1a1145` | `#150734` | update hex |
| `--color-lavender-bg` | `#c8b8e6` | `#d3c5f6` | update hex |
| `--color-lime` | `#c8e62e` | `#c2ec40` | update hex |
| `--color-pink` | `#f72585` | `#f04c8a` | update hex (or keep as a distinct secondary — close enough to skip if time-constrained) |
| `--color-purple` | `#7209b7` | `#4e00ff` | update hex |

All other tokens (blue, orange, red, text colors) are close enough to skip. This is a 10-minute edit in one file — no component call-sites change since everything references the CSS variables.

- **Nav CTA vs. hero/footer CTA size contrast** — Crency scales button `font-size`/`padding` dramatically by importance (12px nav pill vs. 44px footer pill). Our `MagneticButton` usages are closer in scale across contexts (`Navbar` ~14px, `Footer` ~16px). Bump the footer/final-CTA button size up noticeably to match Crency's hierarchy-by-size approach.

## Needs targeted fixes (structural, but component already exists)

- **`BottomBar.jsx` is static and partially dead** — "Open: Menu" is a `<Link to="/">` with no menu to open (there's no menu overlay component in the codebase at all), and the right-side label is hardcoded to `View: Events` on every page instead of reflecting the current route (Crency's updates per-page/section, e.g. "View: Cases" on the cases page). Fix: wire "Open: Menu" to toggle a new overlay component (see below), and derive the right label from `useLocation()`.
- **`FloatingShape` has a prop-name bug affecting 5 of 6 pages** — `FloatingShape.jsx` only destructures `shape`, `color`, `size`, `label`, `num`, `rotateSpeed`, `reverse`, `floatDelay`, `className`, `style`. But `About.jsx`, `Team.jsx`, `Achievements.jsx`, `Contact.jsx`, and `Events.jsx` all call it with `type="sphere"`/`type="torus"`/`type="pill"` plus `blur="blur-[90px]"` and `speed={16}` — none of which are recognized props. In practice this means every ambient background blob on those five pages silently falls back to `shape="star"` at default size/rotate-speed, completely ignoring the intended `blur`/`speed`/`type` styling. Only `Hero.jsx` (which correctly uses `shape=`) renders as designed. **This is worth fixing before polishing anything else** — it's a one-line prop-name mismatch (`type` → `shape`, plus either adding real `blur`/`speed` support to `FloatingShape` or removing those props from the callers) but currently every non-Home page's background ambience is silently broken.

## Needs a full rebuild (pattern doesn't exist yet, anywhere)

- **Solid-color full-bleed section blocking on non-Home pages.** About, Team, Achievements, Events, and Contact all stay inside the dark-navy-with-glass-cards idiom (badge pill + `SplitTextReveal` heading + muted body copy + blurred ambient blobs), interrupted only by `WaveDivider` calls that separate same-feeling dark sections rather than actually flipping to lavender/lime/pink full-bleed blocks the way Crency does and the way our own `Home.jsx` already does. This is the single biggest visual-parity gap, and the highest-leverage fix given it's 25% of judging: apply Home's existing color-blocking pattern to the other five pages instead of inventing new visual language for them.
- **Chat-bubble FAQ.** `FAQAccordion.jsx` is a conventional dark glass-card accordion (click row → expand/collapse), not Crency's messaging-thread pattern (alternating question/answer bubbles, typing-dots loading state). No component for this exists yet. Needed on `/contact` and optionally `/about`.
- **Folder-card contact form re-skin.** `JoinForm.jsx` is a dark-glass card with dark `rounded-xl` inputs — visually the opposite of Crency's white pill-input form sitting on a bright skeuomorphic "folder" card stack. This is a genuine rebuild, not a token tweak, if we want to match the pattern; alternatively, keep our current dark-glass form (it's internally consistent and functional) and treat the folder-card as optional stretch polish.
- **Stacked full-width case-list rows.** No page currently has Crency's signature `/cases` pattern (full-bleed flat-color row, big name + pill tags + circular arrow button, rows stacked with no gap). `PastEventGallery.jsx` uses a conventional image-grid instead, and `HallOfFame.jsx`/`NewsFeed.jsx` (not yet reviewed in full, but based on the achievements page structure) likely follow the same card-grid convention. This pattern is high-value and cheap to build (flex row + Tailwind, no new libraries) and maps naturally onto the events list and Hall of Fame — recommend prioritizing this over the harder rebuilds above.
- **Full-screen circular menu overlay.** Nothing in the codebase opens a full-viewport nav takeover; `Navbar.jsx`'s mobile menu is a conventional dropdown panel. Net-new component if we want this (see DESIGN_THEME.md build notes); can also be treated as optional polish since our sticky pill navbar already provides working navigation.
- **Footer giant wordmark marquee.** `Footer.jsx` has the CTA + link columns + socials but no repeating ghost-text marquee band. Cheap add: reuse the existing `.marquee-track` keyframe with large outlined chapter-name text.
- **Mascot character, "design trust" ticker, mini UI-mockup illustrations in service cards, scroll-pinned tag stack** — none exist yet. All flagged as nice-to-have/optional in DESIGN_THEME.md; skip unless the higher-priority items above are done with time to spare.

## Structural conflicts between current page layouts and Crency's patterns

- **Content model mismatch on `/contact`:** Crency's form fields (budget, "what do you need built") are sales-intake fields; ours (`year`, `interest`/SIG) are membership-intake fields, which is correct for our PS — no fix needed, just noting that the *visual* pattern (dropdown pair + textarea + pill submit) transfers even though the *content* is intentionally different (fake-functional membership form, not a sales lead form).
- **`/events` currently has no natural "case list" slot without restructuring.** `Events.jsx`'s current order is `EventSpotlight → EventsFilterList → PastEventGallery → FootfallStats`. Introducing the stacked-row pattern most naturally replaces `EventsFilterList`'s current treatment (need to check `EventsFilterList.jsx`, not yet reviewed) or `PastEventGallery`'s image grid — recommend deciding which one becomes the stacked-row list before implementation to avoid two competing "list of events" treatments on one page.
- No other structural conflicts found — the six-page IA and the Crency pattern set are compatible; this is additive/re-skinning work, not a rearchitecture.

## Suggested order of operations for the next implementation pass

1. Fix the `FloatingShape` prop bug (5-minute fix, currently silently breaking ambient backgrounds on 5 of 6 pages).
2. Refresh the 5 drifted color tokens in `index.css` (10-minute fix).
3. Propagate Home's solid-color full-bleed section-blocking pattern to About, Team, Achievements, Events, Contact (highest judging-weight payoff).
4. Build the stacked case-list row component; apply to Events (flagship/list) and Achievements (Hall of Fame).
5. Wire `BottomBar`'s menu click + per-route label.
6. Chat-bubble FAQ component; swap in on Contact (and About if time allows).
7. Everything else in DESIGN_THEME.md's "nice-to-have" tier, time permitting.
