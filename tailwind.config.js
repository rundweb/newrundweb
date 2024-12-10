/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "serif"],
      },
      fontSize: {
        "16": "16px",
      },
      spacing: {
        '125': '125%',
      }
    },
  },
  plugins: [],
};
