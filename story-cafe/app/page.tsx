'use client'
import { useState, useCallback } from 'react'
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

const Intro = dynamic(() => import('@/components/Intro'), { ssr: false })

export default function Page() {
  const [lang, setLang] = useState<'en' | 'my'>('en')
  const [showMain, setShowMain] = useState(false)
  const handleDone = useCallback(() => setShowMain(true), [])

  return (
    <>
      <Intro onDone={handleDone} />
      {showMain && (
        <main style={{ opacity: 1, transition: 'opacity 0.5s' }}>
          <Nav lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Marquee />
          <Signatures lang={lang} />
          <Menu lang={lang} />
          <Gallery lang={lang} />
          <Reservation lang={lang} />
          <Location lang={lang} />
          <Footer lang={lang} />
        </main>
      )}
    </>
  )
}
