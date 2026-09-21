@AGENTS.md

# CLAUDE.md: PRX Projects website

Full source pack: `docs/PRXPROJECTS_MASTER_BRIEF.md` (read it before architecture or copy decisions). Current status and open questions: `docs/PRX_IMPLEMENTATION_PLAN.md`.

## Mission

High-performance lead-generation site for PRX Projects (Pretoria, Pretoria East, Centurion). PRX Projects is presented as its own brand. Favour clarity, speed, accessibility, useful local content and measurable enquiries over decoration.

## Stack

Next.js 16 App Router, TypeScript, Tailwind v4, Vercel, GitHub. Content lives in `src/content/*.ts` as typed data. No database in v1. Quote form posts to Formspree (`NEXT_PUBLIC_FORMSPREE_ID`).

## Core rules

- Mobile-first. One H1 per page. No sliders, autoplay carousels or autoplay video. No chat widgets; use the `wa.me` link.
- Server Components and static generation by default. Client components only for the mobile menu, quote form and analytics.
- `next/image` with explicit dimensions and `sizes`. Self-hosted font only (Geist package).
- Never invent reviews, project values, registrations, years, awards, guarantees, prices, timeframes or client names. Unconfirmed facts stay `null` or absent in `src/content/business.ts` and are never rendered.
- No AI-generated imagery presented as completed work. No placeholder photo boxes in production.
- No thin suburb pages. Areas, Projects and Advice pages are added only when real content exists (empty collections hide their nav links and sitemap entries).
- Every form control has a visible label and an accessible error state. Every CTA describes its action. Keep heading order semantic.
- Do not change production URLs without a redirect plan. Do not touch DNS MX/TXT records without a written plan.
- Do not copy competitor wording. Do not reuse Plexi Renovations wording verbatim.

## Indexing gate

The site is `noindex` and `robots.txt` disallows everything unless `SITE_INDEXABLE=true`. Set it in Vercel Production only when Ben approves launch.

## SEO rules

Every indexable page: unique title and meta description, self-canonical (trailing slash, matching `trailingSlash: true`), one H1, crawlable `<a href>` links, accurate structured data only (no fake ratings, hours, geo or registration IDs). Keep `OAI-SearchBot` allowed; add no GPTBot rules.

## Lead generation

Primary actions: Call, WhatsApp, Request a Quote. Mobile sticky bar has all three. Quote form fields: name, mobile/WhatsApp, suburb, project type, description. No email required. Fire conversion events only after a successful submit.

## Workflow

Feature branch, then typecheck, lint, build, preview review, Lighthouse, then merge only after approval. Summarise changed files, SEO impact and performance impact.

## Content style

Direct, practical, plain language a homeowner understands. State limits honestly. Prefer process and proof over claims. Claude may draft content but must not publish unverified facts; new project pages need area, scope, completion date, duration and photo rights first.

## Images

Real project photos only. Descriptive file names such as `bathroom-renovation-moreleta-park-pretoria-01.jpg`, alt text describing what is visible.
