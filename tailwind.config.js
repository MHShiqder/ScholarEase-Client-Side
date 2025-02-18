/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora:['Roboto','sans-serif'],
        poppins:['Poppins','sans-serif'],
      },
      colors: {
        primary: "#6A0DAD",  // Royal purple
        secondary: "#FFD700", // Warm golden
        accent: "#EAEAEA",  // Soft Gray
        background: "#FAFAFA", // Off-White
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

