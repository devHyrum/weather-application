/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-800': '#1E213A',
        'gray-900': '#100E1D'
      }
    },
  },
  plugins: [],
}