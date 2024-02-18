/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "matteBlack": {
          "50": "#e9e9e9",
          "100": "#d3d2d2",
          "200": "#a6a5a6",
          "300": "#7a7979",
          "400": "#4d4c4d",
          "500": "#211f20",
          "600": "#1a191a",
          "700": "#141313",
          "800": "#0d0c0d",
          "900": "#070606"
        },
        "slime": {
          "50": "#f3faf0",
          "100": "#e8f4e0",
          "200": "#d0e9c1",
          "300": "#b9dea3",
          "400": "#a1d384",
          "500": "#8ac865",
          "600": "#6ea051",
          "700": "#53783d",
          "800": "#375028",
          "900": "#1c2814"
      },
      "coral": {
        "50": "#fdf4f0",
        "100": "#fbe8e1",
        "200": "#f7d1c3",
        "300": "#f3bba5",
        "400": "#efa487",
        "500": "#eb8d69",
        "600": "#bc7154",
        "700": "#8d553f",
        "800": "#5e382a",
        "900": "#2f1c15"
      },
      "purp": {
        "50": "#f3f3f9",
        "100": "#e7e8f3",
        "200": "#ced1e8",
        "300": "#b6b9dc",
        "400": "#9da2d1",
        "500": "#858bc5",
        "600": "#6a6f9e",
        "700": "#505376",
        "800": "#35384f",
        "900": "#1b1c27"
      },
      "sol": {
        "50": "#fffbee",
        "100": "#fef7dc",
        "200": "#fef0b9",
        "300": "#fde896",
        "400": "#fde173",
        "500": "#fcd950",
        "600": "#caae40",
        "700": "#978230",
        "800": "#655720",
        "900": "#322b10"
      },
      fontFamily: {
        'romancial': ['Romancial', 'fallback', 'sans-serif'],
        'cruiser': ['Cruicer', 'fallback', 'sans-serif'],
        'chicle': ['Chicle', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")]
}
}