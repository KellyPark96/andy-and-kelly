export default function InvitationSection() {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center text-center bg-[#f7f7f7]">
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
      <div
        className="dot-divider mb-10"
        style={{ width: "100%", maxWidth: "200px" }}
      >
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
          textAlign: "center",
        }}
      >
        <p>
          한참을 돌아보아도 늘 곁에 있던 우리,
          <br />
          9월 가을날, 평생 짝꿍이 되려 합니다.
        </p>
        <br />
        <p>
          오랜 기간 사랑해온 만큼,
          <br />더 깊게 아끼며 살겠습니다.
        </p>
        <br />
        <p>저희의 잔치에 귀한 걸음 해주시길 바랍니다.</p>
      </div>

      <div
        style={{
          marginTop: "28px",
          fontFamily: "var(--font-noto-serif), serif",
          fontSize: "13px",
          color: "#a08070",
          lineHeight: 2,
          textAlign: "center",
          letterSpacing: "0.03em",
        }}
      >
        <p>
          송창의 · 김선영의 장남{" "}
          <strong style={{ color: "#7a5c48" }}>송범준</strong>
        </p>
        <p>
          박범준 · 김경임의 장녀{" "}
          <strong style={{ color: "#7a5c48" }}>박경은</strong>
        </p>
      </div>

    </section>
  );
}
