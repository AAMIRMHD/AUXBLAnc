/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          ivory: "#FDFBF7", // Warm off-white
          navy: "#0A1D37", // Deep corporate navy
        },
        primary: {
          navy: "#0A1D37",
          ivory: "#FDFBF7",
        },
        accent: {
          gold: "#C5A880", // Champagne gold
          "gold-light": "#E5D3B3",
          "gold-dark": "#A6895F",
        },
        charcoal: "#334155", // Slate/charcoal body text
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blur-to-clear": "blur-to-clear 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blur-to-clear": {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
