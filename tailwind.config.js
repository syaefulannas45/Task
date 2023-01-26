/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        button: {
          100: "#23A455",
          200: "#95BF46",
        },
        background: {
          100: "#F5F6FA",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
