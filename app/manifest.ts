import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MOMO Air Care',
    short_name: 'MOMO Air Care',
    description: 'Air duct & dryer vent cleaning specialists serving Greater Seattle.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#FFD400',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
