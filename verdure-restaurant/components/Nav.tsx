'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.25rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(250,248,244,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <span className="display" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green)', letterSpacing: '-0.02em' }}>
        Verdure
      </span>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Menu', 'About', 'Gallery', 'Reserve'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)',
            textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
          >{item}</a>
        ))}
        <a href="#reserve" style={{
          background: 'var(--green)', color: '#fff',
          padding: '0.6rem 1.4rem', borderRadius: '999px',
          fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
        }}>Book a Table</a>
      </div>
    </motion.nav>
  )
}
