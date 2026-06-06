'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = Date.now()
    const dur = 2600
    const id = setInterval(() => {
      const p = Math.min((Date.now() - start) / dur, 1)
      setProgress(p)
      if (p >= 1) {
        clearInterval(id)
        setTimeout(() => { setVisible(false); setTimeout(onDone, 500) }, 200)
      }
    }, 16)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: '#1A4FC4',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Animated S curve */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            width="60" height="100" viewBox="0 0 60 100"
            style={{ marginBottom: '1.5rem' }}
          >
            <motion.path
              d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90"
              fill="none" stroke="#F0B429" strokeWidth="4" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: 'easeInOut' }}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontStyle: 'italic', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              The Story Cafe
            </div>
            <div className="myanmar" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>
              ဇာတ်လမ်းကဖေး
            </div>
          </motion.div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.15)' }}>
            <div style={{ height: '100%', width: `${progress * 100}%`, background: '#F0B429', transition: 'width 0.1s linear' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
