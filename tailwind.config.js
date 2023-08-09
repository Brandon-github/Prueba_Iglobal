/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-primary': "#0d1323",
        'custom-secondary': "#1d204b",
        'custom-secondary-active': "#34397b",
        'custom-terciary': "#5746ea",
        'custom-card-one': "#ff8b64",
        'custom-card-two': "#68bfe1",
        'custom-card-three': "#ff5e7d",
        'custom-card-four': "#4bcf83",
        'custom-card-five': "#7235d1",
        'custom-card-six': "#f1c75a"
      },
      textColor: {
        'custom-primary': "#ffffff",
        'custom-secondary': "#525597"
      },
      borderColor: {
        'custom-primary': "#ffffff"
      },
      fill: {
        'custom-primary': "#ffffff"
      }
    },
  },
  plugins: [],
}

