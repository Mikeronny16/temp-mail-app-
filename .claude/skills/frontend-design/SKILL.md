# Skill: frontend-design

Production-grade UI components — distinctive, not generic AI slop.

## Stack
Next.js 16 App Router · TypeScript · Tailwind CSS · Framer Motion

## Mike's Design System
```css
--bg: #040d1a
--accent: #06b6d4  /* cyan */
--accent-dim: #0891b2
--blue: #3b82f6
--glass: rgba(6,182,212,0.05)
--glass-border: rgba(6,182,212,0.15)
--text: #f0f9ff
--text-dim: rgba(240,249,255,0.6)
--text-faint: rgba(240,249,255,0.3)
```

Font: **Plus Jakarta Sans** (Google Fonts) — never Inter/Roboto/Arial

## Component Patterns

### Glass Card
```tsx
<div style={{
  background: 'var(--glass)',
  border: '1px solid var(--glass-border)',
  borderRadius: '1.5rem',
  padding: '1.5rem'
}}>
```

### Glow Button
```tsx
<button style={{
  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
  boxShadow: '0 0 20px rgba(6,182,212,0.4)',
  border: 'none',
  borderRadius: '0.75rem',
  color: '#fff',
  fontWeight: 600,
  padding: '0.75rem 1.5rem',
  cursor: 'pointer'
}}>
```

### Layout (mobile-first)
```tsx
<div className="max-w-xl mx-auto px-4">
```

## Rules
- Dark ocean theme ALWAYS (#040d1a bg)
- Mobile-first, iPhone 12 (390px) primary viewport
- No purple gradient on white — that's generic AI design
- Subtle animations: fadeIn, slideUp, float-slow
- Glass morphism for cards, cyan glow for CTAs
- Burmese text needs `lang="my"` + higher line-height (1.7+)
