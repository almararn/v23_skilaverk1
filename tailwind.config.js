/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'llama-yellow': '#d4a040',
        'llama-blue': '#429298',
        'llama-brown': '#794f4a',
        'llama-white': '#f4eedf',
      },
      width: {
        '30%' : '30%',
      },
      backgroundImage: {
        'logo-background': "url('/logo_back.png')",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

