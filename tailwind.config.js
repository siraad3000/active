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
        purple: "#611087",
        bluelight: "#6ED8D33D",
        purplelight: "#6110873D",
        goldlight: "#FFD93A3D",
      },
      extend: {
        fontFamily: {
          Urbanist: ["Urbanist", "sans-serif"],
          inter: ["Inter', sans-serif"],
          UrbanistBold:["Urbanistbold", "sans-serif"]
        },
      },
    },
    plugins: [],
  },
};
