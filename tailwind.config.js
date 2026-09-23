/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#62adb7", // Custom primary color
        light_primary:"#62adb754",
        thired_primary:"#62adb7d3",
        secondary: "#1a2f6ee3",
        light_secondary:"#1a2f6e5b",
        third: "#000",
        fourth:"#ffffff",
        Gray500:"#9ca3af",
        ...colors,
      },
      animation: {
      'fade-in': 'fadeIn 0.3s ease-in-out',
      'toast-progress': 'progress 6s linear forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      progress: {
        '0%': { width: '100%' },
        '100%': { width: '0%' },
      },
    },
    },
  },
  plugins: [],
  darkMode: "class",
};
