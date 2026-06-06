'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', label: 'The Space', wide: true },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', label: 'Coffee', wide: false },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80', label: 'Food', wide: false },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80', label: 'Drinks', wide: false },
  { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80', label: 'Burgers', wide: false },
  { src: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80', label: 'Desserts', wide: true },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" ref={ref} className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <div style={{ height: '2px', width: 32, background: 'var(--blue)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Gallery</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Life at <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>STORY</em>
          </h2>
        </motion.div>

        <div className="gal-grid">
          {photos.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', height: 200, boxShadow: '0 4px 16px rgba(20,20,20,0.09)', cursor: 'pointer', border: '1px solid var(--border-dim)' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: `url("${p.src}") center/cover`, transition: 'transform 0.4s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,20,0.55) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.85rem', background: 'rgba(255,255,255,0.92)', borderRadius: '999px', padding: '0.22rem 0.7rem', fontSize: '0.68rem', color: 'var(--text)', fontWeight: 600, backdropFilter: 'blur(8px)' }}>{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
