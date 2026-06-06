'use client'
import { motion } from 'framer-motion'

export default function Location({ lang }: { lang: 'en' | 'my' }) {
  const t = {
    en: {
      heading: 'Find Us', sub: 'Come write your story with us.',
      addr: 'No.207 Parami Road, South Okkalapa Township, Yangon',
      hours: 'Open Daily', hoursVal: '8:00 AM – 10:00 PM',
      phone: 'Phone', phoneVal: '+95 9 XXX XXX XXX',
      ig: 'Instagram', igVal: '@thestorycafe.88',
      fb: 'Facebook', fbVal: 'The Story Cafe',
      dir: 'Get Directions',
    },
    my: {
      heading: 'တည်နေရာ', sub: 'ကျွန်တော်တို့နှင့်အတူ သင့်ဇာတ်လမ်းကိုရေးပါ။',
      addr: 'ပါရမီလမ်း အမှတ် ၂၀၇၊ တောင်ဥက္ကလာမြို့နယ်၊ ရန်ကုန်',
      hours: 'နေ့တိုင်းဖွင့်', hoursVal: 'မနက် ၈ – ည ၁၀ နာရီ',
      phone: 'ဖုန်း', phoneVal: '+95 9 XXX XXX XXX',
      ig: 'Instagram', igVal: '@thestorycafe.88',
      fb: 'Facebook', fbVal: 'The Story Cafe',
      dir: 'လမ်းညွှန်ကြည့်ရန်',
    },
  }[lang]

  return (
    <section id="location" className="section-pad" style={{ background: 'var(--surface2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="loc-grid">

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--terra)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</div>
            <h2 className={`display ${lang === 'my' ? 'myanmar' : ''}`} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--text)', fontStyle: lang === 'en' ? 'italic' : 'normal', marginBottom: '0.75rem' }}>{t.heading}</h2>
            <p className={lang === 'my' ? 'myanmar' : ''} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.sub}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                { icon: '📍', label: lang === 'en' ? 'Address' : 'လိပ်စာ', val: t.addr },
                { icon: '🕐', label: t.hours, val: t.hoursVal },
                { icon: '📞', label: t.phone, val: t.phoneVal },
                { icon: '📸', label: t.ig, val: t.igVal },
                { icon: '📘', label: t.fb, val: t.fbVal },
              ].map(info => (
                <div key={info.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.9rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{info.icon}</span>
                  <div>
                    <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: lang === 'en' ? 'uppercase' : 'none', marginBottom: '0.15rem' }}>{info.label}</div>
                    <div className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.88rem', color: 'var(--text)' }}>{info.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://maps.google.com/?q=207+Parami+Road+South+Okkalapa+Yangon" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--terra)', color: '#fff', padding: '0.8rem 1.6rem', borderRadius: '999px', textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem', boxShadow: '0 4px 16px var(--terra-glow)' }}>
              🗺️ <span className={lang === 'my' ? 'myanmar' : ''}>{t.dir}</span>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div style={{ borderRadius: '1.25rem', overflow: 'hidden', height: 420, border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(28,17,8,0.10)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.5!2d96.185!3d16.840!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUwJzI0LjAiTiA5NsKwMTEnMDYuMCJF!5e0!3m2!1sen!2smm!4v1"
                width="100%" height="100%" style={{ border: 0, filter: 'sepia(0.2) saturate(0.8)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
