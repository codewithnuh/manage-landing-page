import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)",
        },
        neutral: {
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        body: ['"Be Vietnam Pro"', "sans-serif"],
      },
      fontSize: {
        "16px": "16px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        700: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
