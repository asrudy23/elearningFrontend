/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important !
  ],
  theme: {
    extend: {
        colors: {
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'surface-primary': 'var(--surface-primary)',
        'surface-secondary': 'var(--surface-secondary)',
        'border-color': 'var(--border-color)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),           // Active le plugin 'forms'
    require('@tailwindcss/container-queries'), // Active le plugin 'container-queries'
  ],
}
