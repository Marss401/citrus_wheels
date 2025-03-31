/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#2c2f36",
        tertiary: "#85888f",
        light: "#ffffff",
        dark: "#e5e7e6",
        backdrop: "#111316",
      }
    },
  },
  plugins: [],
}

