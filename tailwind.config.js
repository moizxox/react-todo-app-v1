/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#213555",
        text: "#F5EFE7"
      }
    }
  },
  plugins: []
};
