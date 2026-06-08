'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 4rem 6rem', position: 'relative' }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.1 }}
          style={{ height: '1px', background: 'var(--gold)', width: 60, marginBottom: '2rem', transformOrigin: 'left' }} />
        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Yangon · Upper Pazundaung Rd
        </motion.span>
        <motion.h1 className="display" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Everyone<br />Deserves<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Love &amp; Coffee</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          Specialty coffee, handcrafted signatures, and fresh food — crafted for those who believe every cup tells a story.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#menu" style={{ background: 'var(--gold)', color: '#0C1A14', padding: '0.9rem 2.25rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>View Menu</a>
          <a href="#location" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}>Find Us →</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-dim)' }}>
          {[{ n: '15K+', label: 'Coffee lovers' }, { n: '50+', label: 'Drinks menu' }, { n: '5★', label: '100% Reviews' }].map(s => (
            <div key={s.label}>
              <div className="display" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--gold)' }}>{s.n}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.15 }}
        style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80") center/cover no-repeat' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 0%, rgba(12,26,20,0.4) 30%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, transparent 40%)' }} />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
          style={{ position: 'absolute', bottom: '3.5rem', right: '3rem', background: 'rgba(19,34,25,0.92)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '1.25rem 1.5rem', minWidth: 200 }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Today&apos;s Special</div>
          <div className="display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>Matcha Strawberry</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--gold)', marginTop: '0.25rem' }}>15,000 MMK · Iced</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
