"use client";

import { useState } from "react";

type Account = {
  side: string;
  name: string;
  bank: string;
  number: string;
};

const groom: Account[] = [
  { side: "신랑", name: "송범준", bank: "국민은행", number: "123-456-789012" },
  { side: "신랑 부", name: "송창의", bank: "신한은행", number: "110-123-456789" },
  { side: "신랑 모", name: "김선영", bank: "우리은행", number: "1002-123-456789" },
];

const bride: Account[] = [
  { side: "신부", name: "박경은", bank: "카카오뱅크", number: "3333-12-3456789" },
  { side: "신부 부", name: "박범준", bank: "하나은행", number: "123-456789-01234" },
  { side: "신부 모", name: "김경임", bank: "농협은행", number: "123-1234-5678-12" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        padding: "3px 10px",
        fontSize: "11px",
        fontFamily: "var(--font-noto), sans-serif",
        border: "1px solid #e8d5c4",
        borderRadius: "20px",
        background: copied ? "#c9a87c" : "#fdf6ee",
        color: copied ? "#fff" : "#a08070",
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {copied ? "복사됨" : "복사"}
    </button>
  );
}

function AccountGroup({ title, accounts }: { title: string; accounts: Account[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #e8d5c4",
        background: "#fdf6ee",
        marginBottom: "8px",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-noto-serif), serif",
            fontSize: "14px",
            color: "#3d2b1f",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <path d="M2 4l5 5 5-5" stroke="#a08070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{ borderTop: "1px solid #f0e4d6" }}>
          {accounts.map((acc, i) => (
            <div
              key={i}
              style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: i < accounts.length - 1 ? "1px solid #f5ede4" : "none",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-noto), sans-serif",
                    fontSize: "11px",
                    color: "#c9a87c",
                    letterSpacing: "0.1em",
                    marginBottom: "2px",
                  }}
                >
                  {acc.side} · {acc.bank}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-noto-serif), serif",
                    fontSize: "13px",
                    color: "#3d2b1f",
                    letterSpacing: "0.05em",
                  }}
                >
                  {acc.name} · {acc.number}
                </p>
              </div>
              <CopyButton text={acc.number} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AccountSection() {
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
        Accounts
      </p>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "28px",
          fontWeight: 300,
          color: "#3d2b1f",
          letterSpacing: "0.1em",
          marginBottom: "8px",
        }}
      >
        마음 전하기
      </h2>
      <p
        style={{
          fontFamily: "var(--font-noto), sans-serif",
          fontSize: "12px",
          color: "#a08070",
          marginBottom: "32px",
          textAlign: "center",
          lineHeight: 1.8,
          wordBreak: "keep-all",
        }}
      >
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 안내해 드립니다.
      </p>

      <div style={{ width: "100%", maxWidth: "480px" }}>
        <AccountGroup title="신랑측 계좌번호" accounts={groom} />
        <AccountGroup title="신부측 계좌번호" accounts={bride} />
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
