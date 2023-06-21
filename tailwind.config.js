/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          grey: "#D9D9D9",
          blue: "#004AAD",
          red: "#B70404",
          white: "#F9F5F6",
          green: "#20AB4B",
        },
        secondary: {
          grey: "#52616B",
          blue: "#0A84FF",
        },
      },
      backgroundImage: {
        "about-container": "url('/about_header.png')",
      },
    },
  },
  plugins: [],
};
