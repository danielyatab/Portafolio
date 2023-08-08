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
        modedark:'#152744',
        secondary: '#61d2b4',
        secondarydark: 'hsla(164, 56%, 60%, 0.25)',
        title: 'hsl(0, 0%, 40%)',
      },
      fontFamily:{
        body:'Roboto Mono'
      }
    },
  },
  plugins: [],
}

