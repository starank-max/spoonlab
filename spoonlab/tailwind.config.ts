import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "warm-white": "#FFFBF6",
        ink: "#1C1917",
        charcoal: "#44403C",
        stone: "#78716C",
        terracotta: {
          DEFAULT: "#C27A5A",
          hover: "#A8634A",
          light: "#F8EFEA",
        },
        saffron: {
          DEFAULT: "#E8B44F",
          light: "#FDF5E5",
        },
        sage: {
          DEFAULT: "#8B9E7C",
          light: "#EFF4EB",
        },
        chili: {
          DEFAULT: "#D4584A",
          light: "#FDF0EE",
        },
        azure: {
          DEFAULT: "#4A8BC2",
          hover: "#3A73A8",
          light: "#EDF4FA",
        },
        border: "#E8E2DA",
        muted: "#F5F1EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        xl: "26px",
      },
      boxShadow: {
        "xs": "0 1px 2px rgba(28,25,23,0.03)",
        "sm": "0 2px 8px rgba(28,25,23,0.05)",
        "md": "0 4px 16px rgba(28,25,23,0.07)",
        "lg": "0 8px 28px rgba(28,25,23,0.10)",
        "xl": "0 16px 48px rgba(28,25,23,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
