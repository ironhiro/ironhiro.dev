# ironhiro.dev

이력서와 블로그를 한 Astro + React 프로젝트(`blog/`)에서 빌드하고, 도메인별로 따로 배포합니다.

| 사이트 | 도메인 | Astro 설정 | Wrangler 설정 | 빌드 결과 |
|---|---|---|---|---|
| 블로그 | blog.ironhiro.dev | `astro.config.mjs` | `wrangler.jsonc` | `dist/blog` |
| 이력서 | ironhiro.dev | `astro.resume.config.mjs` | `wrangler.resume.jsonc` | `dist/resume` |

## 구조 (`blog/src/`)

| 경로 | 내용 |
|---|---|
| `components/` | 두 사이트 공용 UI (TopBar, ThemeToggle, Chips, Kicker, SiteFooter, Icons) |
| `features/blog/` | 블로그 전용 컴포넌트와 상수 |
| `features/resume/` | 이력서 전용 컴포넌트와 내용(`data.tsx`) |
| `hooks/` `types/` `utils/` | 공용 훅, 타입, 순수 함수 |
| `styles/` | `base.css`(색 토큰·공통), `prose.css`(블로그 본문) |
| `blog/` | 블로그 Astro 소스(pages, layouts, content) |
| `resume/` | 이력서 Astro 소스(pages) |
| `test/` | 테스트 설정과 헬퍼 |

UI는 React 컴포넌트(`.tsx` + CSS Modules)로 작성하고, 빌드 시 정적 HTML로 렌더링합니다. 인터랙션이 필요한 컴포넌트만 페이지에서 `client:load` 등으로 hydrate합니다.

## 명령어 (`cd blog`)

```sh
npm run dev            # 블로그 개발 서버 (4321)
npm run dev:resume     # 이력서 개발 서버 (4322)
npm run build          # 블로그 빌드
npm run build:resume   # 이력서 빌드
npm run build:all      # 둘 다
npm test               # Vitest
npm run typecheck      # astro sync + tsc
```

## Cloudflare 배포 (Workers, 같은 레포로 2개)

Workers & Pages → Create → Import a repository → `ironhiro/ironhiro.dev`

| 항목 | resume | blog |
|---|---|---|
| Project name | `ironhiro-resume` | `ironhiro-blog` |
| Path (root directory) | `blog` | `blog` |
| Build command | `npm run build:resume` | `npm run build` |
| Deploy command | `npx wrangler deploy --config wrangler.resume.jsonc` | `npx wrangler deploy` |

커스텀 도메인은 각 wrangler 설정의 `routes`로 배포 시 자동 연결됩니다.

## 블로그 글쓰기

`blog/src/blog/content/blog/`에 `.md` 파일 추가 후 push.

```md
---
title: '제목'
description: '요약'
pubDate: 2026-10-08
tags: ['csharp']
draft: false
---
```

## 이력서 수정

내용은 `blog/src/features/resume/data.tsx` 한 곳에서 고칩니다.
