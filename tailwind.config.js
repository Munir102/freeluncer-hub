/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary_color': '#22c55e',
      'primary_font': '#475569',
      'p_text': '#94a3b8',
      'green_bg': '#f0fdf4',
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


