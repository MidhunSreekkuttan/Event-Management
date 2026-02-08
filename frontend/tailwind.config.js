/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        glitch: "glitch 2s infinite",
        spinSlow: "spin 12s linear infinite",
      },
      spacing: {
        15: "3.75rem",
        17: "4.25rem",
        40: "10rem",
        62: "15.5rem",
        80: "20rem",
        96: "24rem",
        100: "25rem",
      },
      keyframes: {
        glitch: {
          "0%": { textShadow: "2px 2px #6366f1, -2px -2px #ec4899" },
          "20%": { textShadow: "-2px 2px #6366f1, 2px -2px #ec4899" },
          "40%": { textShadow: "2px -2px #6366f1, -2px 2px #ec4899" },
          "60%": { textShadow: "-2px -2px #6366f1, 2px 2px #ec4899" },
          "100%": { textShadow: "2px 2px #6366f1, -2px -2px #ec4899" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
