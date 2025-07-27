/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#999999",
          2: "#666666",
          3: "#555555",
          4: "#333333",
        },
      },
    },
  },
  plugins: [],
};
