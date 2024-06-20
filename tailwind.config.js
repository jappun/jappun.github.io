/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f1e0ff',
        'lighterSky' : "#1f154a",
        'sky' : "070025",
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: [],
}