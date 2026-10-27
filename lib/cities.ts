// Original local-page content for key service-area cities.

export interface CityContent {
  slug: string;
  name: string;
  blurb: string;
  heroImg: string;
  variant: 'dark-card' | 'yellow-band' | 'split' | 'bordered';
  spotlight: { title: string; body: string; points: string[] };
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
    blurb: "Craftsman classics to new Ballard townhomes",
    heroImg: '/city-seattle.jpg',
    variant: "dark-card",
    spotlight: {
      title: "Built for Seattle's Mixed Housing Stock",
      body: "A 1920s Craftsman, a mid-century rambler, and a brand-new townhome can share one Seattle block, and each needs a different approach. Our technicians switch between all three every single day.",
      points: ["Gravity-furnace conversions in pre-war homes", "Long, bend-heavy vent runs in new townhomes", "Equipment portable enough for dense blocks and apartments"],
    },
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Seattle, WA',
    metaDescription:
      'MOMO Air Care serves Seattle homes with air duct cleaning, dryer vent cleaning, furnace cleaning and crawl space services. Free quotes. (425) 200-5790.',
    intro:
      "Seattle's housing mix is unlike anywhere else in the region. Craftsman homes from the 1920s in Wallingford, mid-century ramblers in View Ridge, and brand-new townhomes in Ballard, often on the same block. Each era brings its own duct layouts, vent runs, and quirks, and our technicians work with all of them daily. Whether it's an older gravity-furnace conversion or a tight modern mechanical closet, we clean the full system and show you photo proof.",
    localNote:
      'Wet winters mean Seattle dryers work hard for much of the year, and long vent runs in townhomes clog faster than most owners expect. If your laundry takes two cycles, that is the first sign.',
    neighborhoods: ['Ballard', 'Wallingford', 'West Seattle', 'Capitol Hill', 'Greenwood', 'Rainier Valley', 'Magnolia', 'Northgate'],
    faqs: [
      { q: 'Do you serve all of Seattle?', a: 'Yes, from Shoreline-adjacent neighborhoods in the north to Rainier Beach in the south, including West Seattle.' },
      { q: 'Can you clean ducts in older Seattle homes?', a: 'Absolutely. Older systems are a specialty, we inspect first with cameras and confirm the approach and price before starting.' },
      { q: 'Is parking an issue for your equipment?', a: 'No, our equipment is portable enough for dense neighborhoods and apartment buildings alike.' },
    ],
  },
  {
    slug: 'bellevue',
    name: 'Bellevue',
    blurb: "Eastside homes, condos, and high-rises",
    heroImg: '/city-bellevue.jpg',
    variant: "yellow-band",
    spotlight: {
      title: "Condo, High-Rise, or View Home. We Fit",
      body: "Bellevue homes run newer, tighter, and more sealed than most of the region, which means indoor air recirculates more, and clean ducts matter more.",
      points: ["In-unit dryer vent lines in condos and high-rises", "Compact air-handler systems in new construction", "HOA and building-management coordination handled"],
    },
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Bellevue, WA',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning and furnace cleaning for Bellevue homes and condos. Licensed & insured, photo-documented work. Call (425) 200-5790.',
    intro:
      "From Somerset view homes to new construction in BelRed and downtown high-rise condos, Bellevue homes tend to run newer, tighter, and more energy-efficient, which means the air inside recirculates more, and duct cleanliness matters even more. We serve Bellevue daily with whole-system duct cleaning, dryer vent service, and blower deep-cleans, always with before/after photos.",
    localNote:
      'Tighter, well-sealed Eastside homes recirculate more indoor air. Clean ducts and a clean blower are the foundation of keeping that recirculated air fresh.',
    neighborhoods: ['Downtown Bellevue', 'Somerset', 'Crossroads', 'Newport Hills', 'Bridle Trails', 'Lake Hills', 'BelRed'],
    faqs: [
      { q: 'Do you work in Bellevue condos and high-rises?', a: 'Yes, including in-unit dryer vent lines and compact air-handler systems, with building-friendly equipment.' },
      { q: 'Do you offer weekend appointments in Bellevue?', a: 'Yes, weekend slots are available and popular on the Eastside, book early in the week for the best times.' },
      { q: 'How fast can you get to Bellevue?', a: 'Usually within the same week, often within a couple of days.' },
    ],
  },
  {
    slug: 'tacoma',
    name: 'Tacoma',
    blurb: "North End character homes and beyond",
    heroImg: '/city-tacoma.jpg',
    variant: "split",
    spotlight: {
      title: "Crawl Spaces Are Tacoma's Hidden Story",
      body: "Many Tacoma crawl spaces haven't been opened in decades. We start with a photo inspection, so you see exactly what's under your floors before anyone talks price.",
      points: ["Camera-documented crawl space inspections", "Insulation removal, replacement, and vapor barriers", "Gentle, thorough care for original ductwork"],
    },
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Tacoma, WA',
    metaDescription:
      'Tacoma air duct cleaning, dryer vent cleaning, furnace and crawl space services from MOMO Air Care. Honest pricing, photo proof. Call (425) 200-5790.',
    intro:
      "Tacoma's classic homes. North End Craftsmans, Proctor bungalows, and post-war houses across the South End, are full of character, and often full of original ductwork that has never been deep-cleaned. We bring the same truck-grade negative-pressure equipment we use across the Sound, clean every line, and document it all with photos so you can see the difference under your own floors.",
    localNote:
      "Many Tacoma homes have crawl spaces that haven't been opened in decades. A photo inspection tells you exactly what's under there, no guessing, no pressure.",
    neighborhoods: ['North End', 'Proctor', 'Stadium District', 'South Tacoma', 'Fircrest border', 'Browns Point'],
    faqs: [
      { q: 'Do you charge extra to come to Tacoma?', a: 'No travel surcharges within our service area. Tacoma is a core part of it.' },
      { q: 'Can you handle older ductwork?', a: 'Yes. We inspect with cameras first and treat older systems gently but thoroughly.' },
      { q: 'Do you do crawl space work in Tacoma?', a: 'Yes, cleanup, insulation removal and installation, and vapor barrier service, all photo-documented.' },
    ],
  },
  {
    slug: 'renton',
    name: 'Renton',
    blurb: "Highlands, Fairwood, and new developments",
    heroImg: '/city-renton.jpg',
    variant: "bordered",
    spotlight: {
      title: "Long Vent Runs, Solved",
      body: "Renton's newer developments often route dryer vents through long runs, sometimes all the way through the roof. Those runs clog sooner, and we service them every week.",
      points: ["Roof-terminating dryer vent service", "Single-cycle drying usually restored in under an hour", "Renton is minutes from our daily routes"],
    },
    metaTitle: 'Air Duct & Dryer Vent Cleaning in Renton, WA',
    metaDescription:
      'Air duct cleaning, dryer vent cleaning and furnace blower service for Renton homes. Same-week scheduling, honest quotes. Call MOMO Air Care (425) 200-5790.',
    intro:
      "Renton grew fast, from the established neighborhoods near the landing to newer developments in the Highlands and Fairwood, and we service all of it. Newer Renton homes often have long, complex dryer vent runs to reach an exterior wall, which makes them clog sooner. Older homes near downtown carry decades of duct dust. Either way, we clean the full system and show you the proof.",
    localNote:
      'Long vent runs in newer Renton developments are a common cause of two-cycle drying. A 30–60 minute cleaning usually restores single-cycle performance.',
    neighborhoods: ['Renton Highlands', 'Fairwood', 'Kennydale', 'Downtown Renton', 'Benson Hill', 'Cascade'],
    faqs: [
      { q: 'How soon can you come to Renton?', a: 'Same-week in most cases. Renton is minutes from our daily routes.' },
      { q: 'My dryer vent goes up through the roof. Can you clean it?', a: 'Yes, roof-terminating runs are common in Renton and we service them regularly. We confirm access and price during inspection.' },
      { q: 'Do you serve Fairwood and the Highlands?', a: 'Yes, both, along with all surrounding Renton neighborhoods.' },
    ],
  },
  {
    slug: "kent",
    name: "Kent",
    blurb: "Valley-floor and East Hill homes alike",
    heroImg: '/city-kent.jpg',
    variant: "split",
    spotlight: {
      title: "Valley Floor vs. The Hills",
      body: "Kent is really two climates: river-valley homes near a high water table, and plateau split-levels on East and West Hill. Each gets a different checklist from us.",
      points: ["Moisture-prone valley crawl spaces inspected in fall", "Original ductwork in 60s–80s hillside homes", "Full-system cleanings with photo proof"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Kent, WA",
    metaDescription:
      "Air duct, dryer vent, chimney and crawl space cleaning for Kent homes, from East Hill to the valley floor. Call MOMO Air Care at (425) 200-5790.",
    intro:
      "Kent's geography shapes its housing in a way few cities do. Down on the valley floor, homes sit near the Green River where winter moisture lingers; up on East Hill and West Hill, split-levels and ramblers from the 1960s through the 1980s line the plateaus, many still running their original ductwork. We clean air ducts, dryer vents, and furnace blowers across all of it, and our crawl space and insulation work, inspection, removal of soiled material, and re-insulation, is especially in demand for valley homes. Every job ends with photo proof of the work.",
    localNote:
      "Homes on the Kent Valley floor sit close to the Green River and its high winter water table, so crawl spaces here collect moisture faster than hillside homes. A fall inspection catches damp insulation before it becomes a winter problem.",
    neighborhoods: ["East Hill", "West Hill", "Scenic Hill", "Downtown Kent", "Panther Lake", "Lake Meridian", "Kent Valley"],
    faqs: [
      { q: "Do you handle crawl space moisture on the valley floor?", a: "Yes. We inspect, remove soiled insulation, and re-insulate crawl spaces. Valley homes near the Green River are a regular part of our route, especially heading into the wet season." },
      { q: "Can you clean ducts in a split-level East Hill home?", a: "Yes, split-levels from the 60s through 80s are common here, and we know their divided trunk lines well. We camera-inspect first and confirm the price before starting." },
      { q: "Do you serve the Panther Lake and Lake Meridian areas?", a: "We do. Our service area covers all of Kent, including the East Hill plateau out to Lake Meridian and the neighborhoods annexed from unincorporated King County." },
    ],
  },
  {
    slug: "kirkland",
    name: "Kirkland",
    blurb: "Remodeled classics and Totem Lake townhomes",
    heroImg: '/city-kirkland.jpg',
    variant: "yellow-band",
    spotlight: {
      title: "After the Remodel, Before You Settle In",
      body: "Kirkland keeps remodeling itself, and remodels push drywall dust straight into the returns. One cleaning clears what construction left behind the fresh walls.",
      points: ["Post-remodel duct cleanouts", "Chimney caps checked under heavy tree cover", "Totem Lake condos and townhomes welcome"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Kirkland, WA",
    metaDescription:
      "Duct cleaning, dryer vent cleaning and chimney sweeping for Kirkland homes and condos. Free quotes from MOMO Air Care. (425) 200-5790.",
    intro:
      "Kirkland has been remodeling itself for decades, mid-century homes near the lake in Houghton and Market gutted and rebuilt, 1960s and 70s subdivisions in Finn Hill and Kingsgate updated room by room, and new condos and townhomes rising around Totem Lake. What remodels often skip is the ductwork, which keeps quietly collecting construction dust and decades of buildup behind fresh walls. We clean air ducts, dryer vents, and furnace blowers in homes of every era, sweep chimneys, and handle crawl space and insulation work where older foundations need it.",
    localNote:
      "Finn Hill and Kingsgate sit under some of the heaviest evergreen cover on the Eastside, and needles and moss find their way into chimney caps and roof vents every fall. A pre-season sweep keeps wood-burning fireplaces safe.",
    neighborhoods: ["Juanita", "Finn Hill", "Kingsgate", "Totem Lake", "Rose Hill", "Houghton", "Norkirk", "Market"],
    faqs: [
      { q: "We remodeled but never touched the ducts, is cleaning worth it?", a: "Usually, yes. Remodels push drywall dust and debris into the returns, and many Kirkland remodels keep the original furnace and trunk lines. One cleaning clears what construction left behind." },
      { q: "Do you work in Totem Lake condos and townhomes?", a: "Yes. We coordinate with HOAs when needed, and our equipment is portable enough for shared buildings and garages with limited parking." },
      { q: "How often should a wood-burning fireplace be swept here?", a: "Once a year if you burn regularly. Under Kirkland's heavy tree cover, we also check caps and crowns for needle buildup and moss while we're on the roof." },
    ],
  },
  {
    slug: "redmond",
    name: "Redmond",
    blurb: "Education Hill two-stories to new townhomes",
    heroImg: '/city-redmond.jpg',
    variant: "bordered",
    spotlight: {
      title: "Newer Doesn't Mean Cleaner",
      body: "Education Hill and English Hill homes from the 80s and 90s are now on four decades of the same ductwork. 'Newer' Redmond is older than it feels.",
      points: ["Original 1980s–90s ductwork deep-cleaned", "Bend-heavy townhome dryer runs cleared", "Honest assessments, including 'yours is fine'"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Redmond, WA",
    metaDescription:
      "MOMO Air Care cleans air ducts, dryer vents, furnaces and crawl spaces in Redmond, from Education Hill to Overlake. Call (425) 200-5790.",
    intro:
      "Redmond homes skew newer than much of the region, but newer doesn't mean cleaner. Two-story homes built across Education Hill and English Hill in the 1980s and 90s are now on three or four decades of the same ductwork, and the townhomes going up near downtown and Overlake often have long, bend-heavy dryer runs that clog quietly. We clean air ducts, dryer vents, and furnace blowers, sweep chimneys, and service crawl spaces, and we start every job with a camera inspection so you can see exactly what you're paying to fix.",
    localNote:
      "Many Education Hill and English Hill homes went up in the 1980s and 90s and still run on their original ductwork, now thirty to forty years old and, in many cases, never cleaned once.",
    neighborhoods: ["Education Hill", "English Hill", "Overlake", "Downtown Redmond", "Grass Lawn", "Idylwood", "Bear Creek", "Sammamish Valley"],
    faqs: [
      { q: "My Redmond home is fairly new, do the ducts really need cleaning?", a: "Newer homes often hold construction debris, drywall dust, sawdust, even packaging, sealed in the ducts since the build. One cleaning clears it; after that, pets and filter habits set the schedule." },
      { q: "Our townhome's dryer run is long, is that a problem?", a: "Long runs with multiple bends trap lint faster and are a leading cause of dryer fires. We clean the full run out to the exterior cap and verify airflow afterward." },
      { q: "Is it worth cleaning 1980s ductwork, or should we replace it?", a: "Most 1980s sheet-metal ducts are still sound and worth cleaning. We camera-inspect first and tell you honestly if we find damage that a cleaning won't fix." },
    ],
  },
  {
    slug: "everett",
    name: "Everett",
    blurb: "Century-old chimneys and Silver Lake subdivisions",
    heroImg: '/city-everett.jpg',
    variant: "dark-card",
    spotlight: {
      title: "A Century of Chimneys",
      body: "Everett's mill-town bungalows carry original masonry chimneys that have weathered a hundred wet winters. Sweeping them right takes patience and cameras, we bring both.",
      points: ["Original brick flues swept and camera-verified", "Damp marine-air lint cleared from dryer vents", "Honest guidance on aging masonry"],
    },
    metaTitle: "Chimney & Air Duct Cleaning in Everett, WA",
    metaDescription:
      "Chimney sweeping, air duct and dryer vent cleaning for Everett homes, from historic bungalows to Silver Lake. MOMO Air Care. (425) 200-5790.",
    intro:
      "Everett grew up as a mill town, and it shows in the housing: early-1900s bungalows with original masonry chimneys in Riverside, Delta, and Lowell, post-war blocks across the north end, and newer subdivisions filling in around Silver Lake. Older chimneys here have weathered a century of wet winters, which makes sweeping and honest inspection more important than almost anywhere else we work. Alongside chimney service, we clean air ducts, dryer vents, and furnace blowers, and handle crawl space and insulation work under those older foundations.",
    localNote:
      "Everett's marine air keeps laundry rooms damp for much of the year, and damp lint packs harder inside dryer vents. If the outside flap barely opens while your dryer runs, the vent is overdue.",
    neighborhoods: ["Port Gardner", "Riverside", "Delta", "Lowell", "Silver Lake", "Boulevard Bluffs", "View Ridge", "Pinehurst"],
    faqs: [
      { q: "Can you sweep the original brick chimney in an older Everett home?", a: "Yes. Everett's early-1900s homes are a regular part of our work. We sweep, inspect the flue and crown, and flag any masonry issues we see, no scare tactics." },
      { q: "Do you serve Silver Lake and south Everett?", a: "We do, our service area covers all of Everett, from Port Gardner and the north-end bungalow blocks down to Silver Lake and the Everett Mall area." },
      { q: "Does damp coastal air affect air ducts too, or just dryer vents?", a: "Both. Moist air helps dust cling inside ductwork and can dampen crawl space insulation. We check both on request and can usually schedule within the same week." },
    ],
  },
  {
    slug: "lynnwood",
    name: "Lynnwood",
    blurb: "Split-levels with original 1970s ductwork",
    heroImg: '/city-lynnwood.jpg',
    variant: "dark-card",
    spotlight: {
      title: "Split-Level Specialists",
      body: "Lynnwood's split-levels route dryer vents through the lower level and out long horizontal runs, a layout that traps lint at every bend. We know these houses by heart.",
      points: ["Lower-level vent paths cleared end to end", "Original furnace blowers deep-cleaned", "Crawl space checks for 60s–80s foundations"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Lynnwood, WA",
    metaDescription:
      "Air duct, dryer vent, chimney and furnace cleaning for Lynnwood homes, from Alderwood Manor to Meadowdale. Call MOMO Air Care at (425) 200-5790.",
    intro:
      "Much of Lynnwood went up in the decades after I-5 arrived, split-levels and ramblers from the 1960s through the 1980s, many still running their original ductwork and furnace blowers. Those systems have had fifty-plus years to collect dust, pet hair, and construction debris, and we see the difference a thorough cleaning makes in them every week. At the other end of the spectrum, the new apartments and townhomes rising around the light rail station bring long, shared dryer vent runs that need regular attention. Wherever your home falls on that timeline, we clean the full system and document the work with before-and-after photos.",
    localNote:
      "Many Lynnwood split-levels vent the dryer through the lower level and out a long horizontal run, a layout that traps lint at every bend. If your laundry room feels humid mid-cycle, the vent is likely restricted.",
    neighborhoods: ["Alderwood Manor", "Meadowdale", "Martha Lake", "Lake Serene", "Perrinville", "Cedar Valley", "Alderwood Heights"],
    faqs: [
      { q: "Can you clean the original ductwork in a 1970s Lynnwood split-level?", a: "Yes, older galvanized ducts are common here and respond well to cleaning. We inspect with a camera first and confirm the condition before quoting." },
      { q: "Do you serve unincorporated areas like Martha Lake?", a: "Yes. We cover Lynnwood addresses on both sides of the city line, including Martha Lake, Lake Serene, and the Alderwood Manor area." },
      { q: "Do Lynnwood ramblers need crawl space attention?", a: "Often, yes. Homes from this era commonly have compressed or fallen insulation under the floor. We can inspect the crawl space while we are on site for duct cleaning." },
    ],
  },
  {
    slug: "issaquah",
    name: "Issaquah",
    blurb: "Highlands townhomes to Squak Mountain lots",
    heroImg: '/city-issaquah.jpg',
    variant: "bordered",
    spotlight: {
      title: "Under the Tree Canopy",
      body: "Issaquah's wooded lots stay shaded and damp most of the year, chimneys work harder, caps catch needles, and moss finds every vent. A pre-season check pays for itself.",
      points: ["Needle-clogged chimney caps cleared", "Pre-season sweeps before the first fall fire", "Three-story Highlands townhome vents reached"],
    },
    metaTitle: "Air Duct, Dryer Vent & Chimney Cleaning in Issaquah, WA",
    metaDescription:
      "Duct, dryer vent and chimney cleaning for Issaquah homes from Olde Town to the Highlands. MOMO Air Care, free quotes at (425) 200-5790.",
    intro:
      "Issaquah sits in a pocket between Cougar, Squak, and Tiger mountains, and that geography shapes how its homes age. Wooded lots stay shaded and damp for much of the year, which keeps chimneys, vents, and crawl spaces working harder than they would in open terrain. The housing itself ranges from older homes near Olde Town to the tall, tightly built townhomes of the Highlands and Talus, where dryer vents often climb three stories before reaching daylight. We clean air ducts, dryer vents, chimneys, and furnace blowers across all of it, and every job ends with photos of what we found and what we removed.",
    localNote:
      "Homes under Issaquah's tree canopy burn more firewood and see more chimney moisture than most of the region. An annual sweep before the first fall fire keeps creosote from building into a hazard.",
    neighborhoods: ["Issaquah Highlands", "Talus", "Olde Town", "Squak Mountain", "Gilman", "Providence Point", "North Issaquah"],
    faqs: [
      { q: "Can you reach the top of a three-story Highlands townhome vent?", a: "Yes. Long vertical dryer runs are routine for us, we clean from inside the home and from the rooftop or wall termination, then confirm airflow before we leave." },
      { q: "How often should a wood-burning chimney on Squak Mountain be swept?", a: "Once a year for regular use. Shaded, damp lots also benefit from a cap inspection, since moisture damage shows up early on wooded properties." },
      { q: "Do you work in HOA communities like Talus and the Highlands?", a: "Yes, regularly. Our equipment is self-contained, and we are happy to follow community parking and access rules, just mention your HOA when booking." },
    ],
  },
  {
    slug: "sammamish",
    name: "Sammamish",
    blurb: "Big plateau homes, hardworking systems",
    heroImg: '/city-sammamish.jpg',
    variant: "split",
    spotlight: {
      title: "Big Homes, Hardworking Systems",
      body: "Plateau homes run large. 2,500 square feet and up, often with two furnaces pushing air to distant bedrooms. Big systems move big dust, and they earn a proper cleaning.",
      points: ["Multi-furnace homes serviced in one visit", "Roof-exit dryer vents safely cleared", "90s-era Klahanie and Trossachs systems refreshed"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Sammamish, WA",
    metaDescription:
      "Air duct, dryer vent, chimney and furnace blower cleaning for Sammamish plateau homes. MOMO Air Care, serving the Eastside. (425) 200-5790.",
    intro:
      "The plateau built out fast between the mid-1980s and the 2000s, and most Sammamish homes share a profile: two stories, 2,500 square feet or more, a furnace working hard to push air to distant bedrooms, and a dryer that rarely gets a day off. Systems that size move a lot of air, and a lot of dust with it. We clean air ducts, furnace blowers, and dryer vents in these homes daily, and in the larger ones we often find two separate systems, both of which should be on the same cleaning schedule. Chimney sweeping and crawl space services round out the visit.",
    localNote:
      "Sammamish lots keep their tall firs, and those firs drop needles straight into chimney caps and roof vents. A clogged cap shows up as smoke backing into the room on the season's first fire.",
    neighborhoods: ["Klahanie", "Trossachs", "Sahalee", "Pine Lake", "Beaver Lake", "Inglewood"],
    faqs: [
      { q: "My home has two furnaces. Do you clean both?", a: "Yes, two-system homes are common on the plateau. We quote the whole house up front so there is no surprise when we find the second unit." },
      { q: "Are 1990s Klahanie-era ducts worth cleaning or replacing?", a: "Nearly always worth cleaning. Ducts from that era are usually sound; it is the decades of dust inside them that affects airflow and air quality." },
      { q: "Do you clean dryer vents that exit through the roof?", a: "Yes. Roof terminations are standard in two-story Sammamish homes, and we service them safely from the roof as well as inside." },
    ],
  },
  {
    slug: "bothell",
    name: "Bothell",
    blurb: "Both sides of the county line",
    heroImg: '/city-bothell.jpg',
    variant: "yellow-band",
    spotlight: {
      title: "Both Sides of the Line",
      body: "King County or Snohomish County, same Bothell address rules apply: we serve all of it, from Canyon Park to Norway Hill, with no county surcharges.",
      points: ["Full coverage on both sides of the county line", "North Creek ground-moisture crawl checks", "Downtown townhome parking coordinated"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Bothell, WA",
    metaDescription:
      "MOMO Air Care cleans air ducts, dryer vents, chimneys and furnaces across Bothell, in both King and Snohomish counties. Call (425) 200-5790.",
    intro:
      "Bothell straddles the King–Snohomish county line, and its housing tells that story in layers: established 1960s and 70s homes on Maywood Hills and Westhill, waves of 1980s and 90s subdivisions around Canyon Park, and the new townhomes that have filled in downtown over the past decade. Each layer has its own ductwork habits, older homes with original furnace blowers, mid-era homes due for their first real duct cleaning, and tight new construction where a single clogged dryer vent is immediately noticeable. We work in all three, on both sides of the county line, with photo documentation on every job.",
    localNote:
      "Low-lying Bothell lots near North Creek hold ground moisture through the wet season, and crawl spaces there show it first, damp insulation and musty supply air are the usual early signs.",
    neighborhoods: ["Canyon Park", "North Creek", "Norway Hill", "Maywood Hills", "Westhill", "Fitzgerald", "Downtown Bothell"],
    faqs: [
      { q: "I have a Bothell address but live in Snohomish County. Do you still serve me?", a: "Yes. We cover Bothell addresses on both sides of the county line, including unincorporated neighborhoods like Norway Hill that carry a Bothell mailing address." },
      { q: "How long does duct cleaning take in a 1990s Canyon Park two-story?", a: "Usually two to four hours depending on the number of vents and whether we are also cleaning the furnace blower. We confirm the scope before starting." },
      { q: "Can you schedule around downtown Bothell townhome parking?", a: "Yes, our equipment is compact, and same-week appointments are usually available, so we can pick a time when loading zones near your unit are open." },
    ],
  },
  {
    slug: "federal-way",
    name: "Federal Way",
    blurb: "Twin Lakes to Marine Hills split-levels",
    heroImg: '/city-federal-way.jpg',
    variant: "dark-card",
    spotlight: {
      title: "Original Ductwork, Five Decades On",
      body: "Most of Federal Way went up in a single generation, which means thousands of homes are hitting fifty years on their original ducts at the same time. That's our specialty.",
      points: ["60s–80s split-levels and ramblers deep-cleaned", "Long, damp vent runs under upper floors cleared", "Blower deep-cleans restore original airflow"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Federal Way, WA",
    metaDescription:
      "Duct, dryer vent, chimney & furnace cleaning for Federal Way homes, Twin Lakes to Dash Point. Free quotes from MOMO Air Care. (425) 200-5790.",
    intro:
      "Most of Federal Way was built in a single generation. The city grew quickly from the 1960s through the 1980s, which means thousands of split-levels and ramblers around Steel Lake, Mirror Lake, and Twin Lakes are now fifty years old, often with their original ductwork still in place. Decades of dust, pet hair, and settling debris build up in systems that age. We clean air ducts, furnace blowers, and dryer vents throughout Federal Way, inspect first, and walk you through exactly what we found before and after.",
    localNote:
      "Split-level homes common across Federal Way often route dryer vents through long runs under the upper floor, and in our wet climate those runs stay damp and clog faster. Slower drying is usually the first warning.",
    neighborhoods: ["Twin Lakes", "Dash Point", "Marine Hills", "Steel Lake", "Mirror Lake", "West Campus", "Lakota", "Adelaide"],
    faqs: [
      { q: "My Federal Way home still has its original 1970s ducts. Can they be cleaned safely?", a: "Yes. We inspect older ductwork with cameras first, use gentle but thorough equipment, and tell you honestly if any section is too fragile or damaged to clean." },
      { q: "Do you cover all of Federal Way, including Dash Point and Twin Lakes?", a: "Yes, we serve the entire city, from the Dash Point shoreline to West Campus and the neighborhoods along Pacific Highway, usually with same-week scheduling." },
      { q: "Is furnace and blower cleaning worth it in an older Federal Way home?", a: "Usually yes. Blowers in homes from the 70s and 80s collect decades of fine dust, and cleaning them helps airflow, heating performance, and indoor air quality." },
    ],
  },
  {
    slug: "auburn",
    name: "Auburn",
    blurb: "Valley crawl spaces and hillside homes",
    heroImg: '/city-auburn.jpg',
    variant: "yellow-band",
    spotlight: {
      title: "Two Housing Stories, One Team",
      body: "Rail-town originals near Main Street, newer hillside homes on Lea Hill and Lakeland. Auburn spans a century of construction, and we service every decade of it.",
      points: ["Century-old brick chimneys swept downtown", "Newer hillside systems tuned and cleaned", "Valley-floor crawl spaces dried and insulated"],
    },
    metaTitle: "Air Duct Cleaning & Crawl Space Services in Auburn, WA",
    metaDescription:
      "MOMO Air Care cleans air ducts, dryer vents, chimneys and crawl spaces across Auburn, valley floor to Lea Hill. Free quotes. (425) 200-5790.",
    intro:
      "Auburn is really two housing stories. On the valley floor, a century-old railroad town left behind early-1900s homes near Main Street, many with brick chimneys and crawl space foundations. Up on the hills, Lea Hill and Lakeland Hills added thousands of newer homes from the 1990s onward, with tight modern duct systems and long dryer runs. We work in both, air duct cleaning, dryer vent cleaning, chimney sweeping, furnace and blower cleaning, and crawl space and insulation services, and we match the approach to the age of the house.",
    localNote:
      "The Green River valley sits on old farmland with a high water table, so crawl spaces in Auburn's valley-floor homes tend to hold moisture through the winter. A dry, well-insulated crawl space makes a noticeable difference.",
    neighborhoods: ["Lea Hill", "Lakeland Hills", "Downtown Auburn", "West Hill", "North Auburn", "South Auburn"],
    faqs: [
      { q: "Do you serve both the King County and Pierce County parts of Auburn?", a: "Yes, we cover the whole city, from Lea Hill and West Hill down to Lakeland Hills on the Pierce County side." },
      { q: "My valley-floor crawl space smells musty. Is that something you handle?", a: "Yes. We inspect the crawl space, remove damaged insulation, address debris and moisture sources we find, and re-insulate, a common job on Auburn's valley floor." },
      { q: "Can you sweep the original brick chimney in an older downtown Auburn home?", a: "We can. Older masonry chimneys get a careful inspection along with the sweep, and we flag any cracked mortar or flue issues we see." },
    ],
  },
  {
    slug: "puyallup",
    name: "Puyallup",
    blurb: "Downtown originals and South Hill subdivisions",
    heroImg: '/city-puyallup.jpg',
    variant: "bordered",
    spotlight: {
      title: "Ahead of the Fall Rush",
      body: "September brings the Fair and the first furnace starts at the same time. Book your duct or chimney work before the rush and you'll pick your slot, not wait for one.",
      points: ["Pre-season chimney sweeps for downtown originals", "South Hill 2000s systems cleaned and checked", "Same-week scheduling most of the year"],
    },
    metaTitle: "Air Duct Cleaning & Chimney Sweeping in Puyallup, WA",
    metaDescription:
      "Air duct, dryer vent and chimney cleaning for Puyallup, from downtown's older homes to South Hill. Free quotes from MOMO Air Care. (425) 200-5790.",
    intro:
      "Puyallup's homes split neatly by elevation. Down in the valley, the blocks around downtown and the fairgrounds hold some of Pierce County's older housing, early-1900s homes with original chimneys that still get regular use. Up on South Hill, subdivisions like Gem Heights and Manorwood went in largely during the 1990s and 2000s, and many of those duct systems have never been cleaned since the drywall dust of construction. We handle both ends: chimney sweeping and furnace cleaning in the older stock, full duct and dryer vent service in the newer, plus crawl space and insulation work wherever it's needed.",
    localNote:
      "September brings the Washington State Fair and the first furnace starts of the season to Puyallup at the same time. Booking a duct or chimney cleaning before fall keeps you ahead of the busiest stretch.",
    neighborhoods: ["Downtown Puyallup", "South Hill", "Gem Heights", "Manorwood", "Sunrise", "Silver Creek", "North Hill"],
    faqs: [
      { q: "My South Hill home was built in the 2000s. Does it really need duct cleaning?", a: "Often, yes. Many newer systems were never cleaned after construction, so drywall dust and debris sit in the ducts from day one. A quick inspection tells us either way." },
      { q: "Can you sweep chimneys in Puyallup's older downtown homes?", a: "Yes, older masonry chimneys near downtown are routine work for us. We sweep, inspect the flue, and show you photos of what we found." },
      { q: "Do you serve unincorporated South Hill addresses outside city limits?", a: "We do. Our service area covers South Hill neighborhoods like Gem Heights, Manorwood, and Sunrise whether or not they fall inside Puyallup city limits." },
    ],
  },
  {
    slug: "olympia",
    name: "Olympia",
    blurb: "Bungalows, wood stoves, and wet winters",
    heroImg: '/city-olympia.jpg',
    variant: "split",
    spotlight: {
      title: "Wood Stove Country",
      body: "In Olympia's older neighborhoods, wood stoves still carry real heating duty through winters that out-rain Seattle. Annual flue care here isn't a luxury, it's the habit that keeps homes safe.",
      points: ["Wood stove flues swept, not just fireplaces", "Bungalow crawl spaces insulated against the damp", "An annual sweep before burning season"],
    },
    metaTitle: "Air Duct & Dryer Vent Cleaning in Olympia, WA",
    metaDescription:
      "Air duct, dryer vent, chimney and crawl space cleaning for Olympia homes, Eastside to Cooper Point. MOMO Air Care, free quotes at (425) 200-5790.",
    intro:
      "Olympia's older neighborhoods hold some of the most characterful housing on the south Sound. Craftsman bungalows in South Capitol and Bigelow, 1920s-to-40s homes on the Eastside, and postwar stock spreading west toward Cooper Point. Character comes with quirks: original chimneys, vented crawl spaces, and duct runs that have been extended and patched over the decades. We clean air ducts, furnace blowers, dryer vents, and chimneys across the city, and our crawl space and insulation services are built for exactly the kind of damp, older foundations Olympia has plenty of.",
    localNote:
      "Olympia typically sees more annual rain than Seattle, and wood stoves and fireplaces still carry real heating duty in older neighborhoods here. An annual sweep before the burning season is the single best habit.",
    neighborhoods: ["South Capitol", "Eastside", "Westside", "Bigelow", "Cooper Point", "Wildwood", "Northeast Olympia"],
    faqs: [
      { q: "Many Olympia homes heat with wood stoves. Do you sweep stove flues too?", a: "Yes, wood stove flues, insert flues, and open masonry fireplaces. Stoves that burn all winter in our climate benefit from a sweep every year." },
      { q: "Can you insulate the crawl space under a 1930s Olympia bungalow?", a: "Yes. We remove old or damaged insulation, clean out debris, and install new insulation suited to older vented crawl spaces common in Olympia's prewar neighborhoods." },
      { q: "Is Olympia inside your regular service area?", a: "Yes, we schedule Olympia jobs on regular routes through the south Sound, and same-week appointments are usually available." },
    ],
  },
];

export function getCity(slug: string): CityContent | undefined {
  return CITIES_CONTENT.find((c) => c.slug === slug);
}
