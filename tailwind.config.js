const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
      },
    },
    fontFamily: {
      sans: ["Manrope", "ui-sans-serif", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        contrast: "var(--contrast)",
        gray: {
          100: "#f8f8f8",
          200: "#f4f4f4",
          300: "#E6E6E6",
          400: "#C4C4C4",
          500: "#8D8D8D",
          600: "#666666",
        },
        red: {
          400: "#ED5959",
        },
        yellow: {
          500: "#F59511",
        },
        green: {
          400: "#2BC48A",
        },
      },
      fontSize: {
        xxl: "1.625rem",
        md: "0.938rem",
        ss: "0.813rem",
        xxs: "0.75rem",
        "3xs": "0.6875rem",
      },
      width: {
        22: "5.75rem",
      },
      height: {
        21: "5.325rem",
      },
      maxWidth: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
      minWidth: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
      minHeight: {
        inherit: "inherit",
      },
      flex: {
        75: "0 0 75px",
        85: "0 0 85px",
      },
      boxShadow: {
        bottom: "0 2px 0 0 rgba(0, 0, 0, 0.05)",
        inner: "0 0 0 1000px rgba(255, 255, 255, 1) inset",
      },
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRowStart: {
        10: "10",
      },
      gridRowEnd: {
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-focus"],
      maxHeight: ["group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
}
