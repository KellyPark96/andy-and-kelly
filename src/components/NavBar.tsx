"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "일시/장소", href: "#event" },
  { label: "갤러리", href: "#gallery" },
  { label: "오시는길", href: "#directions" },
  { label: "계좌번호", href: "#account" },
  { label: "참석확인", href: "#rsvp" },
  { label: "방명록", href: "#guestbook" },
];

export default function NavBar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const allHrefs = ["#cover", ...NAV_ITEMS.map((i) => i.href)];

    allHrefs.forEach((href) => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle = (href: string) => ({
    fontFamily: "var(--font-noto), sans-serif",
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: active === href ? "#c9a87c" : "#c8b8a8",
    textDecoration: "none",
    transition: "color 0.2s",
    whiteSpace: "nowrap" as const,
  });

  return (
    <>
      {/* 모바일: 왼쪽 세로 사이드바 */}
      <nav
        className="flex flex-col items-center min-[480px]:hidden"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "36px",
          zIndex: 50,
          background: "rgba(20, 15, 10, 0.78)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          padding: "12px 0",
        }}
      >
        {/* 홈 로고 */}
        <a
          href="#cover"
          onClick={(e) => handleClick(e, "#cover")}
          style={{ padding: "12px 0", flexShrink: 0 }}
        >
          <Image src="/mainLogo_dark.svg" alt="Home" width={35} height={35} />
        </a>

        {/* 구분선 */}
        <div style={{ width: "16px", height: "1px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />

        {/* 나머지 메뉴 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "2px" }}>
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              style={{
                ...linkStyle(href),
                writingMode: "vertical-lr",
                padding: "10px 0",
                fontSize: "10px",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* PC: 상단 가로 바 */}
      <nav
        className="hidden min-[480px]:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(20, 15, 10, 0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* 홈 로고 - 좌측 상단 고정 */}
        <a
          href="#cover"
          onClick={(e) => handleClick(e, "#cover")}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src="/mainLogo_dark.svg" alt="Home" width={35} height={35} />
        </a>

        {/* 나머지 메뉴 중앙 정렬 */}
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ display: "flex", padding: "0 8px", justifyContent: "center" }}>
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                style={{
                  ...linkStyle(href),
                  flexShrink: 0,
                  padding: "15px 12px",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
