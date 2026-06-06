'use client'
<<<<<<< HEAD
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
=======
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [['Menu', '#menu'], ['Signatures', '#signatures'], ['Gallery', '#gallery'], ['Location', '#location']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
>>>>>>> claude/jolly-turing-c3LGh
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
<<<<<<< HEAD
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
=======
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 1.5rem', height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          backdropFilter: scrolled ? 'blur(24px) brightness(0.82) saturate(1.4)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) brightness(0.82) saturate(1.4)' : 'blur(0px)',
          background: scrolled ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(201,168,76,0.04) 100%)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, rgba(201,168,76,0.85), rgba(120,85,20,0.6))',
            border: '1px solid rgba(201,168,76,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.9rem', boxShadow: '0 0 20px rgba(201,168,76,0.2)',
          }}>☕</div>
          <span className="display" style={{ color: 'var(--gold)', fontSize: '1rem', fontWeight: 700, fontStyle: 'italic' }}>Coffee Culture</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} style={{
              color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none',
              letterSpacing: '0.05em', padding: '0.4rem 0.85rem', borderRadius: '999px',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,168,76,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
            >{label}</a>
          ))}
          <a href="#reserve" style={{
            marginLeft: '0.5rem',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.92), rgba(232,201,106,0.75))',
            color: '#07120A', padding: '0.42rem 1.2rem', borderRadius: '999px',
            textDecoration: 'none', fontWeight: 700, fontSize: '0.8rem',
            boxShadow: '0 4px 16px rgba(201,168,76,0.22)', transition: 'all 0.25s',
          }}>Reserve</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '0.5rem', padding: '0.5rem 0.65rem', cursor: 'pointer',
            color: 'var(--text)', fontSize: '1.1rem',
          }}
          className="mobile-burger"
        >{menuOpen ? '✕' : '☰'}</button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 999,
              backdropFilter: 'blur(24px) brightness(0.8)',
              WebkitBackdropFilter: 'blur(24px) brightness(0.8)',
              background: 'rgba(7,14,10,0.96)',
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}
          >
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
                color: 'var(--text-muted)', fontSize: '1rem', textDecoration: 'none',
                padding: '0.75rem 1rem', borderRadius: '0.65rem',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s',
              }}>{label}</a>
            ))}
            <a href="#reserve" onClick={() => setMenuOpen(false)} style={{
              marginTop: '0.5rem',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: '#07120A', padding: '0.85rem 1rem', borderRadius: '0.75rem',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center',
            }}>Reserve a Table</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 600px) {
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </>
>>>>>>> claude/jolly-turing-c3LGh
  )
}
