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
        'komodo-park': "url('/komodo-national-park.png')"
      },
      colors: {
        'black-olive': '#3d3c3c',
        'bright-turquoise': '#17d4de',
        'bright-gray': '#eceaea',
        'silver-foil': '#b0aeae'
      },
    },
  },
  plugins: [],
};
export default config;
