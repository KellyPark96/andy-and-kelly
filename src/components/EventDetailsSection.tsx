export default function EventDetailsSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center text-center bg-[#fdf6ee]">
      {/* Date */}
      <div className="mb-10">
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#c9a87c",
            marginBottom: "12px",
            textTransform: "uppercase",
          }}
        >
          Date
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(28px, 7vw, 44px)",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "#3d2b1f",
          }}
        >
          September 12, 2026
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto-serif), sans-serif",
            fontSize: "13px",
            color: "#7a5c48",
            marginTop: "6px",
            letterSpacing: "0.1em",
          }}
        >
          토요일 오후 1시 30분
        </p>
      </div>

      {/* Decorative line */}
      <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #c9a87c, transparent)", marginBottom: "10px" }} />
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c9a87c", marginBottom: "10px" }} />
      <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, #c9a87c)", marginBottom: "20px" }} />

      {/* Venue */}
      <div className="mb-10">
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#c9a87c",
            marginBottom: "12px",
            textTransform: "uppercase",
          }}
        >
          Venue
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto-serif), serif",
            fontSize: "18px",
            fontWeight: 600,
            color: "#3d2b1f",
            letterSpacing: "0.05em",
            marginBottom: "8px",
          }}
        >
          그랜드 하얏트 서울
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "15px",
            color: "#7a5c48",
            marginBottom: "4px",
            letterSpacing: "0.05em",
          }}
        >
          Grand Hyatt Seoul
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#a08070",
            lineHeight: 1.8,
          }}
        >
          서울특별시 용산구 소월로 322
          <br />
          그랜드볼룸 2층
        </p>
      </div>

      {/* Couple names card */}
      <div
        style={{
          width: "100%",
          maxWidth: "320px",
          border: "1px solid #e8d5c4",
          padding: "24px 16px",
          marginTop: "8px",
        }}
      >
        <div className="flex justify-around items-center">
          <div className="text-center">
            <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", letterSpacing: "0.15em", marginBottom: "6px" }}>신랑</p>
            <p style={{ fontFamily: "var(--font-noto-serif), serif", fontSize: "16px", color: "#3d2b1f", fontWeight: 600 }}>앤디</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "14px", color: "#7a5c48", letterSpacing: "0.05em" }}>Andy</p>
            <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", marginTop: "4px" }}>김민준 · 이수진의 아들</p>
          </div>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, transparent, #e8d5c4, transparent)",
            }}
          />
          <div className="text-center">
            <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", letterSpacing: "0.15em", marginBottom: "6px" }}>신부</p>
            <p style={{ fontFamily: "var(--font-noto-serif), serif", fontSize: "16px", color: "#3d2b1f", fontWeight: 600 }}>켈리</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "14px", color: "#7a5c48", letterSpacing: "0.05em" }}>Kelly</p>
            <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", marginTop: "4px" }}>박재원 · 최유미의 딸</p>
          </div>
        </div>
      </div>
    </section>
  );
}
