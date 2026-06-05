# Skill: animation

Pure CSS + Tailwind keyframe animations. No heavy libraries.

## Keyframes (add to globals.css)

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}
@keyframes float-alt {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(8px); }
}
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(6,182,212,0.4); }
  50%       { box-shadow: 0 0 40px rgba(6,182,212,0.8); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes messagePop {
  0%   { opacity: 0; transform: scale(0.8); }
  70%  { transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

## Utility Classes
```css
.animate-fade-in    { animation: fadeIn 0.4s ease forwards; }
.animate-slide-up   { animation: slideUp 0.5s ease forwards; }
.animate-float-slow { animation: float-slow 3s ease-in-out infinite; }
.animate-float-alt  { animation: float-alt 3.5s ease-in-out infinite; }
.animate-glow-pulse { animation: glowPulse 2s ease-in-out infinite; }
.animate-shimmer    { 
  background: linear-gradient(90deg, var(--glass) 25%, rgba(6,182,212,0.1) 50%, var(--glass) 75%);
  background-size: 200% auto;
  animation: shimmer 1.5s linear infinite;
}
.animate-message-pop { animation: messagePop 0.3s cubic-bezier(0.175,0.885,0.32,1.275) forwards; }
```

## Stagger Children
```tsx
{items.map((item, i) => (
  <div key={i} style={{ animationDelay: `${i * 0.08}s` }} className="animate-slide-up opacity-0">
    {item}
  </div>
))}
```

## Scroll-triggered (Intersection Observer)
```tsx
'use client'
import { useEffect, useRef } from 'react'

export function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.classList.add('animate-slide-up')
        obs.unobserve(e.target)
      }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className="opacity-0" style={{ animationFillMode: 'forwards' }}>{children}</div>
}
```

## Rules
- prefers-reduced-motion: always check
  ```css
  @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }
  ```
- Keep durations short: 0.3s–0.5s for UI, 2s–4s for ambient float
- Cyan glow (#06b6d4) for interactive elements only
