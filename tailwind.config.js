import Flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    Flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    Flowbite.plugin(),
  ],
};
