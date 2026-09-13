# DESIGN_THEME.md — Crency.agency → ACM PixelPrompt

Source: live inspection of crency.agency (`/`, `/about-us`, `/services`, `/cases`, `/contact-us`) via browser automation + computed-style extraction on 2026-09-14. All hex values below were read directly from `getComputedStyle()` on the live site, not eyeballed from screenshots. Our stack: **Vite + React + Tailwind v4 (CSS `@theme`) + React Router 7 + GSAP/ScrollTrigger + Motion + R3F/drei**, per `pixelprompt-resources.md`.

Our page-to-Crency mapping (our routes are locked by the PS, Crency's are not — we borrow *patterns*, not literal page-for-page structure):

| Our route | Nearest Crency page(s) |
|---|---|
| `/` Home | `/` Home |
| `/about` | `/about-us` (stat trio, services teaser, process list, FAQ) |
| `/events` | `/cases` (stacked case-list row pattern → flagship + full events list) |
| `/team` | `/about-us` (mentor/leadership cards) |
| `/achievements` | `/about-us` stats + `/cases` list pattern (Hall of Fame as case rows) |
| `/contact` | `/contact-us` |

---

## Global

### Color tokens (exact, from live site)

| Role | Hex | Notes |
|---|---|---|
| Base dark bg | `#150734` | deep navy-violet, main `<html>` background |
| Light section bg | `#D3C5F6` | pale lavender — also primary text-on-dark color |
| Lime accent | `#C2EC40` | primary CTA / highlight accent |
| Blue accent | `#3D71FF` | secondary accent |
| Pink accent | `#F04C8A` | secondary accent |
| Pink-pale bg | `#FFE1ED` | light section variant |
| Violet accent | `#4E00FF` | vivid accent, used sparingly (buttons, icons) |
| Yellow accent | `#FBD402` | tertiary accent (case pages, one-color CTAs) |
| Lavender-mid accent | `#B380FF` | icon-badge accent |
| Ink text (on light bg) | `#222222` | body text on lavender/lime/pink sections |
| Pale blue bg | `#DEE6FF` | light section variant |

**How we'd build it:** we already approximate this in `src/index.css` `@theme` block, but the numbers drift from the real site (`--color-bg: #1a1145` vs actual `#150734`; `--color-lavender-bg: #c8b8e6` vs actual `#D3C5F6`; `--color-lime: #c8e62e` vs actual `#C2EC40`). Tighten these tokens to the values above — see GAP_ANALYSIS.md. Keep the same token names so no component call-sites change.

### Typography

- **Body/UI font:** IBM Plex Sans (free, Google Fonts) — weight 400/700 used, ~15–17px body copy.
- **Display/hero font:** a licensed custom font (`Nauryzredkeds`) — chunky, wide, rounded-terminal grotesk with a few swash/condensed details (visible in the cursive-leaning `R`/`ß`-like `B`). Not available to us; pick a free equivalent with similar personality: rounded, heavy, slightly playful. Good candidates already loaded in our project: **Unbounded** (what we use now — good match) or **Space Grotesk** at black weight. Do not chase the exact swash details; the *oversized, uppercase, tight line-height* treatment matters more than the letterform quirks.
- **Scale:** hero `h1` renders at **192px / line-height 149.76px (0.78) / weight 400** at desktop viewport — i.e. Crency uses a *huge*, viewport-relative clamp, not a fixed rem scale. Body copy sits around 15–17px. Nav links ~12–15px, all-lowercase.
- **Case/vertical brand names** (on `/cases`) run large and bold (~48–64px) in a plain heavy sans — no custom display font needed there, `font-black` Inter/Space Grotesk works.

**How we'd build it:** `font-hero` (Unbounded) for all giant kinetic headlines, `font-display` (Space Grotesk) for section headings/numbers, `font-body` (Inter — close enough to IBM Plex Sans; swap only if the team wants pixel-parity) for copy. Use `clamp()` or Tailwind's `text-[10vw]` viewport-relative sizing for hero type exactly like our existing `Hero.jsx` already does — keep that pattern.

### Spacing / grid rhythm

- Full-bleed sections, no visible container gutter on hero/marquee sections — text runs edge to edge with ~40–65px side padding at desktop.
- Section vertical rhythm is large: 120–200px between major sections, achieved via generous `py-24`–`py-40` padding plus the wave-divider SVGs eating extra vertical space.
- Cards/rows use big radii (24–72px) — nothing is sharp-cornered except body copy blocks.

### Buttons

Two shapes, always fully pill (`border-radius: 72px`/`64px` ≈ `rounded-full`):

1. **Nav CTA ("let's talk")** — lavender bg `#D3C5F6`, ink text `#150734`, `font-weight:700`, `font-size:12px`, `padding:11px 24px`.
2. **Hero/footer CTA ("Contact us", "start my project")** — white or accent-color bg, ink text, much larger: `padding:28px 53px`, `font-size:44px` on the biggest footer CTA. Buttons scale up dramatically as they get more important — the hierarchy is communicated by *size*, not just color.
3. **Bubble-fill hover** — button background is a small circle that expands to fill on hover (we already have `.btn-bubble` in `index.css` matching this).

**How we'd build it:** our `MagneticButton` + `.btn-bubble` combo already covers this. Just make sure large CTAs (footer, final-CTA) get dramatically bigger padding/font-size than nav CTAs — right now ours are closer in scale than Crency's.

### Nav / footer structure

- **Top nav (inner pages only, not on scroll position 0 of home):** a dark, semi-opaque rounded shape that's not a plain pill — it has a subtle chevron/flag cut on the right edge. Contains: circular 3-letter logo mark (colored dots), text links (`about us`, `cases`, `services`, `blog`), and a lavender pill CTA (`let's talk`) at the far right.
- **Persistent floating bottom dock** — this is Crency's *real* primary navigation, present on every page, centered, fixed to viewport bottom: a pill-shaped, blurred dark-translucent bar with three segments: `● Open: Menu` (left, lime dot) | `get my website` (center, lavender pill button) | `● View: {ContextLabel}` (right, lime dot — the label changes per page/section, e.g. "Cases" on the cases page). Clicking "Open: Menu" triggers the full-screen circular menu overlay (below).
- **Full-screen menu overlay** — clicking the dock's "Menu" opens a full-viewport takeover: a large lime circle centered with white pill nav links stacked inside it (`main page`, `about us`, `services`, `contact us`), flanked by two smaller circles left/right (`View Blogs` pink circle, `View Cases` blue circle, each with a corner arrow icon), over a blurred colorful background collage. A `close ✕` pill sits at the bottom center.
- **Footer** — giant repeating wordmark ("CRENCY CRENCY CRENCY…") runs as a horizontal marquee band across the top of the footer, dotted separators between repeats. Below it: `Want one that sells?` headline, an `Explore` link column, an email link (`hellocrency@gmail.com`), social icons in small dark rounded squares, then a thin `Privacy Policy` / `© year` bottom line.

**How we'd build it:**
- Bottom dock: we already have this almost exactly (`BottomBar.jsx` + `.bottom-bar*` CSS) — just needs (a) a real click handler that opens a menu overlay instead of a dead link, and (b) the right-side label should change per-route (`View: Events` on `/events`, `View: Team` on `/team`, etc.) via `useLocation()`.
- Full-screen menu overlay: new component, Motion `AnimatePresence` scale/opacity-in over a `fixed inset-0` overlay; nav links in a big `rounded-full` colored div; closes on `Escape`/backdrop click/route change.
- Footer marquee wordmark: reuse the same CSS `marquee` keyframe already in `index.css` (used by `AwardsTicker`), just with giant outlined/ghost-style repeating chapter-name text as the background layer behind the footer CTA.

### Section color-blocking + wave dividers

Crency's signature structural move: full-bleed sections in **solid, saturated background colors** (dark navy → lavender → lime → dark navy → pink → …) joined by **organic SVG wave dividers** (not straight lines), each wave a different asymmetric curve so no two transitions look identical. Text color flips (light-on-dark / dark-on-light) with the section.

**How we'd build it:** `WaveDivider.jsx` already implements this exact mechanic (two wave path variants, `dark-to-light`/`light-to-dark`). The gap is we're not committing to Crency's *palette variety* — most of our non-Home pages stay in the dark-navy-with-glass-cards idiom instead of actually flipping to lime/pink/lavender full-bleed blocks between sections. Increase wave-divider usage with real color variety, matching `Home.jsx`'s existing pattern, on every page.

### Cursor & hover conventions

- Custom cursor: a small lime arrow + a lime pill label reading **"You"** follows the mouse (desktop only, `pointer: fine`). We already have this exactly (`CustomCursor.jsx`, confirmed pixel-for-pixel against the live site).
- Interactive elements get a `Click` hint pill that appears near the cursor on hover over clickable targets (secondary affordance, optional — skip if time-constrained).
- Nav links do a vertical "roll" on hover (current line slides up, a lime duplicate slides in from below) — we already have `.menu-roll` matching this.

### Decorative language: floating badges, mascot, marquees

- **Floating stat badges**: small colored geometric shapes (star/decagon/pill/circle), each a solid saturated color, holding a number + label (e.g. "500+ websites built", "4.9/5 647 reviews"), slowly rotating/bobbing, scattered around hero and teaser sections. We already have this near-exactly in `Hero.jsx` + `FloatingShape.jsx`.
- **Floating icon badges**: small rounded-square/circle/hexagon chips (lime/blue/orange/red/pink), each holding one dark line-icon (heart, bar-chart, crown, lightning bolt, cursor), drifting apart as you scroll a section — a lightweight "trust signal" motif reused across about/services/cases teasers.
- **Mascot**: a jagged lime starburst blob with cartoon eyes, a smile, and simple white-glove limbs, appears at key transition/CTA moments (about-us hero, contact hero). Purely decorative personality injection — optional nice-to-have, not required for parity, but cheap to build as a single inline SVG + a subtle idle bob/wave animation.
- **Word/logo marquees**: horizontal auto-scrolling tracks, pause on hover, fade-masked edges. Used for (a) client-name ticker on `/cases`, (b) repeated CTA word ticker ("design trust"), (c) footer giant wordmark. We already have the CSS mechanism (`marquee` keyframe, `AwardsTicker.jsx`) — just reuse it for more instances instead of building new marquee logic each time.

### Dark-mode base

Crency has no light/dark toggle — it's a fixed dark-first brand with light *sections*, not a light/dark theme system. We should keep our site the same: one committed visual identity (dark navy base + lavender/lime/pink section blocks), no `prefers-color-scheme` handling needed for the site itself.

---

## Home

1. **Hero** — dark navy full-viewport. Giant kinetic uppercase headline (`WEBSITES PEOPLE TRUST. DESIGNED TO SELL.`), oversized (10–19vw), tight leading, staggered line reveal on load. Floating stat badges scattered around it (see Global). A hand-drawn SVG line/loop threads through the text as a decorative flourish, drawn in on load (stroke-dashoffset animation).
   *Ours:* `Hero.jsx` already does this almost exactly, including the SVG draw-in line and the 6 floating badges. Minor gap: our badge copy/count doesn't need to change, it's just placeholder content — fine as-is.

2. **Marquee/ticker band** — a single-row horizontal ticker directly under the hero, small badges/awards text separated by a lime star glyph, looping infinitely, pauses on hover.
   *Ours:* `AwardsTicker.jsx` matches this pattern exactly.

3. **About teaser (lavender full-bleed section)** — big headline in dark ink-on-lavender ("WE CRAFT BRANDS AND DIGITAL PRODUCTS THAT SCALE"), a floating cluster of icon badges, then a big stat trio (+42% retention / -67% bounce / 4× faster) as oversized numbers with a one-line caption each — no cards, no borders, just huge type in a grid.
   *Ours:* `AboutTeaser.jsx` covers the lavender section; confirm it includes a bare (card-less) stat trio in this style, not our default glass-card `StatsStrip` treatment (that one's fine reused elsewhere, but this specific teaser should feel like giant floating numbers, matching Crency's stat trio look).

4. **"Trust comes from design" ticker** — mascot character + a horizontally scrolling repeated phrase ("design trust design trust…") with a small circular arrow icon button breaking up the repeats. Purely decorative transition moment between about-teaser and services.
   *Ours:* no direct equivalent yet — optional, low priority (nice personality beat, not core to the PS).

5. **Services teaser ("WHAT ARE WE BUILDING FOR YOU?")** — 3 large solid-color rounded cards side by side (one per service), each with a one-line description and a small lowercase text CTA underneath (not a button — just an underlined link-style prompt).
   *Ours:* `WhatWeDoTeaser.jsx` — confirm it uses 3 large solid-color cards (lime/pink/purple, matching `.service-card-*` classes already in `index.css`) rather than smaller glass tiles.

6. **Cases / testimonials** — a client-logo marquee band, then a rotating testimonial: numbered (`04 / 04`), a large quote in caps, client name + service tags + star rating, a "VIEW CASE" link. New card slides in on interval/scroll.
   *Ours:* no direct equivalent on Home — our `EventsTeaser.jsx` plays this role loosely. Fine for a hackathon build; a rotating single testimonial card (GSAP timeline swapping content every N seconds, or scroll-triggered) is a reasonable stretch goal, not required.

7. **"GET A FREE AUDIT" banner** — full-width solid-color strip, headline + a small word-ticker of feature tags (Speed / SEO / Animation / Design / Conversion) rotating through a fixed slot, one pill CTA.
   *Ours:* not present; could fold into `TrustSection.jsx` or skip — low priority.

8. **Final "vibe" CTA** — "SO... HOW DO WE MAKE YOU FEEL? Choose your vibe, we're listening." with a single large CTA pill (`get my website`). This is Crency's shared closing block, present at the bottom of *every* page (not contact-specific).
   *Ours:* `FinalCta.jsx` plays this role; keep it as our shared closer, no functional gap.

---

## About (`/about`, borrowing from Crency `/about-us`)

1. **Hero** — "LET'S START WITH CLARITY" kinetic headline, mascot character, bottom dock visible.
2. **Stat trio** — same bare-number treatment as home's about-teaser section (+42% / -67% / 4×), each with a one-line caption.
3. **Services teaser cards with mini UI mockups** — each of the 3 service cards includes a small illustrated "fake product screenshot" (browser-chrome-style rounded rectangle containing abstract UI bits: stat chips, progress bars, colored tags) instead of a plain icon. Adds production polish cheaply.
4. **Scroll-pinned stacked pill-tag reveal** — as you scroll, colored pill tags (e.g. "WEB DEVELOPMENT" in a bold red pill) stack/cycle in a pinned viewport section, each representing one service — a GSAP ScrollTrigger `pin: true` timeline swapping/stacking tag elements as scroll progress advances.
5. **Numbered process list (01–09)** — a plain vertical list, large index numbers in a muted color, bold one-line title + description per row, no card chrome, no icons — just typography and whitespace doing the work.
6. **Chat-bubble FAQ** ("MOST COMMON QUESTIONS", "BEFORE YOU HIT SEND") — questions render as dark left-aligned message bubbles, answers as lime-green right-aligned bubbles with a small "CR" logo avatar and a "..." typing-dots loading state before the answer appears — styled exactly like a messaging-app thread, not a traditional accordion.

**How we'd build it in our stack:**
- Stat trio: reuse `StatsStrip`'s `CountUp` logic but strip the card chrome — bare numbers over the lavender/lime section background.
- Mini mockup illustrations: small inline SVG/div compositions (rounded rect "browser" frame + colored bar/chip placeholders) — no image assets needed, pure CSS/SVG, cheap and on-brand.
- Scroll-pinned tag stack: `ScrollTrigger.create({ trigger, pin: true, scrub: true })` driving a Motion/GSAP timeline that swaps `opacity`/`y` on a stack of absolutely-positioned pill divs — same mechanism already used for our reveal/pin patterns via `lib/gsap.js`.
- Numbered process list: plain semantic list, `font-display` for the `01`–`09` indices at ~15% opacity/muted color, standard `Reveal` stagger-in.
- Chat-bubble FAQ: new component replacing/complementing `FAQAccordion.jsx` for pages that want this treatment — alternating `self-start`/`self-end` rounded-2xl bubbles, dark-navy for questions, lime for answers, a small typing-dots CSS animation (3 bouncing dots) before each answer mounts (`setTimeout` + Motion `AnimatePresence`).

---

## Events / Achievements (`/events`, `/achievements` — borrowing Crency `/cases`)

The standout reusable pattern here is the **stacked full-width case-list row**:

- Each row is a full-bleed horizontal band in one flat pastel/vivid color (pink, purple, blue, peach, lime…), stacked directly on top of the next with **no gap** — rows visually overlap-abut so the page reads as a continuous striped block.
- Row content, left to right: large bold entity name (client name / event name), a cluster of small pill tags (category labels, e.g. "Ux/Ui Design", "Webflow Development"), and a circular arrow-icon button on the far right in a deeper shade of the row's color.
- Hovering/clicking a row likely expands or navigates to a detail view (case detail page) — for our scope, a click can open a modal or route to an event/achievement detail, or simply be decorative if we don't build detail pages.

**How we'd build it in our stack:** this maps extremely well onto both our `/events` full events list (flagship event + upcoming events) and `/achievements` Hall of Fame / news feed — replace the current generic card-grid treatments with this stacked-row pattern: a `<div>` per entry, `bg-[eventColor]`, full width, flex row with `justify-between`, pill tags via a small reusable `Tag` component, and a circular `<button>` with an arrow SVG. Assign each row a color from our accent palette (lime/pink/blue/purple/orange/red) cycling in sequence. No carousel library needed — it's a static stacked list, not a swiper.

---

## Contact

1. **Hero** — "GET IN TOUCH" headline over a **skeuomorphic folder-card**: several rounded-rectangle "paper" layers peek out from behind the main form card at slightly offset angles (white, pink, lime), like a stack of folders — pure decorative framing for the form.
2. **Form** — dense single-step form (not a wizard): `Your name` / `Your email` / `Company or website` (row 1), `Message` textarea / `Choose a budget` dropdown / `What do you need built?` dropdown (row 2), one full-width pill submit button (`start my project`) in a contrasting accent color. All inputs are white, fully rounded (`rounded-full`-ish pill inputs, not just `rounded-lg`), placeholder-gray text.
3. **Budget dropdown** — simple custom `<select>`-style dropdown, 4 fixed bands (`$1k–$3k`, `$3k–$7k`, `$7k–$15k`, `$15k+`), first option highlighted on open/hover.
4. **Chat-bubble FAQ** — same "BEFORE YOU HIT SEND" messaging-thread FAQ as About (see above), reused verbatim.
5. **Footer** — shared global footer (giant wordmark marquee, explore links, email, socials).

**How we'd build it in our stack:**
- Folder card: a wrapping `<div>` with 2–3 `absolute`, slightly-rotated sibling `<div>`s behind the main card (`z-index` stacked, `rotate-[-3deg]`/`rotate-[2deg]`, different bg colors), pure CSS — no image assets.
- Form: restyle `JoinForm.jsx` inputs from the current `rounded-xl` dark-glass style to `rounded-full`/`rounded-3xl` **white** pill inputs sitting on the colored folder-card background (this is a meaningful visual departure from our current dark-glass form — flag in gap analysis). Our existing `year`/`interest` `<select>`s already map 1:1 onto Crency's "budget"/"what do you need built" dropdown pair conceptually — just needs the new visual treatment and copy adjusted to fit the membership-form context (e.g. "Which SIG?" instead of "budget").
- Chat-bubble FAQ: reuse the same new component built for About.

---

## Build priority (given hackathon time constraints, UI/UX is 25% of judging)

**High-value, cheap:** wave-divider color variety on every page (already have the component, just underused); bottom-dock context label + working menu click; stat-trio bare-number treatment; stacked case-list rows for Events/Achievements (very reusable, very on-brand, no new libraries).

**Medium effort, high visual payoff:** full-screen circular menu overlay; chat-bubble FAQ; folder-card contact form re-skin; footer wordmark marquee.

**Nice-to-have if time remains:** mascot character, "design trust" ticker, mini UI-mockup illustrations in service cards, scroll-pinned tag stack.
