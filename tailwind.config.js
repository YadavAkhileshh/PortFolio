/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' for system preference-based dark mode
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0 10px 20px rgba(0, 0, 0, 0.2)',
        'custom-md': '0 5px 15px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
