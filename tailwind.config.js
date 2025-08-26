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
        sans: ['var(--family-font)'],
        dm: ['var(--font-family-dm)'],
      },
      fontSize: {
        '2xl': ['var(--text-2xl-size)', { lineHeight: 'var(--text-2xl-lineheight)' }],
        'base': ['var(--text-base-size)', { lineHeight: 'var(--text-base-lineheight)' }],
        'sm': ['var(--text-sm-size)', { lineHeight: 'var(--text-sm-lineheight)' }]
      },
      lineHeight: {
        '2xl': 'var(--text-2xl-lineheight)',
        'base': 'var(--text-base-lineheight)',
        'sm': 'var(--text-sm-lineheight)'
      }
    },
  },
  plugins: [],
}