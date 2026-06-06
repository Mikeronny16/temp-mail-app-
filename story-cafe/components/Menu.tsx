'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const cats = ['Appetizers', 'Mains', 'Drinks', 'Desserts']
const items: Record<string, { name: string; price: string; note?: string }[]> = {
  'Appetizers': [
    { name: 'French Fries Classic/Spicy', price: '10,000 MMK', note: 'MUST ORDER' },
    { name: 'French Fries Cheesy', price: '11,000 MMK' },
    { name: 'French Fries Chilli Cheese', price: '13,000 MMK', note: 'Chicken/Pork' },
    { name: 'Sandwich — Egg', price: '12,000 MMK' },
    { name: 'Sandwich — Ham & Cheese', price: '15,000 MMK' },
    { name: 'Sandwich — Chicken Cutlet', price: '15,000 MMK' },
    { name: 'Jarni Puri — Potato', price: '7,000 MMK' },
    { name: 'Jarni Puri — Pork / Chicken', price: '12,000 MMK' },
    { name: 'Fish Finger', price: '13,000 MMK', note: 'Dory fish + homemade fries' },
    { name: 'Chicken Wing', price: '16,000 MMK', note: 'Classic' },
    { name: 'Kimchi Stew', price: '9,000 MMK', note: 'Chicken/Pork' },
  ],
  'Mains': [
    { name: 'Thai Basil Pasta', price: '16,000 MMK' },
    { name: 'Carbonara', price: '20,000 MMK' },
    { name: 'Spaghetti Bolognese', price: '16,000 MMK', note: 'Chicken/Pork' },
    { name: 'Pizza BBQ Chicken (10")', price: '24,000 MMK' },
    { name: 'Pizza Ham & Cheese (10")', price: '24,000 MMK' },
    { name: 'Kimchi Fried Rice', price: '8,000 MMK' },
    { name: 'Egg Fried Rice', price: '8,000 MMK' },
    { name: 'Fried Rice + Cutlet', price: '14,000 MMK', note: 'Chicken/Pork' },
    { name: 'Korean Bibimbap', price: '17,000 MMK' },
    { name: 'Thai Chicken/Pork Basil Bowl', price: '13,000 MMK' },
    { name: 'Japanese Curry — Pork Katsu', price: '20,000 MMK' },
    { name: 'Japanese Curry — Chicken Katsu', price: '20,000 MMK' },
  ],
  'Drinks': [
    { name: 'Ex Girlfriend', price: '10,000 MMK', note: 'Pineapple, orange & mango' },
    { name: 'Sooper Strawberry', price: '8,000 MMK', note: 'Strawberry & mint' },
    { name: 'Still Old Gin', price: '8,000 MMK', note: 'STORY exclusive' },
    { name: 'Smoothies — Kiwi/Mango/Strawberry/Blueberry', price: '8,000 MMK' },
    { name: 'Frappe — Mocha', price: '10,000 MMK' },
    { name: 'Frappe — Chocolate', price: '10,000 MMK' },
    { name: 'Frappe — Cappuccino', price: '10,000 MMK' },
    { name: 'Frappe — Thai Tea', price: '10,000 MMK' },
    { name: 'Frappe — Vanilla/Caramel', price: '10,000 MMK' },
  ],
  'Desserts': [
    { name: 'Brownies', price: '10,000 MMK', note: 'Homemade' },
    { name: 'Nama Chocolate', price: '9,000 MMK' },
    { name: 'Cheesecake', price: '10,000 MMK' },
    { name: 'Story Cookie — Chocolate/White', price: '3,000 MMK' },
    { name: 'Egg Tart', price: '3,000 MMK' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Appetizers')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="menu" ref={ref} className="section-pad" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <div style={{ height: '2px', width: 32, background: 'var(--blue)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Full Menu</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)' }}>
            What We <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Serve</em>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '0.5rem 1.25rem', borderRadius: '999px',
              border: '1.5px solid',
              borderColor: active === cat ? 'var(--blue)' : 'var(--border-dim)',
              background: active === cat ? 'var(--blue)' : '#fff',
              color: active === cat ? '#fff' : 'var(--text-muted)',
              fontSize: '0.82rem', fontWeight: active === cat ? 700 : 400,
              cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              boxShadow: active === cat ? '0 4px 14px rgba(35,80,204,0.28)' : 'none',
            }}>{cat}</button>
          ))}
        </div>

        {/* Items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.65rem' }}>
          {items[active].map((item, i) => (
            <motion.div key={item.name}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.035 }}
              style={{ padding: '1rem 1.2rem', background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '0.875rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', boxShadow: '0 2px 10px rgba(20,20,20,0.05)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.18rem' }}>{item.name}</div>
                {item.note && (
                  <span style={{ fontSize: '0.68rem', color: 'var(--blue)', background: 'var(--blue-pale)', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>{item.note}</span>
                )}
              </div>
              <span className="display" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--warm)', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
