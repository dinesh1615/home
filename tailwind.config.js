/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
    
        'great-vibes': ['Great Vibes', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'lobster': ['Lobster', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}

