'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']
const items = [
  { cat: 'Starters', name: 'Burrata & Heirloom Tomato', desc: 'Aged balsamic, fresh basil, sourdough croutons', price: '$16', tag: 'Popular' },
  { cat: 'Starters', name: 'Seasonal Soup', desc: 'Roasted butternut squash, crème fraîche, pumpkin seeds', price: '$12' },
  { cat: 'Starters', name: 'Tuna Tartare', desc: 'Avocado, cucumber, sesame, yuzu ponzu', price: '$19' },
  { cat: 'Mains', name: 'Herb Roasted Salmon', desc: 'Lemon caper butter, wild rice, haricots verts', price: '$28', tag: "Chef's Pick" },
  { cat: 'Mains', name: 'Grilled Chicken', desc: "Za'atar marinade, roasted sweet potato, tahini", price: '$24' },
  { cat: 'Mains', name: 'Wild Mushroom Risotto', desc: 'Truffle oil, aged parmesan, fresh thyme', price: '$22', tag: 'Vegetarian' },
  { cat: 'Desserts', name: 'Lemon Tart', desc: 'Italian meringue, raspberry coulis, mint', price: '$11' },
  { cat: 'Desserts', name: 'Dark Chocolate Mousse', desc: '70% Valrhona, sea salt, caramel tuile', price: '$13' },
  { cat: 'Drinks', name: 'Green Elixir', desc: 'Cucumber, apple, ginger, spinach, lime', price: '$9' },
  { cat: 'Drinks', name: 'Sparkling Lemonade', desc: 'House-made, elderflower, fresh mint', price: '$7' },
]

export default function Menu() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const filtered = active === 'All' ? items : items.filter(i => i.cat === active)

  return (
    <section id="menu" ref={ref} style={{ padding: '7rem 5rem', background: 'var(--bg)' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--green)', textTransform: 'uppercase' }}>What We Serve</span>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--text)', marginTop: '0.75rem', letterSpacing: '-0.02em' }}>Seasonal Menu</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid',
            borderColor: active === cat ? 'var(--green)' : 'var(--border)',
            background: active === cat ? 'var(--green)' : 'transparent',
            color: active === cat ? '#fff' : 'var(--text-muted)',
            fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
          }}>{cat}</button>
        ))}
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filtered.map((item, i) => (
          <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
            whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(92,122,95,0.12)' }}>
            <div style={{ flex: 1, paddingRight: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text)' }}>{item.name}</span>
                {item.tag && <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '999px', background: 'var(--green-pale)', color: 'var(--green)' }}>{item.tag}</span>}
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
            <span className="display" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--green)', whiteSpace: 'nowrap' }}>{item.price}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
