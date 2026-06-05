# Skill: scroll-video

Scroll-scrubbed video hero + muted autoplay loop. No frame sequence needed.

## Hero — Muted Autoplay Loop
```tsx
// Simple ambient video background
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
>
  <source src="/hero.mp4" type="video/mp4" />
</video>
```

## Scroll-Scrubbed Video (currentTime)
```tsx
'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function ScrollVideo({ src, heightVh = 400 }: { src: string; heightVh?: number }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Wait for metadata so duration is known
    const init = () => {
      const state = { t: 0 }
      const tween = gsap.to(state, {
        t: video.duration,
        ease: 'none',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: stickyRef.current,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
        onUpdate: () => { video.currentTime = state.t },
      })
      return () => { tween.scrollTrigger?.kill(); tween.kill() }
    }

    if (video.readyState >= 1) return init()
    video.addEventListener('loadedmetadata', init, { once: true })
  }, [src])

  return (
    <section ref={trackRef} style={{ height: `${heightVh}vh`, position: 'relative' }}>
      <div ref={stickyRef} style={{ position: 'sticky', top: 0, height: '100svh', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </section>
  )
}
```

## CSS Scroll-Snap Rooms
```tsx
// Full-screen room sections that snap
<div style={{ height: '100svh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
  {rooms.map(room => (
    <section key={room.id} style={{
      height: '100svh',
      scrollSnapAlign: 'start',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <img src={room.image} alt={room.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,4rem)' }}>
          {room.name}
        </h2>
      </div>
    </section>
  ))}
</div>
```

## Poster Fallback (Myanmar mobile)
```tsx
// prefers-reduced-motion or slow connection → static poster
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const conn = (navigator as any).connection
const slow = conn?.saveData || conn?.effectiveType === '2g'

if (prefersReduced || slow) {
  // show <img src="/poster.webp"> instead of video
}
```

## Video Optimization
- Format: MP4 H.264 (widest support) + WebM fallback
- Resolution: 1920×1080 max, compress to ≤20MB for scrub
- Ambient loop: can be low-res 720p, ≤5MB
- Tool: `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow output.mp4`
