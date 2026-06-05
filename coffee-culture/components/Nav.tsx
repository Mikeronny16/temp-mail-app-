'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [['Menu', '#menu'], ['Signatures', '#signatures'], ['Gallery', '#gallery'], ['Location', '#location']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 2.5rem',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        backdropFilter: scrolled ? 'blur(24px) brightness(0.82) saturate(1.4)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(24px) brightness(0.82) saturate(1.4)' : 'blur(0px)',
        background: scrolled
          ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(201,168,76,0.04) 100%)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10)' : 'none',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(201,168,76,0.85), rgba(120,85,20,0.6))',
          border: '1px solid rgba(201,168,76,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.95rem',
          boxShadow: '0 0 20px rgba(201,168,76,0.2)',
        }}>☕</div>
        <span className="display" style={{ color: 'var(--gold)', fontSize: '1.05rem', fontWeight: 700, fontStyle: 'italic' }}>
          Coffee Culture
        </span>
      </a>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }}>
        {links.map(([label, href]) => (
          <a key={label} href={href} style={{
            color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none',
            letterSpacing: '0.05em', padding: '0.4rem 0.85rem', borderRadius: '999px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--gold)'
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-muted)'
              e.currentTarget.style.background = 'transparent'
            }}
          >{label}</a>
        ))}
        <a href="#reserve" style={{
          marginLeft: '0.5rem',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.92), rgba(232,201,106,0.75))',
          color: '#07120A', padding: '0.45rem 1.25rem', borderRadius: '999px',
          textDecoration: 'none', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.04em',
          boxShadow: '0 4px 16px rgba(201,168,76,0.22)',
          transition: 'all 0.25s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,168,76,0.22)' }}
        >Reserve</a>
      </div>
    </motion.nav>
  )
}
