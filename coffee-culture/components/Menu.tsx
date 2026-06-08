'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const cats = ['Espresso Bar','Signatures','Italian Soda','Non-Coffee','Smoothies','Food']
const items: Record<string, { name: string; price: string; note?: string }[]> = {
  'Espresso Bar': [
    { name: 'Espresso Single', price: '4,000 MMK' }, { name: 'Espresso Double', price: '5,000 MMK' },
    { name: 'Café Mocha (Hot)', price: '11,000 MMK' }, { name: 'Cappuccino (Hot)', price: '9,500 MMK' },
    { name: 'Americano (Hot)', price: '7,300 MMK' }, { name: 'Mocha (Iced)', price: '13,000 MMK' },
    { name: 'Café Latte (Hot/Iced)', price: '9,500 / 11,500 MMK' },
    { name: 'Flavour Latte', price: '10,000 / 11,500 MMK', note: 'Hazelnut, Caramel, Vanilla' },
  ],
  'Signatures': [
    { name: 'Signature (Hot)', price: '10,000 MMK' }, { name: 'Café Margarita (Iced)', price: '7,000 MMK' },
    { name: 'Ocean Taste (Iced)', price: '8,000 MMK' }, { name: 'Signature (Iced)', price: '11,000 MMK' },
    { name: 'Double Fresh (Iced)', price: '11,000 MMK' }, { name: 'Orange Espresso (Iced)', price: '9,500 MMK' },
    { name: 'Matcha Strawberry (Iced)', price: '15,000 MMK', note: 'Best Seller' },
    { name: 'Strawberry Bliss (Iced)', price: '13,000 MMK' }, { name: 'Tonic Espresso (Iced)', price: '10,000 MMK' },
  ],
  'Italian Soda': [
    { name: 'Strawberry Soda', price: '9,000 MMK' }, { name: 'Blue Lemon Soda', price: '9,000 MMK' },
    { name: 'Raspberry Soda', price: '9,000 MMK' }, { name: 'Mango Soda', price: '9,000 MMK' },
    { name: 'Green Apple Soda', price: '9,000 MMK' }, { name: 'Blueberry Soda', price: '9,000 MMK' },
    { name: 'Kiwi Soda', price: '9,000 MMK' }, { name: 'Lime Soda', price: '9,000 MMK' },
  ],
  'Non-Coffee': [
    { name: 'Chocolate (Hot/Iced)', price: '10,000 MMK' }, { name: 'Matcha Latte (Hot/Iced)', price: '10,000 MMK' },
    { name: 'Lemon Tea (Iced)', price: '8,000 MMK' }, { name: 'Yoghurt Bowl (Iced)', price: '13,500 MMK' },
    { name: 'Jasmine Tea', price: '3,500 MMK' }, { name: 'Hazelnut Milk (Iced)', price: '10,000 MMK' },
    { name: 'Pinky Thai Tea (Iced)', price: '10,000 MMK' }, { name: 'Thai Milk Tea (Iced)', price: '9,000 MMK' },
  ],
  'Smoothies': [
    { name: 'Papaya Smoothie', price: '14,000 MMK' }, { name: 'Avocado Smoothie', price: '14,000 MMK' },
    { name: 'Strawberry Smoothie', price: '14,000 MMK' }, { name: 'Banana Smoothie', price: '14,000 MMK' },
    { name: 'Mango Smoothie', price: '14,000 MMK' }, { name: 'Pineapple Smoothie', price: '14,000 MMK' },
  ],
  'Food': [
    { name: 'Grilled BBQ Burger', price: '18,000 MMK', note: 'Chicken/Pork' },
    { name: 'Crispy BBQ Burger', price: '18,000 MMK', note: 'Chicken/Pork' },
    { name: 'Club Sandwich', price: '15,000 MMK' }, { name: 'Tuna Sandwich', price: '15,000 MMK' },
    { name: 'Chicken Spring Roll', price: '12,000 MMK' }, { name: 'Pork Spring Roll', price: '12,000 MMK' },
    { name: 'Fried Noodle', price: '10,000–15,000 MMK', note: 'Chicken/Pork/Prawn/Veg' },
    { name: 'Green Tea Leaf Rice Salad', price: '15,000 MMK' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('Espresso Bar')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="menu" ref={ref} style={{ padding: '7rem 6rem', background: 'var(--surface)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Full Menu</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>What We <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Craft</em></h2>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {cats.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid',
            borderColor: active === cat ? 'var(--gold)' : 'var(--border-dim)',
            background: active === cat ? 'var(--gold)' : 'transparent',
            color: active === cat ? '#0C1A14' : 'var(--text-muted)',
            fontSize: '0.8rem', fontWeight: active === cat ? 600 : 400, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
          }}>{cat}</button>
        ))}
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', border: '1px solid var(--border-dim)', borderRadius: '1rem', overflow: 'hidden' }}>
        {items[active].map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.04 }}
            style={{ padding: '1.25rem 1.5rem', background: 'var(--surface2)', borderRight: '1px solid var(--border-dim)', borderBottom: '1px solid var(--border-dim)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.2rem' }}>{item.name}</div>
              {item.note && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.note}</div>}
            </div>
            <span className="display" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
