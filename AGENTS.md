---
name: AGENTS
description: Resource guide for today's ACM PixelPrompt landing page build — locked tech stack, component/UI sources, 3D and asset libraries, and team roles. Use this before building or styling any part of the landing page.
---

# ACM PixelPrompt — Build Resource Guide

**Event:** ACM PixelPrompt, national-level buildathon, MITS Gwalior ACM Student Chapter, via Unstop.
**When:** 13 Sept 2026 (build) → 14 Sept 2026 (top-team presentations, if selected).
**Deliverable:** A single AI-generated landing page — not a full-stack app. Judged on idea, prompt engineering, and the final build's polish/creativity. Theme is open (no fixed problem statement as of the last check).
**Team:** Tanuj (idea, master prompt, integration, uses Claude + Claude Code + Antigravity), Krrish (build lead, strongest frontend skills, Antigravity), Parth (support — content/QA/bug flags, Antigravity).

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
