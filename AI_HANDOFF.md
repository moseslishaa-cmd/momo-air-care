# AI_HANDOFF — MOMO Air Care Website

Last updated: 2026-07-28. This file is the session-to-session handoff. Read it fully
before changing anything. Do not undo or redesign completed work without an explicit
user request.

## Owner & Business
- Owner: Moshiko (moses.lishaa@gmail.com). Non-technical — the assistant does all work
  itself, researches when unsure, and asks the owner only when a business decision is needed.
- Business: MOMO Air Care — air duct, dryer vent, chimney, furnace/blower, crawl space &
  insulation services. Greater Seattle / Puget Sound, WA.
- Phone (all CTAs): (425) 200-5790 · Email: info@momoaircare.com (inbox NOT confirmed working;
  Gmail above is the reliable inbox).

## Stack & Architecture
- Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind v3 (utility classes are
  sparse; most styling is inline style objects). framer-motion for animations.
- Fonts via next/font with CSS vars: --font-inter (body), --font-oswald (labels/buttons),
  --font-fraunces (display headings). Reference them as `var(--font-*)` in inline styles.
- Brand: yellow #FFD400, black #111/#0c0c0c, white, light gray #FAFAF7/#F6F6F3.
- Official logo: script "Momo" + AIR CARE — public/logo.png (full) and public/logo-nav.png
  (nav asset, 160px tall). Used in NavBar; footer still uses text lockup by design.
- Repo root = app root: app/ (routes, api, sitemap/robots/manifest/icon), components/,
  lib/ (site.ts config, services.ts content, cities.ts), public/ (all media), tools/.

## Deploy Flow (critical)
- `git push origin main` → Vercel auto-builds → live at https://momoaircare.com in ~1 min.
- Git creds are in macOS keychain — plain `git push origin main` works. Commit as
  user.email=moses.lishaa@gmail.com, user.name="Moses Lishaa".
- ALWAYS: `npx tsc --noEmit` + `npm run build` green BEFORE pushing; verify live afterwards
  by curling https://momoaircare.com for a marker of the change.
- PRIMARY DOMAIN IS THE APEX (momoaircare.com); www 308-redirects to apex (flipped
  2026-07-28 via Vercel API to match the code's canonical SITE.url and the activated
  FormSubmit pair — see Lead Delivery below). Vercel CLI is authed as the owner
  (`npx vercel whoami` → moseslishaa-9874, team moses88); token at
  ~/Library/Application Support/com.vercel.cli/auth.json works for REST API calls.
  Do NOT flip the domain direction back.
- Old GitHub Pages mirror (gh-pages branch) is obsolete/stale — do not update.

## Lead Delivery (RESOLVED 2026-07-28 — how it works)
- FormSubmit activation is per (email, domain) pair. The ACTIVATED pair is
  moses.lishaa@gmail.com + momoaircare.com (apex). www was never activated — that's
  why the form failed while the site's primary domain was www. Fixed by making apex
  the primary domain (also fixed the SEO canonical mismatch).
- Delivery path: browser → POST /api/quote (server forwards to FormSubmit, but
  FormSubmit BLOCKS Vercel datacenter IPs → returns fallback:true) → the client
  (Contact.tsx) then POSTs directly from the visitor's browser to
  formsubmit.co/ajax/moses.lishaa@gmail.com with Origin https://momoaircare.com →
  delivered. This dual path is intentional; a 502 from /api/quote alone is NOT a bug.
- Verified end-to-end 2026-07-28 in a real browser: form on /contact shows the
  "Thank You!" success card, and a test lead ("TEST — Please Ignore") was delivered
  to moses.lishaa@gmail.com.
- Stray "This form needs Activation" emails for the www pair may sit in the owner's
  inbox (triggered during diagnosis) — harmless, can be ignored; www pages no longer
  exist (308 to apex before any JS runs).

## AI Image Pipeline
- tools/gen-image.py — Gemini image generation. Key in .env.local (GEMINI_API_KEY,
  git-ignored). Owner has prepaid billing on Google project.
- House style block used for all brand photos (keep consistent): "Premium commercial
  advertising photograph… full-frame, 35mm, soft natural daylight, warm neutral grade,
  Pacific Northwest modern-luxury home, ultra photorealistic, magazine quality."
- Uniform: black polo, small yellow MOMO chest logo, black pants/boots. Vans: yellow body,
  black skirt, mascot + lettering on SIDE only, clean front.
- Known model quirk: chest-logo text often renders MONO/NONO — fix with an edit pass
  ("print the word MOMO — the four capital letters M, O, M, O") or remove the text.
- Compress via `sips -s format jpeg -s formatOptions 82` into public/.

## Site Structure (as deployed)
- Home: Hero (full-bleed hero-family.jpg, headline, Schedule Now/Get Estimate, ZIP checker,
  trust badges) → CompanyStory (heritage-van.jpg 2010 polaroid + fleet-today.jpg script-logo
  van collage; stacked on mobile) → TrustStrip → Stats counters → ServicesGrid (6 photo
  catalog cards). Homepage intentionally ENDS at the services grid — the dryer-safety block,
  lower sections, and ALL popups (exit-intent, discount coupon, did-you-know) were removed
  at owner request. Footer + mobile StickyBar (Call/Get Quote) remain.
- Pages: /air-duct-cleaning, /dryer-vent-cleaning, /furnace-cleaning, /crawl-space-services,
  /chimney-cleaning (all from lib/services.ts via app/[service]/page.tsx + ServicePage.tsx),
  /service-areas + /service-areas/{seattle,bellevue,tacoma,renton}, /about, /contact.
- Before/after imagery was fully REMOVED site-wide at owner request.
- SEO: per-page metadata, JSON-LD (HVACBusiness/Service/FAQPage/Breadcrumb), sitemap.ts,
  robots.ts, manifest.ts, app/icon.svg.
- Forms: Contact form posts to /api/quote (validation, honeypot `company`, rate limit),
  which forwards server-side to FormSubmit → moses.lishaa@gmail.com.

## OPEN ITEMS — next steps in order
1. ~~Lead form activation~~ **DONE 2026-07-28** — see "Lead Delivery" section above.
   Note: the curl-only test of /api/quote returns 502/fallback BY DESIGN (datacenter
   IP block); real-browser delivery is what counts and it works.
2. Brand image backlog (generate with existing pipeline, same style block): more mascot
   poses, About-page team/office imagery upgrades, seasonal banners, social covers.
3. Optional pages the owner floated but NOT built (need real business facts first —
   do not invent): membership plans, financing details, careers, blog.
4. public/ contains some now-unused legacy media (gallery-before/after-*.jpg, momo-faq*.png,
   stats-image*, laundromat-dryers.jpg, dryer-load.mp4…) — safe to prune for repo size,
   low priority.

## Conventions
- All copy/icons/illustrations must be ORIGINAL (no copying from other companies).
  Layout genre inspiration is fine; content copying is not.
- Trust claims live in lib/site.ts + Stats (10,000+ homes, 4.9★, 98%, 15+ years) — these
  are the owner's stated figures; don't invent new claims (licenses, certifications, awards).
- Mascot (giraffe) images must not be altered/redrawn — reuse provided assets.
- Verify visually in the browser preview (mobile 375–390px AND desktop ≥1280px) before
  every deploy; check captions/text are never covered by overlapping elements.
