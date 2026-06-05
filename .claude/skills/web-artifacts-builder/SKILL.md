# Skill: web-artifacts-builder

Build complex interactive React artifacts — prototypes, dashboards, demos.

## Stack
React 18 · TypeScript · Tailwind CSS · shadcn/ui components

## When to Use
- Prototype a new feature before full build
- Interactive dashboard mockup
- Component demo / design review
- Quick proof-of-concept

## Pattern

```tsx
'use client'
import { useState } from 'react'

// Self-contained artifact — no external deps except listed below
// Allowed: React, Tailwind classes, inline styles
// Icons: use emoji or simple SVG inline

export default function Artifact() {
  const [state, setState] = useState(null)
  
  return (
    <div style={{ background: '#040d1a', minHeight: '100vh', color: '#f0f9ff' }}>
      {/* content */}
    </div>
  )
}
```

## Rules
- Always use Mike's ocean dark theme
- Self-contained (no external API calls in artifacts)
- Mobile-first layout (max-w-xl mx-auto px-4)
- Interactive — add real state/logic, not static mockups
