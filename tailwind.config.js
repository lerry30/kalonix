/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        accent1: "var(--accent-1)",
        accent2: "var(--accent-2)",
      },
      colors: {
        primary: "var(--color-primary)",
      }
    },
  },
  plugins: [],
}