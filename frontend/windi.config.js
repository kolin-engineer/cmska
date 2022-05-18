import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  darkMode: "class",
  attributify: true,
  // exclude: ["/uno.css", "/__uno.css", "/__uno.css?direct"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      primary: {
        50: "#F2FDF9",
        100: "#E6FCF3",
        200: "#BFF6E0",
        300: "#99F1CD",
        400: "#4DE7A8",
        DEFAULT: "#00DC82",
        600: "#00C675",
        700: "#00844E",
        800: "#00633B",
        900: "#004227",
      },
      "secondary-surface": "#E5F9FF",
      "secondary-lightest": "#B7E1ED",
      "secondary-lighter": "#95CDDE",
      "secondary-light": "#71A2B0",
      secondary: "#497A87",
      "secondary-dark": "#255461",
      "secondary-darker": "#003543",
      "secondary-darkest": "#012A35",
      "secondary-black": "#001E26",
      tertiary: "#B2CCCC", // cloud
      "cloud-surface": "#E6F0F0",
      "cloud-lightest": "#D1E2E2",
      "cloud-lighter": "#B2CCCC",
      "cloud-light": "#92ADAD",
      cloud: "#688282",
      "cloud-dark": "#566B6B",
      "cloud-darker": "#334040",
      "cloud-darkest": "#273131",
      "cloud-black": "#1A2121",
      sky: {
        surface: "#E5F9FF",
        lightest: "#B7E1ED",
        lighter: "#95CDDE",
        light: "#71A2B0",
        DEFAULT: "#497A87",
        dark: "#255461",
        darker: "#003543",
        darkest: "#012A35",
        black: "#001E26",
      },
      blue: colors.sky,
      green: {
        50: "#d0fcde",
        100: "#b0fccb",
        200: "#8cfab7",
        300: "#64f4a3",
        400: "#37e990",
        500: "#00d77d",
        600: "#00bb6a",
        700: "#009956",
        800: "#047342",
        900: "#134d2e",
      },
    },
  },
  safelist:
    "p-1 p-2 p-3 p-4 m-2 m-4 m-8 pl-8 w-full max-w-7xl p-6 w-64 rounded-md text-4xl leading-5 block pl-10 pr-3 py-2  pointer-events-none inset-y-0 opacity-25 focus-wiithin text-gray-400 w-auto easy-out transition duration-100 duration-75 opacity-0 opacity-100 eaasy-out transform rotate-180 w-24 ml-20 w-40px h-40px w-60px h-60px font-bold text-gray-400 hidden mr-4 ml-4 rounded-l rounded-r overflow-hidden inline-block -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md borderrounded-none rounded-full rounded-2xl justify-center",
});