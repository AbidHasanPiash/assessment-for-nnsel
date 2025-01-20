import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: '#FF9143', // Base brand color
        },
        secondary: {
          black: '#1A1A1A',
          dark: '#262A2C',
          light: '#696969',
          white: '#FFFFFF',
        },
        grayscale: {
          10: "#F9FAFB",
          20: "#F4F4F6",
          30: "#E5E6EB",
          40: "#D3D5DA",
          50: "#9EA3AE",
          60: "#6C727F",
          70: "#4D5461",
          80: "#394150",
          90: "#212936",
          100: "#0B0A0F",
        },
        footer: "#131313",
        border: "#949494",
      },
    },
  },
  plugins: [],
} satisfies Config;
