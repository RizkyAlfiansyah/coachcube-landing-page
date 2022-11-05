/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        40: "169px",
        72: "280px",
      },
      colors: {
        primary: {
          50: "#F2F2F2",
          100: "#112242",
          150: "#5A8FAB",
          200: "#4B688A",
          250: "#BACDF0",
          300: "#EFAA5A",
          350: "#B9b9b9",
          400: "#243A41",
          500: "#132C56",
          600: "#6A7893",
          700: "#263E60",
          800: "#D8D8D8",
          900: "#8299C3",
        },
      },
      fontSize: {
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        54: "54px",
      },
      lineHeight: {
        25: "25px",
        28: "28px",
        32: "32px",
        51: "51px",
        61: "61px",
        80: "80px",
        81: "81px",
      },
      fontWeight: {
        900: "900",
        700: "700",
        400: "400",
        300: "300",
      },
      height: {
        80: "calc(100vh - 95px)",
      },
      borderRadius: {
        lg: "10px",
      },
      gap: {
        2: "6px",
      },
      backgroundImage: {
        hero: 'linear-gradient(180deg, #FFFFFF -2.34%, rgba(247, 247, 247, 0) 100%), url("/bg-hero.png")',
        gradientPrimary:
          "linear-gradient(180deg, #FFFFFF -2.34%, rgba(247, 247, 247, 0) 100%)",
      },
    },
  },
  plugins: [],
};
