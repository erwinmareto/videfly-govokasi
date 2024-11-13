/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
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
        },
      },
    ],
  },
};
