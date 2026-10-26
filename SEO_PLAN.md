# MOMO Air Care — SEO & Lead Generation Plan (Greater Seattle)

Date: 2026-10-26. Companion to AI_HANDOFF.md. This documents the audit, what was
implemented, the keyword→page map, competitor findings, and what remains (with owner
dependencies clearly marked). No search-volume numbers appear anywhere in this plan
because no keyword-data tool was available — classifications are by intent only.

## 1. Positioning (from competitor research, 2026-10-26)

Seven competitors researched: seatownservices.com, greenwoodheating.com, foxph.com,
brennanheating.com, evergreenhomeheatingandenergy.com, serviceexperts.com,
onehourheatandair.com. Full agent findings in the session transcript; synthesis:

- **Dryer vent cleaning and chimney services are unclaimed.** None of the seven has a
  dedicated dryer-vent page; none offers chimney services at all. These are MOMO's core
  services → own the fire-safety/specialty angle.
- **Duct cleaning is a side dish for all of them** — installers first. The "dedicated
  cleaning specialist with no equipment-sales agenda" position is unoccupied.
- **Their city pages are thin/templated** (name-swapped boilerplate, empty modules, or
  none at all). MOMO's genuinely local city pages are a real differentiator.
- **Nobody publishes prices.** MOMO's "$69 dryer vent" transparency is an edge — keep it.
- **Proven patterns to keep using:** "{Service} in {City}, WA" titles, dual CTA
  (call + book) repeated per section, concrete seasonal offers, license number in footer.
- **Their technical sloppiness** (1MB pages, missing metas, boilerplate city pages) is an
  opportunity: stay fast and clean.

## 2. Keyword → page map (intent-classified; no volume data)

| Keyword cluster | Intent | Primary target page |
|---|---|---|
| air duct cleaning seattle / near me | Commercial | /air-duct-cleaning (+ /service-areas/seattle for geo) |
| dryer vent cleaning seattle/{city} | Commercial | /dryer-vent-cleaning (+ city pages) |
| chimney sweep / chimney cleaning seattle | Commercial | /chimney-cleaning |
| furnace cleaning / blower cleaning | Commercial | /furnace-cleaning |
| hvac inspection / hvac tune-up seattle | Commercial | /hvac-repair-inspection |
| crawl space cleaning / insulation removal | Commercial | /crawl-space-services |
| indoor air quality seattle | Mixed | Home + /air-duct-cleaning (dedicated page = future) |
| {service} + {kent, kirkland, redmond, everett, lynnwood, issaquah, sammamish, bothell, federal way, auburn, puyallup, olympia, bellevue, tacoma, renton} | Commercial+geo | /service-areas/{city} |
| brand ("momo air care") | Navigational | Home |

Cannibalization rule: one geo page per city; service pages target the service head
terms with "Greater Seattle"; the homepage carries the umbrella title.

**UPDATE 2026-10-26: owner confirmed furnace repair, furnace installation/replacement,
and AC/heat pump/mini-split services ARE offered.** Pages built the same day:
/furnace-repair, /furnace-installation, /heat-pump-services, /air-conditioning —
all linked from nav, footer, and city pages. Rebate specifics intentionally omitted
(unverifiable); pages say programs vary and are confirmed during assessment.

## 3. Implemented 2026-10-26

- **12 new city pages** (total 16): kent, kirkland, redmond, everett, lynnwood,
  issaquah, sammamish, bothell, federal-way, auburn, puyallup, olympia — each with
  original intro (housing-stock angle), local tip, real neighborhoods, 3 city-specific
  FAQs (FAQ JSON-LD included), service cross-links. Data-driven via lib/cities.ts.
- **/hvac-repair-inspection** service page — conservative inspection-first copy matching
  the owner-approved booking tile; new on-style photo (service-hvac.jpg).
- **/service-areas index** now data-driven (16 city cards + blurbs); footer cities 4→8.
- **OG image fixed**: landscape 1200×630 (/og.jpg) replacing portrait mascot image.
- **Homepage title** now keyword-led: "Air Duct, Dryer Vent & Chimney Cleaning in
  Seattle, WA | MOMO Air Care"; description mentions Seattle/Bellevue/Tacoma.
- **LCP**: hero image preloaded via react-dom preload (CSS background was discovered late).
- Already in place from July build (verified in audit): per-page metadata + canonicals,
  HVACBusiness/Service/FAQPage/Breadcrumb JSON-LD, sitemap.ts (data-driven — new pages
  included automatically), robots.ts, manifest, visible breadcrumbs on service+city
  pages, mobile sticky CTA bar, working spam-protected lead form, 404 page.

## 4. Owner action checklist (Google Business Profile & tracking)

These need the owner's Google account — the assistant can guide on-screen:
1. **Google Business Profile**: claim/verify; primary category "Air duct cleaning
   service"; secondary: Chimney sweep, Dryer vent cleaning (if offered as category).
   Service-area business settings matching the 24 SITE.cities list; hours 7:00–20:00;
   phone (425) 200-5790; website momoaircare.com; upload real job photos + logo + van.
2. **Reviews**: ask every completed job for a Google review (the site's
   googleReviewsUrl currently points to a search query — replace with the real GBP
   review link once the profile exists).
3. **Google Search Console**: verify momoaircare.com (DNS TXT via GoDaddy), submit
   /sitemap.xml.
4. **GA4**: create property, add gtag to layout (assistant task once ID exists),
   mark quote-form submit as conversion.
5. **NAP consistency**: same name/phone everywhere (Yelp, Nextdoor, Angi, BBB,
   Thumbtack). No fake addresses — service-area business.
6. **License number in footer** once owner provides it (competitors show WA license
   numbers; we must not invent one).

## 5. Blocked / pending owner decisions

- **WA contractor license number** for footer/schema/GBP.
- **Real GBP review link** for lib/site.ts googleReviewsUrl.
- **Keyword volumes/rankings**: need ahrefs (or similar) connected via /mcp to add data.

## 6. Next content iterations (no owner input needed)

- Educational guides hub (dryer fire safety, duct cleaning process, chimney creosote,
  wildfire-smoke season IAQ) — competitors have near-zero education content.
- Seasonal angle content: fall chimney rush, winter dryer loads, pollen season.
- Remaining SITE.cities without pages: Marysville, Arlington, Monroe, Duvall,
  North Bend, Lacey, Tumwater, DuPont (next batch, same quality bar).
- City-x-service combo pages (e.g., dryer-vent-cleaning in {city}) — unclaimed by all
  competitors; only with genuinely distinct content per page, never name-swaps.


---

## PHASE 2 — 2026-10-26 (continuation session)

### Implemented
- **Homeowner Guides hub** (/guides + 7 articles) — the topical-authority layer competitors
  lack. Each has Article/FAQPage/BreadcrumbList JSON-LD, related-service links, QuoteForm.
  Facts policy enforced: the rebates guide cites ONLY officially verified figures
  (seattle.gov, Oct 2026) with an on-page verification note; federal 25C credit expiry
  (Dec 31, 2025, OBBBA §70505) stated plainly; PSE amounts deliberately not printed
  (volatile, third-party-only sources) — installer-network requirement flagged instead.
  A USFA dryer-fire stat was fact-checked and corrected before publish (agent draft said
  31%/2018-20; the verifiable report figure is ~a third, 2008-10 NFIRS — phrased accordingly).
- **Core Web Vitals**: hero image recompressed 312KB→140KB (identical pixels at display
  size). Lighthouse mobile (lab, live site): Performance 84→91, LCP 4.5s→3.4s, CLS 0.046,
  TBT 0ms. Visual regression vs. pre-change baseline: identical.
- **Crawl audit (live)**: http→https, www→apex, trailing-slash all single 308s; every
  sitemap URL returns 200; sitemap/robots valid; no orphan pages (all pages reachable
  via nav/footer/index pages).

### Competitor additions (BelRed, Aire Serv — researched 2026-10-26)
- **BelRed**: ~59 city hubs + ~49 city×service combo pages + ~428-post blog — volume
  proves content works in this market, but their city pages are name-swappable with no
  real localization, headings are messy, and there's no real-time booking. They merchandise
  offers hard (discount stack, financing partners, referral program) and show a license
  number + 6,000+ reviews claim.
- **Aire Serv**: national franchise platform with ZIP-gated lead routing and a paid
  maintenance membership (Advantage Plan) as a conversion asset; actual Seattle-area
  coverage is thin (no Bellevue/Tacoma/Eastside franchise), template leftovers abound.
- Takeaways for MOMO: (1) our genuinely-local city pages and honest guides out-localize
  both; (2) a maintenance membership is their strongest idea worth copying — OWNER
  DECISION, needs real pricing; (3) city×service combo pages are proven here (BelRed/Fox)
  and still unclaimed for duct/dryer/chimney terms; (4) license number display is table
  stakes — still waiting on owner's number.

### Keyword tiers (intent-classified; volumes unavailable — no data tool connected)
- **Tier 1 immediate service** → /furnace-repair, /air-conditioning, /heat-pump-services,
  /hvac-repair-inspection. NOT targeted: "emergency/24-7" terms — business hours are
  7:00–20:00; do not claim emergency service unless the owner adds it.
- **Tier 2 installation** → /furnace-installation (install+replacement cluster),
  /heat-pump-services (install incl. mini-splits), /air-conditioning (install).
- **Tier 3 maintenance** → /furnace-cleaning, /hvac-repair-inspection. "Maintenance plan"
  terms blocked until a real membership exists (owner decision).
- **Tier 4 educational** → the 7 guides; each links to its money page.

### Monitoring plan (once GSC/GA4 are connected by owner)
Weekly: clicks, impressions, CTR, coverage/indexing errors; query-level trends for
service and city pages; high-impression/low-CTR pages → title/description iteration.
Conversions: quote-form submissions (payload `page` field already identifies source
page) + call-button clicks (add GA4 event once property exists).

### Phase-3 backlog
1. Remaining 8 city pages (Marysville, Arlington, Monroe, Duvall, North Bend, Lacey,
   Tumwater, DuPont) — same quality bar.
2. City×service combo pages for dryer-vent/chimney/duct terms in top cities — only with
   genuinely distinct content.
3. More guides: AC sizing, mini-split vs central, crawl space moisture, wildfire smoke IAQ.
4. Owner-gated: maintenance membership page, license number, GBP/GSC/GA4, financing (if any).
