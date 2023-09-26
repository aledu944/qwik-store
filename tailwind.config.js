/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat Alternates"'],
      },
      colors: {
        // BACKGROUNDS
        body: '#15151b',
        // COLORS
        primary: '#205df5',
        secondary: '#4619fc',

      }
    },
  },
  plugins: [],
};
