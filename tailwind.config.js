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
      },
      boxShadow: {
        'custom-inset': 'inset 2px 2px rgb(206, 206, 206), inset -2px -2px gray',
        'custom-inset-type' : "inset 2px 2px rgb(40, 40, 40),inset -2px -2px rgb(226, 226, 226)",
        'custom-inset-button' : "inset 2px 2px rgb(236, 236, 236),inset -2px -2px rgb(0, 0, 0)"
      },
    },
  },
  plugins: [],
}