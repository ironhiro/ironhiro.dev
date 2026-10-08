# ironhiro.dev

| 폴더 | 도메인 | 내용 |
|---|---|---|
| `resume/` | ironhiro.dev | 이력서 (HTML 한 장, 빌드 없음) |
| `blog/` | blog.ironhiro.dev | Astro 5 블로그 |

## Cloudflare Pages 설정 (같은 레포로 프로젝트 2개)

**ironhiro-resume**
- Framework preset: None
- Build command: (비움)
- Build output directory: `resume`
- Custom domain: `ironhiro.dev`

**ironhiro-blog**
- Root directory: `blog`
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Custom domain: `blog.ironhiro.dev`

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
