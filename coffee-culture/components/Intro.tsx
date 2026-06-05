'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'text' | 'exit'>('logo')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 700)
    const t2 = setTimeout(() => setPhase('exit'), 2200)
    const t3 = setTimeout(() => onDone(), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#070E0A',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Hairline circle */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 120, height: 120, borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '2rem',
              position: 'relative',
              boxShadow: '0 0 60px rgba(201,168,76,0.08)',
            }}
          >
            {/* Outer ring */}
            <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', inset: -12,
                borderRadius: '50%',
                border: '1px solid rgba(201,168,76,0.12)',
              }}
            />
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '2.8rem' }}
            >☕</motion.span>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={phase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            <div className="display" style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700, fontStyle: 'italic',
              color: 'var(--gold)',
              letterSpacing: '-0.01em',
              marginBottom: '0.5rem',
            }}>Coffee Culture</div>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase === 'text' ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
                marginBottom: '0.75rem', transformOrigin: 'center',
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={phase === 'text' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >Everyone Deserves Love and Coffee</motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            style={{
              position: 'absolute', bottom: 0, left: 0,
              height: '2px',
              background: 'linear-gradient(to right, transparent, var(--gold), var(--gold-light))',
              boxShadow: '0 0 12px rgba(201,168,76,0.5)',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.1, ease: 'linear' }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
