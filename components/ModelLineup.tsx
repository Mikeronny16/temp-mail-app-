"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Model = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  hex: string;
};

const DEFAULT_MODELS: Model[] = [
  { slug: "gt",      name: "GT 63 S",       tagline: "Gran Turismo",       price: "from 380,000,000 MMK", hex: "#1a1a1a" },
  { slug: "s-class", name: "S 580",          tagline: "The flagship sedan", price: "from 420,000,000 MMK", hex: "#111827" },
  { slug: "gle",     name: "GLE 53 AMG",     tagline: "Sport utility",      price: "from 290,000,000 MMK", hex: "#0d1b2a" },
];

export default function ModelLineup({ models = DEFAULT_MODELS }: { models?: Model[] }) {
  return (
    <section id="models" style={{ background: "var(--bg)", padding: "6rem 1.5rem" }}>
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--text)",
          }}
        >
          The lineup
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((m) => (
            <Link key={m.slug} href={`/models/${m.slug}`} className="group block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-xl"
                style={{ border: "1px solid var(--line)", background: "var(--bg-elev)" }}
              >
                {/* Car image placeholder */}
                <div
                  className="aspect-[4/3] overflow-hidden relative"
                  style={{
                    background: `radial-gradient(ellipse at center, ${m.hex} 0%, #050506 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest opacity-30" style={{ color: "var(--text)" }}>
                      {m.name}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(227,24,55,0.08)" }}
                  />
                </div>

                <div className="flex items-end justify-between p-5">
                  <div>
                    <div
                      className="text-xl"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                    >
                      {m.name}
                    </div>
                    <div className="text-sm mt-0.5" style={{ color: "var(--text-dim)" }}>
                      {m.tagline}
                    </div>
                    <div
                      className="mt-2 text-xs uppercase tracking-widest"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {m.price}
                    </div>
                  </div>
                  <span
                    className="text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--accent)" }}
                  >
                    View →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
