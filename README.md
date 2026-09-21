# PRX Projects website

Next.js 16 (App Router) + Tailwind v4. Domain: prxprojects.co.za. Hosted on Vercel, deployed from GitHub.

Rules and source material for this repo are in `CLAUDE.md` and `docs/`.

## Where things live

- Business details, phone, WhatsApp, hero image: `src/content/business.ts`
- Service pages: `src/content/services.ts` (one entry per page, built automatically)
- Process, reasons, homepage FAQs, projects and reviews: `src/content/site.ts`
- Pages: `src/app/`
- Photos: `public/images/`

Projects and reviews are empty on purpose. Add real, verified entries to `projects` and `reviews` in `src/content/site.ts` and the homepage sections, nav link and sitemap appear automatically. Set `heroImage` in `business.ts` once a real project photo is available.

## Run locally

```bash
npm install
npm run dev
npm run build   # typecheck + production build
npm run lint
```

## Environment variables (Vercel: Project Settings > Environment Variables)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Quote form destination (ID from formspree.io/f/&lt;ID&gt;). Without it the form shows a call/WhatsApp fallback. |
| `SITE_INDEXABLE` | Set to `true` in **Production only** at launch. Until then the site is noindex and robots.txt blocks crawlers. |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 ID. Nothing loads if empty. |

## Deploy

1. Create the GitHub repo, push this branch, import it in Vercel (framework auto-detected).
2. Add the variables above (leave `SITE_INDEXABLE` unset until launch).
3. Merge to `main` for production; every other branch gets a preview URL.

## Connect prxprojects.co.za DNS later (AfriHost)

Do this only when ready to go live:

1. Export or screenshot the current DNS records at AfriHost, including MX, TXT (SPF/DKIM/DMARC).
2. Vercel > Project > Settings > Domains > add `prxprojects.co.za` and `www.prxprojects.co.za`. Use the exact records Vercel displays.
3. Change only the web records (root A and `www` CNAME). Leave MX/TXT untouched.
4. Choose one hostname and redirect the other in Vercel. Confirm HTTPS.
5. Set `SITE_INDEXABLE=true` in Production, redeploy, verify Search Console and submit `/sitemap.xml`.
