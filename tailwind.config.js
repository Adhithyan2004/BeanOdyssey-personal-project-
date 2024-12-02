/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{primary : '#311B01',
        secondary : '#FFC484'
      },
    },
  },
  plugins: [],
};
