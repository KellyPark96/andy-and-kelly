"use client";

import Image from "next/image";

export default function CoverSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* 3:4 image */}
      <div className="relative w-4/5 overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <Image
          src="/photos/01.jpg"
          alt="Andy and Kelly"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Text below image */}
      <div className="w-full text-center mt-8 px-6">
        <p
          className="animate-fade-in-up animate-delay-200"
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "#a08070",
            marginBottom: "10px",
          }}
        >
          WEDDING INVITATION
        </p>

        <h1
          className="animate-fade-in-up animate-delay-400"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(36px, 9vw, 64px)",
            fontWeight: 300,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            color: "#3d2b1f",
            marginBottom: "6px",
          }}
        >
          Andy
          <span style={{ margin: "0 14px", fontWeight: 300 }}>&</span>
          Kelly
        </h1>

        <div
          className="animate-fade-in-up animate-delay-600"
          style={{
            width: "36px",
            height: "1px",
            background: "#c9a87c",
            margin: "12px auto",
          }}
        />

        <p
          className="animate-fade-in-up animate-delay-800"
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            letterSpacing: "0.15em",
            color: "#7a5c48",
          }}
        >
          2026 · 09 · 19 · SAT
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 8l5 5 5-5" stroke="#c9a87c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
