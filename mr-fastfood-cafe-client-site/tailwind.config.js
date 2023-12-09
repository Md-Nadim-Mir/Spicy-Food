/** @type {import('tailwindcss').Config} */
export default {

  // for dark mode 
  
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

