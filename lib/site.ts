// Central site configuration — edit business facts in ONE place.
export const SITE = {
  name: 'MOMO Air Care',
  url: 'https://momoaircare.com',
  phoneDisplay: '(425) 200-5790',
  phoneHref: 'tel:+14252005790',
  phoneIntl: '+1-425-200-5790',
  email: 'info@momoaircare.com',
  googleReviewsUrl: 'https://www.google.com/search?q=MOMO+Air+Care+Seattle',
  hours: 'Mon–Sun · 7:00 AM – 8:00 PM',
  region: 'Greater Seattle, WA',

  // Announcement bar messages (rotating). Keep honest and low-key.
  banners: [
    '🗓️ Same-week appointments available',
    '🔥 $69 dryer vent cleaning special',
    '📋 Free estimates on every service',
  ],

  // Real service area (from the existing site's service map).
  cities: [
    'Seattle', 'Bellevue', 'Renton', 'Tacoma', 'Kent', 'Everett',
    'Lynnwood', 'Redmond', 'Issaquah', 'Kirkland', 'Bothell', 'Sammamish',
    'Federal Way', 'Auburn', 'Puyallup', 'Marysville', 'Arlington', 'Monroe',
    'Duvall', 'North Bend', 'Olympia', 'Lacey', 'Tumwater', 'DuPont',
  ],
} as const;

export const YELLOW = '#FFD400';
