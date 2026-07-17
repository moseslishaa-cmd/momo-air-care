// Original, service-specific content for MOMO Air Care service pages.
// All copy written specifically for this business — no external sources.

export interface ServiceFaq { q: string; a: string }

export interface ServiceContent {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  signsTitle: string;
  signs: string[];
  benefits: string[];
  included: string[];
  process: { title: string; desc: string }[];
  equipment: string[];
  media: { type: 'video' | 'image'; src: string };
  faqs: ServiceFaq[];
}

export const SERVICES_CONTENT: ServiceContent[] = [
  {
    slug: 'air-duct-cleaning',
    nav: 'Air Duct Cleaning',
    metaTitle: 'Air Duct Cleaning in Greater Seattle',
    metaDescription:
      'Whole-home air duct cleaning across Greater Seattle. Negative-pressure equipment, every vent and trunk line, before/after photos. Free quotes — call (425) 200-5790.',
    eyebrow: 'Air Duct Cleaning',
    h1: 'Air Duct Cleaning That Reaches Every Line',
    lead:
      'Your duct system quietly collects dust, pet dander, pollen, and construction debris for years — and your HVAC pushes air through it every single day. Our whole-system cleaning removes that buildup at the source with truck-grade negative-pressure equipment, so the air moving through your home flows through clean metal, not years of settled dust.',
    signsTitle: 'Signs your ducts may need cleaning',
    signs: [
      'Visible dust puffing from vents when the system turns on',
      'Musty or stale odor when heating or cooling runs',
      'Dust returning quickly after you clean the house',
      'Pet hair or debris collecting around register covers',
      'Recent remodel, drywall work, or new construction',
      'Weak airflow in some rooms compared to others',
    ],
    benefits: [
      'May help reduce accumulated dust and allergens circulating from the system',
      'HVAC runs quieter and works less to move the same air',
      'Removes odors trapped in settled dust and debris',
      'Extends equipment life by reducing strain on the blower',
    ],
    included: [
      'Every supply and return vent in the home',
      'Main trunk lines cleaned end to end',
      'Register covers removed, cleaned, and reinstalled',
      'Negative-pressure containment — no mess left behind',
      'Blower-area inspection',
      'Before/after photos of your actual ducts',
    ],
    process: [
      { title: 'Camera Inspection', desc: 'We scope the system, show you what we find, and confirm the price before any work starts.' },
      { title: 'Negative-Air Setup', desc: 'A sealed vacuum connection puts the whole system under suction so dust goes into our equipment — not your rooms.' },
      { title: 'Agitation & Brushing', desc: 'Rotary brushes and air whips scrub every line, breaking loose years of packed buildup.' },
      { title: 'Final Walkthrough', desc: 'We verify airflow at every register and review before/after photos with you.' },
    ],
    equipment: [
      'Truck-grade negative-pressure vacuum',
      'Rotary brush & air-whip agitation tools',
      'Inspection cameras for before/after proof',
    ],
    media: { type: 'image', src: '/service-airduct.jpg' },
    faqs: [
      { q: 'How long does a full air duct cleaning take?', a: 'Most homes take 2–4 hours depending on size and the number of vents. We work carefully — every line gets the same attention.' },
      { q: 'Will it make a mess in my house?', a: 'No. The system stays under negative pressure the entire time, so dislodged dust is pulled into our equipment instead of your rooms. We also protect floors and corners.' },
      { q: 'How often should ducts be cleaned?', a: 'Every 1–2 years for most homes. Homes with pets, allergies, or recent renovation benefit from annual cleaning.' },
      { q: 'Do you clean the return ducts too?', a: 'Yes — returns collect the most debris of any part of the system, and they are always included.' },
      { q: 'Will this help my allergies?', a: 'We do not make medical claims. Cleaning may help reduce the accumulated dust, dander, and pollen that circulate from the duct system, which many customers find noticeable.' },
    ],
  },
  {
    slug: 'dryer-vent-cleaning',
    nav: 'Dryer Vent Cleaning',
    metaTitle: 'Dryer Vent Cleaning in Greater Seattle — $69 Special',
    metaDescription:
      'Dryer vent cleaning from $69 across Greater Seattle. Clear packed lint, dry clothes faster, reduce fire risk. Same-week appointments — call (425) 200-5790.',
    eyebrow: 'Dryer Vent Cleaning',
    h1: 'Dryer Vent Cleaning — Fast, Thorough, From $69',
    lead:
      'Every load of laundry sheds lint, and it all has to travel through one vent line to leave your home. Year after year it packs tighter — until airflow chokes, drying times double, and heat has nowhere to go. The U.S. Fire Administration reports thousands of home dryer fires every year, and failure to clean is the leading factor. We clear the full line, from the dryer connection to the exterior cap.',
    signsTitle: 'Warning signs of a clogged dryer vent',
    signs: [
      'Clothes need more than one cycle to dry',
      'The dryer or laundry room feels hot while running',
      'A burning or musty smell during drying',
      'Lint collecting around the exterior vent flap',
      'The exterior flap barely opens when the dryer runs',
      'Bird nests or debris visible at the vent cap',
    ],
    benefits: [
      'Reduces a leading cause of home dryer fires',
      'Clothes dry in one cycle again — saves time and power',
      'Less heat strain extends the life of your dryer',
      'Full-line cleaning, not just the lint trap area',
    ],
    included: [
      'Full vent line cleaned — dryer to exterior cap',
      'Rotary brush scrub of the entire run',
      'Exterior cap and flap cleared and checked',
      'Lint pile shown to you — real proof',
      'Airflow check after cleaning',
      'Damaged or crushed line flagged with photos',
    ],
    process: [
      { title: 'Inspection', desc: 'We check the vent route, length, and exterior termination, and confirm your quote.' },
      { title: 'Full-Line Brushing', desc: 'A rotary brush system scrubs the entire run while a vacuum captures the lint.' },
      { title: 'Exterior Cap Service', desc: 'We clear the cap, check the flap opens freely, and remove any nesting debris.' },
      { title: 'Airflow Verification', desc: 'We measure airflow and show you the before/after difference.' },
    ],
    equipment: [
      'Rotary brush system sized to your vent line',
      'HEPA-filtered vacuum capture',
      'Anemometer airflow verification',
    ],
    media: { type: 'image', src: '/service-dryer.jpg' },
    faqs: [
      { q: 'How often should the dryer vent be cleaned?', a: 'Once a year for most homes — every 6–9 months for large families, pet owners, or long/roof-terminating vent runs.' },
      { q: 'How long does it take?', a: 'Usually 30–60 minutes depending on the length and route of the vent line.' },
      { q: 'My dryer is new. Do I still need this?', a: 'Yes — the vent line belongs to the house, not the dryer. A new dryer pushing into a clogged line still runs hot and slow.' },
      { q: 'Can you fix a damaged vent line?', a: 'We flag crushed, disconnected, or code-risk lines with photos during inspection and will recommend the right fix before any extra work.' },
      { q: 'Is the $69 special really $69?', a: 'Yes — standard single-line cleanings at accessible terminations are $69. If your setup needs more (unusually long runs, roof access), we tell you the exact price before we start.' },
    ],
  },
  {
    slug: 'furnace-cleaning',
    nav: 'Furnace Cleaning',
    metaTitle: 'Furnace & Blower Cleaning in Greater Seattle',
    metaDescription:
      'Furnace cabinet and blower wheel deep cleaning across Greater Seattle. Restore airflow, reduce strain, extend equipment life. Free quotes — (425) 200-5790.',
    eyebrow: 'Furnace & Air Handler Cleaning',
    h1: 'Furnace & Blower Cleaning, Down to the Blades',
    lead:
      "The blower is the heart of your HVAC — every bit of air in your home moves through it. It's also where grime builds thickest, because dust sticks to the fast-moving blades and cabinet walls. We physically remove the blower wheel, degrease every blade, clean the cabinet interior, and put it all back — restoring the airflow your system had when it was new. This is deep cleaning, clearly separate from licensed HVAC repair work.",
    signsTitle: 'Signs your furnace needs a deep clean',
    signs: [
      'Airflow feels weaker than it used to across the house',
      'The furnace runs longer to reach the same temperature',
      'A dusty or burning smell when the heat kicks on',
      'Visible dust caked inside the furnace cabinet',
      'The blower is loud, humming, or vibrating',
      'Filters turn dark within weeks of replacement',
    ],
    benefits: [
      'Restores full airflow through the whole system',
      'Reduces overheating and mid-season breakdowns',
      'Quieter operation — clean blades run balanced',
      'Helps your furnace last years longer',
    ],
    included: [
      'Blower wheel and motor removed from the unit',
      'Every blade degreased and cleaned',
      'Furnace cabinet interior vacuumed and wiped',
      'Filter inspection and replacement guidance',
      'Basic visual safety check of the cabinet area',
      'Before/after photos of the blower',
    ],
    process: [
      { title: 'Cabinet Inspection', desc: 'We open the unit, photograph the condition, and confirm your quote.' },
      { title: 'Blower Removal', desc: 'The wheel and motor come out of the cabinet — the only way to truly clean them.' },
      { title: 'Deep Clean', desc: 'Blades are degreased one by one; the cabinet is vacuumed and wiped down.' },
      { title: 'Reassembly & Test', desc: 'Everything goes back, we run the system, and verify strong, quiet airflow.' },
    ],
    equipment: [
      'Blade-safe degreasers',
      'HEPA-filtered vacuums',
      'Inspection cameras for tight cabinet corners',
    ],
    media: { type: 'image', src: '/service-furnace.jpg' },
    faqs: [
      { q: 'Is this the same as an HVAC tune-up?', a: 'No. This is a deep cleaning service for the blower and cabinet. We do not perform licensed repair, gas, or refrigerant work — and we will never pretend a cleaning replaces a needed repair.' },
      { q: 'How often should the blower be cleaned?', a: 'Every 2–3 years for most systems, or sooner if you can see buildup on the blades or airflow has dropped.' },
      { q: 'Will my heat be off for long?', a: 'The system is off only during the service itself — typically 1–2 hours.' },
      { q: 'Do you clean the coil too?', a: 'Yes, evaporator coil cleaning is available and often pairs well with blower service. Ask when you book.' },
      { q: 'Can this fix a noisy furnace?', a: 'If the noise comes from dirt-imbalanced blades, cleaning usually helps noticeably. If we find a mechanical fault instead, we tell you honestly — no invented repairs.' },
    ],
  },
  {
    slug: 'crawl-space-services',
    nav: 'Crawl Space Services',
    metaTitle: 'Crawl Space Cleaning & Insulation in Greater Seattle',
    metaDescription:
      'Crawl space cleanup, insulation removal and installation, and vapor barrier service across Greater Seattle. Photo-documented work — call (425) 200-5790.',
    eyebrow: 'Crawl Space & Insulation',
    h1: 'Crawl Space Cleaning & Insulation Done Right',
    lead:
      "A significant share of the air in your living space rises from the crawl space below it. When that space holds fallen insulation, debris, moisture, or rodent contamination, it affects the air and comfort of the whole house. We clean it out, document everything with photos, and restore fresh, code-compliant insulation — so what's under your floors helps your home instead of hurting it.",
    signsTitle: 'Signs your crawl space needs attention',
    signs: [
      'Musty odors inside the house, especially in winter',
      'Cold floors even with the heat running',
      'Sagging or fallen insulation under the floor',
      'Evidence of rodents or pests below the home',
      'Damp smell or standing moisture under the house',
      'Higher heating bills than similar homes',
    ],
    benefits: [
      'Blocks musty odors rising into living areas',
      'Warmer floors and less heat loss in winter',
      'Removes contaminated or rodent-damaged material safely',
      'Photo documentation of the entire hidden space',
    ],
    included: [
      'Full crawl space inspection with photos',
      'Debris and old insulation removal',
      'Rodent-affected material handled safely',
      'Vapor barrier inspection and service',
      'New code-compliant insulation installation',
      'Complete before/after photo report',
    ],
    process: [
      { title: 'Photo Inspection', desc: 'We document the entire space so you can see exactly what is under your home.' },
      { title: 'Removal & Cleanup', desc: 'Old insulation, debris, and contaminated material are bagged and removed safely.' },
      { title: 'Moisture & Barrier Check', desc: 'We inspect the vapor barrier and flag moisture concerns with honest recommendations.' },
      { title: 'Fresh Installation', desc: 'New insulation goes in to current code, and you get the full photo report.' },
    ],
    equipment: [
      'Protective containment and disposal bagging',
      'Commercial insulation installation tools',
      'Moisture readers and inspection cameras',
    ],
    media: { type: 'image', src: '/laundry-vent.jpg' },
    faqs: [
      { q: 'Do I need to do anything before you arrive?', a: 'Just make sure we can reach the crawl space access point. We handle protection, containment, and cleanup.' },
      { q: 'How do I know what you actually did down there?', a: 'Photos. Every job includes a before/after photo report of the full space — you never have to take our word for it.' },
      { q: 'Can you remove rodent-contaminated insulation?', a: 'Yes. Contaminated material is sealed, bagged, and removed safely, and we document the affected areas for you.' },
      { q: 'Will new insulation really lower my bills?', a: 'Proper under-floor insulation reduces heat loss, which most homeowners see reflected in winter heating usage. Exact savings depend on the home.' },
      { q: 'Do you fix moisture problems?', a: 'We service vapor barriers and flag moisture issues with photos. If a problem needs a specialty contractor (like drainage), we say so plainly instead of selling you the wrong fix.' },
    ],
  },
  {
    slug: 'chimney-cleaning',
    nav: 'Chimney Cleaning',
    metaTitle: 'Chimney Sweep & Cleaning in Greater Seattle',
    metaDescription:
      'Professional chimney sweeping and flue cleaning across Greater Seattle. Creosote removal, camera inspection, HEPA-contained cleanup. Call (425) 200-5790.',
    eyebrow: 'Chimney Sweep & Cleaning',
    h1: 'Chimney Sweeping, Done the Clean Way',
    lead:
      "Every wood fire leaves a little creosote behind — a tar-like residue that coats the flue and builds up layer by layer. It restricts draft, holds that stale campfire smell, and because creosote is flammable, fire-safety standards recommend having chimneys inspected every year. We sweep the full flue with rotary brushes, keep your living room sealed behind HEPA containment, and show you camera footage of the result.",
    signsTitle: 'Signs your chimney needs a sweep',
    signs: [
      'Smoke drifting back into the room when you light a fire',
      'A campfire smell from the fireplace, even when unused',
      'Black soot flakes dropping into the firebox',
      'Fires that start slowly or burn weakly',
      'Shiny, tar-like glaze visible inside the flue',
      'Nesting debris or animals around the chimney cap',
    ],
    benefits: [
      'Removes flammable creosote buildup from the flue',
      'Restores strong, clean draft for easier fires',
      'Cuts lingering smoke odors in the living room',
      'Camera-verified results — see the flue yourself',
    ],
    included: [
      'Firebox and smoke chamber sweeping',
      'Full-length flue brush cleaning',
      'Damper operation check',
      'Chimney cap and exterior check',
      'HEPA-sealed containment — no soot in your home',
      'Before/after camera footage',
    ],
    process: [
      { title: 'Camera Inspection', desc: 'We scope the flue first, show you the condition, and confirm the price before touching anything.' },
      { title: 'Seal & Protect', desc: 'The fireplace opening is sealed and HEPA vacuums run the entire time — your room stays spotless.' },
      { title: 'Full Sweep', desc: 'Rotary rods and brushes scrub the flue top to bottom, breaking creosote loose into containment.' },
      { title: 'Final Review', desc: 'We re-scope the flue on camera, check the damper and cap, and walk you through the footage.' },
    ],
    equipment: [
      'Rotary rod and brush sweeping system',
      'HEPA-filtered dust containment',
      'Flue inspection camera',
    ],
    media: { type: 'image', src: '/chimney-service.jpg' },
    faqs: [
      { q: 'How often should a chimney be swept?', a: 'Fire-safety standards recommend an inspection every year, with sweeping whenever creosote has meaningfully built up — typically after every cord or two of wood burned.' },
      { q: 'Will sweeping make a mess in my living room?', a: 'No. We seal the fireplace opening and run HEPA vacuums throughout the sweep, so soot goes into our equipment — not onto your floors or furniture.' },
      { q: 'How long does a chimney sweep take?', a: 'Most sweeps take about an hour, including the camera inspection before and after.' },
      { q: 'I have a gas fireplace. Do I still need this?', a: 'Gas flues collect far less residue than wood, but they still need periodic inspection for blockages, corrosion, and nesting debris. We check gas flues too.' },
      { q: 'When is the best time to book?', a: 'Late spring through early fall — you get the best availability and your chimney is ready before the first cold night. We sweep year-round though.' },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
