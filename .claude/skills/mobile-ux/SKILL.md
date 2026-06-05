# Skill: mobile-ux

iPhone 12 (390px) UX checklist — every project before deploy.

## Checklist

### Touch Targets
- [ ] All buttons/links: min 44×44px touch area
- [ ] Bottom nav items: min 48px tall
- [ ] Form inputs: min 44px height, 16px font (no zoom on focus)
- [ ] No hover-only states (no `onMouseEnter` in Server Components)

### Spacing & Layout
- [ ] Horizontal padding: min 16px (px-4) on all edges
- [ ] Max width: max-w-xl (672px) centered for content
- [ ] Fixed bottom CTA bar for key actions
- [ ] No horizontal scroll at 390px width

### Typography
- [ ] Body: min 14px (16px preferred)
- [ ] Headings: `clamp(1.5rem, 5vw, 2.5rem)` — responsive
- [ ] Burmese text: `line-height: 1.7` minimum, font-size 15px+
- [ ] Contrast: 4.5:1 minimum (white on #040d1a = ✓)

### Forms
- [ ] `inputmode="email"` for email fields (shows email keyboard)
- [ ] `inputmode="numeric"` for number fields
- [ ] `autocomplete` attributes on login forms
- [ ] Error messages below field, not in alert

### Performance (Myanmar networks)
- [ ] Images: WebP + width/height attributes (no layout shift)
- [ ] Fonts: `font-display: swap` (no invisible text on slow load)
- [ ] Critical CSS inlined (Next.js does this automatically)
- [ ] No blocking scripts in `<head>`

### Scroll & Navigation
- [ ] `scroll-behavior: smooth` on html
- [ ] Sticky header: max 60px tall (leaves content room)
- [ ] `position: sticky` bottom CTA for conversion pages
- [ ] `overscroll-behavior: contain` on modals/sheets

## Test Snippet
```tsx
// Minimum viable mobile button
<button
  style={{
    minHeight: '44px',
    minWidth: '44px', 
    fontSize: '16px',  // prevents iOS zoom
    padding: '12px 24px',
    touchAction: 'manipulation', // faster tap response
  }}
>
```

## Safe Area (notch/home bar)
```css
padding-bottom: env(safe-area-inset-bottom);
padding-top: env(safe-area-inset-top);
```
