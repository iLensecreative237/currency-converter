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
          light: "var(--color-brand-light)",
          DEFAULT: "var(--color-brand)",
          dark: "var(--color-brand-dark)",
        },
        accent: {
          light: "var(--color-accent-light)",
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
        },
      },
    },
  },
  plugins: [],
}
