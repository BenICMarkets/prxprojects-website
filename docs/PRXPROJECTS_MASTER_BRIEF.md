# FILE: START_HERE.md

# START HERE — PRX Projects Claude Code Website Pack

## What this pack is

This pack is a build brief for creating a new **PRX Projects** website with Claude Code, GitHub and Vercel.

The goal is not to copy the current Plexi Renovations WordPress site. The goal is to reuse useful business knowledge, project proof, services, reviews and local experience while rebuilding from a clean technical base that is:

- fast on mobile;
- simple to use;
- easy to maintain through Claude Code;
- designed around lead generation;
- structured for Google Search, Google AI features and AI search engines;
- ready for real project case studies and location content;
- easy to update through Git and preview deployments.

## Read order

Claude Code should read these files before making architecture or copy decisions:

1. `CLAUDE.md`
2. `01_MASTER_BUILD_BRIEF.md`
3. `02_SEO_KEYWORD_CONTENT_MAP.md`
4. `03_CONTENT_SOURCE_AND_ASSET_CHECKLIST.md`
5. `04_TECHNICAL_PERFORMANCE_SEO_SPEC.md`
6. `05_LAUNCH_AND_MAINTENANCE_PLAN.md`

## Important product decision

**PRX Projects must not be a verbatim duplicate of Plexi Renovations.**

Use the same underlying facts and genuine project evidence only where accurate, but write original PRX Projects copy and create a distinct information architecture. If PRX Projects and Plexi Renovations are separate legal entities or brands, the relationship must be stated accurately before publishing reviews, registrations, warranties or company-history claims.

## First Claude Code command

After placing this pack in the repository root, run Claude Code and use:

> Read `START_HERE.md` and every referenced project brief before writing code. First audit the requirements, identify contradictions or missing production facts, then create an implementation plan. Do not build yet. Prioritize mobile conversion, technical SEO, accessibility and Core Web Vitals. Keep all production claims grounded in the supplied source pack. Ask only for facts that are genuinely missing.

After approving the plan, use:

> Build Phase 1: the design system, global layout, homepage, contact flow, metadata foundation, sitemap, robots, LocalBusiness schema and Vercel-ready deployment. Use static rendering wherever possible. Create a Vercel preview and run Lighthouse before proposing production deployment.

## Production facts that must be confirmed before launch

- Exact PRX Projects domain.
- Exact legal entity name used by PRX Projects.
- Whether PRX Projects may publicly use Plexi Renovations reviews and project history.
- Main phone number.
- WhatsApp number.
- Email address.
- Business address or service-area-only preference.
- Current NHBRC/CIDB/COIDA or other registration claims that should appear.
- Privacy-policy contact details.
- Google Business Profile relationship, if any.

Do not invent any of these.

---

# FILE: CLAUDE.md

# CLAUDE.md — PRX Projects Website

## Mission

Build and maintain a high-performance lead-generation website for PRX Projects serving Pretoria, Pretoria East, Centurion and selected Gauteng areas.

The site must favor clarity, speed, accessibility, useful local content and measurable enquiries over decorative complexity.

## Core rules

- Mobile-first.
- One clear H1 per page.
- No sliders or autoplay carousels.
- No autoplay background video.
- Do not add heavy chat widgets. Use a lightweight WhatsApp link.
- Keep JavaScript client-side usage to the minimum required.
- Default to React Server Components / static generation.
- Use `next/image` for local images with explicit dimensions and responsive `sizes`.
- Use local or self-hosted fonts where practical. Keep font families and weights limited.
- Do not invent reviews, project values, registrations, years, awards, guarantees, prices or client names.
- Never publish AI-generated imagery as a completed Plexi project.
- Do not create thin suburb pages by swapping place names.
- Do not keyword-stuff headings or body copy.
- Do not change production URLs without a redirect plan.
- Do not deploy major content or structural changes directly to production without a preview.
- Preserve form usability without JavaScript where reasonably possible.
- Every form control needs a visible label and accessible error state.
- Keep heading order semantic.
- Every CTA must describe its action.
- Measure success by qualified leads and organic visibility, not plugin scores.

## Technology

Preferred stack:
- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Vercel
- GitHub
- Content stored in repository as typed data/MDX initially
- Server-side contact endpoint or Server Action
- Email delivery via a lightweight transactional provider such as Resend after credentials are supplied

Avoid a database in v1 unless a feature genuinely needs it.

## Repository structure

Recommended:

```text
app/
  page.tsx
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  areas/page.tsx
  areas/[slug]/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  advice/page.tsx
  advice/[slug]/page.tsx
  sitemap.ts
  robots.ts
components/
content/
  services.ts
  areas.ts
  projects.ts
  reviews.ts
  faqs.ts
  business.ts
lib/
public/
  images/
```

## Deployment workflow

For meaningful changes:
1. create or use a feature branch;
2. implement;
3. run typecheck/lint/build;
4. run Lighthouse or equivalent checks on preview;
5. provide a Vercel preview URL;
6. summarize changed files, SEO impact and performance impact;
7. wait for approval before merging to production.

## Performance budget

Targets for the production homepage on mobile Lighthouse:
- Performance: 95+ target
- Accessibility: 95+ target
- Best Practices: 95+ target
- SEO: 95+ target
- LCP: under 2.5 s, target under 1.8 s on good mobile test conditions
- CLS: under 0.1
- INP: under 200 ms
- Avoid long client-side tasks
- No unnecessary third-party scripts

Treat these as engineering targets, not guarantees across every network/device.

## SEO rules

Every indexable page needs:
- unique title;
- unique meta description;
- canonical URL;
- one descriptive H1;
- useful internal links;
- appropriate Open Graph metadata;
- crawlable `<a href>` links;
- structured data only when accurate;
- real local/project proof where available.

Create `app/sitemap.ts` and `app/robots.ts`.

Allow normal search crawlers. Do not block `OAI-SearchBot`. Do not rely on any single "GEO trick"; useful, original, local information is the primary strategy.

## Content style

Plexi voice:
- direct;
- practical;
- clear;
- no corporate filler;
- no fake luxury language;
- explain the work in terms a homeowner understands;
- state limits honestly;
- prefer proof and process over claims.

## Lead generation

Primary conversion actions:
1. Call
2. WhatsApp
3. Request a Quote / Site Visit

On mobile, use a lightweight sticky action bar:
- Call
- WhatsApp
- Quote

Do not obscure page content or create intrusive popups.

## Forms

Quick quote form should be short:
- Name
- Mobile / WhatsApp
- Suburb
- Project type
- Short project description
- Optional photo upload only if implementation remains lightweight and secure

Do not require email to submit unless Ben requests it.

## Content automation rule

Claude may draft content but must not automatically publish unverified factual claims. New project pages must ask for missing facts such as suburb, scope, completion date, timeframe and photo rights before presenting them as completed work.

## Images

- Prefer real Plexi project photos.
- Compress/resize before production.
- Generate descriptive alt text based on the actual image.
- Hero image should be an actual project if available.
- Never use filenames such as `IMG_1234.jpg`.
- Prefer meaningful names such as `bathroom-renovation-waterkloof-pretoria-01.jpg`.

## Redirect safety

Before replacing an existing site or changing a URL:
- inventory current indexed URLs;
- map each old URL to an equivalent new URL;
- preserve strong URLs where possible;
- use 301 redirects for permanent moves;
- test redirects before DNS cutover.

## Never do these

- Do not copy competitor wording or design.
- Do not publish made-up price ranges.
- Do not create 30 suburb pages on day one.
- Do not use reviews from Plexi Renovations as PRX Projects reviews unless the relationship and permission are confirmed.
- Do not modify DNS/MX/TXT email records without a written migration plan.

---

# FILE: 01_MASTER_BUILD_BRIEF.md

# PRX Projects — Master Website Build Brief

## 1. Business objective

Build a simple, fast, credible construction and renovation website whose primary purpose is to produce qualified enquiries in Pretoria and Centurion.

The site should make a visitor understand within seconds:

1. what PRX Projects does;
2. where it works;
3. why the team is credible;
4. how to contact the business immediately;
5. how to request a quote with minimal effort.

The site is also the technical test bed for a future AI-managed website workflow. It should therefore be easier to update through code and Git than the current WordPress/Elementor setup.

## 2. Positioning

Recommended public positioning:

**PRX Projects — Renovation & Building Contractors in Pretoria**

Supporting proposition:

> Bathrooms, kitchens, full-home renovations, extensions and building work managed from site visit to handover.

Alternative short line:

> One team. Clear scope. Managed from start to finish.

Do not claim PRX Projects is "the best", "#1", "award-winning" or similar unless independently supportable.

## 3. Audience

Primary:
- homeowners in Pretoria East and Centurion;
- homeowners undertaking bathroom, kitchen or whole-home renovation;
- owners planning extensions, alterations and larger building work;
- property owners who value one point of contact and trade coordination.

Secondary:
- estate agents;
- property managers;
- body corporates;
- schools/churches;
- small commercial offices/retail;
- main contractors looking for finishing/refurbishment subcontractors.

## 4. Lessons from current sites and competitors

### Call Diesel Dudes pattern worth borrowing

The useful pattern is not its visual design. It is the conversion logic:
- immediate call action above the fold;
- service area clarity;
- direct explanation of what the company can and cannot do;
- service links visible without hunting;
- repeated phone CTA;
- little ambiguity about next action.

For PRX Projects, translate that into:
- top-right `Call Now`;
- prominent `Get a Quote`;
- mobile sticky Call / WhatsApp / Quote;
- location visible in the hero;
- concise service navigation.

### Urbanac pattern worth borrowing

- strong project gallery;
- "one team / one contractor" clarity;
- visible projects with real locations and years;
- services grouped cleanly;
- clear site consultation CTA.

### Raddie Trading pattern worth borrowing

- simple homeowner language;
- contact form in the page;
- visible phone and service area;
- FAQs that answer real buying questions.

### Bathroom Galore pattern worth borrowing

- specialization pages;
- real completed-project sections;
- strong "tell us about your project" form;
- service-area language near conversion points.

### Patterns to avoid

- long generic SEO paragraphs;
- theme filler;
- 10+ simultaneous CTAs;
- sliders;
- excessive animations;
- vague "learn more" everywhere;
- duplicated suburb pages;
- fabricated counters such as "000+ projects";
- ranking claims.

## 5. Information architecture

Recommended top navigation:

```text
Home
Services
Projects
Areas
Advice
About
Contact
[Call Now]
```

### Primary routes

```text
/
 /services/
 /services/home-renovations-pretoria/
 /services/bathroom-renovations-pretoria/
 /services/kitchen-renovations-pretoria/
 /services/building-renovations-pretoria/
 /services/home-extensions-pretoria/
 /services/waterproofing-pretoria/
 /services/painting-contractors-pretoria/
 /services/commercial-renovations-pretoria/

 /projects/
 /projects/[real-project-slug]/

 /areas/
 /areas/pretoria-east/
 /areas/centurion/
 /areas/waterkloof/
 /areas/moreleta-park/
 /areas/faerie-glen/
 /areas/silver-lakes/

 /advice/
 /advice/[article-slug]/

 /about/
 /contact/
 /privacy/
```

Do not create every area page immediately. Launch with the locations for which genuine local knowledge, project evidence or service relevance can be supplied.

## 6. Homepage wireframe

### Header

Desktop:
- logo left;
- concise navigation center/right;
- phone number;
- `Get a Quote` button.

Mobile:
- logo;
- menu button;
- no oversized header;
- sticky bottom conversion bar after load:
  - Call
  - WhatsApp
  - Quote

### Hero

H1:

> Renovation & Building Contractors in Pretoria

Subtext:

> PRX Projects manages bathrooms, kitchens, full-home renovations, extensions and building work across Pretoria East, Centurion and surrounding areas.

CTA 1: `Request a Quote`
CTA 2: `Call Now`

A WhatsApp text link can sit below or in the mobile sticky bar.

Hero visual:
- one strong real completed project;
- no slider;
- no rotating text;
- no video background;
- use an optimized responsive image.

### Trust strip

Only verified claims. Example placeholders:
- 13+ years' industry experience — confirm brand relationship before using
- NHBRC registered — confirm current status and which entity holds registration
- Pretoria-based
- Residential + commercial

### Services

Six cards:
1. Full Home Renovations
2. Bathrooms
3. Kitchens
4. Building & Extensions
5. Waterproofing
6. Commercial / Office Renovations

Each card:
- 1 real image;
- 1 sentence;
- descriptive link.

### Why PRX Projects

Three points only:
- Hands-on project management
- Skilled trade coordination
- Clear scopes and communication

Do not repeat the same content elsewhere.

### Featured projects

Show 3–4 real projects with:
- suburb;
- work type;
- short result;
- real photo;
- project detail link.

### Process

Four stages:
1. Site visit
2. Scope + itemised quote
3. Schedule + build
4. Final inspection + handover

### Locations

Show priority service areas as crawlable text links.

### Reviews

Use 3 strong genuine reviews maximum on homepage.

If the reviews are from Plexi Renovations and PRX Projects is a separate brand/entity, label accurately or do not publish until relationship/permission is confirmed.

### FAQ

Five real conversion questions:
- How do I request a renovation quote?
- Which areas do you cover?
- Do you manage all the trades?
- How long does a bathroom renovation take?
- Can I supply my own tiles, sanitaryware or finishes?

### Final CTA

> Tell us what you want to renovate.

Buttons:
- Request a Quote
- WhatsApp
- Call

### Footer

- brand;
- service area;
- phone;
- email;
- primary services;
- priority areas;
- privacy;
- copyright.

No theme filler.

## 7. Service-page template

Every major service page should include:

1. SEO-focused H1 written naturally.
2. 80–140 word opening explaining the service and location.
3. Clear CTA.
4. "What we handle" scope.
5. Process.
6. Important decisions / common problems.
7. Relevant project case studies.
8. Areas served.
9. FAQs based on actual client questions.
10. Internal links to adjacent services and advice.
11. Final quote CTA.

### Bathroom example

H1:

> Bathroom Renovations in Pretoria

Sections:
- Complete bathroom renovation service
- Demolition and preparation
- Plumbing and drainage
- Waterproofing
- Tiling
- Electrical / lighting coordination
- Vanities, glass and sanitaryware
- Typical programme — use "around 15 working days" only if that remains operationally true
- Projects
- FAQ
- CTA

## 8. Project case-study template

Each project should contain real information:

```text
Project name:
Area:
Project type:
Completion year:
Scope:
Starting condition:
Work completed:
Trade sequence:
Approximate timeframe:
Important challenge:
How it was solved:
Products/finishes worth mentioning:
Before photos:
Progress photos:
After photos:
Client review:
Related service:
Related area:
```

Write useful project stories, not gallery captions.

## 9. Area-page template

Do not create doorway pages.

Each location page must have genuine local value:
- where the team works in/around the area;
- relevant housing/property context if known;
- project examples nearby;
- services commonly performed there;
- access/logistics or property considerations where genuinely relevant;
- links to real projects;
- useful FAQ;
- quote CTA.

Example H1:

> Home Renovations in Pretoria East

Do not duplicate 90% of the Pretoria East page and replace the name with Silver Lakes.

## 10. Lead funnel

### Quick Quote

Recommended form:
- Name *
- Mobile / WhatsApp *
- Suburb *
- Project type *
- Tell us briefly what you want done *
- Photo upload optional

Button:
`Request My Site Visit` or `Request a Quote`

Confirmation:
- clear success message;
- tell user what happens next;
- fire Google Ads/Analytics conversion only after successful submission.

### Phone

Make `tel:` links usable.

### WhatsApp

Use a simple `wa.me` link with a short prefilled message, not a heavy chat plugin.

Example:
> Hi PRX Projects, I'd like to discuss a renovation project in [suburb].

## 11. Brand/design direction

Visual feel:
- professional;
- architectural;
- practical;
- modern South African residential;
- clean white/charcoal base;
- one strong brand accent;
- large real project photography;
- generous spacing;
- high contrast.

Avoid:
- over-designed gradients;
- animated counters;
- spinning icons;
- fake stock construction workers;
- busy backgrounds;
- tiny text;
- excessive rounded cards.

Typography:
- one modern sans-serif family;
- maximum 3–4 font weights;
- body font 16px minimum;
- strong line-height;
- predictable hierarchy.

## 12. Content principles

PRX Projects should sound like a contractor, not an SEO agency.

Good:
> We remove the existing bathroom, complete first-fix plumbing and electrical changes, waterproof the wet areas, tile, install sanitaryware and complete the final finishes.

Weak:
> Transform your dream space with our premium bespoke renovation solutions.

Use:
- real trade knowledge;
- project sequencing;
- practical timelines;
- actual areas;
- actual project examples;
- honest explanations.

## 13. SEO and AI-search philosophy

The site should be technically clean, but ranking will not come from technical scores alone.

The content strategy is:
- clear service/topic pages;
- original local project evidence;
- meaningful internal linking;
- useful advice based on real jobs;
- consistent business entity data;
- genuine reviews;
- Google Business Profile alignment;
- fast pages;
- structured data;
- crawlability.

Google's 2026 guidance for generative AI search emphasizes valuable, unique content and says established SEO fundamentals remain relevant.

The site should also allow `OAI-SearchBot` in robots rules so public pages can be discoverable by OpenAI search systems.

## 14. What success looks like

At launch:
- fast mobile load;
- forms working;
- no mixed content;
- no console errors;
- all primary pages indexable;
- sitemap valid;
- structured data valid;
- redirects tested;
- clear analytics;
- no duplicate H1s;
- no orphan money pages.

Within 90 days, monitor:
- impressions by service query;
- non-brand organic clicks;
- location-query visibility;
- AI-search visibility where Search Console provides it;
- calls;
- WhatsApp clicks;
- quote submissions;
- qualified site visits;
- jobs won.

Do not evaluate the website only by Lighthouse or Rank Math scores.

---

# FILE: 02_SEO_KEYWORD_CONTENT_MAP.md

# PRX Projects — SEO Keyword and Content Map

## Method

This map is based on current Pretoria/Gauteng search-result language, competitor page structures and the actual Plexi service mix. It is **not paid Keyword Planner volume data**. Do not invent search volumes.

The priority is to map one primary intent to one strong page and avoid creating several pages that compete for the same query.

## Tier 1 — Main money pages

| Page | Primary query | Secondary query themes | Intent |
|---|---|---|---|
| Home | renovation contractors Pretoria | renovation company Pretoria; builders and renovations Pretoria | Company / multi-service |
| Home Renovations | home renovations Pretoria | house renovations Pretoria; full home renovation Pretoria | High-value residential |
| Bathrooms | bathroom renovations Pretoria | bathroom remodel Pretoria; bathroom contractors Pretoria | Residential |
| Kitchens | kitchen renovations Pretoria | kitchen remodel Pretoria; kitchen renovation contractors Pretoria | Residential |
| Building Renovations | building renovation contractors Pretoria | building renovations Pretoria; alterations Pretoria | Structural/building |
| Extensions | house extensions Pretoria | home additions Pretoria; building extensions Pretoria | High-value residential |
| Waterproofing | waterproofing Pretoria | waterproofing contractors Pretoria; roof waterproofing Pretoria | Problem/service |
| Painting | painting contractors Pretoria | house painters Pretoria; exterior painting Pretoria | Service |
| Commercial | commercial renovations Pretoria | office renovations Pretoria; office fit-out Pretoria | B2B |

## Tier 2 — Location pages

Launch only where useful content can be supplied.

Priority:
1. Pretoria East
2. Centurion
3. Waterkloof
4. Moreleta Park
5. Faerie Glen
6. Silver Lakes

Phase 2 candidates:
- Garsfontein
- Brooklyn
- Waterkloof Ridge
- Lynnwood
- Menlyn
- Woodhill
- Mooikloof
- Boardwalk
- Midstream / Centurion estates
- Elardus Park
- Equestria

Example mapping:

| Area | Suggested primary topic |
|---|---|
| Pretoria East | renovations Pretoria East |
| Centurion | renovations Centurion |
| Waterkloof | home renovations Waterkloof |
| Moreleta Park | renovations Moreleta Park |
| Faerie Glen | renovations Faerie Glen |
| Silver Lakes | renovations Silver Lakes |

Do not build separate `bathroom-renovations-waterkloof`, `kitchen-renovations-waterkloof`, etc. on day one. Build authority before expanding long-tail combinations.

## Tier 3 — Advice / article clusters

### Bathroom cluster

Core page:
`/services/bathroom-renovations-pretoria/`

Seed articles:
- Bathroom renovation cost in Pretoria: what changes the price?
- How long does a bathroom renovation take?
- What happens during a full bathroom renovation?
- Bathroom waterproofing: what should happen before tiling?
- Can you renovate a bathroom without moving the plumbing?
- Large-format bathroom tiles: what homeowners should know
- What to buy before your bathroom renovation starts
- Bathroom renovation checklist for Pretoria homeowners

Each article should link naturally to the bathroom service page and relevant project case studies.

### Kitchen cluster

Core page:
`/services/kitchen-renovations-pretoria/`

Seed articles:
- What drives kitchen renovation cost in Pretoria?
- Kitchen renovation order: cupboards, electrical, plumbing and tops
- Renovating a kitchen while living in the house
- Quartz vs other countertop options for renovation projects
- What to decide before ordering kitchen cupboards
- Kitchen renovation timeline: what causes delays?

### Home-renovation cluster

Core page:
`/services/home-renovations-pretoria/`

Seed articles:
- Where to start with a full home renovation
- Renovation vs extension: which solves the space problem?
- How to phase a home renovation
- Renovating an occupied home
- What should be included in a detailed renovation quote?
- Common causes of renovation cost overruns
- When building plans or engineer input may be required

### Waterproofing cluster

Core page:
`/services/waterproofing-pretoria/`

Seed articles:
- Why parapet walls leak
- Roof waterproofing systems explained
- How to trace a water leak before repairing finishes
- Waterproofing around windows and sills
- Why waterproofing fails after repainting

### Contractor-selection cluster

- Questions to ask a renovation contractor before signing
- Why the cheapest renovation quote can become expensive
- How an itemised renovation quote helps control scope
- How project supervision affects renovation quality
- What a snag list should include

## Homepage keyword use

Use naturally:
- renovation contractors Pretoria
- home renovations
- bathroom renovations
- kitchen renovations
- building work
- Pretoria East
- Centurion

Do not force the exact primary phrase into every paragraph.

## Titles — examples

```text
Renovation Contractors Pretoria | PRX Projects
Home Renovations Pretoria | PRX Projects
Bathroom Renovations Pretoria | PRX Projects
Kitchen Renovations Pretoria | PRX Projects
Building Renovations Pretoria | PRX Projects
House Extensions Pretoria | PRX Projects
Waterproofing Pretoria | PRX Projects
Painting Contractors Pretoria | PRX Projects
Commercial Renovations Pretoria | PRX Projects
```

## Meta-description principles

Each description:
- describe the service;
- name primary geography;
- include a practical value proposition;
- avoid fake urgency;
- stay around normal search-snippet length;
- do not repeat the same description across pages.

Example:

> Bathroom renovations in Pretoria managed from demolition and plumbing through waterproofing, tiling and final installation. Request a PRX Projects site visit.

## Internal-link model

Homepage:
- links to every Tier 1 service;
- links to 3 featured projects;
- links to 4–6 priority areas.

Service page:
- links to 2–4 related projects;
- links to 2–4 relevant advice articles;
- links to 2–3 areas;
- links to one adjacent service where helpful.

Project page:
- links to its service page;
- area page;
- related article if relevant.

Area page:
- links to services available there;
- real projects nearby;
- contact.

Article:
- links to the core service;
- project proof where relevant.

## Search intent notes from current results

Current Pretoria search results frequently emphasize:
- free/site quotes;
- one team / one point of contact;
- bathroom and kitchen specialization;
- project galleries;
- location coverage;
- pricing/cost guidance;
- clear phone/WhatsApp conversion;
- real project examples.

PRX Projects should answer those needs but not copy competitor language.

## Google Business alignment

The website and Google Business Profile should use matching:
- brand name;
- phone;
- website;
- service areas;
- service descriptions;
- hours;
- project photos.

Ask clients for genuine reviews after handover. Do not script keyword-stuffed reviews.

## GEO / AI-search notes

Do not treat GEO as a separate pile of AI-written pages.

Create content that is easy to quote:
- concise answer paragraphs;
- factual project details;
- clear headings;
- explicit locations;
- service scope;
- timelines when genuine;
- common questions;
- image/video evidence.

Google's 2026 AI-search guidance stresses unique, useful content and says SEO fundamentals remain the base.

OpenAI search visibility:
- allow `OAI-SearchBot` in `robots.txt`;
- keep important information in crawlable HTML;
- avoid hiding core content behind client-only JavaScript;
- provide descriptive image alt text;
- maintain accessible navigation.

---

# FILE: 03_CONTENT_SOURCE_AND_ASSET_CHECKLIST.md

# PRX Projects — Content Source and Asset Checklist

## A. Existing Plexi Renovations facts that can inform PRX Projects

These are source facts currently visible on the Plexi Renovations website or established in the working project. Confirm legal/brand applicability to PRX Projects before production.

### Current visible contact data from Plexi Renovations

- Service base shown: Garsfontein, Pretoria, 0081
- Main phone shown: 012 001 9429
- Email shown: admin@plexirenovations.co.za
- WhatsApp used on the bathroom page: 082 569 0850

Do not automatically publish these as PRX Projects contact details until confirmed.

### Experience / positioning

Current site messaging says:
- 13+ years of experience;
- Pretoria / Pretoria East / Centurion focus;
- renovation and construction;
- hands-on project management;
- coordination of plumbers, electricians, tilers, painters, carpenters and related trades;
- residential and light-commercial work;
- NHBRC registration is referenced.

Confirm which claims legally apply to PRX Projects.

## B. Services available as content source

Strong service categories:
- full home renovations;
- bathroom renovations;
- kitchen renovations;
- building renovations;
- extensions and alterations;
- new builds;
- painting;
- waterproofing;
- tiling;
- ceilings and drywall;
- carpentry / joinery coordination;
- plumbing coordination;
- electrical coordination;
- aluminium doors and windows;
- paving;
- commercial / office refurbishment;
- signage / office fit-outs where appropriate.

Recommended PRX Projects launch emphasis:
1. Full Home Renovations
2. Bathrooms
3. Kitchens
4. Building Renovations & Extensions
5. Waterproofing
6. Commercial / Office Renovations
7. Painting as a supporting page

Do not overwhelm homepage visitors with every trade.

## C. Useful operational proof

Potentially strong differentiators if still accurate:
- itemised quotations;
- one point of contact;
- multiple trade teams;
- site supervision;
- bathroom programme around 15 working days for a standard full renovation;
- project follow-up / snag support;
- supplier/product research;
- ability to manage multiple renovation trades in sequence.

## D. Public review source material

Use only after confirming that PRX Projects may legitimately display reviews generated under Plexi Renovations.

### Peter Cheney

> I contracted Plexirenovations and Construction to transform an open patio into a sun room and braai area. Being active in the construction industry all my working career I understood the complexities of enclosing the patio area and replacing and waterproofing the split level roof. The project was undertaken with absolute professionalism and attention to detail. I was kept up to date with the schedule as well as the inevitable problems that arose and their speedy resolution. Highly recommended and can be trusted to deliver a high quality product within all the contractual conditions. Photos show before and after.

### Niven Pillay

> Ben and team undertook a major renovation of my entire home. They were able to achieve a phenomenal turnaround time of 4 months. The project was managed well, with clear and open communication, and they’ve been readily available for any concerns we may have had from the beginning. Well done to the team and special mention to Phillip for being ever so helpful 🙏

### Nirvana Pillay

> Cannot thank Ben, Phillip and the rest of the team enough. They went above and beyond to assist us and to make sure we were happy with the end results of the renovations to our home. Amazing work ethic and service delivery and the whole team is just genuinely kind.

### Adesh Singh

> Quality, professional services delivered on time. Excellent skill level and project management for hassle free home renovation. Highly recommended.

Do not edit reviews in a way that changes their meaning. Obtain/retain source evidence.

## E. Project content candidates

Build case studies from genuine work with the strongest photo sets.

Priority candidates from the Plexi project history:

### Full home / structural
- Waterkloof renovation work
- patio extension project with aluminium windows, louvre roof, composite decking, paving and new grass
- whole-home projects with strong before/after evidence

### Kitchens
- Midstream kitchen
- Carin/Karen kitchen project
- other complete kitchen remodels with cupboard and countertop photos

### Bathrooms
- Moreleta Park bathroom
- Monique upstairs bathroom
- Centurion bathroom work
- any bathroom with good before / waterproofing / tiling / after photos

### Waterproofing / exterior
- roofs
- parapets
- windowsills
- wall waterproofing
- roof coating

### Commercial / office
- office refits
- signage
- drywall / ceilings
- painting
- electrical upgrades
- shop/retail work where permission exists

Do not publish private client names without permission. Use project names such as:
`Bathroom Renovation — Moreleta Park`
rather than client names.

## F. Asset upload checklist

### Brand

Upload:
- high-resolution PRX Projects logo as SVG if available;
- PNG fallback;
- favicon;
- brand colors if already defined;
- any existing vehicle/signage branding.

### Homepage hero

Need:
- 3 candidate landscape project photos;
- ideally 2000–2400 px wide source;
- no screenshots;
- no WhatsApp overlays;
- no watermarks;
- not AI-generated;
- visually calm enough to hold nearby text.

### Team / trust

Need:
- Ben on a real site;
- Philip/site manager photo if appropriate;
- one team working image;
- one clean site-supervision image.

### Bathrooms

For at least 3 bathrooms:
- before wide;
- demolition;
- plumbing;
- waterproofing;
- tiling;
- detail;
- finished wide;
- finished vertical.

### Kitchens

For at least 3 kitchens:
- before;
- carcasses / work-in-progress;
- tops;
- cabinetry detail;
- final wide;
- island / feature;
- appliance integration.

### Home renovations

For 3 strong projects:
- outside before;
- interior before;
- construction stage;
- finishes;
- final rooms;
- exterior after.

### Waterproofing

Need technical proof:
- problem area;
- preparation;
- membrane/coating;
- detail junction;
- final result.

### Commercial

Need:
- before;
- layout / ceiling / drywall;
- electrical / lighting;
- finished workplace.

## G. Image naming system

Before adding to repo:

```text
service-area-project-sequence.ext
```

Examples:

```text
bathroom-renovation-moreleta-park-pretoria-01.jpg
bathroom-waterproofing-moreleta-park-02.jpg
kitchen-renovation-midstream-centurion-01.jpg
home-renovation-waterkloof-pretoria-01.jpg
waterproofing-parapet-pretoria-east-01.jpg
```

## H. Image alt-text rules

Describe what is actually visible.

Good:
> Finished walk-in shower after a bathroom renovation in Moreleta Park, Pretoria

Bad:
> Best bathroom renovation Pretoria bathroom contractor cheap bathroom renovation

## I. Content facts Claude must ask for before publishing a project

For every new project, request missing fields:
- project area;
- project type;
- completion month/year;
- scope;
- duration;
- one challenge;
- one technical/process detail;
- products worth naming;
- photo rights;
- testimonial permission if used.

## J. Information not to copy from the existing site

Do not migrate:
- insurance-company template wording;
- demo-theme images from rstheme.com;
- placeholder counters;
- duplicated mission/vision text;
- generic sustainability filler;
- "cleaning service" process text;
- misspellings such as Geuteng;
- incorrect FAQ answers;
- old demo subdomain contact details;
- plugin-generated SEO titles such as "7 Expert Services..." or "10 Actionable Reasons...".

## K. Production confirmation sheet

Fill before launch:

```text
PRX Projects legal name:
Domain:
Main phone:
WhatsApp:
Email:
Public address:
Service-area wording:
Business hours:
NHBRC claim:
CIDB claim:
COIDA claim:
Public liability claim:
Years of experience:
Relationship to Plexi Renovations:
Can PRX Projects use Plexi Renovations reviews?:
Can PRX Projects use Plexi Renovations project photos?:
Google Business Profile URL:
Facebook URL:
Instagram URL:
TikTok URL:
```

---

# FILE: 04_TECHNICAL_PERFORMANCE_SEO_SPEC.md

# PRX Projects — Technical, Performance, SEO and Accessibility Specification

## 1. Why the new site should be lean

The current WordPress benchmark showed major technical overhead:
- failed Core Web Vitals;
- very slow mobile LCP;
- large render-blocking CSS;
- large amounts of unused CSS and JavaScript;
- roughly 9 MB network payload in the captured test;
- heavy theme/plugin dependencies;
- 100 animated elements;
- external theme-demo assets;
- mixed-content requests.

The new site should not reproduce that architecture.

## 2. Rendering

Use static generation for:
- homepage;
- services;
- areas;
- projects;
- advice;
- about.

Use server-side logic only where required for:
- contact submission;
- anti-spam;
- future admin automation.

No client-side rendering for basic page content.

## 3. JavaScript policy

Client components only for:
- mobile menu;
- optional FAQ disclosure if native `<details>` is not used;
- quote form enhancement;
- analytics hooks.

Prefer:
- native `<details>` for FAQ;
- CSS for hover/transitions;
- server components for layout/content.

Avoid:
- Slider Revolution equivalents;
- GSAP for basic content;
- Swiper unless there is a real requirement;
- jQuery;
- animation libraries;
- heavy chat widgets.

## 4. Image policy

Use `next/image`.

For all images:
- dimensions known;
- `sizes` set correctly;
- below-fold lazy loaded;
- hero image prioritized;
- modern formats enabled;
- do not serve 2000 px image into a 320 px card.

## 5. Font policy

Use one family if possible.

Preferred:
- system stack, or
- one local variable font.

Avoid Google Fonts render-blocking requests if a local equivalent can be bundled legally.

## 6. Third-party policy

Launch with only:
- essential analytics;
- Google Ads conversion if needed;
- contact email provider.

Do not load:
- YouTube iframe until clicked;
- live chat framework;
- social feeds;
- maps iframe above the fold.

Use a normal map link instead of a live map unless the interactive map proves useful.

## 7. Core Web Vitals targets

Engineering targets:
- LCP <= 2.5 s, target <= 1.8 s
- CLS <= 0.1
- INP <= 200 ms

Lighthouse targets:
- Performance >= 95
- Accessibility >= 95
- Best Practices >= 95
- SEO >= 95

Do not fail a launch solely because an artificial lab run returns 93 instead of 95 if field performance and conversion are strong.

## 8. Accessibility

Required:
- semantic `<header>`, `<nav>`, `<main>`, `<footer>`;
- one `<main>`;
- logical heading order;
- visible keyboard focus;
- accessible menu button;
- form labels;
- meaningful button/link names;
- sufficient contrast;
- no color-only status;
- image alt text;
- explicit image dimensions;
- reduced-motion support for animations;
- minimum touch targets;
- no auto-moving content.

## 9. Crawlability

Navigation and content links must use real anchors:
`<a href="/services/bathroom-renovations-pretoria/">`

Do not create fake anchors with only JavaScript click handlers.

All money pages must be reachable from HTML links.

## 10. Metadata

Use Next.js metadata APIs.

Every indexable page:
- title;
- description;
- canonical;
- Open Graph title/description/image;
- robots default index/follow.

## 11. Structured data

Implement accurate JSON-LD.

Homepage / About:
- `Organization`
- appropriate `LocalBusiness` subtype if supported by actual business details

Service pages:
- `Service`

All nested pages:
- `BreadcrumbList`

Advice:
- `Article` or `BlogPosting` if accurate.

Do not add fake:
- AggregateRating;
- awards;
- price offers;
- opening hours;
- geo coordinates;
- registration IDs.

## 12. robots.txt

Use a Next.js `robots.ts`.

Conceptual rules:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://YOUR_DOMAIN/sitemap.xml
```

Do not add `GPTBot` rules unless Ben makes a separate decision about training access.

## 13. Sitemap

Generate automatically from actual content data.

Include:
- homepage;
- services;
- areas;
- projects;
- advice;
- about/contact if indexable.

Do not include:
- preview URLs;
- thank-you pages;
- duplicate routes;
- admin endpoints.

## 14. Canonicals

Self-canonical by default.

Choose one hostname and permanently redirect the other.

Do not let Vercel preview URLs become canonical.

## 15. Forms

Requirements:
- server validation;
- sanitized inputs;
- spam protection;
- success/failure states;
- no secret keys in client bundle;
- rate limiting if abuse occurs;
- accessible errors.

Lead data should contain:
- timestamp;
- landing page;
- source/UTM when available;
- fields submitted;
- consent state if applicable.

## 16. Analytics

Minimum events:
- phone_click
- whatsapp_click
- quote_form_start
- quote_form_submit
- project_view
- service_view

Google Ads:
- primary conversion = successful form submission;
- optionally qualified call tracking later.

## 17. Local SEO

Website business details should match public profiles:
- same brand name;
- same phone;
- same business/service area;
- same hours if displayed.

Create a dedicated contact page with:
- phone;
- WhatsApp;
- email;
- service area;
- hours;
- form.

## 18. Google / AI content principles

Build pages around:
- actual project experience;
- local details;
- expert explanations;
- useful photos/video;
- clear answers.

Avoid mass-generating suburb/service combinations until the site has genuine content to differentiate them.

## 19. Security

- all traffic HTTPS;
- no mixed content;
- secure headers;
- dependencies kept current;
- secrets in Vercel environment variables;
- no WordPress credentials in repository;
- no public API keys that grant write access;
- protect form endpoint.

## 20. Git workflow

Recommended:
- `main` = production
- feature branches = previews
- pull request or reviewed merge
- Vercel preview for every branch/PR

Before merge:
- lint
- typecheck
- build
- link check
- schema validation where possible
- Lighthouse preview audit.

## 21. Vercel + Claude Code

Use current official Vercel/Anthropic instructions during setup; do not hardcode old commands from memory if official docs have changed.

The repository should contain this `CLAUDE.md` so Claude Code loads project-specific standards automatically.

## 22. DNS cutover

Do not switch production domain until:
- Vercel preview tested;
- domain added to Vercel;
- existing DNS exported/backed up;
- current MX/TXT records recorded;
- old URLs mapped;
- redirects implemented;
- Search Console verified;
- analytics ready.

At cutover:
- Vercel Project Settings → Domains will show the exact DNS record(s) to use;
- update only web-hosting records at the DNS provider;
- preserve email MX/TXT/SPF/DKIM/DMARC records;
- verify apex and `www`;
- verify SSL;
- test forms;
- submit sitemap.

Never guess the Vercel target if the dashboard shows a project-specific value.

---

# FILE: 05_LAUNCH_AND_MAINTENANCE_PLAN.md

# PRX Projects — Build, Launch and Maintenance Plan

## Phase 0 — Confirm facts

Ben confirms:
- domain;
- business/legal name;
- phone;
- WhatsApp;
- email;
- relationship to Plexi Renovations;
- registrations;
- review/project usage rights;
- logo assets.

Expected owner time: 30–60 minutes.

## Phase 1 — Repository and design foundation

Tasks:
- create GitHub repo;
- initialize Next.js / TypeScript / Tailwind;
- add `CLAUDE.md`;
- connect to Vercel;
- install/configure current official Vercel Claude Code integration if desired;
- define colors, typography and spacing;
- build header/footer/mobile menu;
- add analytics placeholders.

Target: same day.

## Phase 2 — Homepage and lead flow

Build:
- homepage;
- mobile sticky CTA;
- quick quote form;
- thank-you state;
- Call/WhatsApp links;
- analytics events.

Target: day 1–2.

## Phase 3 — Money pages

Build in priority order:
1. Home Renovations
2. Bathroom Renovations
3. Kitchen Renovations
4. Building Renovations
5. Extensions
6. Waterproofing
7. Commercial Renovations
8. Painting

Target: day 2–4 depending on supplied content/images.

## Phase 4 — Project proof

Create at least:
- 2 bathroom case studies;
- 2 kitchen/home case studies;
- 1 waterproofing/exterior case study;
- 1 commercial/building case study if available.

Target: day 3–5.

## Phase 5 — Areas

Launch only the strongest:
- Pretoria East
- Centurion
- Waterkloof
- Moreleta Park
- Faerie Glen
- Silver Lakes

Each needs differentiated content and real links to relevant project/service proof.

Target: day 4–6.

## Phase 6 — Technical SEO

Verify:
- titles/descriptions;
- canonicals;
- schema;
- sitemap;
- robots;
- OAI-SearchBot access;
- internal links;
- Open Graph;
- 404 page;
- redirects;
- noindex on preview/staging where needed.

Target: day 5–6.

## Phase 7 — Performance and accessibility

Run mobile + desktop Lighthouse.

Fix:
- LCP image;
- unused client JS;
- image sizing;
- contrast;
- heading order;
- labels;
- focus states;
- link names;
- console errors.

Target: day 6.

## Phase 8 — Production launch

Before DNS:
- production build passes;
- all forms tested;
- Google Analytics/Ads IDs set;
- project/social links checked;
- URL inventory complete;
- DNS backup taken;
- MX/TXT email records protected.

Launch:
- connect domain;
- confirm SSL;
- check root + www redirect;
- verify Search Console;
- submit sitemap;
- inspect top URLs.

## Post-launch 7-day checks

Check:
- Search Console crawl/indexing;
- 404s;
- analytics;
- form delivery;
- phone/WhatsApp events;
- Core Web Vitals;
- Vercel logs.

## 30-day content rhythm

Do not rewrite core pages daily.

Weekly:
- add one real project update, FAQ, image or internal-link improvement where useful;
- review Search Console queries;
- capture site photos/video.

Twice monthly:
- publish one strong advice article or case study.

Monthly:
- review service-page queries and conversions;
- update one or two pages based on data;
- review local listings and reviews;
- audit broken links.

## Future Claude Code commands

### New project case study

> I uploaded photos for a completed bathroom in Moreleta Park. First inspect the project content schema. Ask me only for missing factual fields required to publish a credible case study. Then create the page, optimize images, add internal links to Bathrooms and Moreleta Park, add metadata, run tests and create a preview. Do not merge to production.

### Advice article

> Use our existing service content and real project knowledge to draft an article answering "How long does a bathroom renovation take in Pretoria?" Do not invent prices or regulations. Include links to the bathroom service page and two relevant project pages. Build it as an Advice post, run the build, and give me the preview URL.

### SEO improvement

> Review Search Console query data I provide for the last 90 days. Identify pages with high impressions but weak CTR or positions 4–15. Propose changes first. Do not modify content until I approve the proposed change list.

### Performance

> Audit the current Vercel preview on mobile. Find the top causes of LCP, INP, CLS and unused client JavaScript. Fix only measurable issues, keep the visual design unchanged, then show before/after Lighthouse results.

## Source / research URLs

Reference patterns researched:
- https://calldieseldudes.com/
- https://urbanac.co.za/
- https://raddietrading.co.za/
- https://briansreno.co.za/
- https://bathroomgalore.co.za/
- https://www.legatorconstruction.co.za/
- https://mhscontractors.co.za/

Current Plexi Renovations source:
- https://plexirenovations.co.za/
- https://plexirenovations.co.za/services/
- https://plexirenovations.co.za/about-plexirenovations-2/
- https://plexirenovations.co.za/pricing/

Technical guidance:
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing
- https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers
- https://docs.anthropic.com/en/docs/claude-code/getting-started
- https://docs.anthropic.com/en/docs/claude-code/cli-usage
- https://vercel.com/changelog/introducing-vercel-plugin-for-coding-agents
- https://vercel.com/academy/nextjs-foundations/project-setup
- https://vercel.com/kb/domains

---

