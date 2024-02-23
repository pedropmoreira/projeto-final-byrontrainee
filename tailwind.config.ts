import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "red": "#FF214D",
      "gray": "#445A6E",
      "black": {
        "light":"#353C43",
        "hard":"#2B2F33",
      
      },
      "blue":{
        "light":"#1D8BED",
        "medium":"#3882C3",
        "hard":"#134AA6"
      }

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
