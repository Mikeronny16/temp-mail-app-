'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Reservation({ lang }: { lang: 'en' | 'my' }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '2', note: '' })
  const [sent, setSent] = useState(false)

  const t = {
    en: {
      heading: 'Reserve a Table', sub: 'Book your cozy corner at The Story Cafe.',
      name: 'Your Name', phone: 'Phone Number', date: 'Date', time: 'Time',
      guests: 'Number of Guests', note: 'Special Requests (optional)',
      btn: 'Confirm Reservation', thanks: "We'll see you soon!", thanksSub: 'Check your phone for confirmation via Facebook / Viber.',
      infoTitle: 'Before You Come', hours: 'Open Daily: 8AM – 10PM', addr: 'No.207 Parami Road, South Okkalapa, Yangon',
      phone2: '+95 9 XXX XXX XXX', fb: 'Message via Facebook',
    },
    my: {
      heading: 'စားပွဲမှာပါ', sub: 'The Story Cafe တွင် သင့်ထောင့်ကလေးကို ကြိုတင်မှာကြပါ။',
      name: 'နာမည်', phone: 'ဖုန်းနံပါတ်', date: 'ရက်စွဲ', time: 'အချိန်',
      guests: 'ဧည့်သည်အရေအတွက်', note: 'အထူးတောင်းဆိုချက် (ရှိပါက)',
      btn: 'မှာကြားပါ', thanks: 'မကြာမီတွေ့ဆုံမည်!', thanksSub: 'Facebook / Viber မှ အတည်ပြုချက် ရပါမည်။',
      infoTitle: 'လာမတိုင်မီ', hours: 'နေ့တိုင်း မနက် ၈ – ည ၁၀ နာရီ', addr: 'ပါရမီလမ်း အမှတ် ၂၀၇၊ တောင်ဥက္ကလာ',
      phone2: '+95 9 XXX XXX XXX', fb: 'Facebook မှ ဆက်သွယ်ရန်',
    },
  }[lang]

  const field = (key: keyof typeof form, label: string, type = 'text', opts?: string[]) => (
    <div>
      <label className={lang === 'my' ? 'myanmar' : ''} style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.04em' }}>{label}</label>
      {opts ? (
        <select value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.65rem', padding: '0.7rem 0.9rem', color: 'var(--text)', fontSize: '0.88rem', outline: 'none', appearance: 'none' }}>
          {opts.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.65rem', padding: '0.7rem 0.9rem', color: 'var(--text)', fontSize: '0.88rem', outline: 'none' }} />
      )}
    </div>
  )

  return (
    <section id="reserve" className="section-pad">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="res-grid">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--terra)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Reservation</div>
            <h2 className={`display ${lang === 'my' ? 'myanmar' : ''}`} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text)', fontStyle: lang === 'en' ? 'italic' : 'normal', marginBottom: '0.75rem' }}>{t.heading}</h2>
            <p className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.sub}</p>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'var(--terra-pale)', border: '1.5px solid var(--terra)', borderRadius: '1.25rem', padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>☕</div>
                <div className={`display ${lang === 'my' ? 'myanmar' : ''}`} style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--terra)', marginBottom: '0.4rem' }}>{t.thanks}</div>
                <p className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.thanksSub}</p>
              </motion.div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {field('name', t.name)}
                  {field('phone', t.phone, 'tel')}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {field('date', t.date, 'date')}
                  {field('time', t.time, 'time')}
                </div>
                {field('guests', t.guests, 'text', ['1', '2', '3', '4', '5', '6+'])}
                <div>
                  <label className={lang === 'my' ? 'myanmar' : ''} style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>{t.note}</label>
                  <textarea value={form.note} onChange={e => setForm(p => ({ ...p, note: e.target.value }))} rows={3}
                    style={{ width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.65rem', padding: '0.7rem 0.9rem', color: 'var(--text)', fontSize: '0.88rem', outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" className={lang === 'my' ? 'myanmar' : ''}
                  style={{ background: 'var(--terra)', color: '#fff', padding: '0.9rem', borderRadius: '0.75rem', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 6px 20px var(--terra-glow)' }}>
                  {t.btn}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1.25rem', padding: '2rem' }}>
              <h3 className={`display ${lang === 'my' ? 'myanmar' : ''}`} style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text)', marginBottom: '1.5rem' }}>{t.infoTitle}</h3>
              {[
                { icon: '🕐', text: t.hours },
                { icon: '📍', text: t.addr },
                { icon: '📞', text: t.phone2 },
              ].map(item => (
                <div key={item.icon} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</span>
                  <span className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
            <a href="https://www.facebook.com/thestorycafe.88" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', background: '#1877F2', color: '#fff', padding: '1rem', borderRadius: '1rem', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
              <span>📘</span> <span className={lang === 'my' ? 'myanmar' : ''}>{t.fb}</span>
            </a>
            <div style={{ background: 'var(--terra-pale)', border: '1.5px solid var(--border)', borderRadius: '1.25rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Payment</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['KBZPay', 'Wave Money', 'MMQR', 'Cash'].map(m => (
                  <span key={m} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.3rem 0.75rem', fontSize: '0.72rem', color: 'var(--text)', fontWeight: 500 }}>{m}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
