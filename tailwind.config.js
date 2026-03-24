/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#f5f8ff",
          100: "#e9efff",
          200: "#cfdcff",
          300: "#aebfff",
          400: "#8198ff",
          500: "#5f74f6",
          600: "#4f60db",
          700: "#414db1",
          800: "#373f8f",
          900: "#303670"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.08)"
      }
    },
  },
  plugins: [],
};
