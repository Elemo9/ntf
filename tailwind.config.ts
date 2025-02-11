import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        deepGreen: "#006400", // Deep green for final gradient stop
        offwhite: "#f8f8f8", // Added offwhite color
      },
      boxShadow: {
        "glow-green": "0 0 20px 5px rgba(72, 187, 120, 0.6)", // Added glow-green shadow
      },
      animation: {
        breathing: "breathing 4s ease-in-out infinite",
        textGlow: "text-glow 1.5s ease-in-out infinite alternate",
      },
      keyframes: {
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        textGlow: {
          "0%": { textShadow: "0 0 10px rgba(34, 255, 0, 0.8)" },
          "100%": { textShadow: "0 0 20px rgba(34, 255, 0, 1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;