import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'primary_blue':'#2876FF',
        'text_black':'#161616',
        'bg_gray':'#DFDFDF'
      },
      fontFamily:{
        'sfpd-regular':['sfpd-regular','system-ui','sans-serif'],
        'sfpd-semibold':['sfpd-semibold','system-ui','sans-serif'],
        'sfpd-bold':['sfpd-bold','system-ui','sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
