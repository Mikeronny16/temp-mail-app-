'use client'
import { useState, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Signatures from '@/components/Signatures'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Reservation from '@/components/Reservation'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'

const Intro = dynamic(() => import('@/components/Intro'), { ssr: false })
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })

export default function Page() {
  const [lang, setLang] = useState<'en' | 'my'>('en')
  const [showMain, setShowMain] = useState(false)
  const handleDone = useCallback(() => setShowMain(true), [])

  // Lenis smooth scroll
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null
    let rafId: number

    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
      function raf(time: number) {
        lenis!.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      <Intro onDone={handleDone} />
      {showMain && (
        <main>
          <Nav lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Marquee />
          <Signatures lang={lang} />
          <Menu lang={lang} />
          <Gallery lang={lang} />
          <Reservation lang={lang} />
          <Location lang={lang} />
          <Footer lang={lang} />
          <StickyBar lang={lang} />
        </main>
      )}
    </>
  )
}
