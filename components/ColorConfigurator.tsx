"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Color = { name: string; hex: string; poster: string };

const HERO = "/posters/hero.webp";
const DEFAULT_COLORS: Color[] = [
  { name: "Polar White", hex: "#e8e8e6", poster: HERO },
  { name: "Crimson Red", hex: "#8b0000", poster: HERO },
  { name: "Midnight Blue", hex: "#0d1b3e", poster: HERO },
  { name: "Obsidian Black", hex: "#0c0c0d", poster: HERO },
];

export default function ColorConfigurator({ colors = DEFAULT_COLORS }: { colors?: Color[] }) {
  const [active, setActive] = useState(0);
  const color = colors[active];

  return (
    <section id="configure" style={{ background: "var(--bg)", padding: "6rem 1.5rem" }}>
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text)",
          }}
        >
          Make it yours
        </h2>

        <div
          className="relative aspect-video w-full overflow-hidden rounded-xl"
          style={{ border: "1px solid var(--line)", background: "var(--bg-elev)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={color.name}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Real car poster */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={color.poster}
                alt={`${color.name} finish`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Color tint overlay — simulates the paint on the white car.
                  Skipped for white so the original paint shows. */}
              {active !== 0 && (
                <div
                  className="absolute inset-0"
                  style={{ background: color.hex, mixBlendMode: "multiply", opacity: 0.78 }}
                />
              )}
              {/* Label */}
              <div className="absolute bottom-5 left-5 z-10">
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "var(--text)" }}
                >
                  {color.name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-4">
          {colors.map((c, i) => {
            const isActive = i === active;
            return (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                aria-label={c.name}
                aria-pressed={isActive}
                className="h-9 w-9 rounded-full transition-all duration-200"
                style={{
                  background: c.hex,
                  boxShadow: isActive
                    ? "0 0 0 2px var(--bg), 0 0 0 4px var(--accent)"
                    : "0 0 0 1px var(--line)",
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                }}
              />
            );
          })}
          <span className="ml-2 text-sm" style={{ color: "var(--text-dim)" }}>
            {color.name}
          </span>
        </div>
      </div>
    </section>
  );
}
