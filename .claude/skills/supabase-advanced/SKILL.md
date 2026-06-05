# Skill: supabase-advanced

Supabase RLS, Realtime, Storage, Edge Functions — advanced patterns.

## Realtime (live updates)
```tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useRealtimeMessages(recipientId: string) {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    // Initial load
    supabase.from('messages')
      .select('*')
      .eq('recipient_id', recipientId)
      .order('created_at', { ascending: false })
      .then(({ data }) => setMessages(data ?? []))

    // Subscribe to new messages
    const channel = supabase
      .channel('messages-realtime')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `recipient_id=eq.${recipientId}`,
      }, (payload) => {
        setMessages(prev => [payload.new as Message, ...prev])
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [recipientId])

  return messages
}
```

## Storage (file upload)
```tsx
// Upload file
async function uploadFile(file: File, userId: string) {
  const ext = file.name.split('.').pop()
  const path = `${userId}/${Date.now()}.${ext}`
  
  const { error } = await supabase.storage
    .from('uploads')  // bucket name
    .upload(path, file, { upsert: true })
  
  if (error) throw error
  
  // Get public URL
  const { data } = supabase.storage.from('uploads').getPublicUrl(path)
  return data.publicUrl
}

// Presigned URL (private files — 24hr expiry)
const { data } = await supabase.storage
  .from('products')
  .createSignedUrl('path/to/file.pdf', 86400)  // 86400s = 24h
```

## Auth helpers (Next.js App Router)
```tsx
// lib/supabase-server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function getSupabaseServer() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )
}

// Usage in Server Component
const supabase = await getSupabaseServer()
const { data: { user } } = await supabase.auth.getUser()
```

## Row Count (for live counters)
```tsx
const { count } = await supabase
  .from('users')
  .select('*', { count: 'exact', head: true })
```

## Bulk Insert
```tsx
const rows = items.map(item => ({ user_id: userId, content: item }))
const { error } = await supabase.from('items').insert(rows)
```

## Pagination
```tsx
const PAGE = 20
const { data } = await supabase
  .from('messages')
  .select('*')
  .order('created_at', { ascending: false })
  .range(page * PAGE, (page + 1) * PAGE - 1)
```
