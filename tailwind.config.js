/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // BGRM Supply Stock theme — https://stock.bgrmsupply.com
      colors: {
        ink: "#0A0A0C", // near-black page background
        pink: {
          DEFAULT: "#ED2190", // primary accent — buttons, links, highlights
          dark: "#D01A7D", // hover state
          light: "#F5C9E0", // soft pink (borders, input focus)
          soft: "#FFE0DC", // error / soft tint
        },
        cyan: {
          DEFAULT: "#67C9D6", // secondary accent — eyebrows, gradient divider
        },
        muted: "#7C6672", // muted grey-mauve text
        body: "#231F20", // body text on white panels
        panel: "#FFFFFF", // white panels
      },
      fontFamily: {
        display: ["'Baloo 2'", "Nunito", "system-ui", "sans-serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 20px 60px rgba(0, 0, 0, 0.45)",
        glowPink: "0 0 40px rgba(237, 33, 144, 0.35)",
        glowCyan: "0 0 40px rgba(103, 201, 214, 0.25)",
      },
    },
  },
  plugins: [],
};
