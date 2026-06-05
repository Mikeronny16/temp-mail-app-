import HeroSequence from "@/components/HeroSequence";
import SpecScroller from "@/components/SpecScroller";
import ColorConfigurator from "@/components/ColorConfigurator";
import ModelLineup from "@/components/ModelLineup";
import TestDriveForm from "@/components/TestDriveForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Cinematic scroll hero */}
      <HeroSequence
        brand="LUXE AUTO"
        tagline="Engineered to be remembered"
        tagline2="Performance without compromise"
        tagline3="Where luxury meets precision"
      />

      {/* 2. Statement line */}
      <section
        style={{
          background: "var(--bg)",
          padding: "10rem 1.5rem",
          borderTop: "1px solid var(--line)",
        }}
      >
        <p
          className="mx-auto max-w-4xl text-center leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "var(--text)",
            textWrap: "balance",
          } as React.CSSProperties}
        >
          Every detail considered.{" "}
          <span style={{ color: "var(--accent)" }}>Every moment,</span>{" "}
          elevated.
        </p>
        <p
          className="mx-auto mt-6 max-w-xl text-center text-sm"
          style={{ color: "var(--text-dim)", fontFamily: "var(--font-myanmar)", lineHeight: 1.7 }}
          lang="my"
        >
          အသေးစိတ်တိုင်း ဂရုတစိုက် ရွေးချယ်ထားသည်။ ခဏတာတိုင်း သာယာမှုနဲ့ ပြည့်ဝသည်။
        </p>
      </section>

      {/* 3. Spec scroller */}
      <SpecScroller />

      {/* 4. Color configurator */}
      <ColorConfigurator />

      {/* 5. Model lineup */}
      <ModelLineup />

      {/* 6. Test drive form */}
      <TestDriveForm />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
