// Original local-page content for key service-area cities.

export interface CityContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localNote: string;
  neighborhoods: string[];
  faqs: { q: string; a: string }[];
}

export const CITIES_CONTENT: CityContent[] = [
  {
    slug: 'seattle',
    name: 'Seattle',
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Seattle, WA',
    metaDescription:
      'MOMO Air Care serves Seattle homes with air duct cleaning, dryer vent cleaning, furnace cleaning and crawl space services. Free quotes — (425) 200-5790.',
    intro:
      "Seattle's housing mix is unlike anywhere else in the region — Craftsman homes from the 1920s in Wallingford, mid-century ramblers in View Ridge, and brand-new townhomes in Ballard, often on the same block. Each era brings its own duct layouts, vent runs, and quirks, and our technicians work with all of them daily. Whether it's an older gravity-furnace conversion or a tight modern mechanical closet, we clean the full system and show you photo proof.",
    localNote:
      'Wet winters mean Seattle dryers work hard for much of the year, and long vent runs in townhomes clog faster than most owners expect. If your laundry takes two cycles, that is the first sign.',
    neighborhoods: ['Ballard', 'Wallingford', 'West Seattle', 'Capitol Hill', 'Greenwood', 'Rainier Valley', 'Magnolia', 'Northgate'],
    faqs: [
      { q: 'Do you serve all of Seattle?', a: 'Yes — from Shoreline-adjacent neighborhoods in the north to Rainier Beach in the south, including West Seattle.' },
      { q: 'Can you clean ducts in older Seattle homes?', a: 'Absolutely. Older systems are a specialty — we inspect first with cameras and confirm the approach and price before starting.' },
      { q: 'Is parking an issue for your equipment?', a: 'No — our equipment is portable enough for dense neighborhoods and apartment buildings alike.' },
    ],
  },
  {
    slug: 'bellevue',
    name: 'Bellevue',
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Bellevue, WA',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning and furnace cleaning for Bellevue homes and condos. Licensed & insured, photo-documented work. Call (425) 200-5790.',
    intro:
      "From Somerset view homes to new construction in BelRed and downtown high-rise condos, Bellevue homes tend to run newer, tighter, and more energy-efficient — which means the air inside recirculates more, and duct cleanliness matters even more. We serve Bellevue daily with whole-system duct cleaning, dryer vent service, and blower deep-cleans, always with before/after photos.",
    localNote:
      'Tighter, well-sealed Eastside homes recirculate more indoor air. Clean ducts and a clean blower are the foundation of keeping that recirculated air fresh.',
    neighborhoods: ['Downtown Bellevue', 'Somerset', 'Crossroads', 'Newport Hills', 'Bridle Trails', 'Lake Hills', 'BelRed'],
    faqs: [
      { q: 'Do you work in Bellevue condos and high-rises?', a: 'Yes — including in-unit dryer vent lines and compact air-handler systems, with building-friendly equipment.' },
      { q: 'Do you offer weekend appointments in Bellevue?', a: 'Yes, weekend slots are available and popular on the Eastside — book early in the week for the best times.' },
      { q: 'How fast can you get to Bellevue?', a: 'Usually within the same week, often within a couple of days.' },
    ],
  },
  {
    slug: 'tacoma',
    name: 'Tacoma',
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Tacoma, WA',
    metaDescription:
      'Tacoma air duct cleaning, dryer vent cleaning, furnace and crawl space services from MOMO Air Care. Honest pricing, photo proof. Call (425) 200-5790.',
    intro:
      "Tacoma's classic homes — North End Craftsmans, Proctor bungalows, and post-war houses across the South End — are full of character, and often full of original ductwork that has never been deep-cleaned. We bring the same truck-grade negative-pressure equipment we use across the Sound, clean every line, and document it all with photos so you can see the difference under your own floors.",
    localNote:
      "Many Tacoma homes have crawl spaces that haven't been opened in decades. A photo inspection tells you exactly what's under there — no guessing, no pressure.",
    neighborhoods: ['North End', 'Proctor', 'Stadium District', 'South Tacoma', 'Fircrest border', 'Browns Point'],
    faqs: [
      { q: 'Do you charge extra to come to Tacoma?', a: 'No travel surcharges within our service area — Tacoma is a core part of it.' },
      { q: 'Can you handle older ductwork?', a: 'Yes. We inspect with cameras first and treat older systems gently but thoroughly.' },
      { q: 'Do you do crawl space work in Tacoma?', a: 'Yes — cleanup, insulation removal and installation, and vapor barrier service, all photo-documented.' },
    ],
  },
  {
    slug: 'renton',
    name: 'Renton',
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Renton, WA',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning and furnace blower service for Renton homes. Same-week scheduling, honest quotes. Call MOMO Air Care (425) 200-5790.',
    intro:
      "Renton grew fast — from the established neighborhoods near the landing to newer developments in the Highlands and Fairwood — and we service all of it. Newer Renton homes often have long, complex dryer vent runs to reach an exterior wall, which makes them clog sooner. Older homes near downtown carry decades of duct dust. Either way, we clean the full system and show you the proof.",
    localNote:
      'Long vent runs in newer Renton developments are a common cause of two-cycle drying. A 30–60 minute cleaning usually restores single-cycle performance.',
    neighborhoods: ['Renton Highlands', 'Fairwood', 'Kennydale', 'Downtown Renton', 'Benson Hill', 'Cascade'],
    faqs: [
      { q: 'How soon can you come to Renton?', a: 'Same-week in most cases — Renton is minutes from our daily routes.' },
      { q: 'My dryer vent goes up through the roof. Can you clean it?', a: 'Yes — roof-terminating runs are common in Renton and we service them regularly. We confirm access and price during inspection.' },
      { q: 'Do you serve Fairwood and the Highlands?', a: 'Yes, both — along with all surrounding Renton neighborhoods.' },
    ],
  },
];

export function getCity(slug: string): CityContent | undefined {
  return CITIES_CONTENT.find((c) => c.slug === slug);
}
