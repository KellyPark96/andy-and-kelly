"use client";

type Person = {
  role: string;
  nameKo: string;
  nameEn: string;
  parents: string;
  phone: string;
};

const people: Person[] = [
  {
    role: "신랑",
    nameKo: "송범준",
    nameEn: "SONG BEOM JUN",
    parents: "송창의 · 김선영의 장남",
    phone: "010-1234-5678",
  },
  {
    role: "신부",
    nameKo: "박경은",
    nameEn: "PARK KYEONG EUN",
    parents: "박범준 · 김경임의 장녀",
    phone: "010-8765-4321",
  },
];

export default function EventDetailsSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center text-center">
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
          September 19, 2026
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
          토요일 오전 11시 30분
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
          아연당
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
          AYEONDANG
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#a08070",
            lineHeight: 1.8,
          }}
        >
          경기도 성남시 분당구
          <br />
          판교백현로 55-7
        </p>
      </div>

      {/* Couple names card */}
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          border: "1px solid #e8d5c4",
          padding: "24px 16px",
          marginTop: "8px",
        }}
      >
        <div className="flex justify-around items-start">
          {people.map((person, i) => (
            <div key={i} className="text-center" style={{ flex: 1 }}>
              <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", letterSpacing: "0.15em", marginBottom: "6px" }}>{person.role}</p>
              <p style={{ fontFamily: "var(--font-noto-serif), serif", fontSize: "16px", color: "#3d2b1f", fontWeight: 600 }}>{person.nameKo}</p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "14px", color: "#7a5c48", letterSpacing: "0.05em" }}>{person.nameEn}</p>
              <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "11px", color: "#a08070", marginTop: "4px", marginBottom: "12px" }}>{person.parents}</p>
              {/* Contact buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                <a
                  href={`tel:${person.phone}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    border: "1px solid #e8d5c4",
                    borderRadius: "50%",
                    background: "#fdf6ee",
                    color: "#7a5c48",
                    textDecoration: "none",
                  }}
                  aria-label={`${person.nameKo}에게 전화`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href={`sms:${person.phone}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    border: "1px solid #e8d5c4",
                    borderRadius: "50%",
                    background: "#fdf6ee",
                    color: "#7a5c48",
                    textDecoration: "none",
                  }}
                  aria-label={`${person.nameKo}에게 문자`}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
