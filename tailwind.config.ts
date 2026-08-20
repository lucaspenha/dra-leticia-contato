import type { Config } from "tailwindcss";

// Design tokens extraídos do site atual (ver docs/prompt-novo-projeto.md, seção 3).
const config: Config = {
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#04241A",
          800: "#06301F",
          700: "#03422F",
          600: "#054D37",
          line: "rgba(211,171,132,0.22)",
        },
        green: {
          300: "#8FDCC0",
          400: "#4FC79A",
          500: "#02A56D",
          600: "#028C5C",
        },
        gold: {
          200: "#F2E3D2",
          300: "#E7CBAE",
          500: "#D3AB84",
          600: "#BE9066",
          700: "#A97A50",
        },
        cream: {
          50: "#FBF8F3",
          100: "#F4EDE2",
          200: "#E9DFCF",
        },
        ink: {
          900: "#191D1A",
          700: "#3A423C",
          500: "#6B756E",
        },
        wa: {
          green: "#25D366",
          "green-d": "#1ebe5a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "green-grad": "linear-gradient(135deg,#03422F 0%,#02A56D 55%,#4FC79A 100%)",
        "gold-grad": "linear-gradient(135deg,#A97A50 0%,#D3AB84 55%,#F2E3D2 100%)",
      },
      borderRadius: {
        brand: "22px",
        "brand-sm": "14px",
      },
      boxShadow: {
        soft: "0 20px 55px -22px rgba(4,36,26,0.5)",
        gold: "0 14px 40px -14px rgba(190,144,102,0.55)",
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
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
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
