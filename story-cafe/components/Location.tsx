'use client'
import { motion } from 'framer-motion'

export default function Location({ lang }: { lang: 'en' | 'my' }) {
  const t = {
    en: { heading: 'Find Us', sub: 'Come write your story with us.', addr: 'No.207 Parami Road, South Okkalapa, Yangon', hours: 'Open Daily', hoursVal: '8:00 AM – 10:00 PM', dir: 'Get Directions' },
    my: { heading: 'တည်နေရာ', sub: 'ကျွန်တော်တို့နှင့် သင့်ဇာတ်လမ်းရေးပါ။', addr: 'ပါရမီလမ်း ၂၀၇ · တောင်ဥက္ကလာ · ရန်ကုန်', hours: 'နေ့တိုင်း', hoursVal: 'မနက် ၈ – ည ၁၀ နာရီ', dir: 'လမ်းညွှန်ကြည့်ရန်' },
  }[lang]

  return (
    <section id="location" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="loc-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</div>
            <h2 className={`display ${lang === 'my' ? 'myanmar' : ''}`} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--blue)', fontStyle: lang === 'en' ? 'italic' : 'normal', marginBottom: '0.75rem' }}>{t.heading}</h2>
            <p className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t.sub}</p>

            {[
              { icon: '📍', l: lang === 'en' ? 'Address' : 'လိပ်စာ', v: t.addr },
              { icon: '🕐', l: t.hours, v: t.hoursVal },
              { icon: '📞', l: lang === 'en' ? 'Phone' : 'ဖုန်း', v: '+95 9 XXX XXX XXX' },
              { icon: '📸', l: 'Instagram', v: '@thestorycafe.88' },
              { icon: '📘', l: 'Facebook', v: 'The Story Cafe' },
            ].map(info => (
              <div key={info.l} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.9rem', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '0.75rem', marginBottom: '0.6rem', boxShadow: '0 2px 8px rgba(26,79,196,0.04)' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{info.icon}</span>
                <div>
                  <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: lang === 'en' ? 'uppercase' : 'none', marginBottom: '0.1rem' }}>{info.l}</div>
                  <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{info.v}</div>
                </div>
              </div>
            ))}

            <a href="https://maps.google.com/?q=207+Parami+Road+South+Okkalapa+Yangon" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--blue)', color: '#fff', padding: '0.8rem 1.6rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', boxShadow: '0 4px 16px var(--blue-glow)', marginTop: '0.5rem' }}>
              🗺️ <span className={lang === 'my' ? 'myanmar' : ''}>{t.dir}</span>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', height: 420, border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(26,79,196,0.10)' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.5!2d96.185!3d16.840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUwJzI0LjAiTiA5NsKwMTEnMDYuMCJF!5e0!3m2!1sen!2smm!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
