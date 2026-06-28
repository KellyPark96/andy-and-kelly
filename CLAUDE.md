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
| `--color-cream-dark` | `#f5e8d8` | 보조 배경 |
| `--color-brown` | `#3d2b1f` | 기본 텍스트 |
| `--color-brown-light` | `#7a5c48` | 보조 텍스트 |
| `--color-brown-muted` | `#a08070` | 흐린 텍스트 |
| `--color-gold` | `#c9a87c` | 포인트 컬러 (라벨, 구분선, 활성 탭) |
| `--color-rose` | `#c9968a` | 보조 포인트 |
| `--color-rose-light` | `#e8c4bc` | 연한 로즈 |
| `--color-border` | `#e8d5c4` | 테두리 |

## Tailwind v4 CSS 레이어 구조 (중요)

Tailwind v4에서는 `@layer` 밖의 CSS가 utility 클래스보다 우선순위가 높다.
커스텀 CSS는 반드시 `@layer base` 또는 `@layer components`에 넣어야 `py-16`, `mb-12` 같은 utility가 정상 작동한다.

- `@layer base` — reset (`* { margin: 0; padding: 0 }`), html/body 배경
- `@layer components` — `.section-divider`, `.dot-divider`, `.animate-*`
- `@layer utilities` (Tailwind 내장) — `mb-12`, `py-16` 등 utility 클래스

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 테마 + @layer base/components + 커스텀 애니메이션
│   ├── layout.tsx           # 폰트 설정, 메타데이터, viewport (themeColor: #fdf6ee)
│   └── page.tsx             # 전체 섹션 조합 + NavBar + ScrollToTop
└── components/
    ├── NavBar.tsx               # 반응형 네비게이션 (모바일: 좌측 세로 사이드바 / PC: 상단 가로 바)
    ├── ScrollToTop.tsx          # 우측 하단 맨위로 버튼
    ├── CoverSection.tsx         # 풀스크린 섹션 내 3:4 비율 이미지 + 텍스트 (이미지 아래 배치)
    ├── InvitationSection.tsx    # "우리, 결혼합니다" 오프닝 + 안내 문구
    ├── EventDetailsSection.tsx  # 날짜/시간/장소/혼주 정보 + 연락처 버튼
    ├── CalendarSection.tsx      # 9월 달력 (결혼 날짜 하이라이트)
    ├── GallerySection.tsx       # 캐러셀 포토 갤러리 (8장, 가로/세로 자동 감지)
    ├── DirectionsSection.tsx    # 지도 링크 + 교통편 안내
    ├── AccountSection.tsx       # 계좌번호 (토글 + 복사)
    ├── RSVPSection.tsx          # 참석 여부 폼
    ├── GuestbookSection.tsx     # 축하 메시지 방명록
    └── FooterSection.tsx        # 클로징 (mainLogo.svg 400px + 날짜)
```

## 네비게이션 (NavBar.tsx)

- **모바일 (< 480px)**: 좌측 고정 세로 사이드바 (36px 폭, `writing-mode: vertical-lr`)
  - `main`에 `w-[calc(100%-36px)] ml-9` 적용해 가로 overflow 없이 사이드바 여백 확보
  - `height: 100svh` 고정으로 뷰포트 높이 변화에도 아이템 위치 유지
- **PC (≥ 480px)**: 상단 고정 가로 바 (`min-[480px]:w-full min-[480px]:mx-auto`)
- 현재 뷰포트에 보이는 섹션 탭이 골드(`#c9a87c`)로 강조됨 (IntersectionObserver)
- 탭 클릭 시 `scrollIntoView({ behavior: "smooth" })`로 이동

## 섹션 ID (앵커 링크용)

| id | 섹션 |
|---|---|
| `#cover` | CoverSection |
| `#event` | EventDetailsSection |
| `#gallery` | GallerySection |
| `#directions` | DirectionsSection |
| `#account` | AccountSection |
| `#rsvp` | RSVPSection |
| `#guestbook` | GuestbookSection |

## 웨딩 정보

| 항목 | 값 |
|---|---|
| 신랑 | Andy · 송범준 (SONG BEOM JUN) |
| 신부 | Kelly · 박경은 (PARK KYEONG EUN) |
| 신랑 부모 | 송창의 · 김선영 |
| 신부 부모 | 박범준 · 김경임 |
| 날짜 | 2026년 9월 19일 (토) 오전 11시 30분 |
| 장소 | 아연당 (AYEONDANG) |
| 주소 | 경기도 성남시 분당구 판교백현로 55-7 |

## 이미지 및 에셋

### public 폴더 구조
```
public/
├── photos/          # 실제 웨딩 사진 (01.jpg ~ 08.jpg)
├── mainLogo.svg     # 커플 로고 (FooterSection에 400px로 사용)
├── bg-texture.jpg   # 배경 텍스처 (main 컨테이너에만 적용)
└── ...
```

### 이미지 교체 방법
- **커버 사진**: `CoverSection.tsx` — `/photos/01.jpg` (3:4 비율 컨테이너)
- **갤러리 8장**: `GallerySection.tsx` — `photos` 배열 (`/photos/01.jpg` ~ `08.jpg`)

외부 URL 이미지 사용 시 `next.config.ts`의 `remotePatterns`에 도메인 추가 필요.

## 배경 (bg-texture)

- `bg-texture.jpg`는 `main` 컨테이너(가운데 480px 영역)에만 `backgroundImage` inline style로 적용
- 각 섹션 컴포넌트에는 배경색 없음 (투명) — 텍스처가 비쳐 보임
- 버튼/인풋 등 UI 요소는 개별 `background` 색상 유지 (`#fdf6ee`, `#fff` 등)

## CoverSection 레이아웃

- 섹션 자체: `minHeight: 100svh`, flex 중앙 정렬
- 이미지: `w-4/5` 너비의 3:4 비율 컨테이너, `object-cover`, `/photos/01.jpg`
- 텍스트(WEDDING INVITATION, Andy & Kelly, 날짜): 이미지 **아래**에 크림 계열 색상으로 배치
- 하단 스크롤 인디케이터(chevron) 유지

## GallerySection 동작

- 사진 8장 (`/photos/01.jpg` ~ `08.jpg`) 캐러셀
- 각 이미지 `onLoad` 시 `naturalWidth > naturalHeight` 여부로 가로/세로 판별
  - 세로 사진: `object-cover` (3:4 컨테이너 꽉 채움)
  - 가로 사진: `object-contain` (짤리지 않게, letterbox)
- 섹션 상단에 `section-divider` 있음

## section-divider 규칙

- 각 섹션 **상단**에만 배치 (`mb-12`)
- 섹션 하단 divider는 없음

## 개발 서버

```bash
npm run dev    # http://localhost:3000
npm run build  # 프로덕션 빌드
```
