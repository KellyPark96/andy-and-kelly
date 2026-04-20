import Image from "next/image";

export default function MessageSection() {
  return (
    <section className="w-full bg-[#fdf6ee]">
      {/* Second photo */}
      <div className="relative w-full" style={{ height: "clamp(280px, 60vw, 460px)" }}>
        <Image
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
          alt="Andy and Kelly"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Personal message */}
      <div className="py-20 px-6 flex flex-col items-center text-center">
        <div className="section-divider mb-12" />

        <p
          style={{
            fontFamily: "var(--font-noto), sans-serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#c9a87c",
            marginBottom: "20px",
          }}
        >
          INVITATION
        </p>

        <div
          style={{
            maxWidth: "380px",
            fontFamily: "var(--font-noto-serif), serif",
            fontSize: "14px",
            lineHeight: 2.4,
            color: "#5a3e30",
            wordBreak: "keep-all",
            textAlign: "center",
          }}
        >
          <p>
            서로의 눈을 바라보며
            <br />
            함께라면 어떤 길도 걸을 수 있다는 것을
            <br />
            알게 되었습니다.
          </p>
          <br />
          <p>
            웃음과 눈물을 나누고,
            <br />
            서로의 곁에 머물며
            <br />
            평생을 함께하기로 약속했습니다.
          </p>
          <br />
          <p>
            저희의 작은 시작을 함께 축복해 주세요.
          </p>
        </div>

        <div
          style={{
            marginTop: "32px",
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#c9a87c",
            letterSpacing: "0.1em",
          }}
        >
          Andy &amp; Kelly
        </div>

        <div className="section-divider mt-12" />
      </div>
    </section>
  );
}
