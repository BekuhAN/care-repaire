import { keepTheme, colors } from "keep-react/keepTheme";
/** @type {import('tailwindcss').Config} */

const colorsPalette = {
  ...colors,
  primary: {
    25: "#FF977A",
    50: "#FF977A",
    100: "#FF7C58",
    200: "#FF6439",
    300: "#FF4E1D",
    400: "#FF3A03",
    500: "#EB3300",
    600: "#D32E00",
    700: "#BE2900",
    800: "#AB2500",
    900: "#9A2100",
  },
};

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/keep-react/lib/theme/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default keepTheme(config, colorsPalette);
