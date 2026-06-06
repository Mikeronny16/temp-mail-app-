'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const linksEN = [['Menu', '#menu'], ['Drinks', '#signatures'], ['Gallery', '#gallery'], ['Location', '#location']]
const linksMY = [['မီနူး', '#menu'], ['အချိုရည်', '#signatures'], ['ဓာတ်ပုံ', '#gallery'], ['တည်နေရာ', '#location']]

export default function Nav({ lang, setLang }: { lang: 'en'|'my', setLang: (l: 'en'|'my') => void }) {
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
          background: scrolled ? 'rgba(245,239,224,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.3)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.3)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(28,17,8,0.06)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', boxShadow: '0 4px 12px var(--terra-glow)' }}>☕</div>
          <div>
            <span className="display" style={{ color: 'var(--terra)', fontSize: '1rem', fontWeight: 400, fontStyle: 'italic' }}>The Story Cafe</span>
            <span className="myanmar" style={{ color: 'var(--green)', fontSize: '0.62rem', display: 'block', lineHeight: 1.2 }}>ဇာတ်လမ်းကဖေး</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.15rem', alignItems: 'center' }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', fontSize: lang === 'my' ? '0.78rem' : '0.83rem', textDecoration: 'none', fontWeight: 500, padding: '0.4rem 0.85rem', borderRadius: '999px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--terra)'; e.currentTarget.style.background = 'var(--terra-pale)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
            >{label}</a>
          ))}

          {/* Lang toggle */}
          <button onClick={() => setLang(lang === 'en' ? 'my' : 'en')} style={{ marginLeft: '0.3rem', background: 'var(--green-pale)', border: '1px solid rgba(61,90,62,0.2)', color: 'var(--green)', padding: '0.38rem 0.85rem', borderRadius: '999px', cursor: 'pointer', fontSize: '0.78rem', fontWeight: 600, transition: 'all 0.2s' }}>
            {lang === 'en' ? 'မြန်မာ' : 'EN'}
          </button>

          <a href="#reserve" style={{ marginLeft: '0.4rem', background: 'var(--terra)', color: '#fff', padding: '0.45rem 1.2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem', boxShadow: '0 4px 14px var(--terra-glow)', transition: 'all 0.25s' }}>
            {lang === 'en' ? 'Reserve' : 'ဇယားမှာ'}
          </a>
        </div>

        <button onClick={() => setMenuOpen(o => !o)} className="mobile-burger"
          style={{ display: 'none', background: 'var(--terra-pale)', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '0.45rem 0.65rem', cursor: 'pointer', color: 'var(--terra)', fontSize: '1.1rem' }}
        >{menuOpen ? '✕' : '☰'}</button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}
            style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999, background: 'rgba(245,239,224,0.97)', backdropFilter: 'blur(20px)', borderBottom: '2px solid var(--terra)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className={lang === 'my' ? 'myanmar' : ''}
                style={{ color: 'var(--text)', fontSize: '1rem', textDecoration: 'none', fontWeight: 500, padding: '0.7rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-dim)' }}
              >{label}</a>
            ))}
            <button onClick={() => setLang(lang === 'en' ? 'my' : 'en')} style={{ background: 'var(--green-pale)', border: '1px solid rgba(61,90,62,0.2)', color: 'var(--green)', padding: '0.65rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, textAlign: 'left' }}>
              {lang === 'en' ? '🌐 မြန်မာဘာသာသို့ ပြောင်းရန်' : '🌐 Switch to English'}
            </button>
            <a href="#reserve" onClick={() => setMenuOpen(false)}
              style={{ marginTop: '0.25rem', background: 'var(--terra)', color: '#fff', padding: '0.85rem 1rem', borderRadius: '0.65rem', textDecoration: 'none', fontWeight: 700, textAlign: 'center', fontSize: '0.9rem' }}
            >{lang === 'en' ? 'Reserve a Table' : 'စားပွဲမှာပါ'}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
