# PRX Projects: Requirements Audit and Implementation Plan

Status: Phase 1 to 3 built on branch `phase-1-build` (see section 6). Audit below still applies. Source: PRXPROJECTS_CLAUDE_MASTER_BRIEF.md (START_HERE, CLAUDE.md, 01 to 05).

## 1. What already exists

A first scaffold was built before this brief arrived (Next.js 16.3.5, Tailwind v4, TypeScript, committed locally as `main`, not on GitHub). It has Home, About, Services, Portfolio and Contact pages, a Formspree form, sitemap.ts, robots.ts, self-hosted Geist font, and passes lint and build.

Its content came from the old plexibuild.co.za template, which the brief tells us not to migrate. Treat it as a technical shell only:

- Keep: Header/Footer skeleton, `Photo` component (real `next/image` when a photo exists), sitemap/robots pattern, Geist self-hosting, build setup.
- Replace: all copy, the service list (Field Study, Property Allocation, Land Purchase Assistance are template services, not in the brief), the route structure, the "Gauteng" area wording, the placeholder portfolio, and the admin@plexirenovations.co.za email (wrong brand).

## 2. Contradictions and gaps in the brief

1. **Relationship to Plexi Renovations (answered by Ben).** Same owners; PRX Projects is the larger relaunch of Plexi Renovations, or possibly a separate division of it. That allows using the Plexi track record, projects and reviews, but the wording must be accurate. Update: Ben then decided PRX Projects stays a standalone brand, so the site makes no Plexi references and carries no Plexi reviews, registrations or history until he says otherwise. Still open: which legal entity holds NHBRC/CIDB/COIDA/insurance, and whether "13+ years" may be claimed under the PRX name.
2. **Extensions: one page or two?** The launch emphasis and homepage card say "Building & Extensions" (one). The route list and keyword table have separate `building-renovations-pretoria` and `home-extensions-pretoria`. Two thin pages would compete for the same intent. Recommendation: one page at launch, split only when there is enough content for each.
3. **Launch areas vs "no thin pages".** Phase 5 lists six areas in 4 to 6 days, but the brief also demands genuine local content per area. Recommendation: `/areas` hub plus Pretoria East and Centurion only, others when real project evidence exists.
4. **Advice hub with no articles.** An empty `/advice` is a thin page. Recommendation: launch it only with at least 2 or 3 fact-checked articles, or leave it out of nav and sitemap until then.
5. **Placeholders vs production.** The brief requires real hero, real projects and real reviews; none have been supplied. Anything on a preview built without them must be `noindex` and must not ship to production as-is.
6. **Form architecture.** The brief prefers a server endpoint or Server Action plus Resend, working without JavaScript, with lead metadata (timestamp, landing page, UTM) and optional photo upload. Formspree (chosen earlier) can meet most of this via a plain HTML POST with hidden fields and its spam filter, but photo upload needs a paid plan. Resend needs an API key and domain verification, which means adding DNS records (see item 9).
7. **Phone vs WhatsApp.** The brief lists a main phone (012 001 9429) and a separate WhatsApp (082 569 0850). The earlier build used 082 569 0850 as the header phone. Both must be confirmed and kept separate.
8. **Trailing slashes.** Brief routes end in `/`. Next.js defaults to none. Pick one (set `trailingSlash: true` if slashes are wanted) and make canonicals and the sitemap match.
9. **DNS.** The domain is at AfriHost. The brief says preserve MX/TXT/SPF/DKIM/DMARC and write a migration plan first. If prxprojects.co.za currently hosts a site or email, we need its URL inventory (for 301s) and its DNS records before any cutover. Adding Resend DKIM records is additive but still counts as a DNS change.
10. **Consent and privacy.** A `/privacy` page is required and analytics and Ads conversions are planned. POPIA/cookie-consent requirements and the privacy contact details need Ben's input; this is not legal advice and should be checked with someone qualified.
11. **Tooling limits in this environment.** This session cannot create GitHub repos and cannot push previews, so I cannot produce Vercel preview URLs. Ben creates the repo and imports it into Vercel; I run lint, typecheck, build, link checks and a local Lighthouse run in the sandbox and report those.
12. **Source sites are unreadable to me.** plexirenovations.co.za and prxprojects.co.za block automated fetching. Photos and the current page copy have to come from Ben (upload here or a connected folder).

## 3. Facts needed before launch (nothing invented)

Legal entity name; relationship to Plexi Renovations; call number; WhatsApp; email on a PRX-branded address; public address or service-area-only; opening hours; NHBRC, CIDB, COIDA and public-liability claims and which entity holds them; years of experience wording; permission to use Plexi reviews and project photos; logo files and brand colour; Google Business Profile, Facebook, Instagram and TikTok URLs; privacy-page contact details; whether the domain is live today.

## 4. Implementation plan

**Phase 0: Confirm facts (Ben, 30 to 60 min).** Answer the list above; upload logo and photos.

**Phase 1: Foundation.** Add the brief's CLAUDE.md rules to the repo (merged with the existing Next.js AGENTS.md import). Switch to the brief's content model: `content/business.ts, services.ts, areas.ts, projects.ts, reviews.ts, faqs.ts` (typed, with a `verified` flag so unverified facts cannot render). Design system: white/charcoal with one accent, one font family, 16px body, visible focus, 44px touch targets. Header with Call Now and Get a Quote, mobile menu, CSS-only sticky Call/WhatsApp/Quote bar, footer, `noindex` gate controlled by one environment variable so previews cannot be indexed.

**Phase 2: Homepage and lead flow.** Hero H1 "Renovation & Building Contractors in Pretoria", six service cards, three-point "why", process, FAQ using native `<details>`, final CTA. Trust strip, reviews and featured projects render only from verified data. Quick-quote form: Name, Mobile/WhatsApp, Suburb, Project type, Description; no email required; labelled fields, accessible errors, success message stating what happens next; works without JavaScript; hidden fields for landing page and UTM. Analytics events: phone_click, whatsapp_click, quote_form_start, quote_form_submit, and conversions fired only after a successful submit. Photo upload deferred; after submitting, the confirmation asks people to send photos on WhatsApp.

**Phase 3: Money pages** in the brief's order, using its service template: Home Renovations, Bathrooms, Kitchens, Building & Extensions, Waterproofing, Commercial, Painting. Each page has its own title, description, canonical, single H1, FAQ, Service and BreadcrumbList schema, and internal links. Copy is original PRX wording in the brief's "contractor voice", drawn only from supplied facts.

**Phase 4: Project proof.** Case-study template from the brief. Each project waits on real photos and the missing fields (area, completion date, scope, duration, challenge, photo rights). Descriptive file names and alt text per the brief.

**Phase 5: Areas.** Hub, Pretoria East, Centurion; more only with real local evidence.

**Phase 6: Technical SEO.** Metadata API on every page, Organization/LocalBusiness schema with no invented ratings, hours, geo or registration IDs, sitemap generated from content data, `robots.ts` allowing all crawlers and `OAI-SearchBot` (no GPTBot rules), custom 404, security headers, one hostname redirecting the other.

**Phase 7: Performance and accessibility.** Lighthouse (mobile and desktop), heading order, labels, contrast, LCP image, no unnecessary client JS, no console errors. Targets are engineering goals, not guarantees.

**Phase 8: Launch.** Repo on GitHub, Vercel import, preview review, redirect map tested, DNS backup exported, then only the web records changed at AfriHost (MX/TXT untouched), SSL check, Search Console verification, sitemap submission, 7-day checks.

## 5. Decisions needed

1. Rebrand vs division: which is it, and which entity holds the registrations? (Relationship itself is answered: same owners.)
2. Contact details to publish.
3. Whether prxprojects.co.za is live today and whether email runs on it.
4. Form route: Formspree for v1 or Server Action plus Resend.
5. Extensions: one combined page at launch (recommended) or two.

## 6. Build status (Phase 1 to 3 complete on branch `phase-1-build`)

Decisions applied: PRX Projects is presented as its own brand (no Plexi wording, reviews, registrations or "years" claims); contact details from the brief (call 012 001 9429, WhatsApp 082 569 0850, admin@plexirenovations.co.za) as working values; Formspree for the quote form; DNS cutover deferred; extensions and building combined on one page.

Built: content model with unconfirmed facts hidden, indexing gate (`SITE_INDEXABLE`), header and CSS-only mobile sticky bar, homepage per wireframe, quote form (works without JS, lead metadata, honeypot), 7 service pages plus hub, About, Contact, Privacy, 404, sitemap, robots (OAI-SearchBot allowed), Organization/Service/BreadcrumbList/FAQ schema, security headers.

Verified locally: typecheck, lint and build pass; all 12 pages return 200 with one H1, unique titles and descriptions, self-canonicals; no console errors; mobile menu, form error and success paths tested. Lighthouse mobile (local server, simulated slow 4G): performance 98/98/100, accessibility 100, best practices 100, SEO 100; CLS 0; LCP 2.3 s on home (target 1.8 s; recheck on Vercel).

Deliberately not built yet (needs real content): Projects, Areas, Advice, reviews, trust claims, hero photo, logo, OG image.

To confirm before launch: draft FAQ answers (own-finishes policy, phasing, after-hours commercial work); whether email should move to a PRX address; public address and hours; registrations; POPIA/consent review of the privacy page and analytics.
