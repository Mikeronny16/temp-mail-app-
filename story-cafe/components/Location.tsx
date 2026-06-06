'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" ref={ref} className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="loc-grid">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div style={{ height: '2px', width: 32, background: 'var(--blue)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Find Us</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '2rem', color: 'var(--text)' }}>
              Come Write Your<br /><em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Next Chapter</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '📍', l: 'Address', v: 'No.207, Parami Road, South Okkalapa Township, Yangon' },
                { icon: '📞', l: 'Phone', v: '+95 9 944 084948' },
                { icon: '📧', l: 'Email', v: 'thestorycafe.88@gmail.com' },
                { icon: '🕐', l: 'Services', v: 'Dine-in · Curbside Pickup · Outdoor Seating' },
              ].map(item => (
                <div key={item.l} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.1rem', background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '0.875rem', boxShadow: '0 2px 10px rgba(20,20,20,0.05)', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--blue)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-dim)')}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>{item.l}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="tel:+959944084948" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.75rem', background: 'var(--blue)', color: '#fff', padding: '0.9rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', boxShadow: '0 6px 20px rgba(35,80,204,0.32)', transition: 'all 0.2s' }}>
              📞 Call to Reserve
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.14 }}
            style={{ borderRadius: '1.5rem', overflow: 'hidden', height: 420, border: '1.5px solid var(--border-dim)', boxShadow: '0 12px 40px rgba(20,20,20,0.10)', position: 'relative', minHeight: 280 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5!2d96.1950!3d16.8390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGFyYW1pIFJvYWQ!5e0!3m2!1sen!2smm!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="The STORY Cafe Location" />
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '0.75rem', padding: '0.65rem 0.9rem', boxShadow: '0 4px 16px rgba(20,20,20,0.12)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--blue)', fontWeight: 700 }}>The STORY Cafe</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>207 Parami Rd, South Okkalapa</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
