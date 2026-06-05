# Project conventions (read before building)

This is a cinematic luxury car-showroom site. When building any part of it, prefer the Agent Skills in `.claude/skills/`:

- For the scroll-driven car animation → use the **cinematic-scroll** skill.
- For the overall site, sections, design, and Myanmar specifics → use the **car-showroom** skill.

Always read the relevant `SKILL.md` and its `references/` files and copy/adapt the provided components instead of writing equivalents from scratch.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind · GSAP + @gsap/react (scroll-scrub) · Framer Motion (UI micro-interactions) · Supabase · Vercel.

## Anti-Slop Design Rules (read every session)

<frontend_aesthetics>
You tend to converge toward generic "AI slop" outputs. Break this default on every project.

FONTS — NEVER: Inter, Roboto, Arial, system-ui, Space Grotesk
USE INSTEAD: Clash Display, Bricolage Grotesque, Fraunces, Playfair Display, Cabinet Grotesk, Satoshi, JetBrains Mono
Pairing rule: display + monospace OR serif + geometric sans. Weight contrast: 100 vs 900.
Size contrast: 3x jumps, not 1.5x.

COLOR — NEVER: purple gradient on white/dark, 5+ accent colors, generic blue CTAs
USE INSTEAD: one dominant + one sharp accent. CSS variables. OKLCH color spaces in Tailwind v4.
Dark sites: rich blacks (#040d1a not #000), warm or cool tinted neutrals.

BACKGROUNDS — NEVER: flat solid colors
USE INSTEAD: gradient mesh, SVG noise/grain overlay, layered transparencies, subtle texture.
Film grain: `body::after { background-image: url("data:image/svg+xml,...feTurbulence..."); opacity:0.035; }`

LAYOUT — NEVER: perfectly centered hero → feature grid → CTA → footer (boring symmetry)
USE INSTEAD: asymmetry, diagonal flow, grid-breaking elements, generous negative space, overlapping layers.

MOTION — NEVER: scattered micro-interactions everywhere
USE INSTEAD: ONE orchestrated entrance sequence (staggered 200ms/400ms/600ms delays) + surprising hover states. Everything else static.

TYPOGRAPHY AS ATMOSPHERE — The font IS the design. One distinctive heading font at extreme weights does more than any animation.

COMMIT TO AN EXTREME — "Brutally minimal" OR "maximalist". The middle is generic.

Before writing any code: state the aesthetic direction in 1 sentence. If it sounds generic, choose bolder.
</frontend_aesthetics>

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
