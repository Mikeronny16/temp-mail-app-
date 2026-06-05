"use client";

import ScrollImageSequence from "./ScrollImageSequence";
import { Beat } from "./ScrollTextReveal";

type Props = {
  framesPath?: string;
  frameCount?: number;
  posterSrc?: string;
  brand?: string;
  tagline?: string;
  tagline2?: string;
  tagline3?: string;
};

export default function HeroSequence({
  framesPath = "/sequence/hero",
  frameCount = 118,
  posterSrc = "/posters/hero.webp",
  brand = "LUXE AUTO",
  tagline = "Engineered to be remembered",
  tagline2 = "Performance without compromise",
  tagline3 = "Where luxury meets precision",
}: Props) {
  return (
    <ScrollImageSequence
      basePath={framesPath}
      frameCount={frameCount}
      pattern="frame-{n}.webp"
      heightVh={400}
      fallbackSrc={posterSrc}
      className=""
    >
      {/* Brand wordmark */}
      <div className="pointer-events-none absolute left-6 top-6 z-20 flex items-center gap-3">
        <span
          className="tracking-[0.35em] text-sm font-medium"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          {brand}
        </span>
      </div>

      {/* Nav links */}
      <nav className="pointer-events-auto absolute right-6 top-6 z-20 hidden gap-8 md:flex">
        {["Models", "Configure", "Book"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-widest uppercase transition-colors hover:opacity-100 opacity-60"
            style={{ color: "var(--text)" }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Text beats layered on the pinned canvas */}
      <div className="absolute inset-0 z-10">
        <Beat
          className="text-[clamp(2.5rem,7vw,6rem)] font-medium leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" } as React.CSSProperties}
          align="center"
        >
          {tagline}
        </Beat>
        <Beat
          className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" } as React.CSSProperties}
          align="left"
        >
          {tagline2}
        </Beat>
        <Beat
          className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" } as React.CSSProperties}
          align="right"
        >
          {tagline3}
        </Beat>
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(120% 80% at 50% 60%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Scroll hint */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-8 w-px animate-pulse" style={{ background: "var(--accent)" }} />
      </div>
    </ScrollImageSequence>
  );
}
