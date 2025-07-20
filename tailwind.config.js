
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Challenge*/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif']
      },
      colors: {
        'primary-yellow': '#F4D04E',
        'dark-gray': '#111111',
        'medium-gray': '#6B6B6B'
      }
    },
  },
  plugins: [],
}
