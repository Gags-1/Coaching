/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        paleOrange: "#f4b16d",
        paleGreen: "#72c6b6",
        paleBlue: "#808eda",
        paleSkin: "#f0a893",
      }
    },
  },
  plugins: [
    
  ],
}

