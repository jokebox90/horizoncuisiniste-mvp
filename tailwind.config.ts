import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        primary: `url('/bg.png')`,
        "logo-pix": `url('/logo-pix.jpg')`,
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        writer: "var(--font-playball)",
      },
      colors: {
        // theme: colors.zinc[800],
        // light: colors.zinc[100],
        // lighter: colors.zinc[50],
        // dark: colors.zinc[900],
        // darker: colors.zinc[950],
        theme: "#2C5AA0",
        light: "#6793D5",
        lighter: "#9BB8E4",
        dark: "#22467C",
        darker: "#1B3864",
        primary: {
          50: "#EFF4FB",
          100: "#E3EBF7",
          200: "#BFD2ED",
          300: "#9BB8E4",
          400: "#6793D5",
          500: "#2C5AA0",
          600: "#264F8C",
          700: "#22467C",
          800: "#1B3864",
          900: "#132644",
          950: "#0C192C",
        },
        secondary: {
          50: "#FBF7F4",
          100: "#F6EDE4",
          200: "#ECD7C6",
          300: "#E0C0A3",
          400: "#D2A379",
          500: "#BF7C41",
          600: "#AF713B",
          700: "#996333",
          800: "#7A4F29",
          900: "#58391E",
          950: "#452C17",
        },
      },
    },
  },
  plugins: [],
};
export default config;
