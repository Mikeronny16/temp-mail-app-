# Skill: myanmar-payment

KBZPay / Wave Money / MMQR — manual payment flow for Myanmar projects.

## Full Payment Flow

```
1. User clicks "Buy" button
2. Modal shows payment instructions + QR
3. User pays via KBZPay/Wave
4. User sends screenshot to mikeronny18@gmail.com
5. Mike checks email → approves in /admin
6. Supabase updated → user gets access
```

## Payment Modal Component
```tsx
'use client'
import { useState } from 'react'

type Plan = { name: string; price: number; mmkPrice: string; credits: number }

export function PaymentModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const [step, setStep] = useState<'method' | 'instructions' | 'sent'>('method')
  const [method, setMethod] = useState<'kbzpay' | 'wave' | 'mmqr'>('kbzpay')

  const instructions = {
    kbzpay: { number: '09xxxxxxxxx', name: 'Mike Ronny', label: 'KBZPay' },
    wave:   { number: '09xxxxxxxxx', name: 'Mike Ronny', label: 'Wave Money' },
    mmqr:   { number: '09xxxxxxxxx', name: 'Mike Ronny', label: 'MMQR' },
  }

  const emailSubject = encodeURIComponent(`Payment: ${plan.name} — $${plan.price}`)
  const emailBody = encodeURIComponent(
    `Payment method: ${instructions[method].label}\nPlan: ${plan.name} ($${plan.price})\n\n[Attach payment screenshot]`
  )

  return (
    <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--glass-border)',
      borderRadius: '1.5rem', padding: '1.5rem', maxWidth: '380px', width: '100%' }}>
      
      {step === 'method' && (
        <>
          <h3 style={{ color: 'var(--text)', marginBottom: '1rem' }}>
            Choose Payment — {plan.name} (${plan.price})
          </h3>
          {(['kbzpay', 'wave', 'mmqr'] as const).map(m => (
            <button key={m} onClick={() => { setMethod(m); setStep('instructions') }}
              style={{ display: 'block', width: '100%', marginBottom: '0.5rem',
                padding: '0.75rem', background: 'var(--glass)',
                border: `1px solid ${method === m ? 'var(--accent)' : 'var(--glass-border)'}`,
                borderRadius: '0.75rem', color: 'var(--text)', cursor: 'pointer' }}>
              {instructions[m].label}
            </button>
          ))}
        </>
      )}

      {step === 'instructions' && (
        <>
          <h3 style={{ color: 'var(--text)', marginBottom: '1rem' }}>
            {instructions[method].label} Payment
          </h3>
          <div style={{ background: 'var(--glass)', borderRadius: '0.75rem', padding: '1rem',
            marginBottom: '1rem', color: 'var(--text)' }}>
            <p>Number: <strong>{instructions[method].number}</strong></p>
            <p>Name: <strong>{instructions[method].name}</strong></p>
            <p>Amount: <strong>{plan.mmkPrice} (≈${plan.price})</strong></p>
          </div>
          <a href={`mailto:mikeronny18@gmail.com?subject=${emailSubject}&body=${emailBody}`}
            target="_blank" onClick={() => setStep('sent')}
            style={{ display: 'block', background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              borderRadius: '0.75rem', padding: '0.75rem', textAlign: 'center',
              color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
            Send Payment Screenshot →
          </a>
        </>
      )}

      {step === 'sent' && (
        <div style={{ textAlign: 'center', color: 'var(--text)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
          <p><strong>Email opened!</strong></p>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px', marginTop: '0.5rem' }}>
            Attach your payment screenshot and send.<br/>
            Access granted within 24 hours.
          </p>
        </div>
      )}
    </div>
  )
}
```

## Admin Approval (Supabase)
```tsx
// /admin page — approve payment
await supabase
  .from('user_credits')
  .upsert({ user_id: userId, credits: plan.credits, plan: plan.slug })
```

## MMK Exchange Rate Note
- $5 ≈ 10,500 MMK (check xe.com for current rate)
- Display both: "$5 (≈10,500 MMK)"
- Update rates monthly in a constants file
