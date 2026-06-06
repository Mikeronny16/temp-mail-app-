'use client'
import { useAnimationFrame, useMotionValue, useScroll, useVelocity, useTransform, motion } from 'framer-motion'

const items = ['☕ Specialty Coffee', '🍟 Homemade Fries', '🫐 Fresh Juices', '🥪 Club Sandwiches', '🍰 Daily Desserts', '🫖 Milk Tea', '🌊 Blue Wall Vibes', '📖 Your STORY starts here']

function wrap(min: number, max: number, v: number) {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

export default function Marquee() {
  const all = [...items, ...items, ...items]
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const velocityFactor = useTransform(scrollVelocity, [-3000, 0, 3000], [2.5, 1, 2.5], { clamp: false })

  useAnimationFrame((_, delta) => {
    const vel = velocityFactor.get()
    const next = baseX.get() - vel * delta * 0.018
    baseX.set(next)
  })

  const x = useTransform(baseX, (v) => `${wrap(-66.66, 0, v)}%`)

  return (
    <div style={{ overflow: 'hidden', background: 'var(--yellow)', padding: '0.85rem 0' }}>
      <motion.div style={{ x, display: 'flex', gap: '3rem', whiteSpace: 'nowrap', willChange: 'transform' }}>
        {all.map((item, i) => (
          <span key={i} style={{ color: '#0D1A2A', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', flexShrink: 0 }}>{item}</span>
        ))}
      </motion.div>
    </div>
  )
}
