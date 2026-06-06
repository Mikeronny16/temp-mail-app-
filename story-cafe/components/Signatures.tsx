'use client'
import { motion } from 'framer-motion'

const drinks = [
  { name: 'Ex Girlfriend', my: 'ဟောင်းငယ်ချစ်သူ', desc: 'Sweet on the outside, bitter in the end. Brown sugar espresso with salted caramel cream.', descMY: 'ပြင်ပမှာချိုပြီး အဆုံးတွင် ခါးသော — brown sugar espresso + salted caramel cream', price: '7,000', tag: 'Bestseller', tagMY: 'အရောင်းရဆုံး', icon: '💔', accent: 'var(--blue)' },
  { name: 'Sooper Strawberry', my: 'ဆောပါ စတော်ဘယ်ရီ', desc: 'Blended fresh strawberry smoothie with cream top. Cold, refreshing, and dangerously pink.', descMY: 'Fresh strawberry smoothie, cream top — ခေတ်ဆန်သော နီညိုရောင်', price: '8,000', tag: 'Fan Fave', tagMY: 'အားလုံးနှစ်သက်', icon: '🍓', accent: '#C0416A' },
  { name: 'Still Old Gin', my: 'ဟောင်းနွမ်းသော Gin', desc: 'Alcohol-free. Elderflower tonic, cucumber, mint. Like a warm afternoon that never left.', descMY: 'အရက်မပါ — elderflower tonic, cucumber, mint', price: '6,500', tag: 'No Alcohol', tagMY: 'အရက်ကင်း', icon: '🌿', accent: 'var(--teal)' },
]

export default function Signatures({ lang }: { lang: 'en' | 'my' }) {
  return (
    <section id="signatures" className="section-pad" style={{ background: 'var(--blue)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative S */}
      <div style={{ position: 'absolute', right: -30, top: '50%', transform: 'translateY(-50%)', opacity: 0.06 }}>
        <svg width="200" height="340" viewBox="0 0 60 100">
          <path d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90" fill="none" stroke="#F0B429" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--yellow)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Signature Drinks</div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontStyle: 'italic' }}>
            {lang === 'en' ? 'Our Stories in a Glass' : <span className="myanmar">ဖန်ခွက်ထဲမှ ဇာတ်လမ်းများ</span>}
          </h2>
        </motion.div>

        <div className="sig-grid">
          {drinks.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '1.25rem', padding: '1.75rem', transition: 'all 0.25s', backdropFilter: 'blur(12px)', cursor: 'default' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.2rem' }}>{d.icon}</div>
                <span style={{ background: d.accent, color: '#fff', borderRadius: '999px', padding: '0.22rem 0.7rem', fontSize: '0.62rem', fontWeight: 700 }}
                  className={lang === 'my' ? 'myanmar' : ''}>
                  {lang === 'en' ? d.tag : d.tagMY}
                </span>
              </div>
              <div className="display" style={{ fontSize: '1.25rem', fontWeight: 700, fontStyle: 'italic', color: '#fff', marginBottom: '0.25rem' }}>{d.name}</div>
              <div className="myanmar" style={{ fontSize: '0.78rem', color: 'var(--yellow)', marginBottom: '0.75rem', opacity: 0.8 }}>{d.my}</div>
              <p className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {lang === 'en' ? d.desc : d.descMY}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="display" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--yellow)' }}>{d.price} <span style={{ fontSize: '0.7rem', fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>MMK</span></span>
                <a href="#reserve" style={{ background: 'var(--yellow)', color: '#0D1A2A', padding: '0.4rem 0.9rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 700 }}>
                  {lang === 'en' ? 'Order' : 'မှာရန်'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
