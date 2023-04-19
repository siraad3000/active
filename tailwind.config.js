/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./p-components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    colors: {
      active: {
        white: "#FFFFFF",
        offWHite: "#F0F0F0",
        purple: "#611087",
      },
      extend: {
        fontFamily: {
          Urbanist: ["Urbanist", "sans-serif"],
          inter: ["Inter', sans-serif"],
        },
=======
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        inter: ["Inter', sans-serif"],

>>>>>>> 62892dff4c266331d21393b4bcc9edbba9641e75
      },
    },
  },
  plugins: [],
}
