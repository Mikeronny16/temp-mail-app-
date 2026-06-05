'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '0 2.5rem',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&q=85") center/cover no-repeat`,
        filter: 'brightness(0.20) saturate(0.7)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 70% 80% at 60% 50%, transparent 30%, rgba(7,14,10,0.88) 80%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, width: '100%', margin: '0 auto', paddingTop: '6rem', paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ height: '1px', width: 36, background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase' }}>Yangon · Est. 2021</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="display"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              Everyone<br />Deserves<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Love &amp; Coffee</em>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 400, marginBottom: '2.5rem' }}>
              Specialty coffee, handcrafted signatures, and fresh food — served with warmth in the heart of Yangon.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#menu" style={{
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                color: '#07120A', padding: '0.9rem 2rem', borderRadius: '999px',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em',
                boxShadow: '0 4px 24px rgba(201,168,76,0.3)',
              }}>Explore Menu</a>
              <a href="#reserve" style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--text)', padding: '0.9rem 2rem', borderRadius: '999px',
                textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
              }}>Reserve a Table</a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

            {/* Photo */}
            <div style={{
              borderRadius: '1.5rem', overflow: 'hidden', height: 320, position: 'relative',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80") center/cover` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,14,10,0.65) 0%, transparent 55%)' }} />
              <div style={{
                position: 'absolute', top: '1rem', left: '1rem',
                backdropFilter: 'blur(16px) brightness(1.1)',
                WebkitBackdropFilter: 'blur(16px) brightness(1.1)',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.08))',
                border: '1px solid rgba(201,168,76,0.32)',
                borderRadius: '999px', padding: '0.35rem 0.9rem',
                fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.08em',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14)',
              }}>✦ Best in Yangon</div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[{ value: '15K+', label: 'Followers' }, { value: '50+', label: 'Drinks' }, { value: '5★', label: 'Reviews' }].map(stat => (
                <div key={stat.label} style={{
                  backdropFilter: 'blur(20px) brightness(1.06) saturate(1.2)',
                  WebkitBackdropFilter: 'blur(20px) brightness(1.06) saturate(1.2)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(201,168,76,0.04) 100%)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '1rem', padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.13)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)', borderRadius: '1rem 1rem 0 0', pointerEvents: 'none' }} />
                  <div className="display" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.15rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Today's special */}
            <div style={{
              backdropFilter: 'blur(20px) brightness(1.08) saturate(1.3)',
              WebkitBackdropFilter: 'blur(20px) brightness(1.08) saturate(1.3)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(255,255,255,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.22)',
              borderRadius: '1rem', padding: '1rem 1.25rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.18)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(201,168,76,0.05) 0%, transparent 100%)', pointerEvents: 'none', borderRadius: '1rem 1rem 0 0' }} />
              <div style={{ width: 48, height: 48, borderRadius: '0.75rem', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(201,168,76,0.2)' }}>
                <div style={{ width: '100%', height: '100%', background: `url("https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=100&q=80") center/cover` }} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Today's Special</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginTop: '0.15rem' }}>Matcha Strawberry</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>15,000 MMK · Best Seller</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
