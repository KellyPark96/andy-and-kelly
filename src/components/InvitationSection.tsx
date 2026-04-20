export default function InvitationSection() {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center text-center bg-[#fdf6ee]">
      <div className="section-divider mb-12" />

      <p
        style={{
          fontFamily: "var(--font-noto-serif), serif",
          fontSize: "13px",
          letterSpacing: "0.3em",
          color: "#c9a87c",
          marginBottom: "20px",
        }}
      >
        우 리 , 결 혼 합 니 다
      </p>

      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(32px, 8vw, 52px)",
          fontWeight: 300,
          letterSpacing: "0.05em",
          color: "#3d2b1f",
          lineHeight: 1.2,
          marginBottom: "32px",
        }}
      >
        Andy<span style={{ fontStyle: "italic", margin: "0 12px" }}>and</span>Kelly
      </h2>

      <div className="dot-divider mb-10" style={{ width: "100%", maxWidth: "200px" }}>
        <span style={{ color: "#c9a87c", fontSize: "18px" }}>✦</span>
      </div>

      <div
        style={{
          maxWidth: "400px",
          fontFamily: "var(--font-noto), sans-serif",
          fontSize: "14px",
          lineHeight: 2.2,
          color: "#7a5c48",
          wordBreak: "keep-all",
        }}
      >
        <p>
          서로를 바라보며 함께 걸어온 시간들이 모여
          <br />
          이제 하나의 길이 되었습니다.
        </p>
        <br />
        <p>
          두 사람의 사랑이 시작되는 이 날,
          <br />
          소중한 분들을 초대합니다.
        </p>
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
