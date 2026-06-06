'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const drinks = [
  { name: 'Ex Girlfriend', price: '10,000 MMK', desc: 'Pineapple, orange & mango — you will know this ex tastes better!', img: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&q=80', tag: 'Signature', badge: 'Most Talked' },
  { name: 'Sooper Strawberry', price: '8,000 MMK', desc: 'Perfect matching of strawberry & mint leaves. Fresh and bold.', img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&q=80', tag: 'Signature', badge: 'Fan Fave' },
  { name: 'Still Old Gin', price: '8,000 MMK', desc: 'Not the gin you used to know — only available at STORY. Must try.', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80', tag: 'Exclusive', badge: 'Must Try' },
]

export default function Signatures() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="drinks" ref={ref} className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <div style={{ height: '2px', width: 32, background: 'var(--blue)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Signature Drinks</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Only at <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>STORY</em>
          </h2>
        </motion.div>

        <div className="sig-grid">
          {drinks.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(20,20,20,0.14)' }}
              style={{ background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '1.5rem', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 20px rgba(20,20,20,0.07)', transition: 'all 0.3s' }}
            >
              <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("${d.img}") center/cover`, transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.45) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--blue)', color: '#fff', padding: '0.28rem 0.75rem', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', boxShadow: '0 4px 12px rgba(35,80,204,0.4)' }}>{d.badge}</div>
              </div>
              <div style={{ padding: '1.4rem' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>{d.tag}</div>
                <h3 className="display" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.45rem' }}>{d.name}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.1rem' }}>{d.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.9rem', borderTop: '1px solid var(--border-dim)' }}>
                  <span className="display" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--warm)' }}>{d.price}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', background: 'var(--surface)', padding: '0.22rem 0.65rem', borderRadius: '999px', border: '1px solid var(--border-dim)' }}>Iced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
