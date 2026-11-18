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
        white: "#FFFFFF",
        surface: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
        },
        corporate: {
          navy: "#0A1E3F",
          dark: "#0F172A",
          slate: "#1E293B",
          body: "#334155",
          muted: "#64748B",
          light: "#94A3B8",
          border: "#E2E8F0",
          subtle: "#F8FAFC",
        },
        brand: {
          DEFAULT: "#0284C7", // Precision Sky/Cerulean Blue
          hover: "#0369A1",
          deep: "#0A1E3F", // Deep Baltic Navy
          royal: "#2563EB", // Royal Blue
          light: "#E0F2FE", // Soft ice blue
          tint: "#F0F9FF",
          glow: "rgba(2, 132, 199, 0.16)",
        },
        safety: {
          DEFAULT: "#0284C7", // Harmonized to Precision Blue
          hover: "#0369A1",
          blue: "#2563EB",
          light: "#E0F2FE",
          tint: "#F0F9FF",
          glow: "rgba(2, 132, 199, 0.16)",
        },
        assurance: {
          emerald: "#059669",
          hover: "#047857",
          light: "#ECFDF5",
          tint: "#F0FDF4",
          glow: "rgba(5, 150, 105, 0.16)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        elevated: "0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        glow: "0 0 25px rgba(2, 132, 199, 0.18)",
        "glow-emerald": "0 0 25px rgba(5, 150, 105, 0.18)",
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
