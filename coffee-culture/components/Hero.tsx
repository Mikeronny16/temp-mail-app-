'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', padding: '0 1.5rem', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: `url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&q=85") center/cover no-repeat`, filter: 'brightness(0.20) saturate(0.7)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 70% 80% at 60% 50%, transparent 30%, rgba(7,14,10,0.88) 80%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, width: '100%', margin: '0 auto', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="hero-grid">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ height: '1px', width: 36, background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase' }}>Yangon · Est. 2021</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="display"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Everyone<br />Deserves<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Love &amp; Coffee</em>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 400, marginBottom: '2rem' }}>
              Specialty coffee, handcrafted signatures, and fresh food — served with warmth in the heart of Yangon.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a href="#menu" style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: '#07120A', padding: '0.85rem 1.75rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 4px 24px rgba(201,168,76,0.3)' }}>Explore Menu</a>
              <a href="#reserve" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text)', padding: '0.85rem 1.75rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem' }}>Reserve a Table</a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: 300, position: 'relative', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80") center/cover` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,14,10,0.65) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.08))', border: '1px solid rgba(201,168,76,0.32)', borderRadius: '999px', padding: '0.3rem 0.9rem', fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600 }}>✦ Best in Yangon</div>
            </div>

            <div className="stats-grid">
              {[{ value: '15K+', label: 'Followers' }, { value: '50+', label: 'Drinks' }, { value: '5★', label: 'Reviews' }].map(stat => (
                <div key={stat.label} style={{ backdropFilter: 'blur(20px) brightness(1.06)', WebkitBackdropFilter: 'blur(20px) brightness(1.06)', background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(201,168,76,0.04))', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '1rem', padding: '0.85rem 0.5rem', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)' }}>
                  <div className="display" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.15rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ backdropFilter: 'blur(20px) brightness(1.08)', WebkitBackdropFilter: 'blur(20px) brightness(1.08)', background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(255,255,255,0.04))', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '1rem', padding: '0.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.9rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.18)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '0.65rem', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(201,168,76,0.2)' }}>
                <div style={{ width: '100%', height: '100%', background: `url("https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100&q=80") center/cover` }} />
              </div>
              <div>
                <div style={{ fontSize: '0.62rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Today's Special</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)', marginTop: '0.1rem' }}>Matcha Strawberry</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>15,000 MMK · Best Seller</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
