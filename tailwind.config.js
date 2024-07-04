/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark"]
  },
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
};