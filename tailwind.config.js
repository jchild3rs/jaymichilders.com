module.exports = {
  purge: ["src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: `Signika, "Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },

      screens: {
        print: { raw: "print" },
        "light-mode": { raw: "(prefers-color-scheme: light)" },
      },
    },
  },
  variants: {},
  plugins: [],
};
