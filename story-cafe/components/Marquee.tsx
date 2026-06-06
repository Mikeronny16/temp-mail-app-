'use client'

const items = ['☕ Specialty Coffee', '🍟 Homemade Fries', '🫐 Fresh Juices', '🥪 Club Sandwiches', '🍰 Daily Desserts', '🫖 Milk Tea', '🌿 Forest Green Vibes', '📖 Your STORY starts here']

export default function Marquee() {
  const all = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', background: 'var(--terra)', padding: '0.85rem 0', borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 28s linear infinite', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {all.map((item, i) => (
          <span key={i} style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.06em', flexShrink: 0 }}>{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
