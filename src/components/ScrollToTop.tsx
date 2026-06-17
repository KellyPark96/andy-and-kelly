"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        width: "44px",
        height: "44px",
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: 0,
        opacity: 0.85,
      }}
      aria-label="맨 위로 이동"
    >
      <Image src="/scroll-to-top.png" alt="scroll to top" width={44} height={44} />
    </button>
  );
}
