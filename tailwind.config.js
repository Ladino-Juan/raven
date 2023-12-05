/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', "sans-serif"],
      },
      colors: {
        naranja: "#CC8D00",
        blanco: "#F5F5F7",
      },
    },
  },
  plugins: [],
}

