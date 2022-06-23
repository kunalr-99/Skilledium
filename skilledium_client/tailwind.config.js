module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "450px",
        tab: "700px",
        lap: "1024px",
        desk: "1280px",
      },
      colors: {
        "brand-color": {
          50: "#e2e6ff",
          100: "#b2b7ff",
          200: "#7f8bff",
          300: "#4d62ff",
          400: "#1d26fe",
          500: "#0c05e5",
          600: "#0e00b3",
          700: "#140081",
          800: "#120050",
          900: "#0a0020",
        },
        "secondary-color": {
          50: "#fff4da",
          100: "#ffe1ae",
          200: "#ffcd7d",
          300: "#ffb84b",
          400: "#ffa41a",
          500: "#e68b00",
          600: "#b36c00",
          700: "#814d00",
          800: "#4f2d00",
          900: "#1f0d00",
        },
      },
    },
  },
  plugins: [],
};
