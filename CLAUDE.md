@AGENTS.md

# andy-and-kelly

bonneyajou.com 웨딩 청첩장 페이지를 클론한 Next.js 웨딩 인비테이션 프로젝트.

## 기술 스택

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4** — CSS-based config (`@theme` in globals.css, no tailwind.config.ts)

## 폰트

`layout.tsx`에서 `next/font/google`으로 로드:

- `Cormorant_Garamond` → `--font-cormorant` (영문 타이틀용 세리프)
- `Noto_Sans_KR` → `--font-noto` (한글 본문)
- `Noto_Serif_KR` → `--font-noto-serif` (한글 소제목/강조)

## 커스텀 색상 (globals.css `@theme`)

| 변수 | 값 | 용도 |
|---|---|---|
| `--color-cream` | `#fdf6ee` | 기본 배경 |
| `--color-brown` | `#3d2b1f` | 기본 텍스트 |
| `--color-gold` | `#c9a87c` | 포인트 컬러 (라벨, 구분선) |
| `--color-rose` | `#c9968a` | 보조 포인트 |
| `--color-border` | `#e8d5c4` | 테두리 |

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 테마 + 커스텀 애니메이션
│   ├── layout.tsx           # 폰트 설정, 메타데이터
│   └── page.tsx             # 전체 섹션 조합
└── components/
    ├── CoverSection.tsx         # 풀스크린 커버 (배경 이미지 + 커플 이름 + 날짜)
    ├── InvitationSection.tsx    # "우리, 결혼합니다" 오프닝
    ├── EventDetailsSection.tsx  # 날짜/시간/장소/혼주 정보
    ├── MessageSection.tsx       # 두 번째 사진 + 청첩 본문 메시지
    ├── GallerySection.tsx       # 2열 6장 포토 갤러리
    ├── DirectionsSection.tsx    # 지도 링크 + 교통편 안내
    └── FooterSection.tsx        # 클로징 (커플 이름 + 날짜)
```

## 웨딩 정보 (현재 플레이스홀더)

| 항목 | 값 |
|---|---|
| 신랑 | Andy (앤디) |
| 신부 | Kelly (켈리) |
| 날짜 | 2026년 9월 12일 (토) 오후 1시 30분 |
| 장소 | 그랜드 하얏트 서울 그랜드볼룸 |
| 주소 | 서울특별시 용산구 소월로 322 |

## 이미지 교체 방법

현재 Unsplash 플레이스홀더 사용 중. 실제 사진으로 교체 시:

- **커버 사진**: `CoverSection.tsx` — Image `src` 교체
- **두 번째 사진**: `MessageSection.tsx` — Image `src` 교체
- **갤러리 6장**: `GallerySection.tsx` — `photos` 배열의 `src` 교체

`next.config.ts`의 `remotePatterns`에 새 이미지 호스트 도메인 추가 필요.

## 개발 서버

```bash
npm run dev    # http://localhost:3000
npm run build  # 프로덕션 빌드
```
