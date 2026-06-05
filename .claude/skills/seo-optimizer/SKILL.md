# Skill: seo-optimizer

Complete SEO — meta, Open Graph, Twitter cards, structured data, sitemap.

## Next.js 16 Metadata (app/layout.tsx)

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Site Name — Tagline',
    template: '%s | Site Name',
  },
  description: 'Clear description under 160 chars. Include main keyword.',
  keywords: ['keyword1', 'keyword2', 'myanmar'],
  authors: [{ name: 'Mike Ronny' }],
  
  openGraph: {
    type: 'website',
    url: 'https://yoursite.vercel.app',
    title: 'Site Name — Tagline',
    description: 'Same or slightly different from meta description.',
    images: [{
      url: '/og-image.png',  // 1200×630px
      width: 1200,
      height: 630,
      alt: 'Site Name preview',
    }],
    siteName: 'Site Name',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Site Name — Tagline',
    description: 'Under 200 chars.',
    images: ['/og-image.png'],
    creator: '@mikeronny',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  
  metadataBase: new URL('https://yoursite.vercel.app'),
}
```

## Dynamic Page Metadata
```tsx
// app/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params
  const item = await getItem(slug)
  
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      images: [item.imageUrl || '/og-image.png'],
    },
  }
}
```

## OG Image (1200×630) — Quick Template
```tsx
// app/og/route.tsx  (Vercel Edge)
import { ImageResponse } from 'next/og'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Default Title'
  
  return new ImageResponse(
    <div style={{
      background: '#040d1a',
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: '#f0f9ff', fontFamily: 'sans-serif',
    }}>
      <div style={{ fontSize: 60, fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 24, color: '#06b6d4', marginTop: 20 }}>
        yoursite.vercel.app
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
```

## Sitemap
```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yoursite.vercel.app', lastModified: new Date() },
    { url: 'https://yoursite.vercel.app/about', lastModified: new Date() },
  ]
}
```

## Myanmar SEO Tips
- Include both English + Burmese keywords in meta description
- "Myanmar" keyword in title if targeting local
- Facebook share preview (OG) matters more than Google for Myanmar audience
