# Skill: vanilla-tilt

Subtle 3D mouse-parallax on cards — no WebGL, pure JS. Like ICG Gallery product cards.

## Install
```bash
npm install vanilla-tilt
# types
npm install -D @types/vanilla-tilt
```

## React Hook
```tsx
'use client'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

export function useTilt(options?: VanillaTilt.TiltOptions) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    VanillaTilt.init(el, {
      max: 8,           // max tilt degrees
      speed: 400,       // transition speed ms
      glare: true,      // light reflection effect
      'max-glare': 0.2, // subtle glare
      scale: 1.02,      // slight zoom on hover
      ...options,
    })
    return () => el.vanillaTilt?.destroy()
  }, [])

  return ref
}
```

## Tilt Card Component
```tsx
'use client'
import { useTilt } from '@/hooks/useTilt'

export function TiltCard({ image, title, subtitle }: {
  image: string; title: string; subtitle: string
}) {
  const ref = useTilt({ max: 6, glare: true, 'max-glare': 0.15 })

  return (
    <div ref={ref} style={{
      background: '#1a1510',
      border: '1px solid rgba(180,140,80,0.2)',
      borderRadius: '1rem',
      overflow: 'hidden',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
    }}>
      <img src={image} alt={title}
        style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '1.25rem' }}>
        <h3 style={{ color: '#f5efe6', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
          {title}
        </h3>
        <p style={{ color: 'rgba(245,239,230,0.5)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
```

## Mobile Handling
```tsx
// Disable tilt on touch devices — useless + drains battery
useEffect(() => {
  const touch = window.matchMedia('(hover: none)').matches
  if (touch) return  // skip VanillaTilt.init
  // ...init
}, [])
```

## ICG Gallery Palette (luxury interior)
```css
--bg-luxury:      #0f0d0a   /* near-black warm */
--surface:        #1a1510   /* dark warm brown */
--border-gold:    rgba(180,140,80,0.2)
--text-cream:     #f5efe6
--text-muted:     rgba(245,239,230,0.5)
--accent-amber:   #d4a853
```

## SVG Floor Plan Path Animation
```tsx
// Draws architectural outline on scroll
'use client'
import { useEffect, useRef } from 'react'

export function FloorPlanSVG({ d }: { d: string }) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        path.style.transition = 'stroke-dashoffset 2s ease'
        path.style.strokeDashoffset = '0'
        obs.unobserve(path)
      }
    }, { threshold: 0.3 })
    obs.observe(path)
    return () => obs.disconnect()
  }, [])

  return (
    <svg viewBox="0 0 400 300" fill="none"
      style={{ width: '100%', maxWidth: 600 }}>
      <path ref={pathRef} d={d}
        stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
```
