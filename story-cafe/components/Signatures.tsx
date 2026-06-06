'use client'
import { motion } from 'framer-motion'

const drinks = [
  { name: 'Ex Girlfriend', my: 'ဟောင်းငယ်ချစ်သူ', desc: 'Sweet on the outside, bitter in the end. Brown sugar espresso with salted caramel cream.', descMY: 'ပြင်ပမှာချိုပြီး အဆုံးတွင် ခါးသော — ဆားငန် caramel cream နှင့် brown sugar espresso', price: '7,000', tag: 'Bestseller', tagMY: 'အရောင်းရဆုံး', icon: '💔', color: 'var(--terra)' },
  { name: 'Sooper Strawberry', my: 'ဆောပါ စတော်ဘယ်ရီ', desc: 'Blended fresh strawberry smoothie with cream top. Cold, refreshing, and dangerously pink.', descMY: 'Fresh strawberry smoothie, cream top ဖြင့် — ခေတ်ဆန်သော နီညိုရောင် အချိုရည်', price: '8,000', tag: 'Fan Fave', tagMY: 'အားလုံးနှစ်သက်', icon: '🍓', color: '#C0416A' },
  { name: 'Still Old Gin', my: 'ဟောင်းနွမ်းသော Gin', desc: 'Alcohol-free. Elderflower tonic, cucumber, mint. Like a warm afternoon that never left.', descMY: 'အရက်မပါ — elderflower tonic, cucumber, mint ဖြင့် — နွေးထွေးသော မွန်းလွဲပိုင်းကဲ့သို့', price: '6,500', tag: 'No Alcohol', tagMY: 'အရက်ကင်း', icon: '🌿', color: 'var(--green)' },
]

export default function Signatures({ lang }: { lang: 'en' | 'my' }) {
  return (
    <section id="signatures" className="section-pad" style={{ background: 'var(--surface2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--terra)', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Signature Drinks</div>
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)', fontStyle: 'italic' }}>
            {lang === 'en' ? 'Our Stories in a Glass' : <span className="myanmar">ဖန်ခွက်ထဲမှ ဇာတ်လမ်းများ</span>}
          </h2>
        </motion.div>

        <div className="sig-grid">
          {drinks.map((d, i) => (
            <motion.div key={d.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 16px 44px rgba(28,17,8,0.12)' }}
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '1.25rem', padding: '1.75rem', transition: 'all 0.25s', boxShadow: '0 4px 20px rgba(28,17,8,0.06)', cursor: 'default' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.2rem' }}>{d.icon}</div>
                <span style={{ background: d.color, color: '#fff', borderRadius: '999px', padding: '0.22rem 0.7rem', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.07em' }}
                  className={lang === 'my' ? 'myanmar' : ''}>
                  {lang === 'en' ? d.tag : d.tagMY}
                </span>
              </div>
              <div className="display" style={{ fontSize: '1.25rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--text)', marginBottom: '0.25rem' }}>{d.name}</div>
              <div className="myanmar" style={{ fontSize: '0.78rem', color: d.color, marginBottom: '0.75rem' }}>{d.my}</div>
              <p className={lang === 'my' ? 'myanmar' : ''} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {lang === 'en' ? d.desc : d.descMY}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="display" style={{ fontSize: '1.1rem', fontWeight: 700, color: d.color }}>{d.price} <span style={{ fontSize: '0.7rem', fontWeight: 400, color: 'var(--text-muted)' }}>MMK</span></span>
                <a href="#reserve" style={{ background: d.color, color: '#fff', padding: '0.4rem 0.9rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 600 }}>
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
