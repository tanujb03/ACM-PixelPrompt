---
name: pixelprompt-interactions
description: Animation, motion-design, image-sourcing, and 3D-model resource guide for the ACM PixelPrompt build — covers microinteractions, scrollytelling, glassmorphism, gooey/glitch effects, layout trends, page transitions, where to source/generate images, and where to find + select 3D models. Use this before hand-writing any animation, hover effect, layout pattern, image choice, or 3D element from scratch.
---

# ACM PixelPrompt — Interaction & 3D Resource Guide (Skill 2)

Companion to `pixelprompt-resources.md` (Skill 1). Same working instruction applies: **actively visit and inspect these resources** before writing a microinteraction or 3D element from generic memory — check what already exists here first.

## Microinteraction categories (small, feedback-level)

- **Cursor/pointer**: magnetic buttons, custom cursor trails, spotlight/lens hover reveal, 3D tilt-on-hover
- **Scroll-triggered**: fade/slide reveals, parallax layers, scroll-pinned sections, scroll-scrubbed animation
- **Text**: typewriter, character-scramble reveal, split-text word/letter reveal, word-rotation, animated gradient highlights
- **Button/feedback**: click ripple, hover color/scale shift, success checkmarks, skeleton loaders, inline form validation
- **Background/ambience**: aurora/gradient backgrounds, particle bursts, shader noise, animated beam/grid backgrounds
- **3D/physics**: tilt/flip cards, physics-drag objects, rotating 3D marquees, floating/bobbing objects
- **Icon-level**: state-machine-driven icons that react live to cursor/hover, simpler icon-loop animations

## Broader animation & layout trends (2026, macro-level — bigger than a single microinteraction)

- **Scrollytelling / scroll storytelling**: pinned sections that narrate as you scroll; horizontal scroll galleries (sticky-locked vertical scroll translated into horizontal movement via GSAP ScrollTrigger)
- **CSS Scroll-driven Animations** (native browser spec, now supported across Chrome/Edge/Firefox/Safari): reveal-on-scroll and progress indicators achievable with plain CSS + Intersection Observer, no JS animation library needed for simple cases — lighter-weight than GSAP for basic reveals
- **Bento grid layouts**: modular, asymmetric grid of differently-sized panels (stat, feature, quote per module) — currently one of the most recognizable, still-strong 2026 layout patterns
- **Kinetic typography**: headline text that animates on scroll/hover/load. Caution: real production sites use this sparingly (hero headline only) — overuse causes layout shift and hurts accessibility/SEO, and 2026 retrospectives note it's "more polish than substance" when overdone
- **Glassmorphism 2.0**: layered frosted-glass blur, used strategically (nav, modals, feature cards) rather than everywhere. Caution: `backdrop-filter: blur()` is expensive — test on a real Android mid-tier phone if using it, since it's caused measurable FPS drops on real devices
- **Grain/texture overlays**: a subtle grain layer behind key sections adds tactile realism cheaply — keep the asset file size small
- **Gooey/blob/metaball effects**: SVG-filter-based fluid shapes, good for morphing panel corners or blob-style hover effects (pairs naturally with FeralUI's jelly blob)
- **Glitch effects**: text/image RGB-split or scan-line glitch, achievable with a self-contained SVG filter (no library needed) or a small dedicated lib — fits well for a tech/cyberpunk/security-themed concept
- **Immersive 3D/WebGL**: same caution as above — deliberate, single well-placed 3D scene beats a page full of 3D elements, and the page must degrade gracefully if WebGL isn't supported

## Page transitions — high-value given we're multi-page now

- **View Transitions API** (native browser feature, ~89% global support since 2024) — gives crossfade and shared-element transitions between pages with almost no code: `document.startViewTransition(...)` plus `view-transition-name` in CSS. Directly integrates with **React Router 7.x** (our exact router) via `<Link viewTransition>` / `<NavLink viewTransition>` — since this is already our stack, it's close to a free win. Falls back gracefully in unsupported browsers. There's an existing Claude Code skill for it: `npx skills add https://github.com/yonatangross/orchestkit --skill view-transitions`.

## Animation engines & specialized libraries (beyond GSAP)

- **Anime.js v4** — lightweight alternative/complement to GSAP with built-in spring physics and stagger patterns, no licensing restrictions.
- **Motion** (formerly Framer Motion, now framework-agnostic) — spring physics, gestures, scroll-linked effects, React-friendly.
- **Matter.js** — 2D physics engine (real bouncing/falling/colliding objects) — pairs naturally with the FeralUI physics vibe if we want a second physics moment somewhere.
- **Typed.js** / **TypeIt** — dedicated typewriter-effect libraries if GSAP's approach feels heavier than needed.
- **Split-type** — splits text into chars/words/lines for stagger animation, a lighter alternative to GSAP's SplitText.
- **CountUp.js** — animates numbers counting up with easing — directly useful for the stats strip section already in the build.
- **canvas-confetti** — small, performant celebratory burst effect (e.g. on a fake "form submitted" success state).
- **Embla Carousel** (headless, ~4KB core) or **Swiper** (batteries-included, ~25-45KB, has a WebGL shader-transition module called SwiperGL for dramatic ripple/dissolve slide transitions) — for any image/testimonial carousel on secondary pages.
- **PixiJS** — fast 2D WebGL renderer, more horsepower than tsParticles/Vanta if a particle-heavy background needs it.

## Component/animation sources, in priority order

1. **Aceternity UI** (aceternity.com) — top pick for 3D cards, aurora/gradient backgrounds, animated pins, text-scramble and typewriter text components. React + Tailwind + Framer Motion, copy-paste. A ready-made Claude Code skill for it already exists: run `npx skillscat add secondsky/claude-skills/aceternity-ui` to install it directly instead of hand-adapting each component.
2. **Magic UI** (magicui.design) — polished marquees, animated lists, dock-style nav, animated beams. Pairs well with shadcn/ui.
3. **React Bits** (reactbits.dev) — already in Skill 1; 110+ components, notably ships accessibility controls (`prefers-reduced-motion`) the others lack by default.
4. **Rive** (rive.app) — real interactive vector icons driven by state machines (e.g. an icon whose eyes/pose react live to cursor position). More impressive than Lottie; free web runtime (`rive-wasm`).
5. **LottieFiles** (lottiefiles.com) — simpler icon-level loop animations (likes, loaders, success states) when Rive is overkill for a given spot. Use `@lottiefiles/lottie-player` or `dotlottie-react`.
6. **Cuberto mouse-follower** (github.com/Cuberto/mouse-follower) — the library behind buttery custom-cursor/cursor-trail effects on agency sites.
7. **vanilla-tilt.js** / **react-parallax-tilt** — lightweight tilt-on-hover effect for cards/images, no WebGL needed.
8. **Gooey filter** (21st.dev — Fancy Components by Daniel Petho, or `luukdv/gooey-react` on GitHub) — SVG-filter gooey/metaball effect for fluid panel shapes or blob hover states.
9. Glitch text/image effect — a self-contained SVG filter snippet (search "SVG glitch effect filter", no npm install needed) or the small `glitcha` JS library if a reusable component is preferred.

## 3D models — two paths, and how to actually pick one

- **Easy mode**: Google's `<model-viewer>` web component (modelviewer.dev) — embed a `.glb` with `<model-viewer src="model.glb">`, get orbit controls and lighting for free, zero Three.js code required. Default to this for any *secondary* 3D element.
- **Full control**: React Three Fiber + drei's `useGLTF` loader (already our primary 3D stack per Skill 1) — reserve this effort for the one hero centerpiece only.

**Selection instruction for Claude Code**: once the PS/theme is locked, don't just grab the first model that loosely matches — actively search Poly Pizza, Sketchfab, Quaternius, and Poly Haven using keywords from the locked concept, pull up multiple candidate models, compare them (poly count, style consistency, how well the subject matches the concept), and pick the single best-looking, best-suited one. Only fall back to generating a new one via Meshy's free tier if nothing pre-made fits well enough.

## Discovery / inspiration (not code, but useful when stuck)

- **Codrops** (tympanus.net/codrops) — deep-dive tutorials and full source code for cutting-edge interaction techniques. Specific repos worth checking directly: `codrops/GooeyTextHoverEffect`, `codrops/DistortedLinkEffects`, `codrops/TileScroll` (scroll animations for image grids), `codrops/AnimateSVGTextPath`.

## Images — when they're needed, and where to get good ones

**When an image is actually necessary** (not just decorative filler): a hero visual that sets first impression, a feature/product illustration or screenshot per section, testimonial/avatar placeholders if a testimonials section exists, and any before/after or comparison visual the concept specifically calls for.

**When to skip one**: don't add a stock photo purely to fill empty space. If a 3D model, shader background, or bento grid already carries the visual weight in a section, a large photo often just competes with it and costs real load time for no gain. Use images with purpose, not by default.

**Free stock photo sources** (real photography, matched to whatever PS arrives):
- **Unsplash** (unsplash.com) — highest artistic/editorial quality, free API, commercial use allowed without attribution
- **Pexels** (pexels.com) — comparable quality, free API, no attribution required
- **Pixabay** (pixabay.com) — largest raw volume (mostly CC0), also covers illustrations/vectors — useful when the other two come up empty
- **Burst by Shopify** (burst.shopify.com) — specifically strong for product photography, useful if the assigned PS is e-commerce/retail-flavored
- **Reshot** (reshot.com) — free icons + illustrations + photos with a less generic, less "obviously stock" look than typical libraries

**AI-generated images** (when nothing pre-made matches the exact concept):
- **Ideogram** — best free tier (10 prompts/day) and by far the strongest at rendering readable text inside a generated image (posters, banners, anything with words baked into the graphic)
- **FLUX** (via fal.ai/Replicate) — current photorealism leader, very cheap per image (~$0.04-0.06) — best when the concept needs a realistic photo that doesn't exist in any stock library
- **Recraft** — best for vector-style icons/illustrations/logos with brand-consistent style across a whole set — good fit if the concept needs a cohesive icon family rather than photos

**Prompt source**: use the "AI Images Prompts" library already in Skill 1 (aiimagesprompts.vercel.app) — adapt those templates instead of writing image prompts from scratch once the concept is locked.

**Instruction for Claude Code**: once the PS is assigned, actively search these sources using the concept's actual keywords (not generic filler terms like "business team" or "office"), compare a few real candidates for genuine fit and quality, and only generate a new AI image if nothing pre-made fits well enough — same selection discipline as the 3D-model instruction above.
