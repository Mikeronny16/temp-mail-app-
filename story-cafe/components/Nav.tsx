'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [['Menu', '#menu'], ['Drinks', '#drinks'], ['Gallery', '#gallery'], ['Location', '#location']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 2rem', height: 62,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(250,250,247,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(35,80,204,0.10)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 24px rgba(20,20,20,0.07)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', boxShadow: '0 4px 12px rgba(35,80,204,0.3)' }}>📖</div>
          <div>
            <span className="display" style={{ color: 'var(--blue)', fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.02em' }}>The STORY</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', display: 'block', lineHeight: 1, letterSpacing: '0.08em' }}>CAFE</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'var(--text-muted)', fontSize: '0.83rem', textDecoration: 'none', fontWeight: 500, padding: '0.4rem 0.9rem', borderRadius: '999px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.background = 'var(--blue-pale)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
            >{label}</a>
          ))}
          <a href="#reserve" style={{ marginLeft: '0.5rem', background: 'var(--blue)', color: '#fff', padding: '0.45rem 1.25rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem', boxShadow: '0 4px 14px rgba(35,80,204,0.3)', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Reserve</a>
        </div>

        <button onClick={() => setMenuOpen(o => !o)}
          className="mobile-burger"
          style={{ display: 'none', background: 'var(--blue-pale)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.45rem 0.65rem', cursor: 'pointer', color: 'var(--blue)', fontSize: '1.1rem' }}
        >{menuOpen ? '✕' : '☰'}</button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.2 }}
            style={{ position: 'fixed', top: 62, left: 0, right: 0, zIndex: 999, background: 'rgba(250,250,247,0.97)', backdropFilter: 'blur(20px)', borderBottom: '2px solid var(--blue)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
          >
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                style={{ color: 'var(--text)', fontSize: '1rem', textDecoration: 'none', fontWeight: 500, padding: '0.7rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-dim)' }}
              >{label}</a>
            ))}
            <a href="#reserve" onClick={() => setMenuOpen(false)}
              style={{ marginTop: '0.4rem', background: 'var(--blue)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '0.65rem', textDecoration: 'none', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}
            >Reserve a Table</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
