# Skill: digital-products

Digital download products — $2–$10, instant delivery, Myanmar payment.

## Payment Flow (No Stripe)

```
User clicks "Buy" 
→ Opens Gmail with pre-filled email to mikeronny18@gmail.com
→ Subject: "Payment for [Product] — [Username]"
→ Body: includes KBZPay/Wave/MMQR instructions
→ Mike confirms in /admin → manually flips access flag in Supabase
```

## Gmail CTA Button
```tsx
const mailtoLink = (product: string, price: string) => {
  const subject = encodeURIComponent(`Buy ${product} — $${price}`)
  const body = encodeURIComponent(
    `Hi Mike,\n\nI want to buy ${product} ($${price}).\n\nPayment method: KBZPay / Wave Money\n\nMy account: [username]\n\nPlease confirm after payment.`
  )
  return `mailto:mikeronny18@gmail.com?subject=${subject}&body=${body}`
}

<a href={mailtoLink("ReadyPrompts Kit", "7")} target="_blank">
  <button>Buy Now — $7</button>
</a>
```

## KBZPay / Wave Instructions (show in modal)
```tsx
const PaymentModal = () => (
  <div>
    <h3>Payment Instructions</h3>
    <div>
      <p><strong>KBZPay:</strong> 09xxxxxxxxx (Mike Ronny)</p>
      <p><strong>Wave Money:</strong> 09xxxxxxxxx</p>
      <p><strong>Amount:</strong> $7 (equivalent in MMK)</p>
      <p className="text-sm opacity-60">
        After payment, email screenshot to mikeronny18@gmail.com<br/>
        Access granted within 24 hours.
      </p>
    </div>
  </div>
)
```

## Supabase Access Table
```sql
create table product_access (
  id uuid primary key default gen_random_uuid(),
  user_email text not null,
  product_slug text not null,
  granted_at timestamptz default now(),
  granted_by text default 'admin'
);
```

## Digital Delivery Options
- **PDF/ZIP**: Supabase Storage → presigned URL (24h expiry)
- **Prompt kit**: Unlock page after access confirmed
- **Template**: Copy-paste code reveal after confirmation

## Pricing Psychology
- $2 = impulse (no friction)
- $5 = sweet spot for Myanmar market
- $7 = "feels premium but affordable"
- $10 = max for digital download without strong brand
