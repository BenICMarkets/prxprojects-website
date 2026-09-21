# PRXProjects site

Next.js (App Router) + Tailwind CSS. Live at https://prxprojects.co.za, hosted on Vercel, deployed from this repo.

## Edit content

- Business details, services, process and portfolio: `src/data/site.ts`
- Photos: put files in `public/images/` and reference them as `/images/name.jpg` in `src/data/site.ts` (portfolio `image` field). Entries with `image: null` show a "Photo coming soon" placeholder.
- Pages: `src/app/<page>/page.tsx`

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Contact form (Formspree)

1. Create a form at https://formspree.io and copy the ID from its URL (`formspree.io/f/<ID>`).
2. In Vercel: Project Settings > Environment Variables, add `NEXT_PUBLIC_FORMSPREE_ID` = `<ID>` for Production and Preview, then redeploy.
3. Locally, copy `.env.example` to `.env.local` and fill it in.

Until the ID is set the form shows a fallback message with the phone number and email.

## Deploy (Vercel)

1. Sign in at vercel.com with GitHub, Add New > Project, import `prxprojects-site`. Framework is auto-detected as Next.js.
2. Add the environment variable above, then Deploy.
3. Every push to `main` deploys to production; other branches get preview URLs.

## Connect prxprojects.co.za (DNS stays at AfriHost)

1. Vercel: Project > Settings > Domains > add `prxprojects.co.za` (and `www.prxprojects.co.za`).
2. Vercel shows the exact DNS records to use. Typically an `A` record for the root `@` pointing to `76.76.21.21`, and a `CNAME` for `www` pointing to `cname.vercel-dns.com`. Use the values Vercel displays for your project.
3. In AfriHost's DNS management for the domain, set those records in place of the existing `@` and `www` records. Leave MX (email) records alone.
4. Wait for propagation (minutes to 48 hours). Vercel then issues HTTPS automatically.
