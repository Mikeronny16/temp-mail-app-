'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 4rem 4rem 5rem', background: 'var(--bg)' }}>
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--green)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Fresh · Seasonal · Modern
        </motion.span>
        <motion.h1 className="display" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Where Fresh<br /><em style={{ color: 'var(--green)', fontStyle: 'italic' }}>Meets Flavor</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          A modern dining experience built around seasonal ingredients, bold flavors, and the joy of eating well.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#reserve" style={{ background: 'var(--green)', color: '#fff', padding: '0.875rem 2rem', borderRadius: '999px', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}>Reserve a Table →</a>
          <a href="#menu" style={{ color: 'var(--text)', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: '2px' }}>View Menu</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          {[{ n: '8+', label: 'Years of craft' }, { n: '120+', label: 'Seasonal dishes' }, { n: '4.9', label: 'Guest rating' }].map(s => (
            <div key={s.label}>
              <div className="display" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--green)' }}>{s.n}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1 }}
        style={{ position: 'relative', background: 'linear-gradient(135deg, #8AAE8D 0%, #5C7A5F 50%, #3D5940 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80") center/cover no-repeat', opacity: 0.85 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(92,122,95,0.3) 0%, transparent 60%)' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          style={{ position: 'absolute', bottom: '3rem', left: '2rem', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderRadius: '1rem', padding: '1.25rem 1.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Today&apos;s Special</div>
          <div className="display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>Herb Roasted Salmon</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--green)', marginTop: '0.25rem', fontWeight: 500 }}>$24 · Available now</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
