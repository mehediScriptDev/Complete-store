/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        travelcl:'#00205B',
        bidcl: '#F58220',
      }
    },
  },
  plugins: [require("daisyui")],
}

