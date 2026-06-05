# Skill: email-delivery

Transactional email — Resend (free 3k/month). Access confirmation, receipts.

## Setup
```bash
npm install resend
```
```env
RESEND_API_KEY=re_...
```

## lib/email.ts
```tsx
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendAccessEmail(to: string, product: string, accessUrl?: string) {
  await resend.emails.send({
    from: 'Mike Ronny <noreply@yourdomain.com>',
    to,
    subject: `✅ Your ${product} access is ready!`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; background: #040d1a; color: #f0f9ff; padding: 2rem; border-radius: 1rem;">
        <h2 style="color: #06b6d4;">Access Confirmed 🎉</h2>
        <p>Your payment has been verified. You now have access to <strong>${product}</strong>.</p>
        ${accessUrl ? `<a href="${accessUrl}" style="display:inline-block; background: #06b6d4; color: #fff; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; margin-top: 1rem;">Access Now →</a>` : ''}
        <p style="color: rgba(240,249,255,0.6); font-size: 14px; margin-top: 2rem;">
          Questions? Reply to this email or message on Telegram.<br/>
          — Mike Ronny
        </p>
      </div>
    `,
  })
}

export async function sendPaymentReceived(to: string, plan: string, amount: string) {
  await resend.emails.send({
    from: 'Mike Ronny <noreply@yourdomain.com>',
    to,
    subject: `Payment received — ${plan}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 2rem;">
        <p>Hi,</p>
        <p>We received your payment for <strong>${plan}</strong> (${amount}).</p>
        <p>Access will be granted within 24 hours. We'll email you when it's ready.</p>
        <p>— Mike Ronny</p>
      </div>
    `,
  })
}
```

## Admin trigger (send on approval)
```tsx
// In /admin approval handler
await sendAccessEmail(user.email, 'DraftWin Pro', 'https://draftwin.vercel.app/dashboard')
await supabase.from('user_credits').upsert({ user_id: userId, credits: 100 })
```

## Free Tier
- Resend: 3,000 emails/month free
- Requires domain verification (use Vercel custom domain or resend subdomain)
- If no custom domain: use Resend's `onboarding@resend.dev` for testing
