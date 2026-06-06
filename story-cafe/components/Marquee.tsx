'use client'
import { motion } from 'framer-motion'

const items = ['Ex Girlfriend · 10,000', 'Sooper Strawberry · 8,000', 'Still Old Gin · 8,000', 'Homemade French Fries · 10,000', 'Korean Bibimbap · 17,000', 'Japanese Curry · 20,000', 'Frappe · 10,000', 'Cheesecake · 10,000']
const row = [...items, ...items]

export default function Marquee() {
  return (
    <div style={{ background: 'var(--blue)', padding: '0.85rem 0', overflow: 'hidden', position: 'relative' }}>
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}>
        {row.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', padding: '0 2rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.92)', letterSpacing: '0.04em' }}>{item} MMK</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.5rem' }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
