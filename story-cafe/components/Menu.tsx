'use client'
import { motion } from 'framer-motion'

const categories = [
  { title: 'Coffee', titleMY: 'ကော်ဖီ', icon: '☕', items: [
    { name: 'Espresso', my: 'အက်စပရက်ဆို', price: '3,500' },
    { name: 'Americano', my: 'အမေရိကာနို', price: '4,000' },
    { name: 'Cappuccino', my: 'ကပ်ပူချီနို', price: '5,000' },
    { name: 'Latte', my: 'လတ်တေ', price: '5,000' },
    { name: 'Cold Brew', my: 'ကောလ်ဒ်ဘရူး', price: '5,500' },
    { name: 'Ex Girlfriend ★', my: 'ဟောင်းငယ်ချစ်သူ ★', price: '7,000' },
  ]},
  { title: 'Non-Coffee', titleMY: 'ကော်ဖီမပါ', icon: '🫖', items: [
    { name: 'Matcha Latte', my: 'မတ်ချာလတ်တေ', price: '5,500' },
    { name: 'Thai Tea', my: 'ထိုင်းဇာ', price: '4,500' },
    { name: 'Sooper Strawberry ★', my: 'ဆောပါ စတော်ဘယ်ရီ ★', price: '8,000' },
    { name: 'Still Old Gin ★', my: 'ဟောင်းနွမ်းသော Gin ★', price: '6,500' },
    { name: 'Fresh Juice', my: 'သစ်သီးရည်', price: '4,000' },
    { name: 'Sparkling Water', my: 'ဆော်ဒါရေ', price: '2,500' },
  ]},
  { title: 'Food', titleMY: 'အစားအစာ', icon: '🍳', items: [
    { name: 'Club Sandwich', my: 'ကလပ် ဆင်းဒ်ဝစ်', price: '8,500' },
    { name: 'Egg Toast', my: 'ဥတော့စ်', price: '5,000' },
    { name: 'Avocado Toast', my: 'အာဗိုကာဒိုတော့စ်', price: '7,000' },
    { name: 'Pasta Carbonara', my: 'ပါစတာ ကာဘိုနာရာ', price: '9,000' },
    { name: 'French Fries ★', my: 'ကြာမှောင်ကြော် ★', price: '10,000' },
    { name: 'Grilled Chicken Rice', my: 'ကြက်ကင်ထမင်း', price: '11,000' },
  ]},
  { title: 'Desserts', titleMY: 'မုန့်အချိုများ', icon: '🍰', items: [
    { name: 'Tiramisu', my: 'တီရာမီဆူ', price: '7,500' },
    { name: 'Waffle', my: 'ဝပ်ဖယ်', price: '6,000' },
    { name: 'Cheesecake', my: 'ချိစ်ကိတ်', price: '6,500' },
    { name: 'Brownie', my: 'ဘရောင်နီ', price: '5,500' },
    { name: 'Croissant', my: 'ခရိုင်ဆင့်', price: '4,500' },
    { name: 'Cookie (3pcs)', my: 'ကွတ်ကီ (၃ ချပ်)', price: '3,500' },
  ]},
]

export default function Menu({ lang }: { lang: 'en' | 'my' }) {
  return (
    <section id="menu" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Magazine header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} style={{ marginBottom: '3rem', borderBottom: '2px solid var(--blue)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>The Story Cafe · No.207 Parami Road · South Okkalapa</div>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--blue)', fontStyle: 'italic', lineHeight: 1 }}>
                {lang === 'en' ? 'Our Menu' : <span className="myanmar">ကျွန်တော်တို့ မီနူး</span>}
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="30" viewBox="0 0 60 100"><path d="M 45 10 C 45 10, 10 25, 30 50 C 50 75, 15 90, 15 90" fill="none" stroke="var(--yellow)" strokeWidth="5" strokeLinecap="round" /></svg>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {lang === 'en' ? '★ = Signature drinks · Prices in MMK' : <span className="myanmar">★ = signature · ကျပ်ဖြင့်</span>}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-col newspaper grid */}
        <div className="mag-grid" style={{ border: '1px solid var(--border)', borderRadius: '1.25rem', overflow: 'hidden', background: 'var(--white)' }}>
          {categories.map((cat, ci) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.08 }}
              style={{ padding: '2rem', borderRight: ci % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: ci < 2 ? '1px solid var(--border)' : 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-dim)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '0.6rem', background: 'var(--blue-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{cat.icon}</div>
                <div>
                  <div className="display" style={{ fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--blue)' }}>{cat.title}</div>
                  <div className="myanmar" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{cat.titleMY}</div>
                </div>
              </div>

              {cat.items.map((item, ii) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '0.55rem 0', borderBottom: ii < cat.items.length - 1 ? '1px dashed var(--border-dim)' : 'none' }}>
                  <div>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: item.name.includes('★') ? 600 : 400 }}>{item.name}</span>
                    <div className="myanmar" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.04rem' }}>{item.my}</div>
                  </div>
                  <span className="display" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue)', flexShrink: 0, marginLeft: '1rem' }}>{item.price}</span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem 1.5rem', background: 'var(--blue-pale)', border: '1px solid var(--border)', borderRadius: '0.75rem', fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
          {lang === 'en'
            ? '📍 No.207 Parami Road, South Okkalapa · Open daily 8AM – 10PM · @thestorycafe.88'
            : <span className="myanmar">📍 ပါရမီလမ်း ၂၀၇ · တောင်ဥက္ကလာ · မနက် ၈ – ည ၁၀ နာရီ · @thestorycafe.88</span>}
        </div>
      </div>
    </section>
  )
}
