# Skill: server-actions

Next.js 16 App Router server actions — forms, mutations, optimistic UI.

## Basic Server Action
```tsx
// app/actions.ts
'use server'
import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export async function submitForm(formData: FormData) {
  const content = formData.get('content')?.toString().trim()
  if (!content) return { error: 'Content required' }
  if (content.length > 500) return { error: 'Too long' }

  const { error } = await supabase.from('messages').insert({ content })
  if (error) return { error: 'Failed to save' }

  revalidatePath('/')  // refresh page data
  return { success: true }
}
```

## Form with useActionState
```tsx
'use client'
import { useActionState } from 'react'
import { submitForm } from '@/app/actions'

export function MessageForm() {
  const [state, action, pending] = useActionState(submitForm, null)

  return (
    <form action={action}>
      <textarea name="content" maxLength={500} required
        style={{ width: '100%', background: 'var(--glass)', color: 'var(--text)',
          border: '1px solid var(--glass-border)', borderRadius: '0.75rem', padding: '0.75rem' }} />
      
      {state?.error && (
        <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '0.5rem' }}>{state.error}</p>
      )}
      {state?.success && (
        <p style={{ color: '#06b6d4', fontSize: '14px', marginTop: '0.5rem' }}>Sent ✓</p>
      )}
      
      <button type="submit" disabled={pending}
        style={{ marginTop: '0.75rem', background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
          color: '#fff', border: 'none', borderRadius: '0.75rem',
          padding: '0.75rem 1.5rem', cursor: pending ? 'not-allowed' : 'pointer',
          opacity: pending ? 0.6 : 1 }}>
        {pending ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}
```

## Server Action with Auth
```tsx
'use server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export async function protectedAction(data: { text: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not logged in' }

  // proceed with user.id
}
```

## Optimistic Update
```tsx
'use client'
import { useOptimistic, useTransition } from 'react'

export function MessageList({ initial }: { initial: Message[] }) {
  const [optimisticMsgs, addOptimistic] = useOptimistic(
    initial,
    (state, newMsg: Message) => [newMsg, ...state]
  )
  const [, startTransition] = useTransition()

  async function handleSend(text: string) {
    const tempMsg = { id: crypto.randomUUID(), content: text, created_at: new Date().toISOString() }
    startTransition(async () => {
      addOptimistic(tempMsg)
      await submitMessage(text)  // server action
    })
  }

  return <div>{optimisticMsgs.map(m => <div key={m.id}>{m.content}</div>)}</div>
}
```

## Rules
- `'use server'` at top of file or function
- Always validate input server-side (never trust client)
- `export const dynamic = 'force-dynamic'` NOT needed for server actions (they're always dynamic)
- Use `revalidatePath()` or `revalidateTag()` to refresh stale data
