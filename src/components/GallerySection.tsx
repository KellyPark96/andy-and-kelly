"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/photos/01.jpg", alt: "Photo 1" },
  { src: "/photos/02.jpg", alt: "Photo 2" },
  { src: "/photos/03.jpg", alt: "Photo 3" },
  { src: "/photos/04.jpg", alt: "Photo 4" },
  { src: "/photos/05.jpg", alt: "Photo 5" },
  { src: "/photos/06.jpg", alt: "Photo 6" },
  { src: "/photos/07.jpg", alt: "Photo 7" },
  { src: "/photos/08.jpg", alt: "Photo 8" },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section className="w-full py-16 flex flex-col items-center">
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
        Gallery
      </p>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "28px",
          fontWeight: 300,
          color: "#3d2b1f",
          letterSpacing: "0.1em",
          marginBottom: "28px",
        }}
      >
        Our Story
      </h2>

      {/* Carousel */}
      <div className="relative w-full" style={{ maxWidth: "480px" }}>
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "3/4", background: "#f0e0d0" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="이전 사진"
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="다음 사진"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}번 사진`}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "#c9a87c" : "#e8d5c4",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <p
          style={{
            textAlign: "center",
            marginTop: "8px",
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "14px",
            color: "#a08070",
            letterSpacing: "0.1em",
          }}
        >
          {current + 1} / {photos.length}
        </p>
      </div>
    </section>
  );
}
