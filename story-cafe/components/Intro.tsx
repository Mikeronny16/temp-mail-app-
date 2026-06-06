'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'in' | 'text' | 'exit'>('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 600)
    const t2 = setTimeout(() => setPhase('exit'), 2300)
    const t3 = setTimeout(() => onDone(), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: 'fixed', inset: 0, zIndex: 99999, background: '#FAFAF7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          {/* Blue ink dot expanding */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', position: 'relative' }}
          >
            <motion.div initial={{ scale: 1.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'absolute', inset: -12, borderRadius: '50%', border: '1px solid rgba(35,80,204,0.2)' }} />
            <span style={{ fontSize: '2rem' }}>📖</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={phase === 'text' ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            <div className="display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-0.03em', marginBottom: '0.4rem' }}>
              The STORY Cafe
            </div>
            <motion.div initial={{ scaleX: 0 }} animate={phase === 'text' ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ height: '2px', background: 'var(--blue)', marginBottom: '0.7rem', transformOrigin: 'center' }} />
            <motion.p initial={{ opacity: 0 }} animate={phase === 'text' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.25 }}
              style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Write your STORY over a Coffee
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div style={{ position: 'absolute', bottom: 0, left: 0, height: '3px', background: 'var(--blue)' }}
            initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.2, ease: 'linear' }} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
