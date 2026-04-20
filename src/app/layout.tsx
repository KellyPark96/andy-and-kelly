import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Andy & Kelly — Wedding Invitation",
  description: "We are getting married. Please join us to celebrate our special day.",
  openGraph: {
    title: "Andy & Kelly — Wedding Invitation",
    description: "We are getting married. Please join us to celebrate our special day.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSans.variable} ${notoSerif.variable}`}>
      <body className="min-h-screen antialiased" style={{ fontFamily: "var(--font-noto), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
