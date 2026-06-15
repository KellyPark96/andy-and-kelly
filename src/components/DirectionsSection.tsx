"use client";

type TransportItem = {
  icon: string;
  title: string;
  lines: string[];
};

const transportItems: TransportItem[] = [
  {
    icon: "🚇",
    title: "지하철",
    lines: [
      "신분당선 판교역 5번 출구 (택시 약 5분)",
      "분당선 서현역 1번 출구 (택시 약 10분)",
    ],
  },
  {
    icon: "🚌",
    title: "버스",
    lines: [
      "판교백현로 방면 하차",
      "광역: 9408, 9414",
      "직행: 500, 1005-1",
    ],
  },
  {
    icon: "🚗",
    title: "자가용",
    lines: [
      "아연당 주차장 이용 가능",
      "경기도 성남시 분당구 판교백현로 55-7",
      "네이버·카카오 지도: '아연당' 검색",
    ],
  },
];

export default function DirectionsSection() {
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center bg-[#f5ede3]">
      <div className="section-divider mb-12" />

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
        Directions
      </p>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "28px",
          fontWeight: 300,
          color: "#3d2b1f",
          letterSpacing: "0.1em",
          marginBottom: "32px",
        }}
      >
        오시는 길
      </h2>

      {/* Map image placeholder */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "200px",
          background: "#e8d5c4",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          overflow: "hidden",
          gap: "6px",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" fill="#a08070"/>
        </svg>
        <p style={{ fontFamily: "var(--font-noto), sans-serif", fontSize: "12px", color: "#a08070" }}>
          경기도 성남시 분당구 판교백현로 55-7
        </p>
      </div>

      {/* Map app buttons */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        {[
          {
            label: "네이버 지도",
            href: "naver-maps://place?name=아연당&lat=37.3943&lng=127.1098",
            fallback: "https://map.naver.com/v5/search/아연당",
            color: "#03C75A",
          },
          {
            label: "카카오맵",
            href: "kakaomap://place?name=아연당&lat=37.3943&lng=127.1098",
            fallback: "https://map.kakao.com/link/search/아연당",
            color: "#FAE100",
            textColor: "#3C1E1E",
          },
          {
            label: "T맵",
            href: "tmap://route?goalname=아연당&goaly=37.3943&goalx=127.1098",
            fallback: "https://tmap.co.kr",
            color: "#E8002D",
          },
        ].map(({ label, fallback, color, textColor }) => (
          <a
            key={label}
            href={fallback}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 4px",
              background: color,
              borderRadius: "4px",
              fontFamily: "var(--font-noto), sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              color: textColor ?? "#ffffff",
              textDecoration: "none",
              letterSpacing: "0.02em",
              textAlign: "center",
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Venue address */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          marginBottom: "32px",
          padding: "20px",
          border: "1px solid #e8d5c4",
          background: "#fdf6ee",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-noto-serif), serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#3d2b1f",
            marginBottom: "8px",
          }}
        >
          아연당 (AYEONDANG)
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#7a5c48",
            lineHeight: 1.8,
          }}
        >
          경기도 성남시 분당구 판교백현로 55-7
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#a08070",
            marginTop: "4px",
          }}
        >
          T. 031-000-0000
        </p>
      </div>

      {/* Transport options */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {transportItems.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "16px 20px",
              background: "#fdf6ee",
              border: "1px solid #e8d5c4",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <p
                style={{
                  fontFamily: "var(--font-noto), sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#3d2b1f",
                  letterSpacing: "0.05em",
                }}
              >
                {item.title}
              </p>
            </div>
            {item.lines.map((line, j) => (
              <p
                key={j}
                style={{
                  fontFamily: "var(--font-noto), sans-serif",
                  fontSize: "12px",
                  color: "#7a5c48",
                  lineHeight: 1.8,
                  paddingLeft: "24px",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
