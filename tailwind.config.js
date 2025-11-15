// tailwind.config.js
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        moresugar: ["var(--font-more-sugar)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
