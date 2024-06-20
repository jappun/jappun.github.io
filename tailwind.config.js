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
      },
      fontFamily: {
        'main-font': ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: [],
}