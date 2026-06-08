'use client'
import { motion } from 'framer-motion'

const items = ['Espresso','Matcha Strawberry','Ocean Taste','Hand Drip V60','Signature Blend','Yogurt Cheese','Strawberry Sunrise','Double Fresh','Tonic Espresso','Frappe','Italian Soda','Specialty Coffee']

export default function Marquee() {
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)', overflow: 'hidden', padding: '0.85rem 0' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', padding: '0 2rem' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
            <span className="display" style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
