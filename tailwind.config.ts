import type { Config } from "tailwindcss";

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
      },
      colors : {
        "dark-green" : "#162B30",
        "semi-dark-green" : "#408E78",
        "semi-light-green" : "#7FF2DA",
        "melon" : "#FFA69E",
        "light-green" : "#95F9E3",
      },
      dropShadow : {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  plugins: [],
};
export default config;
