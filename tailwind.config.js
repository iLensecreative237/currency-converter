/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#cc33cc",   // lighter shade
          DEFAULT: "#990099", // main brand purple
          dark: "#660066",    // darker shade
        },
      },
    },
  },
  plugins: [],
}
