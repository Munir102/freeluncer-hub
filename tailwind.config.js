/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary_color': '#22c55e',
      'white_color': '#fffff',
      'black_bg': '#0f172a',
      'color_grey': '#9ca3af',
      'green_text': '#22c55e',
      'red_text': '#dc2626',
      'border_color': '#f1f5f9',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      }
    }
  },
  plugins: [require("daisyui")],
}


