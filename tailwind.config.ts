import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutralized palette to pair with white, soft pink, cream, and light purple
        'coffee-brown': '#111827', // now a dark neutral instead of coklat
        'coffee-cream': '#F5F0E8',
        'coffee-white': '#FFFFFF',
        'accent-pink': '#F9A8D4',
        'accent-purple': '#C4B5FD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
