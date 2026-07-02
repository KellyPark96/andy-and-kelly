import Image from "next/image";
import KakaoShareButton from "./KakaoShareButton";

export default function FooterSection() {
  return (
    <footer className="w-full pt-20 pb-10 px-6 flex flex-col items-center text-center mb-30">
      <Image
        src="/mainLogo.svg"
        alt="Andy & Kelly"
        width={400}
        height={400}
        style={{ marginBottom: "32px" }}
      />

      <KakaoShareButton />

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
        2026 · 09 · 19<br />
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
        Developed by Kyeongeun Park<br />
        Designed by Kyeongeun Park
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
