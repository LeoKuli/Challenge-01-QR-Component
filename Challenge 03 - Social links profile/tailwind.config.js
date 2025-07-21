
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'green': '#C4F82A',
        'white': '#FFFFFF', 
        'grey-700': '#333333',
        'grey-800': '#1F1F1F',
        'grey-900': '#141414'
      }
    },
  },
  plugins: [],
}
