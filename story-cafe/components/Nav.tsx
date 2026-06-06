'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const linksEN = [['Menu', '#menu'], ['Drinks', '#signatures'], ['Gallery', '#gallery'], ['Location', '#location']]
const linksMY = [['မီနူး', '#menu'], ['အချိုရည်', '#signatures'], ['ဓာတ်ပုံ', '#gallery'], ['တည်နေရာ', '#location']]

export default function Nav({ lang, setLang }: { lang: 'en' | 'my', setLang: (l: 'en' | 'my') => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const links = lang === 'en' ? linksEN : linksMY

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
          padding: '0 2rem', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(26,79,196,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(26,79,196,0.3)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          {/* S-curve logo mark */}
          <svg width="28" height="46" viewBox="0 0 60 100" style={{ flexShrink: 0 }}>
            <path d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90"
              fill="none" stroke={scrolled ? '#F0B429' : '#1A4FC4'} strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div>
            <span className="display" style={{ color: scrolled ? '#FFFFFF' : 'var(--blue)', fontSize: '1rem', fontWeight: 400, fontStyle: 'italic' }}>The Story Cafe</span>
            <span className="myanmar" style={{ color: scrolled ? 'rgba(255,255,255,0.6)' : 'var(--teal)', fontSize: '0.6rem', display: 'block', lineHeight: 1.2 }}>ဇာတ်လမ်းကဖေး</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className={lang === 'my' ? 'myanmar' : ''}
              style={{ color: scrolled ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: lang === 'my' ? '0.78rem' : '0.83rem', textDecoration: 'none', fontWeight: 500, padding: '0.4rem 0.85rem', borderRadius: '999px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = scrolled ? '#fff' : 'var(--blue)'; e.currentTarget.style.background = scrolled ? 'rgba(255,255,255,0.15)' : 'var(--blue-pale)' }}
              onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
            >{label}</a>
          ))}

          {/* Lang toggle */}
          <button onClick={() => setLang(lang === 'en' ? 'my' : 'en')}
            style={{ marginLeft: '0.3rem', background: scrolled ? 'rgba(255,255,255,0.12)' : 'var(--teal-pale)', border: `1px solid ${scrolled ? 'rgba(255,255,255,0.2)' : 'rgba(63,170,188,0.25)'}`, color: scrolled ? '#fff' : 'var(--teal)', padding: '0.38rem 0.85rem', borderRadius: '999px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600 }}>
            {lang === 'en' ? 'မြန်မာ' : 'EN'}
          </button>

          <a href="#reserve"
            style={{ marginLeft: '0.4rem', background: 'var(--yellow)', color: '#0D1A2A', padding: '0.45rem 1.2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.82rem', boxShadow: '0 4px 14px rgba(240,180,41,0.35)' }}>
            {lang === 'en' ? 'Reserve' : 'ဇယားမှာ'}
          </a>
        </div>

        <button onClick={() => setMenuOpen(o => !o)} className="mobile-burger"
          style={{ display: 'none', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.5rem', padding: '0.45rem 0.65rem', cursor: 'pointer', color: '#fff', fontSize: '1.1rem' }}
        >{menuOpen ? '✕' : '☰'}</button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}
            style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999, background: 'rgba(26,79,196,0.97)', backdropFilter: 'blur(20px)', borderBottom: '2px solid rgba(240,180,41,0.4)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className={lang === 'my' ? 'myanmar' : ''}
                style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', textDecoration: 'none', fontWeight: 500, padding: '0.7rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)' }}
              >{label}</a>
            ))}
            <button onClick={() => setLang(lang === 'en' ? 'my' : 'en')} style={{ background: 'rgba(63,170,188,0.15)', border: '1px solid rgba(63,170,188,0.3)', color: 'var(--teal)', padding: '0.65rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, textAlign: 'left' }}>
              {lang === 'en' ? '🌐 မြန်မာဘာသာ' : '🌐 English'}
            </button>
            <a href="#reserve" onClick={() => setMenuOpen(false)}
              style={{ marginTop: '0.25rem', background: 'var(--yellow)', color: '#0D1A2A', padding: '0.85rem 1rem', borderRadius: '0.65rem', textDecoration: 'none', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}
            >{lang === 'en' ? 'Reserve a Table' : 'စားပွဲမှာပါ'}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
