'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="reserve" ref={ref} style={{
      padding: '7rem 5rem',
      background: 'var(--surface)',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
    }}>
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--green)', textTransform: 'uppercase' }}>
          Reservations
        </span>
        <h2 className="display" style={{
          fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: 'var(--text)',
          marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.02em',
        }}>
          Join us for an unforgettable meal
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Reserve your table and let us take care of the rest. Walk-ins welcome, but we recommend booking ahead for weekends.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { icon: '🕐', label: 'Hours', value: 'Mon–Fri: 11am–10pm · Sat–Sun: 10am–11pm' },
            { icon: '📍', label: 'Location', value: '42 Green Street, City Center' },
            { icon: '📞', label: 'Phone', value: '+1 (555) 234-5678' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.15rem' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          background: 'var(--green-pale)', borderRadius: '1.5rem', padding: '2.5rem',
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
            <h3 className="display" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--green)', marginBottom: '0.75rem' }}>Table Reserved!</h3>
            <p style={{ color: 'var(--text-muted)' }}>We look forward to seeing you. A confirmation will be sent to your email.</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="display" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>Make a Reservation</h3>

            {[
              { label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
              { label: 'Email', type: 'email', placeholder: 'jane@example.com' },
              { label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
            ].map(f => (
              <div key={f.label}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: '0.4rem' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} required style={{
                  width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  border: '1px solid var(--border)', background: '#fff',
                  fontSize: '0.95rem', color: 'var(--text)', outline: 'none',
                  fontFamily: 'inherit',
                }} />
              </div>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: '0.4rem' }}>Date</label>
                <input type="date" required style={{
                  width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  border: '1px solid var(--border)', background: '#fff',
                  fontSize: '0.95rem', color: 'var(--text)', outline: 'none', fontFamily: 'inherit',
                }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', display: 'block', marginBottom: '0.4rem' }}>Guests</label>
                <select required style={{
                  width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  border: '1px solid var(--border)', background: '#fff',
                  fontSize: '0.95rem', color: 'var(--text)', outline: 'none', fontFamily: 'inherit', cursor: 'pointer',
                }}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
            </div>

            <button type="submit" style={{
              background: 'var(--green)', color: '#fff',
              padding: '0.875rem', borderRadius: '999px', border: 'none',
              fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
              marginTop: '0.5rem', transition: 'opacity 0.2s',
              fontFamily: 'inherit',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Reserve My Table →
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
