/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        primary: {
          50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd",
          400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9",
          800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065"
        },
        secondary: {
          50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9",
          400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490",
          800: "#155e75", 900: "#164e63", 950: "#083344"
        },
        accent: {
          50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
          400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857",
          800: "#065f46", 900: "#064e3b", 950: "#022c22"
        },
        // Custom brand colors
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        surface: {
          DEFAULT: "#0d0d14",
          50: "#1a1a2e",
          100: "#16213e",
          200: "#12121f",
          300: "#0d0d14",
          400: "#080810",
          500: "#050508",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "hero-gradient": "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
        "glow-violet": "radial-gradient(ellipse at center, rgba(124,58,237,0.4) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(6,182,212,0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(124,58,237,0.3)",
        "glow-md": "0 0 20px rgba(124,58,237,0.4), 0 0 40px rgba(124,58,237,0.15)",
        "glow-lg": "0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.15)",
        "glow-emerald": "0 0 20px rgba(16,185,129,0.4), 0 0 40px rgba(16,185,129,0.15)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card": "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.1)",
        "premium": "0 0 0 1px rgba(255,255,255,0.05), 0 25px 50px rgba(0,0,0,0.5), 0 0 50px rgba(124,58,237,0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        "border-spin": "border-spin 4s linear infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
