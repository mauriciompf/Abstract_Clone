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
      keyframes: {
        AnimSearch: {
          'from': { width: '0px', opacity: '0'},
          'to': { width: '181px', opacity: '1' }
        },
      },
      animation: {
        AnimSearch: 'AnimSearch .3s ease-in-out'
      }
    },
  },
  plugins: [require("tailwind-fluid-typography")],
}