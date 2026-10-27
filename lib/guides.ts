// Original educational guides, the topical-authority layer.
// Facts policy: no invented statistics; incentive amounts appear ONLY in the rebates
// guide, verified against official sources (seattle.gov) with a verification date.

export interface GuideSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Heating' | 'Cooling & Heat Pumps' | 'Air Quality & Safety';
  /** Set on content that cites dated programs/amounts. Shown on page. */
  verifiedNote?: string;
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Related service slugs for cross-linking. */
  related: string[];
}

export const GUIDES_CONTENT: GuideContent[] = [
  {
    slug: 'heat-pump-rebates-seattle',
    title: 'Heat Pump Rebates in Seattle: What Actually Applies in 2026',
    metaTitle: 'Heat Pump Rebates in Seattle (2026 Guide)',
    metaDescription:
      'Which heat pump rebates actually apply to Seattle-area homes in 2026. Seattle City Light, PSE, and what ended. Honest guide by MOMO Air Care, (425) 200-5790.',
    category: 'Cooling & Heat Pumps',
    verifiedNote:
      'Program details verified against official sources in October 2026. Utility programs change during the year and depend on funding, we re-confirm what applies to your home during the assessment.',
    intro:
      "Rebate articles are where heat pump research goes to get confusing: half the numbers online are outdated, and the biggest federal incentive ended entirely. Here is the honest 2026 picture for Puget Sound homeowners, what ended, what your utility actually offers, and the one question about your installer that can decide whether you get a rebate at all.",
    sections: [
      {
        h2: 'First, the big change: the federal tax credit ended',
        paragraphs: [
          "For years, the federal Energy Efficient Home Improvement Credit (Section 25C) let homeowners claim 30% of qualifying heat pump costs, up to $2,000, on their taxes. That credit was terminated by federal legislation passed in July 2025: it applies only to equipment placed in service by December 31, 2025. There is no successor credit for ordinary home heating upgrades.",
          "What this means in practice: if anyone, a contractor, an ad, an article, tells you a 2026 heat pump installation qualifies for the federal tax credit, that information is out of date. (If your system was installed and running by the end of 2025, you may still claim it on your 2025 return using IRS Form 5695.)",
        ],
      },
      {
        h2: 'Your utility decides which rebates exist for you',
        paragraphs: [
          "Utility rebates are the main incentive now, and they depend entirely on who delivers your electricity. Roughly: homes inside Seattle are served by Seattle City Light; most of the Eastside and the suburbs. Bellevue, Kirkland, Renton, Kent, and beyond, are served by Puget Sound Energy. Your electric bill tells you in two seconds.",
        ],
      },
      {
        h2: 'Seattle City Light homes (Seattle proper)',
        paragraphs: [
          "Seattle City Light's current programs, per its official pages as of October 2026:",
        ],
        bullets: [
          'Instant contractor discounts on qualifying air-source heat pumps: $300, $400, or $600 depending on the unit’s efficiency ratings, applied through a contractor who buys from a participating distributor (DIY installs are not eligible).',
          'Seattle Clean Heat Program: a $2,000 instant rebate for converting oil heat to a qualified heat pump system, applied on the invoice by a participating contractor.',
          'Income-eligible households may qualify for a no-cost oil-to-electric conversion through the Seattle Office of Housing, or free weatherization upgrades through the HomeWise program.',
        ],
      },
      {
        h2: 'Puget Sound Energy homes (most of the suburbs)',
        paragraphs: [
          "PSE runs rebate programs for heat pump conversions, typically for homes replacing electric-resistance heat, adding a hybrid heat pump to a gas furnace, or upgrading a failed heat pump, with higher amounts for income-qualified households. We deliberately don't print PSE's dollar figures here: they are tiered, they change during the year, and third-party sites disagree with each other. Check the current numbers at pse.com or ask us during the assessment.",
          "One PSE detail matters more than any dollar figure: trade reporting indicates that from spring 2026, PSE rebates require the installation to be performed by a contractor in PSE's installer network. Before you hire anyone for a rebate-eligible project in PSE territory, ask directly: “Are you eligible to process PSE rebates?”",
        ],
      },
      {
        h2: 'Washington’s income-qualified programs',
        paragraphs: [
          "Washington State is also rolling out federally funded Home Energy Rebates for income-qualified households, administered through the state Department of Commerce. Rollout status and amounts have been moving targets, if your household may qualify by income, it is worth checking the Commerce website or asking us to look with you, because these programs can be substantially larger than standard utility rebates.",
        ],
      },
      {
        h2: 'How we handle rebates on real projects',
        paragraphs: [
          "During a heat pump assessment we confirm three things before quoting: which utility serves your home, which current programs your project could qualify for, and whether the equipment tier you are considering meets the efficiency thresholds those programs require. The rebate landscape changes too often for a webpage to be the final word, including this one. That is why the numbers above carry a verification date, and why we re-check at assessment time.",
        ],
      },
    ],
    faqs: [
      { q: 'Is the federal heat pump tax credit still available in 2026?', a: 'No. The Section 25C credit ended for equipment placed in service after December 31, 2025, and no replacement credit exists for standard home heating upgrades.' },
      { q: 'Do I apply for utility rebates myself?', a: 'Usually not, most current programs are instant discounts applied by the contractor or distributor on the invoice. Some programs use mail-in forms; we tell you which applies before work starts.' },
      { q: 'Does my choice of contractor affect the rebate?', a: 'It can. Seattle City Light discounts flow through participating distributors, and PSE has been moving to an approved-installer requirement. Always ask a bidder whether they can process your utility’s rebate.' },
    ],
    related: ['heat-pump-services', 'furnace-installation', 'hvac-repair-inspection'],
  },
  {
    slug: "furnace-repair-or-replace",
    title: "Furnace Repair or Replace? How Seattle Homeowners Should Decide",
    metaTitle: "Furnace Repair or Replace? A Seattle Guide",
    metaDescription:
      "Repair or replace your furnace? A plain-English decision guide for Puget Sound homeowners from MOMO Air Care. Call (425) 200-5790.",
    category: "Heating",
    intro:
      "A furnace that quits on a cold January night forces a question nobody enjoys: fix it again, or start over with new equipment? There is no single right answer, but there is a sound way to think it through. Age, repair history, the nature of the fault, and how long you plan to stay in your home all pull on the decision. This guide walks Puget Sound homeowners through the same framework our technicians use, including the cases where a simple repair is honestly the better call.",
    sections: [
      {
        h2: "Start With Age and Track Record",
        paragraphs: [
          "Age is the first filter. ENERGY STAR, the federal efficiency program, suggests considering replacement once a furnace is more than 15 years old. That is guidance, not a cliff, a well-maintained furnace in Seattle's mild marine climate often runs well past it, since our winters rarely push equipment to its limits. But as a furnace moves deep into its second decade, components wear together. Replace the inducer motor this year, and the control board or blower bearings may be next, because every part has endured the same heat cycles.",
          "Repair frequency tells you the rest. One failure in a decade is normal wear; two or three service calls in as many winters is a pattern. Keep your invoices and look at the trend, not any single breakdown. A furnace that needs a little more attention each year is telling you where it is headed, and it tends to choose the coldest week of the year to make the point.",
        ],
      },
      {
        h2: "The 50 Percent Rule, a Guideline, Not a Law",
        paragraphs: [
          "A common rule of thumb says that when a repair approaches half the cost of a comparable new furnace, replacement deserves serious thought. It is a useful gut check because it ties the decision to the specific fault in front of you rather than to fear. But treat it as a guideline. A big repair on a seven-year-old furnace can still make sense, because the equipment has many good years left. The same repair on an eighteen-year-old unit usually does not, because you would be putting significant money into a machine whose other parts are equally tired.",
          "Some technicians refine it by weighing age into the math: the older the furnace, the lower the repair cost that justifies walking away. However you slice it, the rule only works with an honest repair quote and an honest replacement quote side by side. We put both numbers in writing, explain what each path buys you, and leave the comparison where it belongs, with you.",
        ],
      },
      {
        h2: "Heat Exchanger Damage Is the Line in the Sand",
        paragraphs: [
          "The heat exchanger is the sealed metal chamber where burning gas heats the air your blower pushes through the house. It is the wall between combustion gases and the air you breathe. Years of heating and cooling cycles flex that metal, and eventually it can crack or rust through. Once it does, exhaust, including carbon monoxide, can mix with your supply air, which is why a technician who finds a compromised heat exchanger will shut the furnace down and tag it rather than leave it running.",
          "Practically, a failed heat exchanger ends the repair-or-replace debate for most older furnaces. Replacing the exchanger means dismantling the core of the unit, and on anything past warranty the work rivals the effort of installing a new furnace, without renewing the motors, board, and burners around it. If your furnace is young and the exchanger is covered under the manufacturer's parts warranty, repair can still pencil out. Otherwise, this is the one failure where we almost always recommend replacement, for safety and economics alike.",
        ],
      },
      {
        h2: "What a New Furnace Actually Buys You",
        paragraphs: [
          "Furnace efficiency is measured by AFUE, the share of the fuel's energy that becomes heat in your home instead of going up the flue. Older furnaces routinely send a meaningful fraction of every therm out the vent; modern condensing furnaces wring heat out of the exhaust itself until water vapor condenses, which is why they drain to a condensate line. Beyond fuel savings, newer equipment often adds variable-speed blowers and staged burners, which run longer at lower output. In a Puget Sound winter of damp forty-degree days, that means steadier room temperatures, quieter operation, and better filtration, because air keeps moving through the filter.",
          "Replacement is also the natural moment to ask whether a furnace is still the right tool at all. Seattle's mild marine climate is close to ideal for heat pumps, which heat efficiently in our typical winter range and add the cooling that more of our summers now demand. Incentive programs change often, we check what applies during the assessment. If you are replacing anyway, it costs nothing to compare both paths before you commit.",
        ],
      },
      {
        h2: "When Repair Is Honestly the Better Call",
        paragraphs: [
          "Plenty of furnace problems do not justify new equipment, and a trustworthy contractor will say so. A dirty flame sensor, a failed igniter, a worn capacitor, or a stuck pressure switch are routine fixes on a furnace with years left in it. The same goes for problems that only look like furnace failures, a miswired thermostat, a tripped float switch on the condensate drain, or airflow starved by a neglected filter.",
        ],
        bullets: [
          "The furnace is under roughly ten years old and this is its first significant failure",
          "The failed part is a routine wear item, igniter, flame sensor, capacitor, or pressure switch",
          "The heat exchanger is sound and the repair is modest next to the cost of replacement",
          "You plan to sell or remodel soon and simply need dependable heat in the meantime",
          "The part is still under the manufacturer's warranty, so you pay only for labor",
        ],
      },
      {
        h2: "A Simple Way to Put It All Together",
        paragraphs: [
          "Put the pieces in order. First, safety: a damaged heat exchanger or recurring carbon monoxide concern means replace, full stop. Second, age and pattern: an older furnace with a thickening repair file is a replacement candidate even if today's fix is small. Third, the math: weigh the repair quote against the 50 percent guideline, your home's future, and what new equipment adds in comfort and efficiency. If you want a second set of eyes, MOMO Air Care serves the Seattle area and will lay out both options plainly, call (425) 200-5790.",
        ],
      },
    ],
    faqs: [
      { q: "How long should a gas furnace last in the Seattle area?", a: "Service life varies with maintenance and usage, but ENERGY STAR suggests considering replacement once a furnace passes 15 years. Our mild winters are gentle on equipment, so well-maintained furnaces here often run somewhat longer than that guideline." },
      { q: "Is it ever worth repairing a furnace with a cracked heat exchanger?", a: "Rarely. The exchanger separates combustion gases from your home's air, and replacing it means rebuilding the furnace's core. Unless the unit is young and under manufacturer warranty, replacement is the safer and more economical path." },
      { q: "Should I replace my furnace with a heat pump instead?", a: "In Puget Sound's mild climate, often yes, modern heat pumps heat efficiently at our winter temperatures and add summer cooling. We compare both options during an assessment so you can decide with real numbers for your home." },
    ],
    related: ["furnace-repair", "furnace-installation", "heat-pump-services"],
  },
  {
    slug: "furnace-blowing-cold-air",
    title: "Why Is My Furnace Blowing Cold Air? Causes and Fixes",
    metaTitle: "Furnace Blowing Cold Air? Causes and Fixes",
    metaDescription:
      "Furnace blowing cold air? Simple checks to try first and the faults that need a pro. MOMO Air Care serves the Seattle area. (425) 200-5790.",
    category: "Heating",
    intro:
      "Few things are more deflating than standing over a vent in January waiting for warmth that never comes. The good news: when a furnace blows cold air, the cause is often something simple you can check in five minutes. The catch: a few of the possible causes are genuinely serious, and the furnace's own safety systems may be shutting the heat off on purpose. This guide works from the harmless end of the list to the hazardous end, and tells you plainly where to stop and call for help.",
    sections: [
      {
        h2: "Start at the Thermostat",
        paragraphs: [
          "Before assuming the furnace is broken, rule out the settings that mimic a breakdown. If the fan is set to ON instead of AUTO, the blower runs constantly, including between heating cycles, when it is pushing room-temperature air that feels cold coming out of a vent. Switch it to AUTO and the blower will only run when there is heat to deliver. While you are there, confirm the system is set to HEAT, the setpoint is above the current room temperature, and the batteries are fresh if your thermostat uses them. A dying thermostat can drop its connection to the furnace entirely.",
        ],
      },
      {
        h2: "A Clogged Filter Can Shut the Heat Off",
        paragraphs: [
          "This is the most common culprit we find, and the mechanism is worth understanding. Your furnace heats a stream of moving air. When a loaded filter chokes that airflow, heat has nowhere to go, temperatures inside the cabinet climb, and a safety device called the high-limit switch cuts the burners. The blower keeps running to cool things down, so from the vents, you feel the heat die and cold air keep coming. Once the furnace cools, the burners relight, overheat again, and the cycle repeats.",
          "Replacing the filter is squarely in homeowner territory: note the size printed on the frame, slide the new one in with the airflow arrow pointing toward the furnace, and see whether steady heat returns. If the limit switch has tripped repeatedly, though, some furnaces lock themselves out until the fault is cleared, and a limit that keeps tripping with a clean filter points to a deeper airflow problem, like a failing blower motor or ducts choked with debris. That diagnosis is a job for a technician.",
        ],
      },
      {
        h2: "Flame Sensor and Ignition Failures: The Short-Cycle Pattern",
        paragraphs: [
          "If your furnace fires up, runs warm for under a minute, then goes cold, over and over, suspect the flame sensor. This thin metal rod sits in the burner flame and proves to the control board that gas is actually burning; the flame itself conducts a tiny electrical current through the rod. Over years, combustion deposits coat the rod and insulate it. The board stops seeing that current, assumes the flame failed, and closes the gas valve within seconds as a safety measure, even though the burner was lit. The blower, already running, pushes cooling air through your vents.",
          "Ignition failures look similar but start earlier in the sequence. A cracked hot-surface igniter never lights the burners at all, and on older furnaces a pilot light can go out or a thermocouple can fail. In each case the furnace may attempt ignition several times, then lock out and run only the blower. Cleaning a flame sensor or replacing an igniter is quick work for a technician, but it involves the burner compartment and gas controls, which is not a place for guesswork.",
        ],
      },
      {
        h2: "High-Efficiency Furnaces Add Two More Suspects",
        paragraphs: [
          "Condensing furnaces, the kind with white plastic vent pipes, pull so much heat from their exhaust that water vapor condenses inside and drains away. That design adds two cold-air causes of its own. If the condensate drain clogs with algae or debris, a float switch shuts the furnace down to prevent an overflow. And because these furnaces vent through a sidewall, the intake or exhaust pipe can be blocked by leaves, snow, or even a bird's nest; a pressure switch then refuses to allow ignition. In Seattle's wet winters, checking that outside termination for debris is a reasonable homeowner step, clearing internal drains is not.",
        ],
      },
      {
        h2: "The Serious End: Ducts, Limit Lockouts, and the Heat Exchanger",
        paragraphs: [
          "Sometimes the furnace is making heat and losing it. In many Puget Sound homes, especially older ones, ducts run through a vented, unheated crawl space. A duct joint that has sagged open down there can dump warm air under the house while the vents upstairs blow lukewarm. If some rooms are cold while the furnace seems to run normally, the ductwork deserves a look.",
          "The most serious possibility is overheating driven by a failing component, or a heat exchanger that has cracked with age. A furnace that repeatedly trips its limit switch, smells hot or metallic, or triggers a carbon monoxide alarm is past the troubleshooting stage. Turn the system off and get it inspected before running it again. These safety devices exist precisely because a furnace that keeps forcing heat through a compromised exchanger can put combustion gases into your living space.",
        ],
      },
      {
        h2: "What to Check Yourself, and When to Stop",
        paragraphs: [
          "A sensible dividing line: settings, filters, switches, and anything visible without opening the burner compartment are yours; gas, flame, and wiring belong to a licensed technician. Work through the quick checks below, and if heat has not returned, or anything smells like gas, stop there. MOMO Air Care diagnoses and repairs furnaces across the Seattle area; call (425) 200-5790 and describe what you observed, because the pattern of the failure often tells us half the story before we arrive.",
        ],
        bullets: [
          "Safe: set the thermostat to HEAT and AUTO, raise the setpoint, and replace its batteries",
          "Safe: replace a dirty filter and open any closed supply registers",
          "Safe: confirm the furnace power switch (it looks like a light switch) and breaker are on",
          "Safe: glance at the outdoor intake and exhaust pipes for leaves, nests, or debris",
          "Stop and call: gas odor, repeated lockouts, scorching smells, or a carbon monoxide alarm",
          "Never: bypass a safety switch or keep resetting the furnace to force it to run",
        ],
      },
    ],
    faqs: [
      { q: "Why does my furnace blow cold air for the first minute?", a: "That is usually normal. Most furnaces delay the blower until the heat exchanger warms up, but some fan settings or a stuck relay can start it early. If cold air lasts more than a couple of minutes, keep troubleshooting." },
      { q: "Why does my furnace heat for a minute and then go cold again?", a: "That short-cycle pattern usually means a dirty flame sensor: the control board cannot confirm the flame, so it closes the gas valve seconds after ignition. Cleaning or replacing the sensor is a quick, inexpensive repair for a technician." },
      { q: "Is it dangerous to keep running a furnace that blows cold air?", a: "Usually it just wastes electricity, but not always. If the furnace trips safety switches repeatedly, smells hot, or a carbon monoxide alarm sounds, shut it off and have it inspected, those protections are telling you something is wrong." },
    ],
    related: ["furnace-repair", "furnace-cleaning", "hvac-repair-inspection"],
  },
  {
    slug: "heat-pump-vs-gas-furnace-seattle",
    title: "Heat Pump vs. Gas Furnace in Seattle: An Honest Comparison",
    metaTitle: "Heat Pump vs. Gas Furnace in Seattle | Honest Comparison",
    metaDescription:
      "Heat pump or gas furnace for your Seattle home? A plain-English look at comfort, efficiency, and cooling. MOMO Air Care: (425) 200-5790.",
    category: "Cooling & Heat Pumps",
    intro:
      "If your furnace is nearing the end of its life, you've probably heard that heat pumps are the way to go in Seattle. Mostly, that's true, but not for every house, and not for every homeowner. This guide explains how each system actually makes heat, why our mild marine climate suits heat pumps so well, where a gas furnace still earns its place, and what we check in your home before recommending either one.",
    sections: [
      {
        h2: "How Each System Makes Heat",
        paragraphs: [
          "A gas furnace creates heat by burning fuel. Natural gas ignites inside a sealed heat exchanger, the combustion gases heat the metal, and a blower pushes household air across that hot surface and out through your ducts while the exhaust leaves through a flue. It's a mature, reliable design, and because combustion runs hot, the air coming out of the registers feels distinctly warm, often noticeably warmer than your skin, which is part of why people associate furnaces with coziness.",
          "A heat pump doesn't create heat at all, it moves it. The refrigerant in the outdoor coil is colder than the winter air, so heat flows from the air into the refrigerant. The compressor then squeezes that refrigerant to raise its temperature, and the indoor coil releases the captured heat into your home. Because moving heat takes far less energy than making it, ENERGY STAR notes that an air-source heat pump can deliver up to three times more heat energy to a home than the electrical energy it consumes. In summer, a reversing valve flips the cycle, and the same machine becomes an air conditioner.",
        ],
      },
      {
        h2: "Why Seattle's Climate Favors Heat Pumps",
        paragraphs: [
          "A heat pump's efficiency depends on how much heat it can pull from the outdoor air, and milder air gives it more to work with. Puget Sound winters are famously mild: marine air off the water keeps most days and nights above freezing, and deep cold is rare and short-lived. That means a heat pump here spends almost the entire heating season in its most efficient operating range, conditions where it delivers heat with relatively little strain on the compressor and a fraction of the energy a resistance heater would need.",
          "Compare that with colder inland climates, where long stretches of hard freeze historically pushed heat pumps toward their limits. Seattle rarely does that. Our heating season is long but gentle, months of cool, damp days rather than weeks of bitter cold, and that is exactly the duty cycle a heat pump handles best: steady, moderate output for many hours at a time. If there's a North American climate built for heat pumps, the marine Northwest is a strong candidate.",
        ],
      },
      {
        h2: "Where a Gas Furnace Still Wins",
        paragraphs: [
          "There are honest cases for the furnace. Supply air from a furnace is hotter, so rooms recover quickly after a thermostat setback, and the airflow feels unmistakably warm on your skin, a heat pump's gentler, steadier output takes some adjustment. If your home already has gas service, a working flue, and ducts sized around a furnace, a like-for-like replacement is the simplest project. And in houses with older electrical panels already near capacity, adding a heat pump can mean electrical work that a straightforward furnace swap avoids entirely.",
        ],
        bullets: [
          "You already have gas service and venting in good condition",
          "Your electrical panel is small or nearly full, and you want to avoid panel work for now",
          "You strongly prefer hot supply air and fast recovery after turning the heat down",
          "Your existing furnace is young enough that replacing it outright makes little sense",
        ],
      },
      {
        h2: "The Dual-Fuel Option: Keep the Furnace as Backup",
        paragraphs: [
          "You don't always have to choose. A dual-fuel system pairs a heat pump with a gas furnace in the same ductwork. The heat pump handles the vast majority of the season, the mild, damp weather Seattle serves up most of the year, and when outdoor temperatures drop below a set changeover point, the furnace takes over. You get heat-pump efficiency when conditions favor it and furnace muscle on the coldest mornings. It's a practical path for homeowners who want to move toward electric heating without giving up gas entirely, especially when the existing furnace still has years of life left in it.",
        ],
      },
      {
        h2: "Cooling Is Often the Tiebreaker",
        paragraphs: [
          "Here's the consideration that settles many Seattle decisions: a furnace only heats, while a heat pump heats and cools with the same equipment. Most older Puget Sound homes were built without air conditioning because summers never used to demand it, but recent summers have brought longer warm stretches and the occasional stretch of serious heat. If you've been getting by with box fans and closed blinds, a heat pump effectively gives you whole-home cooling as part of the heating upgrade, rather than as a separate project with its own equipment, its own refrigerant lines, and its own installation day.",
        ],
      },
      {
        h2: "What We Check Before Recommending Either",
        paragraphs: [
          "A good recommendation starts with the house, not a brochure. Before suggesting either system, we run a heating and cooling load calculation to learn what your home actually needs, plenty of existing systems turn out to be oversized, then walk through the practical details that determine whether each option installs cleanly and performs the way it should. Incentive programs change often, we check what applies during the assessment.",
        ],
        bullets: [
          "Electrical panel capacity, a heat pump needs its own dedicated circuit, and some older Seattle panels need upgrading or smart load management first",
          "Ductwork condition and sizing, heat pumps move more air at gentler temperatures, so leaky or undersized ducts cost you more comfort than they would with a furnace",
          "Gas line and flue condition, if a furnace or dual-fuel setup is on the table",
          "Insulation and air sealing, a tighter home lets smaller equipment do the job well",
          "How long you plan to stay in the home, and how you like your heat to feel",
        ],
      },
    ],
    faqs: [
      { q: "Will a heat pump keep my Seattle home warm enough?", a: "Yes. Seattle's mild marine winters sit squarely in a heat pump's comfortable operating range, and modern cold-climate models hold capacity well below freezing. Proper sizing from a load calculation matters more here than the climate does." },
      { q: "Do I have to remove my gas furnace to add a heat pump?", a: "No. A dual-fuel setup keeps the furnace as backup while the heat pump carries most of the season. It's a common choice when the existing furnace still runs well." },
      { q: "What makes one installation a bigger job than another?", a: "Electrical panel capacity, ductwork condition, and whether the outdoor unit has a workable location. Homes that need panel upgrades or duct repairs take more work than straightforward like-for-like replacements." },
    ],
    related: ["heat-pump-services", "furnace-installation", "air-conditioning"],
  },
  {
    slug: "heat-pump-winter-performance",
    title: "Do Heat Pumps Work in Seattle Winters? What to Expect",
    metaTitle: "Do Heat Pumps Work in Seattle Winters? | MOMO Air Care",
    metaDescription:
      "Yes, heat pumps handle Seattle winters well. How cold-weather performance really works, from defrost cycles to backup heat. MOMO Air Care: (425) 200-5790.",
    category: "Cooling & Heat Pumps",
    intro:
      "The most common question we hear about heat pumps is some version of: but what happens in winter? It's a fair question, a machine that pulls heat out of cold air sounds like a trick. It isn't. Heat pumps heat homes reliably across the Puget Sound region all winter long. This guide explains how that works, where the honest limits are, what that occasional cloud of steam means, and what to expect during the rare cold snap.",
    sections: [
      {
        h2: "Cold Air Still Holds Heat",
        paragraphs: [
          "Air holds extractable heat at any temperature found on Earth, and a heat pump is built to collect it. Its refrigerant is engineered to boil at very low temperatures, so even on a cold morning the refrigerant flowing through the outdoor coil is colder than the outside air. Heat always flows from warmer to colder, so heat moves from the air into the refrigerant. The compressor then squeezes that refrigerant, concentrating the collected heat to a temperature high enough to warm your home, and the indoor coil releases it into your ductwork.",
          "Because the system moves heat instead of generating it, it does more with each unit of electricity. ENERGY STAR notes that an air-source heat pump can deliver up to three times more heat energy to a home than the electrical energy it consumes, something no furnace or baseboard heater can match, since any device that makes heat directly can never give back more energy than you feed it.",
        ],
      },
      {
        h2: "The Honest Part: Output Falls as Temperature Falls",
        paragraphs: [
          "As outdoor air gets colder, two things happen. The refrigerant collects less heat on each pass, because the temperature gap between the air and the coil shrinks. And the compressor must work harder to lift that heat all the way up to indoor temperature. So a heat pump's heating capacity and its efficiency both decline as the thermometer drops. Older single-speed units felt this sharply, around freezing, some genuinely struggled to keep up. That history is where the 'heat pumps don't work in winter' reputation comes from, and it deserves a straight answer rather than a wave of the hand.",
          "The question that matters isn't whether output declines, it does, but whether the unit still makes enough heat at the temperatures your climate actually delivers. In Seattle, where most winter weather hovers above freezing, even older heat pumps spent nearly the whole season inside their strong operating range. Modern equipment is better still, which is why proper sizing from a load calculation, not guesswork, is the real safeguard against cold rooms.",
        ],
      },
      {
        h2: "Cold-Climate Models Changed the Math",
        paragraphs: [
          "Modern cold-climate heat pumps use variable-speed inverter compressors that ramp up as temperatures fall, plus refined refrigerant circuits that preserve heating capacity in deep cold. The performance claims are independently checked: ENERGY STAR's cold-climate certification requires third-party verified testing down to 5°F, and certified units keep operating below even that point. For perspective, a typical Puget Sound winter never comes close to that temperature, the cold snaps we do get are rare, short, and well inside the conditions these machines are built and tested to handle.",
        ],
      },
      {
        h2: "That Cloud of Steam Is a Defrost Cycle",
        paragraphs: [
          "On cool, damp days, which describes most of a Seattle winter, moisture in the air freezes onto the outdoor coil, because the coil runs colder than the air around it. Frost acts like a blanket, blocking airflow and choking heat transfer, so the unit periodically clears itself. During a defrost cycle, the reversing valve briefly flips the system into cooling mode, sending hot refrigerant through the outdoor coil to melt the frost. The melting frost turns into a dramatic-looking plume of water vapor, the 'smoke' homeowners sometimes worry about. It's normal operation, not a malfunction.",
          "You might notice slightly cooler air from the vents for a few minutes during a defrost, and many systems temper this with a touch of backup heat. What isn't normal is an outdoor unit that stays caked in thick ice for hours, defrosts constantly, or never seems to clear itself. Those point to a sensor, airflow, or refrigerant problem, worth a service call before the next cold stretch arrives.",
        ],
      },
      {
        h2: "Backup Heat Strips: Insurance, Not the Engine",
        paragraphs: [
          "Most ducted heat pumps include electric resistance strips in the air handler, essentially a large toaster element. They switch on when the heat pump alone can't keep pace: during deep cold, during defrost cycles, or when you raise the thermostat several degrees at once. Resistance heat works, but it only ever gives back exactly the energy it draws, while the heat pump multiplies it, so the strips cost noticeably more to run. In a well-sized Seattle system they should engage rarely. If your strips run often in ordinary winter weather, the system is likely undersized, low on refrigerant, or configured incorrectly.",
        ],
        bullets: [
          "Hold the thermostat steady, big setbacks force the strips on during recovery",
          "Keep filters fresh and the outdoor unit clear of leaves and shrubs so airflow stays strong",
          "Ask your installer where the strip lockout temperature is set, it decides how often strips can run",
        ],
      },
      {
        h2: "What a Rare Cold Snap Actually Feels Like",
        paragraphs: [
          "Every few winters, arctic air slips over the Cascades and Puget Sound drops well below freezing for a few days. Here's what to expect from a properly sized heat pump: it runs long hours, possibly continuously, which is normal and efficient, not a sign of distress. Supply air feels warm rather than hot, because a heat pump heats steadily instead of in short blasts. Backup strips may cycle in during the coldest hours, and energy use for those days will be higher. Then the marine air returns, the strips go quiet, and the heat pump goes back to doing nearly everything on its own.",
        ],
        bullets: [
          "Don't switch to 'emergency heat' unless the heat pump has actually failed, it forces the costly strips to carry the whole load",
          "Gently clear snow and ice from around the outdoor unit so it can breathe",
          "Expect long, steady run times, short cycling, not long cycles, is the warning sign",
        ],
      },
    ],
    faqs: [
      { q: "Why does my heat pump blow air that feels cooler than my old furnace did?", a: "Heat pump supply air is warm rather than hot, well above room temperature, but cooler than furnace air, so it can feel mild by comparison. It runs longer and more steadily, keeping rooms even instead of swinging between blasts." },
      { q: "Is the steam coming off my outdoor unit a problem?", a: "Almost never. That's a defrost cycle: the unit briefly reverses to melt frost off the outdoor coil, and the melting frost turns to vapor. Call for service only if the unit stays iced over or defrosts constantly." },
      { q: "Should I use the 'emergency heat' setting when it gets cold?", a: "Only if the heat pump has actually stopped working. Emergency heat bypasses the heat pump and runs the electric strips alone, which draw far more power. A healthy system manages cold weather on its own, strips included." },
    ],
    related: ["heat-pump-services", "hvac-repair-inspection", "furnace-installation"],
  },
  {
    slug: "dryer-vent-fire-safety",
    title: "Dryer Vent Fires: The Risk Hiding in Your Laundry Room",
    metaTitle: "Dryer Vent Fire Safety Guide | MOMO Air Care",
    metaDescription:
      "Why lint-clogged dryer vents start fires, warning signs to watch for, and how professional cleaning helps. MOMO Air Care, Seattle area: (425) 200-5790.",
    category: "Air Quality & Safety",
    intro:
      "Every load of laundry sheds lint, and your dryer's job is to push that lint, along with hot, moist air, through a duct and out of the house. When that duct narrows with buildup, heat that should leave your home stays inside the machine. That is how many dryer fires begin: not with a defect, but with a vent that slowly stopped doing its job. Here is how the risk develops, what to watch for, and what actually fixes it.",
    sections: [
      {
        h2: "Why Lint Ignites: Restriction, Then Heat",
        paragraphs: [
          "A dryer heats air, passes it through tumbling clothes, and exhausts the moist, lint-laden result outdoors. The lint screen catches most fibers, but some always slip past and settle in the duct, especially at elbows and along long horizontal runs. As the layer thickens, airflow drops. With less air moving through, the heating element or gas burner has less air to carry its heat away, so temperatures around it climb. Cycles run longer, the machine works harder, and the safety switch that limits temperature starts tripping repeatedly. Those switches are designed as a backstop, not a routine control; repeated cycling wears them out, and when one fails, the interior can reach lint's ignition point.",
          "Lint itself is nearly ideal fuel: fine, dry fiber with enormous surface area, packed loosely enough for flames to spread through it. Once something ignites near the heat source, fire can travel along the lint deposits inside the duct itself. According to the U.S. In the U.S. Fire Administration's special report on residential clothes dryer fires, failure to clean was the leading contributing factor, cited in about a third of these fires",
        ],
      },
      {
        h2: "Warning Signs Your Vent Is Restricted",
        paragraphs: [
          "A clogging vent announces itself well before anything ignites, and the signals all trace back to the same cause: hot, moist air that cannot leave. If you notice more than one of the signs below, stop using the dryer until the vent has been inspected. None of them means a fire is imminent, but together they mean the machine is running hotter than it was designed to, and the margin built into its safety switches is being spent.",
        ],
        bullets: [
          "Towels or jeans need a second cycle to dry",
          "The top of the dryer or the whole laundry room feels unusually hot during a load",
          "A faint scorched smell while the dryer runs",
          "The exterior vent flap barely opens, or you feel little air there mid-cycle",
          "Lint collecting around the dryer door seal or behind the machine",
          "Condensation on laundry room windows or walls while drying",
        ],
      },
      {
        h2: "Routing Problems in Townhomes and Split-Levels",
        paragraphs: [
          "Around Puget Sound, a great deal of lint trouble comes down to where builders put the laundry. Townhomes often stack it on an upper floor or tuck it into an interior closet, which means the duct either runs up through the roof or travels a long horizontal path with several elbows. Every elbow adds resistance and gives lint a place to settle, and a roof termination is hard to see and easy to forget. Split-level homes frequently route the duct down and out through a crawl space or garage, where sagging flexible duct collects lint at every low spot.",
          "Our marine climate adds a complication. Dryer exhaust is warm and humid, and when it travels through a long duct in a cold crawl space or attic, which describes most of the year here, moisture condenses on the duct walls. Damp lint stops blowing through and starts caking instead, so buildup happens faster than the same duct would see in a dry climate. Long or concealed runs in this region deserve more frequent attention, not less.",
        ],
      },
      {
        h2: "Habits That Keep the Risk Low",
        paragraphs: [
          "Most prevention costs nothing but attention. The lint screen is your first line of defense, but it only catches part of the lint, and it only works when it is clean. A screen coated with fabric softener residue restricts airflow even when it looks clear, if water beads on the mesh instead of passing through, wash it with a little dish soap and let it dry. Beyond the screen, a few habits make the biggest difference:",
        ],
        bullets: [
          "Clean the lint screen before or after every single load",
          "Run the dryer only while someone is home and awake",
          "Replace plastic or thin foil transition hose with semi-rigid or rigid metal duct",
          "Keep the area behind and around the dryer clear of lint and stored items",
          "Check the exterior hood a few times a year, the flap should open freely while the dryer runs",
          "Treat longer dry times as a warning, not an inconvenience",
        ],
      },
      {
        h2: "What Professional Cleaning Actually Involves",
        paragraphs: [
          "A proper dryer vent cleaning treats the whole path, not just the few feet you can reach from behind the machine. The technician disconnects the dryer, cleans the transition hose, and runs a rotary brush through the entire duct while a vacuum captures what the brush loosens, from the dryer connection all the way to the exterior wall or roof termination. The hood or cap gets cleaned too, since a stuck flap or a lint-matted screen can undo everything upstream. Just as important is what gets noticed along the way: crushed sections, separated joints, plastic flex hidden inside walls, or a run so long it was never going to vent well.",
          "The job should end with a check that air is actually moving, strong, steady flow at the termination with the dryer running. If your dryer has felt slow and runs noticeably faster after a cleaning, that difference is the restriction you were living with. And if problems persist after a thorough cleaning, the issue is usually the duct's design rather than its condition, which is worth a conversation about rerouting.",
        ],
      },
    ],
    faqs: [
      { q: "How often should my dryer vent be cleaned?", a: "Once a year is a sensible baseline for most households. Clean more often with heavy laundry use, pets that shed, or a long vent run with multiple elbows or a roof termination, all common in Puget Sound townhomes." },
      { q: "Can I clean the dryer vent myself?", a: "You can and should clean the lint screen and the area behind the dryer, and a brush kit handles the first few feet. Long runs, multiple elbows, and roof terminations need professional rotary equipment to clear fully." },
      { q: "Is it safe to run the dryer while I'm away?", a: "We recommend against it. Dryer fires typically start while the machine is running, and an unattended fire spreads before anyone can respond. Run loads while someone is home and awake." },
    ],
    related: ["dryer-vent-cleaning", "air-duct-cleaning", "hvac-repair-inspection"],
  },
  {
    slug: "how-often-clean-air-ducts",
    title: "How Often Should Air Ducts Be Cleaned? An Honest Answer",
    metaTitle: "How Often to Clean Air Ducts | MOMO Air Care",
    metaDescription:
      "An honest look at how often air ducts really need cleaning, what the EPA says, and the signs that matter. MOMO Air Care: (425) 200-5790.",
    category: "Air Quality & Safety",
    intro:
      "Search this question and you will find plenty of companies insisting every home needs its ducts cleaned every year. The honest answer is less convenient for anyone selling cleanings: there is no fixed schedule that fits every home, and the EPA explicitly does not recommend routine duct cleaning. What matters is the condition of your ducts and a handful of specific triggers. This guide covers what genuinely warrants a cleaning, what an inspection-first approach looks like, and why some Puget Sound homes are the exception.",
    sections: [
      {
        h2: "The Short Answer: Condition, Not Calendar",
        paragraphs: [
          "The EPA's position, published on epa.gov, is that no blanket recommendation can be made about duct cleaning. The agency advises cleaning as needed rather than on a routine schedule, and it is candid that duct cleaning has never been demonstrated to prevent health problems. It does identify three situations where cleaning is clearly warranted: substantial visible mold growth inside hard-surface ducts, an infestation of rodents or insects, and ducts clogged with excessive dust and debris. The EPA also notes that each of those conditions usually points to an underlying cause, a moisture problem, an entry point, a filtration gap, that needs correcting, or the problem comes back.",
          "That position cuts both ways. It means a company pushing annual cleanings on every customer is selling past the evidence. It also means duct cleaning is not snake oil, when one of those triggers is present, cleaning is the correct response. A light film of dust inside a duct is normal and is not one of them. The useful question is never how long it has been; it is what is actually in there.",
        ],
      },
      {
        h2: "Triggers That Genuinely Matter",
        paragraphs: [
          "A handful of situations reliably justify cleaning, and most of them are things you can observe yourself by pulling a register cover and looking in with a flashlight. If any of the items below describe your home, an inspection is worth scheduling. If none of them do, the honest advice is usually to skip the cleaning and put your attention toward a better filter and regular filter changes instead.",
        ],
        bullets: [
          "A recent remodel, drywall sanding and construction dust end up in ducts unless the system was sealed off during the work",
          "Evidence of rodents or insects: droppings, nesting material, or sounds in the ductwork",
          "Substantial visible mold inside the ducts, confirmed up close rather than guessed at",
          "Visible puffs of dust from supply registers when the system starts up",
          "Shedding pets combined with allergy symptoms that track with the heat running",
          "An older home where, as far as anyone knows, the ducts have never been cleaned",
        ],
      },
      {
        h2: "What Inspection-First Looks Like",
        paragraphs: [
          "The industry's own trade association, NADCA, builds its standard around assessment before cleaning, and that is a fair test of any company you call. An inspection-first visit starts with looking: registers come off, a camera or mirror goes into the trunk lines, and the return side, which collects far more debris than the supply side, gets particular attention, along with the blower compartment and the coil. Sometimes the finding is heavy buildup. Sometimes it is normal household dust and no cleaning needed yet. A company that never reaches the second conclusion is not inspecting; it is selling.",
          "When cleaning is warranted, the method matters. Proper duct cleaning is source removal: the system is put under negative pressure with a large vacuum, and brushes or compressed-air tools agitate debris loose so the vacuum captures it, working through the entire system, trunk lines, branch runs, the blower, and the coil. A shop vacuum held at each register for a few minutes moves the visible dust and leaves the system essentially untouched.",
        ],
      },
      {
        h2: "Why Some Puget Sound Homes Are the Exception",
        paragraphs: [
          "Our region's housing stock changes the math a little. A large share of Seattle-area homes were built decades ago with original ductwork running through a crawl space, and our wet winters keep those crawl spaces damp for months at a time. Duct joints that have loosened over the years pull in crawl-space air, along with its moisture and dust, every time the blower runs. Crawl spaces are also where rodents shelter in the cold months, and ductwork gives them a warm, attractive route. A duct system that has spent fifty years above a damp crawl space is a different proposition from a tight modern one.",
          "At the same time, the mild marine climate works in your favor: there is less airborne dust here than in drier parts of the country, so the case for frequent routine cleaning is weaker, not stronger. The practical takeaway for a Puget Sound homeowner is to pair any duct question with a look at the crawl space itself, sealing and insulating down there often solve the problem the dust was hinting at.",
        ],
      },
      {
        h2: "What Duct Cleaning Won't Fix",
        paragraphs: [
          "A dusty house is the most common reason people call about duct cleaning, and it is the complaint cleaning is least likely to solve. Most household dust comes from fabrics, skin, pets, and air leaking in from outside, the ducts are a carrier at most, and the EPA notes that dirty ducts are only one of many possible sources of particles in a home. If dust is the complaint, a better filter, sealed duct joints, and a tighter crawl space usually accomplish more than cleaning alone.",
          "The same logic applies to the serious triggers. Mold cleaned out of a duct grows back unless the moisture source is corrected first. Rodent debris returns unless the entry points are closed. This is why a good assessment looks at causes, not just symptoms, cleaning is sometimes the right response, but it is rarely the whole response, and a trustworthy company will be clear about the difference.",
        ],
      },
    ],
    faqs: [
      { q: "Does the EPA recommend annual duct cleaning?", a: "No. The EPA advises cleaning as needed rather than on a routine schedule, and identifies three clear triggers: substantial visible mold, a rodent or insect infestation, or ducts clogged with excessive dust and debris." },
      { q: "How can I check my own ducts?", a: "Remove a supply register and a return grille and look inside with a flashlight. A thin gray film is normal. Thick mats of debris, droppings, nesting material, or visible growth are worth a professional inspection." },
      { q: "Will duct cleaning fix a dusty house?", a: "Usually not by itself. Most household dust comes from fabrics, skin, and outside air. Better filtration and sealing leaky crawl-space ducts often help more, though cleaning makes sense when the ducts themselves hold heavy debris." },
    ],
    related: ["air-duct-cleaning", "furnace-cleaning", "crawl-space-services"],
  },
];

export function getGuide(slug: string): GuideContent | undefined {
  return GUIDES_CONTENT.find((g) => g.slug === slug);
}
