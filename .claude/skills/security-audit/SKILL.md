# Skill: security-audit

Next.js 16 + Supabase security — auth, SQL injection, XSS, exposed keys.

## Pre-Deploy Checklist

### Environment Variables
- [ ] No API keys in client-side code (`NEXT_PUBLIC_` prefix = visible to browser)
- [ ] Supabase anon key in `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe (RLS protects data)
- [ ] Service role key NEVER in frontend — server-only
- [ ] `.env.local` in `.gitignore`
- [ ] Check: `grep -r "sk-" . --include="*.ts"` (find exposed secret keys)

### API Routes
```tsx
// Every API route needs auth check
export async function POST(req: Request) {
  const session = await getServerSession()  // or Supabase auth
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  
  // Never trust client-provided user IDs
  const userId = session.user.id  // from server session, not request body
}
```

### SQL Injection (Supabase)
```tsx
// SAFE — parameterized (Supabase client always does this)
const { data } = await supabase
  .from('messages')
  .select('*')
  .eq('user_id', userId)  // ✓ safe

// NEVER raw SQL with user input
// await supabase.rpc('raw_query', { sql: userInput })  // ✗ dangerous
```

### XSS Prevention
```tsx
// NEVER dangerouslySetInnerHTML with user content
// ✗ <div dangerouslySetInnerHTML={{ __html: userMessage }} />

// SAFE — React escapes by default
// ✓ <div>{userMessage}</div>

// If HTML needed — use DOMPurify
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
```

### Admin Routes
```tsx
// Protect admin pages
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
if (req.query.pwd !== ADMIN_PASSWORD) {
  return Response.json({ error: 'Forbidden' }, { status: 403 })
}
// Better: use a constant-time compare to prevent timing attacks
import { timingSafeEqual } from 'crypto'
```

### Rate Limiting (prevent abuse)
```tsx
// Simple IP-based rate limit for AI routes
const rateLimitMap = new Map<string, { count: number; reset: number }>()

export function rateLimit(ip: string, max = 10, windowMs = 60000) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + windowMs })
    return true
  }
  if (entry.count >= max) return false
  entry.count++
  return true
}
```

### Input Validation
```tsx
// Always validate + sanitize user input length
const content = body.content?.toString().trim().slice(0, 500)
if (!content) return Response.json({ error: 'Empty' }, { status: 400 })
```

## Quick Scan Commands
```bash
# Find hardcoded secrets
grep -r "sk_live\|sk_test\|secret_key\|password.*=" . --include="*.ts" --include="*.tsx" -l

# Find dangerouslySetInnerHTML
grep -r "dangerouslySetInnerHTML" . --include="*.tsx"

# Find eval usage
grep -r "eval(" . --include="*.ts" --include="*.tsx"
```
