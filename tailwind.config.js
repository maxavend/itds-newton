/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-strongest': 'var(--neutral-strongest)',
        'neutral-default': 'var(--neutral-default)',
        'theme-primary': 'var(--theme-primary)',
        'screen-base': 'var(--screen-base)'
      },
      fontFamily: {
        sans: ['var(--font-family-base)'],
      },
      lineHeight: {
        '500': 'var(--line-height-500)'
      }
    },
  },
  plugins: [],
}