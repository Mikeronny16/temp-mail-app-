"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const MODELS = ["GT 63 S", "S 580", "GLE 53 AMG"];

export default function TestDriveForm() {
  const [data, setData] = useState({
    name: "", phone: "", model: MODELS[0], preferred_date: "", note: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const set = (k: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = async () => {
    if (!data.name.trim() || !data.phone.trim()) { setStatus("error"); return; }
    setStatus("sending");
    const { error } = await supabase.from("test_drive_bookings").insert({
      name: data.name.trim(),
      phone: data.phone.trim(),
      model: data.model,
      preferred_date: data.preferred_date || null,
      note: data.note.trim() || null,
    });
    setStatus(error ? "error" : "done");
  };

  const inp =
    "w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors";
  const inpStyle = {
    background: "var(--bg-elev)",
    border: "1px solid var(--line)",
    color: "var(--text)",
  };

  if (status === "done") {
    return (
      <section id="book" style={{ background: "var(--bg)", padding: "7rem 1.5rem" }} className="text-center">
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,4vw,3rem)", color: "var(--text)" }}>
          Thank you
        </h2>
        <p className="mx-auto mt-4 max-w-md" style={{ color: "var(--text-dim)" }}>
          We&apos;ve received your request. Our team will contact you on Viber/Telegram shortly.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://t.me/yourhandle" className="text-sm underline" style={{ color: "var(--accent)" }}>Telegram</a>
          <a href="viber://chat?number=%2B95XXXXXXXXX" className="text-sm underline" style={{ color: "var(--accent)" }}>Viber</a>
        </div>
      </section>
    );
  }

  return (
    <section id="book" style={{ background: "var(--bg)", padding: "7rem 1.5rem" }}>
      <div className="mx-auto max-w-xl">
        <h2
          className="mb-2"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,4vw,3rem)", color: "var(--text)" }}
        >
          Book a test drive
        </h2>
        <p className="mb-10 text-sm" style={{ color: "var(--text-dim)" }}>
          Leave your details — we&apos;ll reach out to arrange a visit.
        </p>

        <div className="space-y-4">
          <input className={inp} style={inpStyle} placeholder="Your name" value={data.name} onChange={set("name")} />
          <input className={inp} style={inpStyle} placeholder="Phone (Viber / Telegram)" value={data.phone} onChange={set("phone")} />
          <select className={inp} style={inpStyle} value={data.model} onChange={set("model")}>
            {MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <input className={inp} style={inpStyle} type="date" value={data.preferred_date} onChange={set("preferred_date")} />
          <textarea className={inp} style={inpStyle} rows={3} placeholder="Anything else? (optional)" value={data.note} onChange={set("note")} />

          {status === "error" && (
            <p className="text-sm" style={{ color: "#f87171" }}>
              Please enter at least your name and phone number.
            </p>
          )}

          <button
            onClick={submit}
            disabled={status === "sending"}
            className="w-full rounded-lg px-6 py-3 text-sm font-medium transition-opacity disabled:opacity-60"
            style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
          >
            {status === "sending" ? "Sending…" : "Request test drive"}
          </button>
        </div>

        {/* Payment info — offline, Myanmar-specific */}
        <div
          className="mt-10 rounded-lg p-5 text-sm"
          style={{ border: "1px solid var(--line)", background: "var(--bg-elev)", color: "var(--text-dim)" }}
        >
          <div className="mb-2 font-medium" style={{ color: "var(--text)" }}>Reservation &amp; deposit</div>
          Deposits are arranged after contact via{" "}
          <span style={{ color: "var(--text)" }}>KBZPay</span>,{" "}
          <span style={{ color: "var(--text)" }}>Wave Money</span>, or{" "}
          <span style={{ color: "var(--text)" }}>MMQR</span>.
          International buyers: USDT on request. No online card payment required.
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--line)" }} lang="my">
            <span className="text-xs" style={{ fontFamily: "var(--font-myanmar)" }}>
              ငွေပေးချေမှုအတွက် KBZPay၊ Wave Money သို့မဟုတ် MMQR ကို ဆက်သွယ်ပြီးနောက် စီစဉ်ပါမည်။
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
