/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", //white
        dark: "#000000", // black,
        light_gray:"#707070",
        light: "#F7F8FA",
        green_blue: "#3DBDBC"
      },
    },
    
    
  },
  plugins: [],
};
