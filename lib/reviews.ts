// Customer reviews shown in the homepage ReviewsSection carousel.
//
// IMPORTANT: only REAL reviews from REAL customers go here. Publishing invented
// testimonials is prohibited (FTC fake-review rule) and against Google's policies —
// it can get the business fined and delisted. When the owner supplies real reviews
// (screenshots or text from their Google Business Profile / Yelp / etc.), transcribe
// them here verbatim. While this list is empty the section renders nothing.
//
// service: one of the booking-tile labels, e.g. 'Air Duct Cleaning',
// 'Dryer Vent Cleaning', 'Chimney Sweep or Repair', 'HVAC Repair & Inspection'.

export type Review = {
  name: string;      // reviewer display name, e.g. "Sarah M."
  service: string;   // which service the review is about
  text: string;      // the review, verbatim
  city?: string;     // optional, e.g. "Bellevue"
};

export const REVIEWS: Review[] = [];
