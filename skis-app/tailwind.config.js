/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "bounce-forward": "bounce 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
