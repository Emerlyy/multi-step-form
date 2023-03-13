/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#bfe2fd',
          200: '#adbeff',
          500: '#473dff',
          600: '#02295a',
        },
        'lightblue': '#fafbff',
        'purple': '#9d96c8'
      },
    },
  },
  plugins: [],
}