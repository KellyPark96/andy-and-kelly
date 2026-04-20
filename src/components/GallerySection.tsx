import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    alt: "Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
    alt: "Photo 2",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
    alt: "Photo 3",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80",
    alt: "Photo 4",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Photo 5",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    alt: "Photo 6",
  },
];

export default function GallerySection() {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-[#fdf6ee]">
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
          marginBottom: "32px",
        }}
      >
        Our Story
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "6px",
          width: "100%",
          maxWidth: "480px",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{
              aspectRatio: "3/4",
              background: "#f0e0d0",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
