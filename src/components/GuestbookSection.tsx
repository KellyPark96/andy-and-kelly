"use client";

import { useState } from "react";

type Message = {
  name: string;
  text: string;
  date: string;
};

const sampleMessages: Message[] = [
  {
    name: "이민지",
    text: "두 분 결혼 진심으로 축하해요! 늘 행복하세요 😊",
    date: "2026.06.10",
  },
  {
    name: "박준서",
    text: "앤디형 켈리누나 결혼 축하드려요! 오래오래 행복하세요!",
    date: "2026.06.12",
  },
  {
    name: "김서연",
    text: "너무 잘 어울리는 커플! 결혼을 진심으로 축하드립니다 ✨",
    date: "2026.06.14",
  },
];

export default function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const today = new Date();
    const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`;

    setMessages((prev) => [
      { name: name.trim(), text: text.trim(), date: dateStr },
      ...prev,
    ]);
    setName("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
        Guestbook
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
        축하 메시지
      </h2>
      <p
        style={{
          fontFamily: "var(--font-noto), sans-serif",
          fontSize: "12px",
          color: "#a08070",
          marginBottom: "32px",
          textAlign: "center",
          lineHeight: 1.8,
        }}
      >
        두 사람에게 따뜻한 말 한 마디를 남겨 주세요.
      </p>

      <div style={{ width: "100%", maxWidth: "480px" }}>
        {/* Message input form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fdf6ee",
            border: "1px solid #e8d5c4",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginBottom: "12px" }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              maxLength={20}
              required
              style={{
                width: "100%",
                padding: "8px 10px",
                border: "none",
                borderBottom: "1px solid #e8d5c4",
                background: "transparent",
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "13px",
                color: "#3d2b1f",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="축하 메시지를 남겨 주세요"
              maxLength={200}
              required
              rows={3}
              style={{
                width: "100%",
                padding: "8px 10px",
                border: "none",
                borderBottom: "1px solid #e8d5c4",
                background: "transparent",
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "13px",
                color: "#3d2b1f",
                outline: "none",
                resize: "none",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "11px",
                color: "#c0a898",
                textAlign: "right",
              }}
            >
              {text.length}/200
            </p>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: submitted ? "#a0c878" : "#c9a87c",
              border: "none",
              borderRadius: "2px",
              fontFamily: "var(--font-noto), sans-serif",
              fontSize: "13px",
              color: "#fff",
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "background 0.3s",
            }}
          >
            {submitted ? "남겨주셔서 감사해요 ♥" : "메시지 남기기"}
          </button>
        </form>

        {/* Messages list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                background: "#fdf6ee",
                border: "1px solid #e8d5c4",
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-noto-serif), serif",
                    fontSize: "13px",
                    color: "#3d2b1f",
                    fontWeight: 600,
                  }}
                >
                  {msg.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-noto), sans-serif",
                    fontSize: "11px",
                    color: "#c0a898",
                  }}
                >
                  {msg.date}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-noto), sans-serif",
                  fontSize: "13px",
                  color: "#7a5c48",
                  lineHeight: 1.7,
                  wordBreak: "keep-all",
                }}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
