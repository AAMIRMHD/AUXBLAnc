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
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
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
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(197, 168, 128, 0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(197, 168, 128, 0.15)" },
        },
      },
    },
  },
  plugins: [],
};
