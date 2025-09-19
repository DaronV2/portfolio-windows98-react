/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"
    ,"./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        pixelify: ["var(--font-pixelify)", "sans-serif"],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors : {
        "buttonColor" : "rgb(172, 172, 172)",
        "black" : "black",
        "white" : "white"
      }
    },
  },
  plugins: [],
}