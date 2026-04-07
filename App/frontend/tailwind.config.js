/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e3a8a',
          light: '#1e40af',
          accent: '#0d9488',
        },
      },
    },
  },
  plugins: [],
}

