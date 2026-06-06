'use client'

const items = ['☕ Specialty Coffee', '🍟 Homemade Fries', '🫐 Fresh Juices', '🥪 Club Sandwiches', '🍰 Daily Desserts', '🫖 Milk Tea', '🌊 Blue Wall Vibes', '📖 Your STORY starts here']

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', background: 'var(--yellow)', padding: '0.85rem 0' }}>
      <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap' }}>
        {all.map((item, i) => (
          <span key={i} style={{ color: '#0D1A2A', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}
