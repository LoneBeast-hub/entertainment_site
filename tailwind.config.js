module.exports = {
    content: ['./public/**/*.{html,js}',
    './src/**/*.{html,js}',],
    theme: {
      fontFamily: {
          Poppins: ["Poppins", "sans-serif"],
      },
      container: {
          center: true,
          padding: '1rem'
      },
      extend: {}
    },
    plugins: [require("@tailwindcss/line-clamp")]
  }