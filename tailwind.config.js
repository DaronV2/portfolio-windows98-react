/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixelify: ["var(--font-pixelify)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        chicle: ["var(--font-chicle)", "sans-serif"],
      },
      colors: {
        button: "rgb(172,172,172)",
      },
    },
  },
  plugins: [],
}
