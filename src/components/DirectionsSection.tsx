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
      "6호선 이태원역 3번 출구 (도보 약 5분)",
      "4호선 삼각지역 12번 출구 (도보 약 10분)",
    ],
  },
  {
    icon: "🚌",
    title: "버스",
    lines: [
      "이태원역 정류장 하차",
      "간선: 405, 421, 10-1",
      "지선: 0015, 0016, 7011",
    ],
  },
  {
    icon: "🚗",
    title: "자가용",
    lines: [
      "그랜드 하얏트 서울 주차장 이용",
      "서울특별시 용산구 소월로 322",
      "네이버·카카오 지도: '그랜드 하얏트 서울' 검색",
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

      {/* Map placeholder */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          height: "200px",
          background: "#e8d5c4",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
          overflow: "hidden",
        }}
      >
        <a
          href="https://map.naver.com/v5/search/그랜드 하얏트 서울"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#7a5c48",
            textDecoration: "underline",
            textDecorationColor: "#c9a87c",
          }}
        >
          지도 보기 →
        </a>
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
          그랜드 하얏트 서울 그랜드볼룸
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#7a5c48",
            lineHeight: 1.8,
          }}
        >
          서울특별시 용산구 소월로 322
        </p>
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "13px",
            color: "#a08070",
            marginTop: "4px",
          }}
        >
          T. 02-797-1234
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
