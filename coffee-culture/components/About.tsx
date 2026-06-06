'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{
      padding: '7rem 5rem',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem',
      alignItems: 'center', background: 'var(--surface)',
    }}>
      {/* Image grid */}
      <motion.div
        initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '480px' }}
      >
        <div style={{
          borderRadius: '1.25rem', overflow: 'hidden',
          background: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80") center/cover',
          gridRow: 'span 2',
        }} />
        <div style={{
          borderRadius: '1.25rem', overflow: 'hidden',
          background: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80") center/cover',
        }} />
        <div style={{
          borderRadius: '1.25rem', overflow: 'hidden',
          background: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80") center/cover',
        }} />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--green)', textTransform: 'uppercase' }}>
          Our Story
        </span>
        <h2 className="display" style={{
          fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--text)',
          marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Food grown with intention, served with care
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          Verdure was born from a simple belief: that the best meals come from the best ingredients. We work directly with local farms to bring you produce at peak freshness, prepared simply to let natural flavors shine.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Every dish on our menu changes with the seasons — not because it&apos;s trendy, but because that&apos;s how food should taste.
        </p>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[{ n: '12', label: 'Local farm partners' }, { n: '100%', label: 'Seasonal menu' }].map(s => (
            <div key={s.label} style={{
              padding: '1.25rem 1.5rem', borderRadius: '1rem',
              background: 'var(--green-pale)', flex: 1,
            }}>
              <div className="display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--green)' }}>{s.n}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
