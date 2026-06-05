'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80', span: 'col-span-2 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', span: '' },
  { url: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80', span: '' },
  { url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', span: '' },
  { url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80', span: '' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" ref={ref} style={{ padding: '7rem 5rem', background: 'var(--cream)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--green)', textTransform: 'uppercase' }}>
          Gallery
        </span>
        <h2 className="display" style={{
          fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--text)',
          marginTop: '0.75rem', letterSpacing: '-0.02em',
        }}>
          A Feast for the Eyes
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 220px)',
        gap: '1rem',
      }}>
        {photos.map((p, i) => (
          <motion.div
            key={i}
            className={p.span}
            initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              borderRadius: '1.25rem', overflow: 'hidden',
              background: `url("${p.url}") center/cover`,
              gridColumn: p.span.includes('col-span-2') ? 'span 2' : undefined,
              gridRow: p.span.includes('row-span-2') ? 'span 2' : undefined,
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
            whileHover={{ scale: 1.02 }}
          />
        ))}
      </div>
    </section>
  )
}
