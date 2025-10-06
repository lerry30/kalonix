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
      },
      typography: (theme) => ({
        DEFAULT: {},
        lg: {
          css: {
            h1: {
              fontSize: "2.2rem",
              marginBottom: "0.5rem"
            },
            h2: {
              fontSize: "1.7rem",
              marginTop: "1.8rem",
              marginBottom: "0.8rem",
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}