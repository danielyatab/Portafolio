/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:'hsl(271,76%, 53%)',
        title: 'hsl(0, 0%, 40%)',
      },
      fontFamily:{
        body:'Roboto Mono'
      }
    },
  },
  plugins: [],
}

