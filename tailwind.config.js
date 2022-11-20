/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': {width:'100%'},
          '100%':{width:'0%'}
        }
      },
    },
  },
  plugins: [],
}
