import type { Config } from "tailwindcss";

// Design tokens migrados do app de referência (github.com/lucaspenha/dra-leticia-contato-replit).
const config: Config = {
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#183b2b",
          800: "#1f4433",
          700: "#28503d",
          600: "#33604a",
          line: "rgba(207,183,119,0.25)",
        },
        gold: {
          200: "#f2e6c9",
          300: "#d8bf83",
          500: "#cfb777",
          600: "#a3884b",
          700: "#8a6f3d",
        },
        cream: {
          50: "#f5efdf",
          100: "#e9e2d1",
          200: "#e8dfce",
        },
        ink: {
          900: "#28503d",
          700: "#3a4a3f",
          500: "#536258",
        },
        wa: {
          green: "#278b4e",
          "green-d": "#1f753f",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "green-grad": "linear-gradient(135deg,#183b2b 0%,#28503d 100%)",
        "gold-grad": "linear-gradient(135deg,#a3884b 0%,#cfb777 55%,#f2e6c9 100%)",
      },
      borderRadius: {
        brand: "22px",
        "brand-sm": "14px",
      },
      boxShadow: {
        soft: "0 20px 55px -22px rgba(24,59,43,0.5)",
        gold: "0 14px 40px -14px rgba(163,136,75,0.55)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
      },
      keyframes: {
        "wa-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(39,139,78,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(39,139,78,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(39,139,78,0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "wa-pulse": "wa-pulse 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
};

export default config;
