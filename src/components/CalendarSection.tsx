const WEDDING_MONTH = 9; // September
const WEDDING_DAY = 19;
const WEDDING_YEAR = 2026;

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month - 1, 1).getDay();
}

export default function CalendarSection() {
  const daysInMonth = getDaysInMonth(WEDDING_YEAR, WEDDING_MONTH);
  const firstDay = getFirstDayOfMonth(WEDDING_YEAR, WEDDING_MONTH);

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Pad to complete last week
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section className="w-full py-16 px-6 flex flex-col items-center bg-[#f7f7f7]">
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
        Calendar
      </p>

      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "22px",
          fontWeight: 400,
          color: "#3d2b1f",
          letterSpacing: "0.12em",
          marginBottom: "28px",
        }}
      >
        2026 . September
      </p>

      <div style={{ width: "100%", maxWidth: "360px" }}>
        {/* Day headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            marginBottom: "8px",
          }}
        >
          {DAYS.map((d, i) => (
            <div
              key={d}
              style={{
                textAlign: "center",
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "11px",
                letterSpacing: "0.05em",
                color: i === 0 ? "#c9968a" : i === 6 ? "#7a9ac9" : "#a08070",
                paddingBottom: "8px",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            rowGap: "4px",
          }}
        >
          {cells.map((day, i) => {
            const isWedding = day === WEDDING_DAY;
            const col = i % 7;
            const isSun = col === 0;
            const isSat = col === 6;

            return (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "6px 0",
                  position: "relative",
                }}
              >
                {day !== null && (
                  <>
                    {isWedding && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "#c9a87c",
                        }}
                      />
                    )}
                    <span
                      style={{
                        position: "relative",
                        zIndex: 1,
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "15px",
                        fontWeight: isWedding ? 600 : 400,
                        color: isWedding
                          ? "#ffffff"
                          : isSun
                            ? "#c9968a"
                            : isSat
                              ? "#7a9ac9"
                              : "#3d2b1f",
                        lineHeight: "32px",
                        display: "inline-block",
                        width: "32px",
                      }}
                    >
                      {day}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Wedding day label */}
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#c9a87c",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "12px",
            color: "#7a5c48",
            letterSpacing: "0.05em",
          }}
        >
          2026년 9월 19일 토요일 오전 11시 30분
        </p>
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
