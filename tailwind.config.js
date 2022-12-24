/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",

      },
    },

  },
  plugins: [require("daisyui")],
}
