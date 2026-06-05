'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', note: '' })

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '0.75rem',
    color: 'var(--text)', fontSize: '0.88rem',
    outline: 'none', fontFamily: 'inherit',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  } as React.CSSProperties

  return (
    <section id="reserve" ref={ref} style={{ padding: '7rem 2.5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Book a Table</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Reserve Your<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Perfect Moment</em>
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Whether it&apos;s a quiet morning or a special celebration — we&apos;ll have your table ready. Call us or fill in the form and we&apos;ll confirm via Facebook or phone.
          </p>

          {/* Info cards */}
          {[
            { icon: '📞', title: 'Call us directly', val: '+95 9 773 542924' },
            { icon: '📱', title: 'Facebook', val: 'Coffee Culture Yangon' },
            { icon: '🕐', title: 'Opening Hours', val: 'Open Daily · See Facebook for updates' },
          ].map(item => (
            <div key={item.title} style={{
              display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem',
              marginBottom: '0.75rem',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(201,168,76,0.03) 100%)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '0.875rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.title}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.val}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
          <div style={{
            backdropFilter: 'blur(24px) brightness(1.05) saturate(1.15)',
            WebkitBackdropFilter: 'blur(24px) brightness(1.05) saturate(1.15)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(201,168,76,0.04) 100%)',
            border: '1px solid rgba(255,255,255,0.11)',
            borderRadius: '1.5rem', padding: '2rem',
            boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.14)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Shine */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)', borderRadius: '1.5rem 1.5rem 0 0', pointerEvents: 'none' }} />

            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '0.75rem' }}>Reservation Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We&apos;ll confirm your table via phone or Facebook. See you soon!</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Your Name</label>
                    <input required style={inputStyle} placeholder="Ko Aung" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Phone</label>
                    <input required style={inputStyle} placeholder="+95 9 xxx xxx xxx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Date</label>
                    <input required type="date" style={inputStyle} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Time</label>
                    <input required type="time" style={inputStyle} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Guests</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                    {['1','2','3','4','5','6','7','8+'].map(n => <option key={n} value={n} style={{ background: '#0D1810' }}>{n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Special Request</label>
                  <textarea rows={3} style={{ ...inputStyle, resize: 'none' }} placeholder="Birthday celebration, dietary needs..." value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
                </div>
                <button type="submit" style={{
                  marginTop: '0.5rem',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  color: '#07120A', padding: '0.95rem',
                  borderRadius: '0.875rem', border: 'none', cursor: 'pointer',
                  fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', fontFamily: 'inherit',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(201,168,76,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,168,76,0.35)' }}
                >☕ Confirm Reservation</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
