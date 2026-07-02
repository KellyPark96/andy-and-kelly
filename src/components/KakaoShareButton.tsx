"use client";

declare global {
  interface Window {
    Kakao: {
      isInitialized: () => boolean;
      init: (key: string | undefined) => void;
      Share: {
        sendDefault: (options: object) => void;
        sendCustom: (options: object) => void;
      };
    };
  }
}

export default function KakaoShareButton() {
  const handleShare = () => {
    if (!window.Kakao?.isInitialized()) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Andy & Kelly 결혼식에 초대합니다",
        description: "2026년 9월 19일 토요일 오전 11시 30분\n아연당 (경기도 성남시 분당구 판교백현로 55-7)",
        imageUrl: "https://www.andynkelly.com/photos/01.jpg",
        link: {
          mobileWebUrl: "https://www.andynkelly.com",
          webUrl: "https://www.andynkelly.com",
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 바로가기",
          link: {
            mobileWebUrl: "https://www.andynkelly.com",
            webUrl: "https://www.andynkelly.com",
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleShare}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "6px 12px",
        // background: "#FEE500",
        border: "solid .1px #393939",
        borderRadius: ".5rem",
        fontFamily: "var(--font-noto), sans-serif",
        fontSize: "12px",
        fontWeight: 500,
        color: "#191919",
        cursor: "pointer",
        letterSpacing: "0.05em",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C5.58 2 2 4.91 2 8.5c0 2.28 1.38 4.28 3.46 5.5L4.5 18l4.27-2.27C9.16 15.91 9.57 16 10 16c4.42 0 8-2.91 8-6.5S14.42 2 10 2z"
          fill="#191919"
        />
      </svg>
      카카오톡 공유하기
    </button>
  );
}
