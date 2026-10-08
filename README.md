# ironhiro.dev

| 폴더 | 도메인 | 내용 |
|---|---|---|
| `resume/` | ironhiro.dev | 이력서 (HTML 한 장, 빌드 없음) |
| `blog/` | blog.ironhiro.dev | Astro 5 블로그 |

## Cloudflare 배포 (Workers, 같은 레포로 2개)

Workers & Pages → Create → Import a repository → `ironhiro/ironhiro.dev`

| 항목 | resume | blog |
|---|---|---|
| Project name | `ironhiro-resume` | `ironhiro-blog` |
| Build command | (비움) | `npm run build` |
| Deploy command | `npx wrangler deploy` | `npx wrangler deploy` |
| Path (root directory) | `resume` | `blog` |

커스텀 도메인은 각 폴더의 `wrangler.jsonc`의 `routes`로 배포 시 자동 연결됩니다.

## 블로그 글쓰기

`blog/src/content/blog/`에 `.md` 파일 추가 후 push.

```md
---
title: '제목'
description: '요약'
pubDate: 2026-10-08
tags: ['csharp']
draft: false
---
```

로컬 미리보기: `cd blog && npm run dev`
