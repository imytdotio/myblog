/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'imyt_white': '#ECE9E2',
        'imyt_blue': '#2B2B7B',
        'imyt_red': '#92090B',
        'mac_green': '#28CD41',
        'mac_yellow': '#FFB800',
        'mac_red': '#F33F42',
      }
    },
  },
  plugins: [],
}
