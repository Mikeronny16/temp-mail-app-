"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Color = { name: string; hex: string; poster: string };

const DEFAULT_COLORS: Color[] = [
  { name: "Obsidian Black", hex: "#0c0c0d", poster: "/posters/obsidian.webp" },
  { name: "Polar White", hex: "#e8e8e6", poster: "/posters/white.webp" },
  { name: "Crimson Red", hex: "#8b0000", poster: "/posters/crimson.webp" },
  { name: "Midnight Blue", hex: "#0d1b3e", poster: "/posters/blue.webp" },
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
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Placeholder gradient until real poster images are added */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, ${color.hex}44 0%, var(--bg) 70%)`,
                }}
              />
              <div className="relative z-10 text-center">
                <div
                  className="mb-2 text-xs uppercase tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  {color.name}
                </div>
                <div
                  className="h-20 w-20 mx-auto rounded-full border-4"
                  style={{ background: color.hex, borderColor: "var(--line)" }}
                />
                <p className="mt-4 text-sm" style={{ color: "var(--text-dim)" }}>
                  Add poster images to /public/posters/ to display the car
                </p>
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
