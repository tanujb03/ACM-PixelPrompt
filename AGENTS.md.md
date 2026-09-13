---
name: pixelprompt-resources
description: Resource guide for the ACM PixelPrompt build — our assigned PS (ACM MITS Student Chapter website), route map, locked tech stack, component/UI sources, 3D and asset libraries, and team roles. Use this before building or styling anything.
---

# ACM PixelPrompt — Build Resource Guide

**Event:** ACM PixelPrompt, national-level buildathon, MITS Gwalior ACM Student Chapter, via Unstop.
**When:** 13 Sept 2026 (build) → 14 Sept 2026 (top-team presentations, if selected).
**Deliverable:** An AI-generated frontend built on our assigned PS (below) — organizers confirmed a multi-page frontend is acceptable (not strictly a single-page landing page), frontend-only with mocked data, no real backend/auth/database unless the PS specifically calls for it.
**Team:** Tanuj (idea, master prompt, integration, uses Claude + Claude Code + Antigravity), Krrish (build lead, strongest frontend skills, Antigravity — joins ~6:30–7:00 PM, not available before), Parth (support — content/QA/bug flags, Antigravity, joins 6:00 PM).

## Assigned Problem Statement — ACM/PS/25: ACM-MITS

**Concept:** Design a website for the ACM MITS Student Chapter.

**Final route map** (locked — supersedes the earlier bonus/optional framing now that Round 2 research showed these are standard, not extras):
- `/` — Home: hero (chapter name/branding, mission one-liner, primary "Join Us" CTA, live stat via CountUp.js), awards ticker banner, "What We Do" verticals teaser, 2-3 upcoming events teaser, Join CTA
- `/about` — Mission/history/journey timeline, named verticals (SIGs — reframed as a visual grid per Round 2), faculty advisor credit, mentor quote cards, detailed "Why Join" benefits list
- `/events` — Named flagship event spotlight (invent one signature event name), full events list with type filter, past event gallery/carousel, footfall stats per event type
- `/team` — Officer grid (full hierarchy, varied realistic role names), faculty mentor cards — good spot for the Aceternity tilt/3D card hover effect
- `/achievements` — Multi-metric stat counters (not just members — events, participants, institutions reached, etc.), chronological achievement/news feed (dated entry cards), Hall of Fame, awards/recognition badges
- `/contact` — Contact info, join/membership interest form (fake-functional, no backend), FAQ, social links

**Global:** Navbar (Home / About / Events / Team / Achievements / Contact + Join button) and Footer (full link list, socials, ACM-affiliation badge, credit line) on every page.

**Official judging weightage** (so effort is spent where it counts): UI/UX & Visual Design 25%, Problem Statement & Idea 20%, Functionality & UX 20%, AI Usage & Innovation 15%, Creativity & Originality 10%, Presentation & Explanation 10%. **UI/UX polish is the single largest category** — prioritize it over adding more bonus features.

## Locked stack decisions

- **Vite + React + Tailwind CSS** — chosen because our component sources (Uilora, Watermelon UI, shadcn/ui, HeroUI, 21st.dev) are all React/Tailwind-native, and React sets up React Three Fiber cleanly.
- **React Router (react-router-dom)** for multi-page navigation — required now that scope is a multi-page frontend, not a single landing page.
- **Single shared `mockData.js` (or `/data` folder)** holding all fake data used across pages, so reskinning after the 4:30 PM theme reveal only means editing one file.
- Persistent Navbar + Footer wrapping all routes, owned by Parth — page content owned by Tanuj (and Krrish once he joins).

## Working instruction — read this first

Tanuj has limited frontend design experience. Whoever is assisting on this project — Claude in chat, or Claude Code in the terminal — should **actively fetch and inspect the resources listed below** (visit the URLs, read component code/docs, compare options) to find the best-fit component or asset for whatever is being built, rather than defaulting to generic/from-memory implementations or asking Tanuj to browse and decide alone. Treat this file as the first place to look before writing a component from scratch.

## Tech stack

**3D / scene:**
- React Three Fiber + drei — primary choice. Useful drei primitives for instant visual impact: `<Float>`, `<Sparkles>`, `<Stars>`, `<Environment>`, `<MeshDistortMaterial>`, `<MeshWobbleMaterial>`
- Spline (spline.design) — no-code alternative if a scene needs to be built visually instead of in code

**AI-generated 3D assets** (on-theme — ties directly to the prompt-engineering judging criterion):
- Meshy (meshy.ai) — free tier (~200 credits / older model), text-to-3D → `.glb`
- Tripo AI — budget paid option, clean geometry
- Spline AI — text-to-3D built into Spline's editor

**Free pre-made 3D models** (fastest path, no generation wait):
- Poly Haven (polyhaven.com) — HDRIs, models, textures
- Poly Pizza (poly.pizza) — curated CC0 low-poly, glTF-ready
- Quaternius (quaternius.com) — CC0 low-poly asset packs
- Sketchfab (sketchfab.com) — huge library, filter by downloadable + free

**Motion:**
- GSAP + ScrollTrigger + SplitText — 100% free as of 2025 (all former paid plugins included)
- Lenis — smooth/inertia scroll
- Framer Motion — React micro-interactions

**Backgrounds / atmosphere:**
- Vanta.js — drop-in animated Three.js backgrounds
- tsParticles — particle fields, bursts, fireworks

**Prompt reference:**
- AI Images Prompts (aiimagesprompts.vercel.app) — ready-made prompt templates for ChatGPT/Midjourney/FLUX; adapt these instead of writing hero-image prompts from scratch

## Component & UI sources, in priority order

1. **FeralUI** (feralui.dev) — top pick for the "what the heck" moment. Playful, physics-driven React components: a rope pull-cord (real Verlet physics), a claw-machine CAPTCHA, a foil hologram card that tilts with the cursor, a squishy jelly blob, fur, crumple-paper interactions. Use at least one as a centerpiece interaction — this is the most memorable, least-copied element available to us.
2. **Strata UI** (strata-ui.shop) — premium, paste-ready cinematic hero sections (particle heroes, shader gardens, tunnel-reveal heroes, word-stagger typography). Paid/credit-based — check what's free before committing.
3. **Uilora** (uilora.com) — 490+ free copy-paste Next.js/React Native components, Framer Motion-powered. CLI: `npx uilora@latest add [component-name]`.
4. **Watermelon UI** (ui.watermelon.sh) — fully free/open-source, full landing-page blocks and showcases (not just isolated widgets).
5. Baseline free sources: shadcn/ui (ui.shadcn.com), HeroUI (heroui.com), 21st.dev, Uiverse (uiverse.io), React Bits (reactbits.dev).

## Support tools

- **React Icon Library** (reacticons.vercel.app) — 4,500+ free icons, copy SVG/JSX directly, no npm install needed
- **React Library Hub** (reactlibraryhub.vercel.app) — searchable npm-package directory; use this if a specific need comes up mid-build (e.g. "need a carousel") that nothing above covers

## Bonus — only if we reach Day 2 presentations

- **Presenton** (github.com/presenton/presenton) — open-source AI presentation generator (Gamma/Canva alternative), can turn a prompt/outline into an editable PPTX. Useful only if we place and need a pitch deck fast.

## Explicitly out of scope today

- No real backend, database, or auth — the deliverable is a frontend-only page with mock/static data and fake-functional interactions
- Zytor (Android media downloader) — unrelated to this build, ignore
