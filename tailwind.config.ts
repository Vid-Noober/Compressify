import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1D3A",
          light: "#1E3A5F",
        },
        paper: "#F5F7FA",
        surface: "#FFFFFF",
        line: "#E1E7EF",
        muted: "#64748B",
        teal: {
          DEFAULT: "#0FB8A6",
          dark: "#0A9385",
          light: "#E4F9F6",
        },
        amber: {
          DEFAULT: "#F0A93B",
          light: "#FCF1DD",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,29,58,0.04), 0 8px 24px -12px rgba(11,29,58,0.12)",
        cardHover: "0 4px 12px rgba(11,29,58,0.06), 0 16px 32px -12px rgba(11,29,58,0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        squeeze: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(var(--squeeze-ratio, 0.4))" },
        },
        tick: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        squeeze: "squeeze 900ms cubic-bezier(0.65,0,0.35,1) forwards",
        tick: "tick 1.4s ease-in-out infinite",
        fadeUp: "fadeUp 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
