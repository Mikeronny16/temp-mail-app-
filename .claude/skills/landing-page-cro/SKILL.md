# Skill: landing-page-cro

Conversion Rate Optimization — remove doubt, show value, build momentum.

## Landing Page Structure (order matters)

```
1. HERO          — Bold claim + CTA above fold (no scroll needed)
2. SOCIAL PROOF  — Numbers, user count, testimonials
3. PROBLEM       — Agitate the pain they feel right now
4. SOLUTION      — Your product solves it, step by step
5. FEATURES      — 3–5 benefits (not features — benefits)
6. PRICING       — Simple, 1–2 tiers max
7. FAQ           — Kill the last 3 objections
8. FINAL CTA     — Repeat the offer + urgency
```

## Above-the-Fold Checklist
- [ ] Headline: what it does + for who, in 8 words max
- [ ] Sub-headline: biggest benefit or result
- [ ] CTA button: action verb + outcome ("Get My Proposals")
- [ ] No nav links that lead away from page
- [ ] Social proof visible (even just "X users")

## Objection Killers (FAQ section)
```
Q: Is this free?
Q: How does payment work? (Myanmar — KBZPay/Wave info)
Q: What if it doesn't work for me?
Q: How fast does it work?
Q: Is my data safe?
```

## CRO Micro-patterns
```tsx
// Sticky CTA bar on mobile scroll
<div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden"
  style={{ background: 'rgba(4,13,26,0.95)', borderTop: '1px solid var(--glass-border)' }}>
  <button className="w-full">Get Access Now</button>
</div>

// Live counter (trust signal)
<span>🔥 <strong>1,247</strong> people using this right now</span>

// Risk reversal
<p className="text-sm opacity-60">✓ No credit card needed &nbsp; ✓ Works in Myanmar &nbsp; ✓ KBZPay accepted</p>
```

## Rules
- ONE primary CTA per section (no decision paralysis)
- Mobile hero must show CTA without scrolling (390px height)
- Pricing: show value before price (save $X per month → only $5)
- Never say "we" — say "you" (user-centric)
