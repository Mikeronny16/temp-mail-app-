'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Signatures from '@/components/Signatures'
import Menu from '@/components/Menu'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Signatures />
      <Menu />
      <Location />
      <Footer />
    </main>
  )
}
