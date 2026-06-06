'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = Date.now()
    const dur = 2400
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
            background: '#F5EFE0',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Decorative lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, var(--terra))', marginBottom: '2rem', transformOrigin: 'top' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontStyle: 'italic', color: 'var(--terra)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              The Story Cafe
            </div>
            <div className="myanmar" style={{ fontSize: '1.1rem', color: 'var(--green)', marginTop: '0.5rem', letterSpacing: '0.02em' }}>
              ဇာတ်လမ်းကဖေး
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--terra), transparent)', marginTop: '2rem', transformOrigin: 'bottom' }}
          />

          {/* Progress */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'var(--surface2)' }}>
            <div style={{ height: '100%', width: `${progress * 100}%`, background: 'linear-gradient(to right, var(--terra), var(--green))', transition: 'width 0.1s linear' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
