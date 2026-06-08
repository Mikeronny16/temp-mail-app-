'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="location" ref={ref} style={{ padding: '7rem 6rem', background: 'var(--bg)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
      <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Visit Us</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
          Come &amp; Experience<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Coffee Culture</em>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { icon: '📍', label: 'Address', value: 'Upper Pazundaung Rd, Yangon, Myanmar 11221' },
            { icon: '📞', label: 'Phone', value: '+95 9 773 542924' },
            { icon: '🕐', label: 'Hours', value: 'Open Daily · Check Facebook for updates' },
            { icon: '📱', label: 'Instagram', value: '@Coffee Culture' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.25rem', border: '1px solid var(--border)', borderRadius: '0.875rem', background: 'var(--surface)' }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="tel:+959773542924" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', background: 'var(--gold)', color: '#0C1A14', padding: '0.9rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.04em' }}>
          ☕ Call to Reserve
        </a>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
        style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--border)', height: 480, position: 'relative' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.2!2d96.1834!3d16.8245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGF6dW5kYXVuZw!5e0!3m2!1sen!2smm!4v1"
          width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen loading="lazy" title="Coffee Culture Location" />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600 }}>Coffee Culture</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Upper Pazundaung Rd, Yangon</div>
        </div>
      </motion.div>
    </section>
  )
}
