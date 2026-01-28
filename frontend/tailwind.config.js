/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '17': '4.25rem',
        '40': '10rem',
        '62': '15.5rem',
        '80': '20rem',
        '96': '24rem',
        '100': '25rem',
      },
    },
  },
  plugins: [],
}
