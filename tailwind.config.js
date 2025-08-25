/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--theme-primary)',
        'neutral-high': 'var(--neutral-high)',
        'neutral-default': 'var(--neutral-default)',
        'screen-soft': 'var(--screen-soft)'
      },
      fontFamily: {
        sans: ["var(--family-font)", 'DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}