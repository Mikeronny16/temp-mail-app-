'use client'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Signatures from '@/components/Signatures'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Reservation from '@/components/Reservation'
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
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
    </main>
  )
}
