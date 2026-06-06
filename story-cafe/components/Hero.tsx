'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', padding: '0 2rem', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* Blue accent blob top-right */}
      <div style={{ position: 'absolute', top: -120, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,80,204,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,134,74,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, width: '100%', margin: '0 auto', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="hero-grid">

          {/* Left — text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'var(--blue-pale)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', display: 'inline-block' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--blue)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>South Okkalapa · Yangon</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
              className="display"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'var(--text)' }}>
              Write your<br />
              <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>STORY</em><br />
              over a Coffee.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
              style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 420, marginBottom: '2.5rem' }}>
              A cozy corner in South Okkalapa where every cup tells a story. Great food, signature drinks, and a place to simply be.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
              style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a href="#menu" style={{ background: 'var(--blue)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 6px 20px rgba(35,80,204,0.32)', transition: 'all 0.2s' }}>See the Menu</a>
              <a href="#reserve" style={{ background: 'var(--surface)', color: 'var(--text)', padding: '0.9rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 500, fontSize: '0.875rem', border: '1px solid var(--border-dim)' }}>Reserve a Table</a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-dim)' }}>
              {[{ v: '35K+', l: 'Followers' }, { v: '96%', l: 'Recommend' }, { v: '881', l: 'Posts' }].map(s => (
                <div key={s.l}>
                  <div className="display" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.03em' }}>{s.v}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo stack */}
          <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.12 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>

            {/* Main image */}
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: 380, position: 'relative', boxShadow: '0 24px 60px rgba(20,20,20,0.14), 0 2px 8px rgba(20,20,20,0.06)' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85") center/cover` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.35) 0%, transparent 55%)' }} />
              {/* Blue tag */}
              <div style={{ position: 'absolute', top: '1.1rem', left: '1.1rem', background: 'var(--blue)', color: '#fff', borderRadius: '999px', padding: '0.3rem 0.85rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', boxShadow: '0 4px 12px rgba(35,80,204,0.35)' }}>
                ✦ 35K Community
              </div>
            </div>

            {/* Two smaller cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', height: 150, position: 'relative', boxShadow: '0 8px 24px rgba(20,20,20,0.10)' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80") center/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '0.7rem', left: '0.8rem', fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>Specialty Coffee</div>
              </div>
              <div style={{ borderRadius: '1rem', overflow: 'hidden', height: 150, position: 'relative', boxShadow: '0 8px 24px rgba(20,20,20,0.10)' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80") center/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.5) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '0.7rem', left: '0.8rem', fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>Homemade Food</div>
              </div>
            </div>

            {/* Float badge */}
            <div style={{ background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '1rem', padding: '0.9rem 1.1rem', display: 'flex', gap: '0.8rem', alignItems: 'center', boxShadow: '0 8px 28px rgba(20,20,20,0.09)' }}>
              <div style={{ width: 42, height: 42, borderRadius: '0.6rem', background: 'var(--blue-pale)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>🍟</div>
              <div>
                <div style={{ fontSize: '0.62rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Must Order</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>French Fries (Homemade)</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>10,000 MMK · Classic / Spicy / Cheesy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
