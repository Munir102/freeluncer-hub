/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary_color': '#f97316',
      'white_color': '#fffff',
      'black_bg': '#0f172a',
      'color_grey': '#9ca3af',
      'green_text': '#22c55e',
      'red_text': '#dc2626',
    },
  },
  plugins: [require("daisyui")],
}

