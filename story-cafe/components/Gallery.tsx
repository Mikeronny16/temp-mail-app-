'use client'
import { motion } from 'framer-motion'

const photos = [
  { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80', tag: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80', tag: 'Coffee' },
  { url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80', tag: 'Food' },
  { url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&q=80', tag: 'Vibes' },
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80', tag: 'Latte Art' },
  { url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=500&q=80', tag: 'Desserts' },
]

export default function Gallery({ lang }: { lang: 'en' | 'my' }) {
  return (
    <section id="gallery" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Instagram</div>
            <h2 className="display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--blue)', fontStyle: 'italic' }}>
              {lang === 'en' ? '@thestorycafe.88' : <span className="myanmar">ဓာတ်ပုံများ</span>}
            </h2>
          </div>
          <a href="https://www.instagram.com/thestorycafe.88" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600, border: '1.5px solid var(--border)', borderRadius: '999px', padding: '0.45rem 1.1rem' }}>
            📸 {lang === 'en' ? 'Follow us' : <span className="myanmar">Follow လုပ်ရန်</span>}
          </a>
        </motion.div>

        <div className="gal-grid">
          {photos.map((p, i) => (
            <motion.div key={i}
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.75, delay: i * 0.07, ease: [0.76, 0, 0.24, 1] }}
              whileHover={{ scale: 1.03 }}
              style={{ borderRadius: '0.9rem', overflow: 'hidden', aspectRatio: '1', position: 'relative', boxShadow: '0 4px 20px rgba(26,79,196,0.10)', cursor: 'pointer', transition: 'scale 0.25s' }}
            >
              {/* Photo with blue-wash */}
              <div className="photo-wash" style={{ position: 'absolute', inset: 0, background: `url("${p.url}") center/cover`, borderRadius: 'inherit' }} />
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,79,196,0.55) 0%, transparent 55%)' }}
              />
              <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', fontSize: '0.7rem', color: '#fff', fontWeight: 600, background: 'rgba(26,79,196,0.45)', backdropFilter: 'blur(6px)', padding: '0.2rem 0.55rem', borderRadius: '999px' }}>{p.tag}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
