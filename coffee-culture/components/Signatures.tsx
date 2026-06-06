'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const drinks = [
  { name: 'Matcha Strawberry', tag: 'Signature', price: '15,000 MMK', desc: 'House matcha, fresh strawberry, milk foam', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', badge: 'Best Seller' },
  { name: 'Ocean Taste', tag: 'Signature', price: '8,000 MMK', desc: 'Blue butterfly pea, citrus, sparkling finish', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80', badge: 'Fan Favourite' },
  { name: 'Hand Drip V60', tag: 'Specialty', price: '10,000 MMK', desc: 'Single origin beans, slow pour, pure clarity', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80', badge: "Chef's Pick" },
]

export default function Signatures() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
<<<<<<< HEAD
  return (
    <section id="signatures" ref={ref} style={{ padding: '7rem 6rem', background: 'var(--bg)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Crafted with Care</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Our Signature <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Creations</em></h2>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {drinks.map((d, i) => (
          <motion.div key={d.name} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }} whileHover={{ y: -6 }}
            style={{ border: '1px solid var(--border)', borderRadius: '1.25rem', overflow: 'hidden', background: 'var(--surface)', cursor: 'pointer' }}>
            <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: `url("${d.img}") center/cover` }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--gold)', color: '#0C1A14', padding: '0.3rem 0.75rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700 }}>{d.badge}</div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{d.tag}</div>
              <h3 className="display" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{d.name}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{d.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-dim)' }}>
                <span className="display" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--gold)' }}>{d.price}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hot / Iced</span>
              </div>
            </div>
          </motion.div>
        ))}
=======

  return (
    <section id="signatures" ref={ref} className="section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Crafted with Care</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}>
            Our Signature <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Creations</em>
          </h2>
        </motion.div>

        <div className="sig-grid">
          {drinks.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              style={{ backdropFilter: 'blur(20px) brightness(1.06)', WebkitBackdropFilter: 'blur(20px) brightness(1.06)', background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, rgba(201,168,76,0.04) 100%)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '1.5rem', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)' }}
            >
              <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `url("${d.img}") center/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,14,10,0.75) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', backdropFilter: 'blur(12px)', background: 'linear-gradient(135deg, rgba(201,168,76,0.85), rgba(201,168,76,0.6))', color: '#07120A', padding: '0.28rem 0.75rem', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 700 }}>{d.badge}</div>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{d.tag}</div>
                <h3 className="display" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{d.name}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{d.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="display" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gold)' }}>{d.price}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', padding: '0.22rem 0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px' }}>Hot / Iced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
>>>>>>> claude/jolly-turing-c3LGh
      </div>
    </section>
  )
}
