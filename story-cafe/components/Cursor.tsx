'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const sx = useSpring(mx, { stiffness: 220, damping: 30 })
  const sy = useSpring(my, { stiffness: 220, damping: 30 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true) }
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovered(!!(el.closest('a') || el.closest('button')))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [mx, my])

  if (!visible) return null

  return (
    <motion.div
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%', position: 'fixed', top: 0, left: 0, zIndex: 99999, pointerEvents: 'none' }}
      animate={{ scale: hovered ? 1.6 : 1, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.12 }}
    >
      <svg width={hovered ? 22 : 15} height={hovered ? 36 : 26} viewBox="0 0 60 100" style={{ transition: 'width 0.15s, height 0.15s' }}>
        <path d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90"
          fill="none" stroke="var(--blue)" strokeWidth={hovered ? 7 : 5} strokeLinecap="round" opacity={0.82} />
      </svg>
    </motion.div>
  )
}
