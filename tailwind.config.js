/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': {width:'100%'},
          '100%':{width:'0%'}
        },
        wobble: {
          '0%':{transform: 'translateX(0)'},
          '25%':{transform: 'translateX(-2px)'},
          '50%':{transform: 'translateX(2px)'},
          '75%':{transform: 'translateX(-1px)'},
          '87.5%':{transform: 'translateX(1px)'},
          '100%':{transform: 'translateX(0)'},
        }
      },
    },
  },
  plugins: [],
}
