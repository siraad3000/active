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
    colors: {
      active: {
        white: "#FFFFFF",
        offWHite: "#F0F0F0",
      },
      extend: {
        fontFamily: {
          Urbanist: ["Urbanist", "sans-serif"],
          inter: ["Inter', sans-serif"],
        },
      },
    },
    plugins: [],
  },
};
