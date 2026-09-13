# Image sourcing — drop real/generated files in this folder

Per `pixelprompt-interactions.md`. Once the PS locks, search with the
concept's actual keywords (not generic filler terms) and compare a few
real candidates before picking one.

## Priority order

1. **Real photography** — search in this order, stop as soon as something fits:
   - [Unsplash](https://unsplash.com) — highest editorial quality, free API
   - [Pexels](https://pexels.com) — comparable quality, no attribution required
   - [Pixabay](https://pixabay.com) — largest volume, also covers illustrations/vectors
   - [Burst by Shopify](https://burst.shopify.com) — if the concept is e-commerce/retail
   - [Reshot](https://reshot.com) — less "obviously stock" look

2. **AI-generated** — only when nothing pre-made fits:
   - [Ideogram](https://ideogram.ai) — best for images with readable text baked in
   - [FLUX](https://fal.ai) (via fal.ai/Replicate) — photorealism, cheap per image
   - [Recraft](https://recraft.ai) — vector-style icons/illustrations, brand-consistent sets

Adapt prompts from the "AI Images Prompts" library (aiimagesprompts.vercel.app)
instead of writing image prompts from scratch.

## Current state

No local files yet — the 3 placeholder images currently wired into the site
(Home feature blocks + About banner) are hotlinked directly from Unsplash's
CDN as generic stand-ins, marked `// PLACEHOLDER: replace once PS locks` at
each call site. Once real images are sourced/generated, save them here and
swap the URLs for local imports.
