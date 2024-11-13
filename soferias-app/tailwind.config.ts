import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "ip": "390px",
      "e7": "720px",
      "xl": "1280px"
      // => @media (min-width: 390px) { ... }
    },

    extend: {
      
    },
  },
  plugins: [],

  backgroundImage: {
    remotePatterns: [
      {
        hostname: "euamoparaty.com.br"
      },
    ],
  },
};
export default config;