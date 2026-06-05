"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Spec = { label: string; labelMy?: string; value: number; suffix?: string; decimals?: number };

const DEFAULT_SPECS: Spec[] = [
  { label: "Horsepower", labelMy: "မော်တာ အင်အား", value: 503, suffix: " hp" },
  { label: "0 – 100 km/h", labelMy: "အရှိန်တင်", value: 3.4, suffix: " s", decimals: 1 },
  { label: "Range", labelMy: "ခရီးကွာဆေ", value: 612, suffix: " km" },
  { label: "Top speed", labelMy: "အမြင့်ဆုံး အရှိန်", value: 250, suffix: " km/h" },
];

export default function SpecScroller({ specs = DEFAULT_SPECS }: { specs?: Spec[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const nums = root.current?.querySelectorAll<HTMLElement>("[data-num]") ?? [];
    nums.forEach((el) => {
      const target = parseFloat(el.dataset.num || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 85%", end: "top 45%", scrub: true },
        onUpdate: () => {
          el.textContent = obj.v.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          });
        },
      });
    });
  }, { scope: root });

  return (
    <section id="specs" ref={root} style={{ background: "var(--bg)", padding: "7rem 1.5rem" }}>
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-16 text-xs uppercase tracking-[0.3em] text-center"
          style={{ color: "var(--text-dim)" }}
        >
          By the numbers
        </p>
        <div className="grid grid-cols-2 gap-y-16 md:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="tabular-nums leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 9vw, 7rem)",
                  color: "var(--text)",
                }}
              >
                <span data-num={s.value} data-decimals={s.decimals ?? 0}>0</span>
                <span style={{ color: "var(--accent)" }}>{s.suffix}</span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-dim)" }}>
                {s.label}
              </div>
              {s.labelMy && (
                <div className="mt-1 text-xs" style={{ color: "var(--text-dim)", fontFamily: "var(--font-myanmar)" }} lang="my">
                  {s.labelMy}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
