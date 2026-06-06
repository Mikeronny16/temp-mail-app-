'use client'
import { useState } from 'react'
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

export default function Home() {
  const [done, setDone] = useState(false)
  return (
    <>
      {!done && <Intro onDone={() => setDone(true)} />}
      <main style={{ opacity: done ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Nav />
        <Hero />
        <Marquee />
        <Signatures />
        <Menu />
        <Gallery />
        <Reservation />
        <Location />
        <Footer />
      </main>
    </>
  )
}
