"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  side: "groom" | "bride" | "";
  attendance: "yes" | "no" | "";
  count: number;
  meal: "meat" | "fish" | "vegetarian" | "";
};

const initialForm: FormData = {
  name: "",
  phone: "",
  side: "",
  attendance: "",
  count: 1,
  meal: "",
};

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.side || !form.attendance) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e8d5c4",
    borderRadius: "2px",
    background: "#fff",
    fontFamily: "var(--font-noto), sans-serif",
    fontSize: "13px",
    color: "#3d2b1f",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-noto), sans-serif",
    fontSize: "11px",
    letterSpacing: "0.1em",
    color: "#a08070",
    display: "block",
    marginBottom: "6px",
  };

  const chipBase: React.CSSProperties = {
    flex: 1,
    padding: "9px 4px",
    border: "1px solid #e8d5c4",
    borderRadius: "2px",
    background: "#fdf6ee",
    fontFamily: "var(--font-noto), sans-serif",
    fontSize: "12px",
    color: "#7a5c48",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.15s",
  };

  const chipActive: React.CSSProperties = {
    ...chipBase,
    background: "#c9a87c",
    border: "1px solid #c9a87c",
    color: "#fff",
  };

  return (
    <section className="w-full py-16 px-6 flex flex-col items-center bg-[#fff]">
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
        RSVP
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
        참석 여부 알려주세요
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
        참석 여부를 미리 알려주시면
        <br />
        준비에 큰 도움이 됩니다.
      </p>

      <div style={{ width: "100%", maxWidth: "480px" }}>
        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "48px 24px",
              border: "1px solid #e8d5c4",
              background: "#fffdf9",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>💌</div>
            <p
              style={{
                fontFamily: "var(--font-noto-serif), serif",
                fontSize: "16px",
                color: "#3d2b1f",
                marginBottom: "8px",
              }}
            >
              전달되었습니다
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "13px",
                color: "#a08070",
                lineHeight: 1.8,
              }}
            >
              {form.name}님의 참석 여부가 접수되었어요.
              <br />
              소중한 자리에 함께해 주셔서 감사합니다.
            </p>
            <button
              onClick={() => {
                setForm(initialForm);
                setSubmitted(false);
              }}
              style={{
                marginTop: "20px",
                padding: "8px 20px",
                border: "1px solid #e8d5c4",
                background: "none",
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "12px",
                color: "#a08070",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              다시 입력
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Name */}
            <div>
              <label style={labelStyle}>이름 *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="성함을 입력해 주세요"
                required
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>연락처</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="010-0000-0000"
                style={inputStyle}
              />
            </div>

            {/* Side */}
            <div>
              <label style={labelStyle}>구분 *</label>
              <div style={{ display: "flex", gap: "8px" }}>
                {(["groom", "bride"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => set("side", s)}
                    style={form.side === s ? chipActive : chipBase}
                  >
                    {s === "groom" ? "신랑측" : "신부측"}
                  </button>
                ))}
              </div>
            </div>

            {/* Attendance */}
            <div>
              <label style={labelStyle}>참석 여부 *</label>
              <div style={{ display: "flex", gap: "8px" }}>
                {(["yes", "no"] as const).map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => set("attendance", a)}
                    style={form.attendance === a ? chipActive : chipBase}
                  >
                    {a === "yes" ? "참석" : "불참"}
                  </button>
                ))}
              </div>
            </div>

            {form.attendance === "yes" && (
              <>
                {/* Count */}
                <div>
                  <label style={labelStyle}>참석 인원</label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => set("count", Math.max(1, form.count - 1))}
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid #e8d5c4",
                        borderRadius: "50%",
                        background: "#fdf6ee",
                        color: "#7a5c48",
                        fontSize: "18px",
                        cursor: "pointer",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "22px",
                        color: "#3d2b1f",
                        minWidth: "24px",
                        textAlign: "center",
                      }}
                    >
                      {form.count}
                    </span>
                    <button
                      type="button"
                      onClick={() => set("count", Math.min(10, form.count + 1))}
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid #e8d5c4",
                        borderRadius: "50%",
                        background: "#fdf6ee",
                        color: "#7a5c48",
                        fontSize: "18px",
                        cursor: "pointer",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Meal */}
                <div>
                  <label style={labelStyle}>식사 선택</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {(["meat", "fish", "vegetarian"] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => set("meal", m)}
                        style={form.meal === m ? chipActive : chipBase}
                      >
                        {m === "meat"
                          ? "육류"
                          : m === "fish"
                            ? "해산물"
                            : "채식"}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !form.name || !form.side || !form.attendance}
              style={{
                width: "100%",
                padding: "14px",
                background:
                  loading || !form.name || !form.side || !form.attendance
                    ? "#e8d5c4"
                    : "#c9a87c",
                border: "none",
                borderRadius: "2px",
                fontFamily: "var(--font-noto), sans-serif",
                fontSize: "14px",
                color: "#fff",
                cursor:
                  loading || !form.name || !form.side || !form.attendance
                    ? "not-allowed"
                    : "pointer",
                letterSpacing: "0.1em",
                transition: "background 0.2s",
              }}
            >
              {loading ? "전송 중..." : "전달하기"}
            </button>
          </form>
        )}
      </div>

      <div className="section-divider mt-12" />
    </section>
  );
}
