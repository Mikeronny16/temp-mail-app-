"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Beat({
  children,
  className = "",
  align = "center",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    gsap.fromTo(
      words,
      { opacity: 0, filter: "blur(12px)", y: 24 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          end: "top 35%",
          scrub: true,
        },
      }
    );
  }, { scope: ref });

  const justify =
    align === "left" ? "justify-start text-left"
    : align === "right" ? "justify-end text-right"
    : "justify-center text-center";

  const content =
    typeof children === "string"
      ? children.split(" ").map((w, i) => (
          <span key={i} data-word className="inline-block">
            {w}&nbsp;
          </span>
        ))
      : children;

  return (
    <div className={`pointer-events-none flex min-h-svh items-center px-6 ${justify} ${className}`} style={style}>
      <div ref={ref} className="max-w-3xl" style={{ textWrap: "balance" } as React.CSSProperties}>
        {content}
      </div>
    </div>
  );
}
