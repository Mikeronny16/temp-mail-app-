'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', note: '' })

  const inp: React.CSSProperties = {
    width: '100%', padding: '0.8rem 0.9rem',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '0.65rem', color: 'var(--text)', fontSize: '0.875rem',
    outline: 'none', fontFamily: 'inherit',
  }

  return (
    <section id="reserve" ref={ref} className="section-pad">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="res-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ height: '1px', width: 40, background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Book a Table</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Reserve Your<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Perfect Moment</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
              Whether it&apos;s a quiet morning or a special celebration — we&apos;ll have your table ready. Confirm via Facebook or phone.
            </p>
            {[
              { icon: '📞', title: 'Call us', val: '+95 9 773 542924' },
              { icon: '📱', title: 'Facebook', val: 'Coffee Culture Yangon' },
              { icon: '🕐', title: 'Hours', val: 'Open Daily' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '0.875rem 1rem', marginBottom: '0.65rem', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(201,168,76,0.03))', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '0.875rem', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{item.val}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div style={{ backdropFilter: 'blur(24px) brightness(1.05)', WebkitBackdropFilter: 'blur(24px) brightness(1.05)', background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(201,168,76,0.04) 100%)', border: '1px solid rgba(255,255,255,0.11)', borderRadius: '1.5rem', padding: '1.75rem', boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.14)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                  <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '0.75rem' }}>Reservation Sent!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We&apos;ll confirm via phone or Facebook. See you soon!</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Name</label>
                      <input required style={inp} placeholder="Ko Aung" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Phone</label>
                      <input required style={inp} placeholder="+95 9 xxx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Date</label>
                      <input required type="date" style={inp} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Time</label>
                      <input required type="time" style={inp} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Guests</label>
                    <select style={{ ...inp, cursor: 'pointer' }} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                      {['1','2','3','4','5','6','7','8+'].map(n => <option key={n} value={n} style={{ background: '#0D1810' }}>{n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Special Request</label>
                    <textarea rows={2} style={{ ...inp, resize: 'none' }} placeholder="Birthday, dietary needs..." value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
                  </div>
                  <button type="submit" style={{ marginTop: '0.25rem', background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', color: '#07120A', padding: '0.9rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'inherit', boxShadow: '0 4px 20px rgba(201,168,76,0.35)', transition: 'all 0.2s' }}>
                    ☕ Confirm Reservation
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
