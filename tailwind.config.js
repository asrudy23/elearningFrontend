/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important !
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),           // Active le plugin 'forms'
    require('@tailwindcss/container-queries'), // Active le plugin 'container-queries'
  ],
}