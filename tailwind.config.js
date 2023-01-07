/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				primary: ["Poppins", "sans-serif"],
				secondary: ["Roboto", "sans-serif"],
        tertiary: ["Manrope", "sans-serif"]
			},
    },
  },
  plugins: [],
}
