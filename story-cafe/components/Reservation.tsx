'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', note: '' })

  const inp: React.CSSProperties = { width: '100%', padding: '0.8rem 0.9rem', background: 'var(--surface)', border: '1.5px solid var(--border-dim)', borderRadius: '0.65rem', color: 'var(--text)', fontSize: '0.875rem', outline: 'none', fontFamily: 'inherit', transition: 'border-color 0.2s' }

  return (
    <section id="reserve" ref={ref} className="section-pad" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="res-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div style={{ height: '2px', width: 32, background: 'var(--blue)' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--blue)', textTransform: 'uppercase' }}>Book a Table</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.25rem', color: 'var(--text)' }}>
              Reserve Your<br /><em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Chapter</em>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.9rem' }}>
              Whether you&apos;re writing your next chapter or simply catching up over coffee — we&apos;ll keep your seat warm.
            </p>
            {[{ icon: '📞', t: 'Phone', v: '+95 9 944 084948' }, { icon: '📧', t: 'Email', v: 'thestorycafe.88@gmail.com' }, { icon: '📍', t: 'Address', v: 'No.207, Parami Road, South Okkalapa, Yangon' }].map(item => (
              <div key={item.t} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '0.875rem 1rem', marginBottom: '0.6rem', background: '#fff', border: '1px solid var(--border-dim)', borderRadius: '0.875rem', boxShadow: '0 2px 10px rgba(20,20,20,0.05)' }}>
                <span>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.t}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{item.v}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.12 }}>
            <div style={{ background: '#fff', border: '1.5px solid var(--border-dim)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 8px 32px rgba(20,20,20,0.08)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
                  <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '0.75rem', fontWeight: 900 }}>Your table is set!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We&apos;ll confirm via phone or Facebook. See you at STORY!</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Name</label>
                      <input required style={inp} placeholder="Ko Aung" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')} /></div>
                    <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Phone</label>
                      <input required style={inp} placeholder="+95 9 xxx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')} /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Date</label>
                      <input required type="date" style={inp} value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')} /></div>
                    <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Time</label>
                      <input required type="time" style={inp} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')} /></div>
                  </div>
                  <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Guests</label>
                    <select style={{ ...inp, cursor: 'pointer' }} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')}>
                      {['1','2','3','4','5','6','7','8+'].map(n => <option key={n} value={n}>{n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select></div>
                  <div><label style={{ display: 'block', fontSize: '0.68rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Note</label>
                    <textarea rows={2} style={{ ...inp, resize: 'none' }} placeholder="Birthday, special seating..." value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-dim)')} /></div>
                  <button type="submit" style={{ marginTop: '0.25rem', background: 'var(--blue)', color: '#fff', padding: '0.9rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'inherit', boxShadow: '0 6px 20px rgba(35,80,204,0.32)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    📖 Reserve My Table
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
