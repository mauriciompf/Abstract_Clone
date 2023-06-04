/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'section-2': "86%",
      },
      colors: {
        'primary-black': '#191A1B',
        'primary-blue': '#4C5FD5',
        'primary-gray': '#dadbf1',
      },
      fluidTypography: {},
    },
  },
  plugins: [require("tailwind-fluid-typography")],
}