/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      boxShadow: {
        '10xl': ' 0px 5px 20px rgba(48, 63, 71, 0.1)',
      },

      keyframes: {
        fadeOut: {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 }
        }
      },


      fontFamily: {
        interreg: ["interreg"],
        interbod: ["interbod"],
        robreg: ["robreg"],
      },


    },
    animation: {
      fadeOut: 'fadeOut 5s linear forwards'
    }

  },
  plugins: [],
}
