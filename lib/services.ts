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
  {
    slug: 'hvac-repair-inspection',
    nav: 'HVAC Repair & Inspection',
    metaTitle: 'HVAC Inspection & Repair in Greater Seattle',
    metaDescription:
      'HVAC system inspection, airflow diagnostics, tune-ups and honest repair guidance for Greater Seattle homes. Camera-documented findings. Call (425) 200-5790.',
    eyebrow: 'HVAC Repair & Inspection',
    h1: 'Know Exactly What Your HVAC Needs',
    lead:
      "Weak airflow, rooms that never reach temperature, a system that runs louder every winter — most HVAC problems start small and get expensive when ignored. Our inspection puts eyes (and cameras) on the whole air side of your system: ducts, blower, filter housing, coils, and vents. You get a photo-documented picture of what's actually going on, a fix for what we can repair on the spot, and straight answers about anything bigger — no scare tactics, no upsell scripts.",
    signsTitle: 'Signs your system needs a professional look',
    signs: [
      'Some rooms are always hotter or colder than the rest',
      'Airflow from vents feels weaker than it used to',
      'The system is louder than before, or rattles when starting',
      'Energy bills creeping up without a change in habits',
      'The system short-cycles — turns on and off rapidly',
      "It's been years since anyone inspected the system",
    ],
    benefits: [
      'A clear, photo-documented picture of your system\'s condition',
      'Airflow and performance issues caught before they grow',
      'On-the-spot fixes for what can be repaired same visit',
      'Honest guidance when a problem needs an HVAC contractor — we tell you exactly what to ask for',
    ],
    included: [
      'Full visual inspection of the air handler and blower',
      'Airflow check at supply and return vents',
      'Filter housing and filter condition check',
      'Duct connection and leak inspection',
      'Camera documentation of findings',
      'Written summary of what we found and what we recommend',
    ],
    process: [
      { title: 'Listen First', desc: 'You tell us the symptoms — cold rooms, noise, weak flow — so we know where to focus.' },
      { title: 'Inspect & Measure', desc: 'We open the system up, check airflow room by room, and camera-document what we find.' },
      { title: 'Fix What We Can', desc: 'Cleaning, airflow restoration, and minor repairs happen on the spot whenever possible.' },
      { title: 'Straight Answers', desc: "You get photos, a plain-English summary, and honest advice — including when the right answer is 'this doesn't need fixing.'" },
    ],
    equipment: [
      'Digital airflow measurement tools',
      'Duct and air-handler inspection cameras',
      'HEPA-filtered cleaning equipment',
    ],
    media: { type: 'image', src: '/service-hvac.jpg' },
    faqs: [
      { q: 'Is this the same as a furnace tune-up?', a: 'It covers more. A tune-up focuses on the furnace itself; our inspection covers the full air side — ducts, blower, filter, vents, and airflow — plus cleaning and minor repairs where needed.' },
      { q: 'Do you repair furnaces and air conditioners?', a: 'We handle the air side: blower cleaning, airflow restoration, duct repairs, and minor component fixes. For major mechanical or refrigerant work, we document the issue and tell you exactly what to ask a specialist for.' },
      { q: 'How long does an inspection take?', a: 'Usually 60–90 minutes for a full system check, including the written summary and photos.' },
      { q: 'What if you find nothing wrong?', a: "Then you'll know that — with photos to prove it. We'd rather tell you your system is fine than invent work." },
      { q: 'Can you do the inspection and a duct cleaning in one visit?', a: 'Yes, and most customers combine them. The inspection confirms whether a cleaning is actually needed before any work starts.' },
    ],
  },
  {
    slug: 'furnace-repair',
    nav: 'Furnace Repair',
    metaTitle: 'Furnace Repair in Greater Seattle',
    metaDescription:
      'Furnace not heating? Diagnostic-first furnace repair for Greater Seattle homes — honest findings, clear pricing before work starts. Call (425) 200-5790.',
    eyebrow: 'Furnace Repair',
    h1: 'Furnace Repair, Diagnosed Before Fixed',
    lead:
      "A furnace rarely quits without warning — it gets louder, cycles oddly, or heats some rooms and not others, usually right as the first cold week arrives. We diagnose before we touch anything: you see what failed, what it costs to fix, and whether a repair actually makes sense for your system's age. Then we fix it properly, test it under load, and show you the before-and-after readings.",
    signsTitle: 'Signs your furnace needs repair',
    signs: [
      'Blowing cool or lukewarm air on a heat call',
      'Short-cycling — firing up and shutting down in quick bursts',
      'Rattling, screeching, or booming sounds at startup',
      'The thermostat is set right but rooms stay cold',
      'Burner flame looks yellow or unsteady instead of blue',
      'Heating bills jumping without a change in weather or habits',
    ],
    benefits: [
      'Diagnosis and a clear price before any repair begins',
      'Repair-or-replace guidance based on age, condition, and cost — not a sales script',
      'System tested under load after the fix, with readings you can see',
      'One team for the whole airflow side: furnace, blower, and ducts',
    ],
    included: [
      'Full diagnostic of ignition, burners, blower, and controls',
      'Safety check: heat exchanger inspection and carbon monoxide reading',
      'Clear written quote before repair work starts',
      'Component repair or replacement as approved by you',
      'Post-repair test cycle with temperature-rise verification',
      'Photo documentation of what was wrong and what was done',
    ],
    process: [
      { title: 'Describe the Symptoms', desc: 'Tell us what the furnace is doing — it usually narrows the cause before we arrive.' },
      { title: 'Diagnose & Quote', desc: 'We test the system, find the fault, and give you a clear price and an honest recommendation.' },
      { title: 'Repair & Verify', desc: 'The fix is done same visit whenever parts allow, then tested under a full heat cycle.' },
      { title: 'Walkthrough', desc: 'You see the photos, the readings, and what to watch for — plus straight advice on remaining lifespan.' },
    ],
    equipment: [
      'Combustion and CO analyzers',
      'Digital multimeters and manometers',
      'Inspection cameras for heat exchangers and ducts',
    ],
    media: { type: 'image', src: '/service-furnace-repair.jpg' },
    faqs: [
      { q: 'My furnace stopped working — how fast can you come?', a: 'Usually within the same week, and sooner when schedules allow. Call (425) 200-5790 and we will give you an honest arrival window on the spot.' },
      { q: 'Do you charge for the diagnosis?', a: 'We quote the diagnostic fee up front when you book, and you always see the repair price before any work starts — no surprises on the invoice.' },
      { q: 'Repair or replace — how do you decide?', a: "We weigh the repair cost against the furnace's age and condition and tell you plainly which we would choose in your house. Many furnaces have years left after an affordable fix." },
      { q: 'Is a loud boom at startup dangerous?', a: 'It can be — delayed ignition burns off gas that has pooled in the burner compartment. Stop using the furnace and have it looked at promptly.' },
      { q: 'Do you check for carbon monoxide?', a: 'Yes. Every furnace repair includes a heat exchanger inspection and a CO reading — it is the most important safety check a gas furnace gets.' },
    ],
  },
  {
    slug: 'furnace-installation',
    nav: 'Furnace Installation & Replacement',
    metaTitle: 'Furnace Installation & Replacement in Greater Seattle',
    metaDescription:
      'Right-sized furnace installation and replacement for Greater Seattle homes. Honest sizing, clean installs, full system testing. Call (425) 200-5790.',
    eyebrow: 'Furnace Installation & Replacement',
    h1: 'A New Furnace, Sized and Installed Right',
    lead:
      "When a furnace is past saving, the install matters more than the brand on the box. An oversized unit short-cycles and wears out early; a sloppy connection to old ductwork wastes the efficiency you paid for. We measure your home, size the system honestly, connect it properly to clean ducts, and test the whole thing under load before we leave — with photos of every step.",
    signsTitle: 'Signs it may be replacement time',
    signs: [
      'The furnace is 15–20+ years old and repairs are getting frequent',
      'A repair quote approaching half the cost of a new unit',
      'Heat exchanger damage or repeated CO concerns',
      'Rooms never reach temperature even after repairs',
      'Energy bills climbing year over year on the same usage',
      'Parts for your model are discontinued or hard to source',
    ],
    benefits: [
      'Honest sizing from your home\'s real measurements — never "same size as the old one" by default',
      'New equipment connected to inspected, clean ductwork so rated efficiency actually arrives in your rooms',
      'Old unit hauled away and the work area left spotless',
      'Full-load testing and a complete walkthrough before we call it done',
    ],
    included: [
      'In-home assessment and heat-load sizing',
      'Clear written quote with equipment options explained plainly',
      'Removal and disposal of the old furnace',
      'Professional installation with new fittings and connections',
      'Duct connection inspection (cleaning recommended where needed)',
      'Full test cycle, thermostat setup, and owner walkthrough',
    ],
    process: [
      { title: 'Measure & Quote', desc: 'We assess your home and ducts, size the system honestly, and give you clear options — no pressure.' },
      { title: 'Prepare', desc: 'Old unit disconnected and removed, the space cleaned, and duct connections inspected before anything new goes in.' },
      { title: 'Install', desc: 'The new furnace is set, sealed, and connected properly — venting, gas, electrical, and condensate all verified.' },
      { title: 'Test & Walkthrough', desc: 'Full heat cycle under load, safety checks, thermostat setup, and a plain-English tour of your new system.' },
    ],
    equipment: [
      'Heat-load sizing tools',
      'Combustion analyzers for commissioning',
      'Sheet-metal tools for proper plenum connections',
    ],
    media: { type: 'image', src: '/service-furnace-install.jpg' },
    faqs: [
      { q: 'How long does a furnace replacement take?', a: 'Most straightforward replacements are done in a day. Complicated venting or duct modifications can add time — we tell you before work starts, not after.' },
      { q: 'Which brands do you install?', a: 'We install proven equipment from major manufacturers and recommend based on your home and budget, not on sales quotas. We will explain exactly why we suggest a given unit.' },
      { q: 'Should the ducts be cleaned when the furnace is replaced?', a: 'It is the best time to do it. A new furnace pushing air through decades of dust undoes part of what you paid for — we inspect and tell you honestly whether yours need it.' },
      { q: 'Can you replace an old oil or electric furnace with gas?', a: 'Fuel conversions depend on what service your home has. We assess what is feasible during the in-home visit and lay out the realistic options.' },
      { q: 'Is a bigger furnace better?', a: 'No — oversized furnaces short-cycle, heat unevenly, and wear out sooner. Correct sizing from real measurements is the single biggest quality factor in an install.' },
    ],
  },
  {
    slug: 'heat-pump-services',
    nav: 'Heat Pump Installation & Repair',
    metaTitle: 'Heat Pump Installation & Repair in Greater Seattle',
    metaDescription:
      'Heat pump installation, repair, and mini-split service for Greater Seattle homes — heating and cooling in one efficient system. Call (425) 200-5790.',
    eyebrow: 'Heat Pumps & Mini-Splits',
    h1: 'Heat Pumps: Built for Seattle Weather',
    lead:
      "Few climates suit a heat pump better than Puget Sound — mild winters it handles easily, and the warm summers we now get, it cools too. One system, heating and cooling, at efficiency a furnace can't match for most of the year. We install right-sized heat pumps and ductless mini-splits, repair existing systems, and give you honest numbers on what a switch would actually look like in your home.",
    signsTitle: 'When a heat pump makes sense — or needs help',
    signs: [
      "You're replacing an aging furnace or electric heat and want cooling too",
      'No AC in the house, and the last few summers changed your mind',
      'A room or addition the main system never reaches (mini-split territory)',
      'An existing heat pump blowing weak or lukewarm air',
      'Ice building on the outdoor unit beyond a normal defrost cycle',
      'An outdoor unit that has gotten noticeably louder',
    ],
    benefits: [
      'Heating and cooling in one system, sized for your actual home',
      'High efficiency in exactly the mild-winter climate heat pumps love',
      'Ductless mini-split options for homes without ducts or single problem rooms',
      'Repair service for existing systems — diagnostic first, clear price before work',
    ],
    included: [
      'In-home assessment: insulation, ducts, electrical capacity, and layout',
      'Honest comparison of heat pump vs. furnace replacement for your case',
      'Professional installation: pad, lineset, electrical, and commissioning',
      'Existing-system repairs with clear quotes before work starts',
      'Full-load testing in both heating and cooling modes',
      'Owner walkthrough: thermostat modes, defrost behavior, filter care',
    ],
    process: [
      { title: 'Assess', desc: 'We look at your home the way the system will — ducts, insulation, panel capacity, and the rooms that matter.' },
      { title: 'Plan & Quote', desc: 'Options laid out plainly: ducted vs. mini-split, sizing, and what each really costs to run here.' },
      { title: 'Install or Repair', desc: 'Clean professional work, protected floors, proper commissioning in both modes.' },
      { title: 'Prove It', desc: 'You see the performance readings in heating and cooling before we leave, plus photos of the completed work.' },
    ],
    equipment: [
      'Digital manifold gauges for commissioning',
      'Vacuum pumps and micron gauges for proper lineset service',
      'Heat-load sizing tools',
    ],
    media: { type: 'image', src: '/service-heatpump.jpg' },
    faqs: [
      { q: 'Do heat pumps actually work in Seattle winters?', a: 'Our mild winters are ideal for them. Modern cold-climate units heat efficiently well below the temperatures Puget Sound typically sees.' },
      { q: 'Heat pump or new furnace — which should I pick?', a: 'It depends on your electrical capacity, ducts, and whether you want cooling. We lay out both options with honest numbers during the assessment and have no quota pushing either way.' },
      { q: 'What is a ductless mini-split, and when is it the right call?', a: 'A small wall unit paired with an outdoor compressor — no ducts needed. Ideal for additions, converted garages, older homes without ductwork, or one room that never stays comfortable.' },
      { q: 'My heat pump is icing up. Is that normal?', a: 'Light frost that clears in a defrost cycle is normal. Ice that builds and stays is not — it usually means an airflow or refrigerant issue worth diagnosing promptly.' },
      { q: 'Are there utility rebates for heat pumps?', a: 'Programs change year to year and vary by utility. We will point you to the current programs for your utility during the assessment rather than quoting numbers that may be outdated.' },
    ],
  },
  {
    slug: 'air-conditioning',
    nav: 'AC Repair & Installation',
    metaTitle: 'AC Repair & Installation in Greater Seattle',
    metaDescription:
      'Air conditioning repair and installation for Greater Seattle homes. Honest diagnostics, right-sized systems, clean installs. Call (425) 200-5790.',
    eyebrow: 'Air Conditioning',
    h1: 'Cooling for Homes That Never Needed It — Until Now',
    lead:
      "Most Puget Sound homes were built without air conditioning, and the last several summers have been making the case for it. Whether you need an existing AC repaired before a heat wave or you're adding cooling for the first time, we diagnose honestly, size correctly, and install cleanly — and if a heat pump would serve you better than a straight AC, we'll say so and show you the numbers.",
    signsTitle: 'Signs your AC needs attention',
    signs: [
      'Blowing air that is moving but not cold',
      'The outdoor unit hums but the fan does not spin',
      'Ice on the refrigerant lines or indoor coil',
      'Water pooling around the indoor unit',
      'Breaker trips when the AC starts',
      'Cooling bills climbing while comfort drops',
    ],
    benefits: [
      'Diagnostic-first repairs with a clear price before work starts',
      'Right-sized installs — an oversized AC cools poorly and costs more',
      'Coil and airflow care included in the conversation, not sold separately',
      'Straight advice when a heat pump is the smarter buy for your home',
    ],
    included: [
      'Full cooling-system diagnostic: airflow, electrical, refrigerant circuit',
      'Clear written quote before repair or installation',
      'Professional installation: pad, lineset, electrical, condensate, commissioning',
      'Coil condition check — a dirty coil steals capacity quietly',
      'Full-load cooling test before we leave',
      'Photo documentation of the completed work',
    ],
    process: [
      { title: 'Diagnose or Assess', desc: 'Repairs start with finding the real fault; new installs start with measuring your actual cooling load.' },
      { title: 'Quote Plainly', desc: 'You get the price and the honest options — repair vs. replace, AC vs. heat pump — before anything happens.' },
      { title: 'Fix or Install', desc: 'Clean, careful work with protected floors, proper connections, and no shortcuts on commissioning.' },
      { title: 'Verify Cold', desc: 'We test under load, measure the temperature drop, and walk you through the system before we go.' },
    ],
    equipment: [
      'Digital manifold gauges and leak detectors',
      'Coil cleaning equipment',
      'Airflow measurement tools',
    ],
    media: { type: 'image', src: '/service-ac.jpg' },
    faqs: [
      { q: 'Can you fix my AC before the next heat wave?', a: 'We schedule as fast as the calendar allows — usually same week. The earlier in the season you call, the easier the scheduling.' },
      { q: 'My house has no AC at all. What are my options?', a: 'Central AC on your existing ducts, a heat pump that also replaces your heating, or ductless mini-splits room by room. We assess your home and lay out all three honestly.' },
      { q: 'Why is there ice on my AC lines?', a: 'Usually weak airflow (dirty filter or coil) or low refrigerant. Turn the system off to let it thaw and have it diagnosed — running it iced can damage the compressor.' },
      { q: 'Is a bigger AC better for hot days?', a: 'No — oversized systems cool the air fast but leave it humid and cycle constantly. Correct sizing keeps you comfortable and the bills sane.' },
      { q: 'Should I choose AC or a heat pump?', a: 'If your furnace is also aging, a heat pump often replaces both jobs with one efficient system. If your heating is newer, adding straight AC can be the cheaper path. We show you both with real numbers.' },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
