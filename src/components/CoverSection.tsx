"use client";

import Image from "next/image";

export default function CoverSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
          alt="Andy and Kelly"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
      </div>

      {/* Text overlay */}
      <div className="relative z-10 w-full text-center pb-16 px-6 text-white">
        <p
          className="animate-fade-in-up animate-delay-200"
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "12px",
          }}
        >
          WEDDING INVITATION
        </p>

        <h1
          className="animate-fade-in-up animate-delay-400"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(40px, 10vw, 72px)",
            fontWeight: 300,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "8px",
          }}
        >
          Andy
          <span style={{ margin: "0 16px", fontWeight: 300 }}>&</span>
          Kelly
        </h1>

        <div
          className="animate-fade-in-up animate-delay-600"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(255,255,255,0.6)",
            margin: "16px auto",
          }}
        />

        <p
          className="animate-fade-in-up animate-delay-800"
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "14px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          2026 · 09 · 12 · SAT
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 8l5 5 5-5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
