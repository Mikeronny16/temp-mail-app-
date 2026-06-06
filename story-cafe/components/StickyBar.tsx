'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StickyBar({ lang }: { lang: 'en' | 'my' }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 350)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 30 }}
          className="sticky-bar"
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 800,
            padding: '0.7rem 1.1rem',
            paddingBottom: 'calc(0.7rem + env(safe-area-inset-bottom, 0px))',
            background: 'rgba(250,250,248,0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            display: 'flex', gap: '0.6rem',
          }}
        >
          <a
            href="https://www.facebook.com/thestorycafe.88"
            target="_blank" rel="noopener noreferrer"
            className={`btn-haptic ${lang === 'my' ? 'myanmar' : ''}`}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', background: '#1877F2', color: '#fff', padding: '0.7rem', borderRadius: '0.7rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem' }}
          >
            📘 {lang === 'en' ? 'Message Us' : 'မက်ဆေ့ပို့'}
          </a>
          <a
            href="#reserve"
            className={`btn-haptic ${lang === 'my' ? 'myanmar' : ''}`}
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', background: 'var(--blue)', color: '#fff', padding: '0.7rem', borderRadius: '0.7rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem' }}
          >
            🪑 {lang === 'en' ? 'Reserve' : 'ဇယားမှာ'}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
