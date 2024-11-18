/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: "4rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2.25rem",
        h5: "2rem",
        h6: "1.5rem",
        "sub-head-1": "2rem",
        "sub-head-2": "1.5rem",
        "sub-head-3": "1.25rem",
        "body-xl": "1.25rem",
        "body-lg": "1.125rem",
        "body-md": "1rem",
        "body-sm": "0.875rem",
        "body-xs": "0.75rem",
        "h1-mb": "1.5rem",
        "h2-mb": "0.875rem",
        "h3-mb": "0.75rem",
        "sub-head-mb": "0.75rem",
        "body-lg-mb": "0.75rem",
        "body-md-mb": "0.625rem",
      },
      colors: {
        navy: {
          800: "#1F2937",
        },
        // Primary Colors
        primary: "#703BE7",
        "primary-hover": "#5D32C4", // Warna untuk hover
        "primary-contrast": "#CCFBF1", // Warna kontras untuk teks di atas primary
        "primary-secondary": "#9C7DF0", // Warna transisi antara primary & secondary

        // Secondary Colors
        secondary: "#3F2181",
        "secondary-hover": "#301965",
        "secondary-contrast": "#D1C4FF", // Kontras untuk teks di atas secondary

        // Accent & Neutral
        accent: "#111336",
        neutral: "#222222",
        "neutral-content": "#F5F5F5",

        // Base
        "base-100": "#ffffff",
        "base-content": "#111111",

        // Informational Colors
        info: "#3ABFF8",
        "info-content": "#E3F4FF",

        // Success
        success: "#65B9E7",
        "success-hover": "#5090B9",
        "success-content": "#BFE8FF",

        // Warning
        warning: "#fbbd23",
        "warning-hover": "#E5A317",
        "warning-content": "#FFF3CD",

        // Error
        error: "#FE846F",
        "error-hover": "#D96B57",
        "error-content": "#FFD9D2",

        alert: "#E94057",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-upgrade-btn":
          "linear-gradient(to right, #F27121, #EE593B, #E94057, #AF3E9C, #703BE7)",
        "gradient-primary": "linear-gradient(to right, #703BE7, #3F2181)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
};
