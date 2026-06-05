# Skill: groq-ai

Groq API streaming completions + function calling. Free tier, fast inference.

## Setup
```bash
npm install groq-sdk
```
```env
GROQ_API_KEY=gsk_...
```

## Model IDs (Mike's stack)
```
llama-3.3-70b-versatile   ← default (best quality, free tier)
llama-3.1-8b-instant      ← fastest (simple tasks)
mixtral-8x7b-32768        ← long context (32k tokens)
```

## Basic Completion
```tsx
// lib/groq.ts
import Groq from 'groq-sdk'

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function generate(prompt: string, system?: string) {
  const res = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      ...(system ? [{ role: 'system' as const, content: system }] : []),
      { role: 'user', content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 1024,
  })
  return res.choices[0].message.content ?? ''
}
```

## Streaming (App Router)
```tsx
// app/api/generate/route.ts
import { groq } from '@/lib/groq'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  
  const stream = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    stream: true,
    max_tokens: 1024,
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? ''
        if (text) controller.enqueue(encoder.encode(text))
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
```

## Client-side Streaming Reader
```tsx
'use client'
async function streamGenerate(prompt: string, onChunk: (t: string) => void) {
  const res = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })
  const reader = res.body!.getReader()
  const decoder = new TextDecoder()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    onChunk(decoder.decode(value))
  }
}
```

## Credit Deduction Pattern
```tsx
// Before generate: check + deduct credits
const { data: user } = await supabase
  .from('user_credits')
  .select('credits')
  .eq('user_id', userId)
  .single()

if (!user || user.credits < 1) {
  return Response.json({ error: 'No credits' }, { status: 402 })
}

await supabase
  .from('user_credits')
  .update({ credits: user.credits - 1 })
  .eq('user_id', userId)

// Then call Groq
```

## Rate Limit Info (free tier)
- 30 requests/minute
- 14,400 requests/day  
- llama-3.3-70b: 6,000 tokens/minute
