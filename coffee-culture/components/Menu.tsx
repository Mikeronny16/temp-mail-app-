'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

<<<<<<< HEAD
const cats = ['Espresso Bar','Signatures','Italian Soda','Non-Coffee','Smoothies','Food']
=======
const cats = ['Espresso Bar', 'Signatures', 'Italian Soda', 'Non-Coffee', 'Smoothies', 'Food']
>>>>>>> claude/jolly-turing-c3LGh
const items: Record<string, { name: string; price: string; note?: string }[]> = {
  'Espresso Bar': [
    { name: 'Espresso Single', price: '4,000 MMK' }, { name: 'Espresso Double', price: '5,000 MMK' },
    { name: 'Café Mocha (Hot)', price: '11,000 MMK' }, { name: 'Cappuccino (Hot)', price: '9,500 MMK' },
    { name: 'Americano (Hot)', price: '7,300 MMK' }, { name: 'Mocha (Iced)', price: '13,000 MMK' },
<<<<<<< HEAD
    { name: 'Café Latte (Hot/Iced)', price: '9,500 / 11,500 MMK' },
    { name: 'Flavour Latte', price: '10,000 / 11,500 MMK', note: 'Hazelnut, Caramel, Vanilla' },
=======
    { name: 'Café Latte (Hot/Iced)', price: '9,500 / 11,500 MMK' }, { name: 'Flavour Latte', price: '10,000 / 11,500 MMK', note: 'Hazelnut, Caramel, Vanilla' },
>>>>>>> claude/jolly-turing-c3LGh
  ],
  'Signatures': [
    { name: 'Signature (Hot)', price: '10,000 MMK' }, { name: 'Café Margarita (Iced)', price: '7,000 MMK' },
    { name: 'Ocean Taste (Iced)', price: '8,000 MMK' }, { name: 'Signature (Iced)', price: '11,000 MMK' },
    { name: 'Double Fresh (Iced)', price: '11,000 MMK' }, { name: 'Orange Espresso (Iced)', price: '9,500 MMK' },
<<<<<<< HEAD
    { name: 'Matcha Strawberry (Iced)', price: '15,000 MMK', note: 'Best Seller' },
    { name: 'Strawberry Bliss (Iced)', price: '13,000 MMK' }, { name: 'Tonic Espresso (Iced)', price: '10,000 MMK' },
=======
    { name: 'Matcha Strawberry (Iced)', price: '15,000 MMK', note: 'Best Seller' }, { name: 'Strawberry Bliss (Iced)', price: '13,000 MMK' },
    { name: 'Tonic Espresso (Iced)', price: '10,000 MMK' },
>>>>>>> claude/jolly-turing-c3LGh
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
<<<<<<< HEAD
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
=======

  return (
    <section id="menu" ref={ref} style={{ padding: '7rem 2.5rem', background: 'var(--surface)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Full Menu</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}>
            What We <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Craft</em>
          </h2>
        </motion.div>

        {/* Tabs — glass pills */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '0.5rem 1.2rem', borderRadius: '999px',
              border: '1px solid',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderColor: active === cat ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.09)',
              background: active === cat
                ? 'linear-gradient(135deg, rgba(201,168,76,0.88), rgba(232,201,106,0.75))'
                : 'rgba(255,255,255,0.05)',
              color: active === cat ? '#07120A' : 'var(--text-muted)',
              fontSize: '0.8rem', fontWeight: active === cat ? 700 : 400,
              cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'inherit',
              boxShadow: active === cat ? '0 4px 16px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,255,255,0.3)' : 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>{cat}</button>
          ))}
        </motion.div>

        {/* Items grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {items[active].map((item, i) => (
            <motion.div key={item.name}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{
                padding: '1.1rem 1.35rem',
                backdropFilter: 'blur(16px) brightness(1.04)',
                WebkitBackdropFilter: 'blur(16px) brightness(1.04)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0.875rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
              whileHover={{ scale: 1.01 }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)', pointerEvents: 'none' }} />
              <div>
                <div style={{ fontWeight: 500, fontSize: '0.92rem', color: 'var(--text)', marginBottom: '0.2rem' }}>{item.name}</div>
                {item.note && (
                  <div style={{
                    display: 'inline-block', fontSize: '0.68rem', color: 'var(--gold)',
                    padding: '0.1rem 0.5rem', borderRadius: '999px',
                    background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
                    marginTop: '0.15rem',
                  }}>{item.note}</div>
                )}
              </div>
              <span className="display" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap', flexShrink: 0 }}>{item.price}</span>
            </motion.div>
          ))}
        </div>
>>>>>>> claude/jolly-turing-c3LGh
      </div>
    </section>
  )
}
