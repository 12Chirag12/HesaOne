/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#0A1118",
        canopy: "#101C24",
        graphite: "#172832",
        slate: {
          850: "#14242F",
          750: "#1F3543",
        },
        safety: {
          DEFAULT: "#BC6337",
          amber: "#EA580C",
          bright: "#FF7828",
          glow: "rgba(188, 99, 55, 0.2)",
        },
        limestone: {
          50: "#FAF9F5",
          100: "#F3F1EA",
          200: "#E5E2D9",
          300: "#D4CFBE",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        glass: "0 16px 40px -8px rgba(0, 0, 0, 0.4)",
        glow: "0 0 30px rgba(188, 99, 55, 0.25)",
        card: "0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "beacon": "beacon 2.4s ease-in-out infinite",
      },
      keyframes: {
        beacon: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.88)" },
        },
      },
    },
  },
  plugins: [],
};
