# Skill: performance

Next.js 16 speed — images, fonts, bundle, Core Web Vitals. Myanmar network-aware.

## Image Optimization
```tsx
// Always use next/image
import Image from 'next/image'

<Image
  src="/hero.webp"
  alt="description"
  width={800}
  height={600}
  priority          // add for above-fold images
  placeholder="blur" // add if you have blurDataURL
/>

// Remote images — add to next.config.ts
images: {
  remotePatterns: [{ hostname: 'your-domain.com' }]
}
```

## Font Optimization
```tsx
// app/fonts.ts — never @import in CSS
import { Plus_Jakarta_Sans } from 'next/font/google'

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',      // show fallback font while loading
  variable: '--font-body',
  preload: true,
})
```

## Bundle Size
```bash
# Check what's large
npx @next/bundle-analyzer

# Common culprits:
# - moment.js → use date-fns (smaller)
# - lodash → import specific: import debounce from 'lodash/debounce'
# - framer-motion → lazy load if not above fold
```

## Lazy Loading
```tsx
import dynamic from 'next/dynamic'

// Heavy component — only load when needed
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div className="animate-shimmer h-48 rounded-xl" />,
  ssr: false,  // if uses window/document
})
```

## Myanmar Network Tips (slow 3g/4g)
- WebP images always (50% smaller than JPEG)
- Keep page weight under 500KB initial load
- Preconnect to Supabase/Groq in layout.tsx:
```tsx
<link rel="preconnect" href="https://[project].supabase.co" />
```
- Use `loading="lazy"` on below-fold images
- Skeleton loaders instead of spinners (feels faster)

## Core Web Vitals Targets
| Metric | Target | Fix |
|--------|--------|-----|
| LCP    | < 2.5s | priority image, preload font |
| CLS    | < 0.1  | set width/height on all images |
| FID    | < 100ms | reduce JS, defer non-critical |
| TTFB   | < 800ms | Vercel Edge, Supabase region match |

## Quick Wins
```tsx
// 1. Add to <html> tag
<html lang="en" className="...">

// 2. Preload critical image
<link rel="preload" as="image" href="/hero.webp" />

// 3. Export const for static where possible
export const dynamic = 'force-static'  // or remove 'force-dynamic'
```
