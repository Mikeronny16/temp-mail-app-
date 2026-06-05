# Project conventions (read before building)

This is a cinematic luxury car-showroom site. When building any part of it, prefer the Agent Skills in `.claude/skills/`:

- For the scroll-driven car animation → use the **cinematic-scroll** skill.
- For the overall site, sections, design, and Myanmar specifics → use the **car-showroom** skill.

Always read the relevant `SKILL.md` and its `references/` files and copy/adapt the provided components instead of writing equivalents from scratch.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind · GSAP + @gsap/react (scroll-scrub) · Framer Motion (UI micro-interactions) · Supabase · Vercel.

## Hard rules

- The hero must never blank-screen on arrival: show the poster immediately, preload frames with a loader, reveal when ready.
- Mobile / slow device / `prefers-reduced-motion` → serve the single static poster, NOT the frame sequence. (Matters for Myanmar mobile networks.)
- No Stripe / no online card checkout — payment is offline (KBZPay / Wave Money / MMQR; USDT for international). The site is lead-gen, not e-commerce checkout.
- Bilingual-ready (EN + Burmese). Use a Myanmar webfont for Burmese text and slightly higher line-height.
- Fonts via `next/font`. No Inter/Roboto/Arial — use the distinctive pairing in `car-showroom/references/design-system.md`.
- Dark, refined aesthetic with ONE accent. Hairline borders. Generous negative space. Subtle film grain. No purple-on-white SaaS look.
- Clean up all GSAP ScrollTriggers (use `useGSAP`).
- Keep the frame sequence small (webp, ≤10 MB). 60–150 frames is plenty.

## File layout

Components in `components/`, route pages in `app/`, Supabase client in `lib/supabase.ts`, i18n in `lib/i18n.ts`, frames in `public/sequence/`, posters in `public/posters/`.
