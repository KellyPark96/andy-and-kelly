export default function FooterSection() {
  return (
    <footer className="w-full py-20 px-6 flex flex-col items-center text-center">
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(28px, 7vw, 42px)",
          fontWeight: 300,
          letterSpacing: "0.1em",
          color: "#3d2b1f",
          marginBottom: "6px",
        }}
      >
        Andy
      </h2>

      <div
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "20px",
          fontStyle: "italic",
          color: "#c9a87c",
          margin: "4px 0",
        }}
      >
        &amp;
      </div>

      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(28px, 7vw, 42px)",
          fontWeight: 300,
          letterSpacing: "0.1em",
          color: "#3d2b1f",
          marginBottom: "32px",
        }}
      >
        Kelly
      </h2>

      <div
        style={{
          width: "40px",
          height: "1px",
          background: "#e8d5c4",
          marginBottom: "20px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-noto), sans-serif",
          fontSize: "12px",
          color: "#c9a87c",
          letterSpacing: "0.15em",
        }}
      >
        2026 · 09 · 19
      </p>

      <p
        style={{
          fontFamily: "var(--font-noto), sans-serif",
          fontSize: "11px",
          color: "#c0a898",
          marginTop: "32px",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 Andy &amp; Kelly. All rights reserved.
      </p>
    </footer>
  );
}
