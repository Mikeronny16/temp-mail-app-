'use client'
import { useState, useEffect } from 'react'

const PASSWORD = 'coffeecultureygn'

type SiteData = {
  heroImg: string
  todaySpecial: string
  todayPrice: string
  galleryImgs: string[]
  visitCount: number
  lastVisits: { date: string; count: number }[]
}

const defaultData: SiteData = {
  heroImg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80',
  todaySpecial: 'Matcha Strawberry',
  todayPrice: '15,000 MMK',
  galleryImgs: [
    'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=500&q=80',
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
  ],
  visitCount: 1284,
  lastVisits: [
    { date: 'Mon', count: 142 }, { date: 'Tue', count: 198 }, { date: 'Wed', count: 167 },
    { date: 'Thu', count: 221 }, { date: 'Fri', count: 289 }, { date: 'Sat', count: 312 },
    { date: 'Sun', count: 205 },
  ],
}

function StatCard({ label, value, sub, color = 'var(--gold)' }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div style={{
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(201,168,76,0.04) 100%)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: '1rem', padding: '1.5rem',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.10)',
    }}>
      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>{label}</div>
      <div style={{ fontSize: '2rem', fontWeight: 700, color, fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>{value}</div>
      {sub && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{sub}</div>}
    </div>
  )
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{
          width: '100%', padding: '0.75rem 1rem',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '0.65rem', color: 'var(--text)', fontSize: '0.85rem',
          outline: 'none', fontFamily: 'inherit',
        }}
      />
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)
  const [data, setData] = useState<SiteData>(defaultData)
  const [saved, setSaved] = useState(false)
  const [tab, setTab] = useState<'analytics' | 'content'>('analytics')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cc_admin_data')
      if (stored) setData(JSON.parse(stored))
    }
  }, [])

  const login = () => {
    if (pw === PASSWORD) { setAuthed(true); setPwErr(false) }
    else { setPwErr(true) }
  }

  const save = () => {
    localStorage.setItem('cc_admin_data', JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const maxCount = Math.max(...data.lastVisits.map(v => v.count))

  if (!authed) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)', padding: '2rem',
      }}>
        <div style={{
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(201,168,76,0.04) 100%)',
          border: '1px solid rgba(255,255,255,0.11)',
          borderRadius: '1.5rem', padding: '3rem', width: '100%', maxWidth: 380,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>☕</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '0.5rem' }}>Admin Panel</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>Coffee Culture · Yangon</p>
          <input
            type="password" placeholder="Password" value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
            style={{
              width: '100%', padding: '0.85rem 1rem',
              backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${pwErr ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.10)'}`,
              borderRadius: '0.75rem', color: 'var(--text)', fontSize: '0.88rem',
              outline: 'none', fontFamily: 'inherit', marginBottom: '0.75rem', textAlign: 'center',
            }}
          />
          {pwErr && <div style={{ color: 'rgba(255,100,100,0.9)', fontSize: '0.75rem', marginBottom: '0.75rem' }}>Wrong password</div>}
          <button onClick={login} style={{
            width: '100%', padding: '0.9rem',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            color: '#07120A', border: 'none', borderRadius: '0.75rem',
            fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: '0 4px 20px rgba(201,168,76,0.3)',
          }}>Enter</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', maxWidth: 1100, margin: '0 auto 2.5rem' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'var(--gold)', fontStyle: 'italic' }}>Coffee Culture</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Admin Dashboard</div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="/" target="_blank" style={{
            padding: '0.5rem 1.1rem', borderRadius: '999px',
            backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            color: 'var(--text-muted)', fontSize: '0.78rem', textDecoration: 'none',
          }}>View Site ↗</a>
          <button onClick={() => setAuthed(false)} style={{
            padding: '0.5rem 1.1rem', borderRadius: '999px', background: 'transparent',
            border: '1px solid rgba(255,80,80,0.3)', color: 'rgba(255,100,100,0.7)',
            fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit',
          }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {(['analytics', 'content'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '0.5rem 1.4rem', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit',
              border: '1px solid',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              borderColor: tab === t ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.09)',
              background: tab === t ? 'linear-gradient(135deg, rgba(201,168,76,0.88), rgba(232,201,106,0.75))' : 'rgba(255,255,255,0.05)',
              color: tab === t ? '#07120A' : 'var(--text-muted)',
              fontSize: '0.82rem', fontWeight: tab === t ? 700 : 400,
              textTransform: 'capitalize',
            }}>{t}</button>
          ))}
        </div>

        {tab === 'analytics' && (
          <>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <StatCard label="Total Visits" value={data.visitCount.toLocaleString()} sub="All time" />
              <StatCard label="This Week" value="1,534" sub="+19% vs last week" color="var(--gold-light)" />
              <StatCard label="Today" value="127" sub="Still counting" />
              <StatCard label="Avg. Session" value="2m 14s" sub="Time on site" color="var(--gold-light)" />
            </div>

            {/* Bar chart */}
            <div style={{
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(201,168,76,0.03) 100%)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '1.25rem', padding: '1.75rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.09)',
              marginBottom: '2rem',
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Visitors — Last 7 Days</div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end', height: 140 }}>
                {data.lastVisits.map((v) => (
                  <div key={v.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{v.count}</div>
                    <div style={{
                      width: '100%', borderRadius: '4px 4px 0 0',
                      background: 'linear-gradient(to top, var(--gold), var(--gold-light))',
                      height: `${(v.count / maxCount) * 100}%`,
                      minHeight: 4,
                      boxShadow: '0 0 12px rgba(201,168,76,0.2)',
                      opacity: 0.85,
                    }} />
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{v.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top pages */}
            <div style={{
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '1.25rem', padding: '1.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Top Sections</div>
              {[
                { name: '#menu', views: 892, pct: 58 },
                { name: '#signatures', views: 645, pct: 42 },
                { name: '#gallery', views: 521, pct: 34 },
                { name: '#reserve', views: 318, pct: 21 },
                { name: '#location', views: 287, pct: 19 },
              ].map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.85rem' }}>
                  <div style={{ width: 120, fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{p.name}</div>
                  <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${p.pct}%`, height: '100%', background: 'linear-gradient(to right, var(--gold), var(--gold-light))', borderRadius: 3 }} />
                  </div>
                  <div style={{ width: 50, textAlign: 'right', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{p.views}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'content' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Today's Special */}
            <div style={{
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(255,255,255,0.04) 100%)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '1.25rem', padding: '1.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Today's Special</div>
              <Input label="Drink Name" value={data.todaySpecial} onChange={v => setData({ ...data, todaySpecial: v })} placeholder="e.g. Matcha Strawberry" />
              <Input label="Price" value={data.todayPrice} onChange={v => setData({ ...data, todayPrice: v })} placeholder="e.g. 15,000 MMK" />
              {/* Preview */}
              <div style={{
                backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem',
                padding: '0.85rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: '0.5rem', background: 'rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>☕</div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Today's Special</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{data.todaySpecial}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{data.todayPrice}</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div style={{
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '1.25rem', padding: '1.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Hero Image</div>
              <Input label="Image URL" value={data.heroImg} onChange={v => setData({ ...data, heroImg: v })} placeholder="https://..." />
              {data.heroImg && (
                <div style={{ borderRadius: '0.75rem', overflow: 'hidden', height: 140, marginTop: '0.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: '100%', height: '100%', background: `url("${data.heroImg}") center/cover`, filter: 'brightness(0.7)' }} />
                </div>
              )}
            </div>

            {/* Gallery Images */}
            <div style={{
              gridColumn: 'span 2',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '1.25rem', padding: '1.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Gallery Photos</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }}>
                {data.galleryImgs.map((img, i) => (
                  <div key={i}>
                    <div style={{ borderRadius: '0.65rem', overflow: 'hidden', height: 90, marginBottom: '0.4rem', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ width: '100%', height: '100%', background: `url("${img}") center/cover` }} />
                    </div>
                    <input value={img} onChange={e => {
                      const updated = [...data.galleryImgs]; updated[i] = e.target.value
                      setData({ ...data, galleryImgs: updated })
                    }} style={{
                      width: '100%', padding: '0.4rem 0.6rem', fontSize: '0.68rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '0.5rem', color: 'var(--text-muted)', outline: 'none', fontFamily: 'inherit',
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Save button */}
        {tab === 'content' && (
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={save} style={{
              background: saved ? 'rgba(80,200,120,0.15)' : 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              color: saved ? 'rgba(80,200,120,0.9)' : '#07120A',
              border: saved ? '1px solid rgba(80,200,120,0.3)' : 'none',
              padding: '0.85rem 2.5rem', borderRadius: '999px',
              fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: saved ? 'none' : '0 4px 20px rgba(201,168,76,0.3)',
              transition: 'all 0.3s',
            }}>
              {saved ? '✓ Saved!' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
