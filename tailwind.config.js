/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        text: "#000000",
        primary: "#4caf50",
        tealPrimary: "#259876",
        softGreen: "#84DD89",
        limeAccent: "#D0EF38",
        backgroundLight: "#ffffff",
        backgroundDark: "#151815",
        "dark-background": "#151815",
        "dark-text": "#e2e8f0",
        "dark-primary": "#68d391",
      }
    },
  },
  plugins: [],
}

