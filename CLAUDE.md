# CLAUDE.md

# Project: ironhiro.dev

Personal site of 조용현 (ironhiro): a resume at **ironhiro.dev** and a blog at **blog.ironhiro.dev**.
Both are built from one Astro 5 + React 19 + TypeScript project in `blog/` and deployed as two Cloudflare Workers.
UI text is Korean; code, comments and commit messages are English.

## Commands

Run everything from `blog/`.

- `npm run dev`: blog dev server (port 4321)
- `npm run dev:resume`: resume dev server (port 4322)
- `npm run build`: build the blog to `dist/blog`
- `npm run build:resume`: build the resume to `dist/resume`
- `npm run build:all`: build both
- `npm test`: Vitest in watch mode; use `npx vitest run` for a single pass
- `npx vitest run src/components/Chips.test.tsx`: run a single test file
- `npm run typecheck`: `astro sync` + `tsc --noEmit`

Before committing, run `npx vitest run && npm run typecheck && npm run build:all`.
There is no linter or formatter yet.

## Architecture

| Path (in `blog/`) | What lives there |
|---|---|
| `astro.config.mjs` / `wrangler.jsonc` | Blog build and deploy (srcDir `src/blog`, publicDir `public/blog`) |
| `astro.resume.config.mjs` / `deploy/resume/wrangler.jsonc` | Resume build and deploy (srcDir `src/resume`, publicDir `public/resume`) |
| `src/components/` | UI shared by both sites: TopBar, ThemeToggle, Chips, Kicker, SiteFooter, Icons |
| `src/features/blog/` | Blog-only components and `consts.ts` |
| `src/features/resume/` | Resume-only components and `data.tsx` (all resume content) |
| `src/hooks/` | Shared hooks (scroll, theme, active heading/section, reveal) |
| `src/types/` | Shared types: `post.ts`, `resume.ts` |
| `src/utils/` | Pure functions: `cx`, `date`, `wrap` |
| `src/styles/` | `base.css` (tokens and shared rules), `prose.css` (blog post body and code blocks) |
| `src/blog/` | Blog Astro source: `pages/`, `layouts/`, `lib/posts.ts`, `content/`, `content.config.ts` |
| `src/resume/` | Resume Astro source: `pages/index.astro` |
| `src/test/` | `setup.ts` and `helpers.ts` |

- `.astro` files handle routing, data loading (`astro:content`) and the HTML shell only. UI goes in React components.
- Code that only one site uses belongs in `src/features/<site>/`. Move it to `src/components/` only when both sites use it.

## Astro + React rules

- React components render to static HTML by default. Add a `client:*` directive only where the component needs browser behaviour:
  - `client:load` for things visible on first paint (header, TOC)
  - `client:idle` or `client:visible` for everything else
- Props passed to a hydrated component are serialized into the HTML, so keep them plain data:
  - no `Date` (use ISO strings), functions or JSX
  - use the `PostSummary` / `TocHeading` shapes from `src/types/post.ts`
  - convert collection entries with `toSummary` / `toLink` in `src/blog/lib/posts.ts`
- An island cannot sit inside a static React component. Compose islands in the `.astro` page and pass them in as `children` (see `Hero` + `SocialLinks`).
- Code that enhances Astro-rendered HTML (e.g. `CodeBlockEnhancer`) works on the DOM in `useEffect` and must be idempotent.
- The saved theme is applied before first paint by an inline script in each page's `<head>`. Theme icons switch through CSS, so never branch rendering on the theme.

## Component conventions

- Functional components only. Use named exports, never default exports. Astro, Vitest and other tool config files are the exception.
- Name the props interface `{Component}Props` and destructure props in the function signature.
- Co-locate files: `Button.tsx` → `Button.module.css` → `Button.test.tsx` in the same directory.
- Styles go in CSS Modules. Do not use inline `style` props. When a value changes at runtime, set a CSS custom property through a ref (see `useReadingProgress`).
- Use `cx()` for conditional class names and `wrapClass()` for the content width wrapper (`default` 760px, `mid` 920px, `wide` 1120px).
- Theme selectors inside CSS Modules use `:global(:root[data-theme="light"])`.

```tsx
export interface ChipsProps {
  items: ChipItem[];
  label?: string;
}

export function Chips({ items, label }: ChipsProps) { ... }
```

## Design system

- **Primary: dark.** Near-black base `#0a0c0d` with surfaces `--surface` / `--surface-2`.
- **Secondary: mint.** `--mint` is `#5eebc0` on dark and `#067a5a` on light, where the darker shade keeps contrast. Use mint for accents only: active nav, links on hover, timeline nodes, kickers, section indices. Do not use it for large fills or for every chip.
- Colors come only from the tokens in `src/styles/base.css`. Never hard-code a hex value in a component. A new token needs both a dark value and a light value, and the light value must be defined twice: in the `prefers-color-scheme` block and in the `[data-theme="light"]` block.
- Typography:
  - Pretendard for text
  - `var(--mono)` for labels, dates, chips, nav and metadata
  - `word-break: keep-all` for Korean text
- Every page must work in dark and light mode, at 390px width without horizontal scroll, and with `prefers-reduced-motion`.
- The design must stay consistent across both sites. Change shared pieces in `src/components/` and `base.css`, not per page.

## Content

- **Blog posts**: add a Markdown file to `src/blog/content/blog/`. The frontmatter schema is in `src/blog/content.config.ts`. Posts with `draft: true` show only in dev.
- **Resume**: edit `src/features/resume/data.tsx`. It uses JSX fragments for rich text (`<strong>`, `<code>`).
- Keep the email address split in `data.tsx`. `SocialLinks` joins it in the browser so the full address never appears in the HTML. Do not render it on the server.

## Testing

- Vitest + React Testing Library + jsdom. Every component has at least one test, and tests check behaviour, not implementation.
- Query by role or text. CSS is processed in tests, so elements hidden by a media query (the TOC, the resume section nav) need `{ hidden: true }`.
- CSS Module class names are non-scoped in tests, so asserting state classes like `scrolled` or `active` works.
- Use helpers from `src/test/helpers.ts` (`mockMatchMedia`, `mockIntersectionObserver`, `scrollWindowTo`, `makePost`). Browser state is reset after each test in `setup.ts`.
- In date tests, use midday UTC timestamps (`T12:00:00Z`) so results don't depend on the time zone.

## TypeScript

- Strict mode (`astro/tsconfigs/strict`). Do not use `any`; if it is truly unavoidable, add a comment explaining why.
- Prefer `interface` for object shapes. Shared types live in `src/types/`.

## Deployment (Cloudflare Workers)

| Worker | Root | Build | Deploy |
|---|---|---|---|
| `ironhiro-blog` | `blog` | `npm run build` | `npx wrangler deploy` |
| `ironhiro-resume` | `blog/deploy/resume` | `cd ../.. && npm ci && npm run build:resume` | `npx wrangler deploy` |

Custom domains come from `routes` in each wrangler config. Both production branches are `main`; non-production deploy commands stay at the default `npx wrangler preview`.

The resume's wrangler config lives in its own folder on purpose: Cloudflare compares the project name with the `wrangler.jsonc` in the root directory, so the two Workers must not share a root. Never rename the blog's `wrangler.jsonc` to `ironhiro-resume`, even if Cloudflare opens a PR suggesting it.

## Git

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`.
- Branch names: `feature/`, `fix/`, `chore/`.
- Always open a PR. Never push directly to `main`.

## Do NOT

- Add dependencies without discussing first. Current runtime dependencies: `astro`, `@astrojs/react`, `@astrojs/rss`, `react`, `react-dom`.
- Add a state management library. Local state and hooks are enough here; propose one only if a feature truly needs shared state.
- Use default exports (except config files), inline styles, or hard-coded colors.
- Hydrate a component that has no browser behaviour.
- Put the resume's full email address into rendered HTML.

## References

- https://github.com/jeremygottfried/react-ui-guide: a list of React libraries (animation, 3D, drag-and-drop, etc.) to consult when adding interactive features. It is not a design guide; the design rules are in the Design system section above.
