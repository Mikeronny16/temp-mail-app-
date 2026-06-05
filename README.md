# Cinematic Car Showroom — Claude Code Skills

Two Agent Skills that teach Claude Code to build an Apple-style, scroll-driven luxury car-showroom site (Next.js 15 + TS + Tailwind + GSAP + Framer Motion + Supabase, localized for Myanmar).

## What's inside

```
.claude/skills/
├── cinematic-scroll/      # THE TECHNIQUE: image-sequence-on-scroll with GSAP
│   ├── SKILL.md
│   └── references/
│       ├── ScrollImageSequence.tsx   # canvas + GSAP, copy into components/
│       ├── ScrollTextReveal.tsx      # pinned text beats
│       └── frame-generation.md       # make frames with Veo/Gemini/ffmpeg
└── car-showroom/          # THE PRODUCT: full site that USES the technique
    ├── SKILL.md
    └── references/
        ├── design-system.md          # dark automotive-luxury tokens + fonts
        ├── HeroSequence.tsx          # worked car hero
        ├── SpecScroller.tsx          # count-up specs on scroll
        ├── ColorConfigurator.tsx     # swatches swap the car
        ├── ModelLineup.tsx           # model grid
        ├── TestDriveForm.tsx         # Supabase lead form (no Stripe)
        └── myanmar-and-i18n.md       # Burmese fonts, i18n, KBZPay/Wave/MMQR
```

## Install

Unzip into the **root of your project** so the `.claude/` folder sits next to `package.json`:

```
your-project/
├── .claude/skills/...   ← from this zip
├── package.json
└── app/
```

Claude Code auto-discovers skills in `.claude/skills/`. Verify with `/skills` (or `/doctor`) inside Claude Code. Drop `CLAUDE.md` (in this zip) at the repo root too so project conventions are always loaded.

## First prompt to give Claude Code

> Build a luxury car-showroom site. Use the `car-showroom` skill (it depends on `cinematic-scroll`). Stack: Next.js 15 App Router, TypeScript, Tailwind, GSAP, Framer Motion, Supabase. Brand is **[NAME]**, accent color **[HEX]**, hero car **[MODEL]**. I don't have the frame sequence yet — scaffold the whole site with a poster placeholder + static fallback so it looks great with zero frames, and follow the frame-generation guide later. Bilingual-ready (EN now, Burmese later). Test-drive form writes to Supabase, no Stripe.

Then, when you have a car clip/image, follow `cinematic-scroll/references/frame-generation.md` to produce `/public/sequence/hero/frame-0001.webp …` and the hero comes alive.

## Dependencies

```bash
npm i gsap @gsap/react framer-motion @supabase/supabase-js
```
