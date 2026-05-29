# MIO MYUNG IN Optics — Company Homepage

주식회사 명인(MIO MYUNG IN Optics CO.,LTD.) 공식 홈페이지.
Next.js 16 (App Router) 기반의 정적 사이트로, GitHub Pages에 배포됩니다.

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- 정적 export (`output: "export"`) → GitHub Pages

## 로컬 개발

```bash
npm install
npm run dev      # http://localhost:3000
```

## 빌드 (정적 export)

```bash
npm run build    # ./out 폴더에 정적 사이트 생성
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml` 워크플로가
자동으로 빌드 후 GitHub Pages에 배포합니다.

- 커스텀 도메인: `mio2008.com` (apex) — `public/CNAME` 참고
- 이미지 최적화는 비활성화(`images.unoptimized`)되어 있습니다 (정적 호스팅 요건).

## 페이지 구조

- `/` — 메인
- `/what-we-do` — 공정 소개
- `/about/[slug]` — 인삿말 / 인증현황 / 찾아오시는길
- `/products/[slug]` — Optical Mirror / Filter / Window / Prism
