import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD400',
          black: '#111111',
          dark: '#0c0c0c',
          gray: '#555555',
          light: '#FAFAF7',
        },
      },
    },
  },
  plugins: [],
};

export default config;
