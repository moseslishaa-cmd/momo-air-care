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

**NOT targeted (not verified as offered): furnace repair/installation/replacement, AC
repair/installation, heat pump anything, ductless mini-splits.** These are the market's
biggest head terms, but publishing pages for them without owner confirmation would
violate the no-invented-services rule. OWNER DECISION PENDING — see §5.

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

- **HVAC scope**: does MOMO perform furnace repair/installation, AC, heat pumps,
  mini-splits? If yes → the biggest keyword clusters open up (new service pages).
  If no → current inspection-first positioning stands (honest and differentiated).
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
