'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1.25rem 4rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(12,26,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.5s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>CC</span>
        </div>
        <span className="display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '0.04em' }}>Coffee Culture</span>
      </div>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {[['Menu', '#menu'], ['Signatures', '#signatures'], ['Location', '#location']].map(([label, href]) => (
          <a key={label} href={href} style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >{label}</a>
        ))}
        <a href="tel:+959773542924" style={{ border: '1px solid var(--border)', color: 'var(--gold)', padding: '0.5rem 1.25rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.25s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#0C1A14' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
        >Call Now</a>
      </div>
    </motion.nav>
  )
}
