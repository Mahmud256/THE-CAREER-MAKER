/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   fontFamily:{
       kolam:['Kalam', 'cursive'],
       Pacifico :['Pacifico', 'cursive'],
       protest:['Protest Guerrilla', 'sans-serif'],
       Protest_Riot:['Protest Riot', 'sans-serif'],
       Roboto :['Roboto', 'sans-serif'],
       Unbounded:['Unbounded', 'sans-serif']
   }
  },
  plugins: [require("daisyui")],
}