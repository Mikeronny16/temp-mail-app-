'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80', span: 'col', label: 'Espresso Bar' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', span: '', label: 'Latte Art' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80', span: '', label: 'Cocktails' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', span: 'col', label: 'The Vibe' },
  { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=500&q=80', span: '', label: 'Fresh Food' },
  { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80', span: '', label: 'Matcha Series' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="gallery" ref={ref} style={{ padding: '7rem 2.5rem', background: 'var(--bg)', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Atmosphere</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
          The <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Experience</em>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '0.85rem' }}>
        {photos.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.96 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            style={{
              position: 'relative', borderRadius: '1rem', overflow: 'hidden',
              height: i === 0 || i === 3 ? 320 : 220,
              border: '1px solid rgba(255,255,255,0.07)',
              cursor: 'pointer',
              gridColumn: p.span === 'col' ? 'span 2' : 'span 1',
            }}
            whileHover={{ scale: 1.015 }}
          >
            <div style={{ position: 'absolute', inset: 0, background: `url("${p.src}") center/cover`, transition: 'transform 0.5s ease' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(7,14,10,0.7) 0%, transparent 50%)',
            }} />
            {/* Glass label */}
            <div style={{
              position: 'absolute', bottom: '0.9rem', left: '0.9rem',
              backdropFilter: 'blur(14px) brightness(1.05)',
              WebkitBackdropFilter: 'blur(14px) brightness(1.05)',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '999px', padding: '0.28rem 0.8rem',
              fontSize: '0.7rem', color: 'var(--text)', fontWeight: 500, letterSpacing: '0.06em',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
            }}>{p.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
