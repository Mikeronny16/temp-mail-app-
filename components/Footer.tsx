"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", padding: "4rem 1.5rem 3rem" }}>
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3">
        <div>
          <div
            className="mb-4 tracking-[0.3em] text-sm"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            LUXE AUTO
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Premium automotive experience in Myanmar.
            Where performance meets luxury.
          </p>
          <p className="mt-2 text-xs" style={{ color: "var(--text-dim)", fontFamily: "var(--font-myanmar)" }} lang="my">
            မြန်မာနိုင်ငံရှိ အဆင့်မြင့် ကားဆိုင်
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
            Showroom
          </div>
          <address className="not-italic text-sm space-y-1" style={{ color: "var(--text-dim)" }}>
            <p style={{ color: "var(--text)" }}>Yangon, Myanmar</p>
            <p>Mon – Sat, 9am – 6pm</p>
            <p>+95 9 XXX XXX XXX</p>
          </address>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
            Connect
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Viber", href: "viber://chat?number=%2B95XXXXXXXXX" },
              { label: "Telegram", href: "https://t.me/yourhandle" },
              { label: "Facebook", href: "https://m.me/yourpage" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm transition-colors"
                style={{ color: "var(--text-dim)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-12 max-w-6xl flex flex-col md:flex-row justify-between gap-4 text-xs"
        style={{ borderTop: "1px solid var(--line)", paddingTop: "2rem", color: "var(--text-dim)" }}
      >
        <span>© 2024 Luxe Auto. All rights reserved.</span>
        <span>No online card payment — KBZPay / Wave Money / MMQR / USDT</span>
      </div>
    </footer>
  );
}
