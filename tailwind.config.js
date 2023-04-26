/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#042457",
                    light: "#93C1EE",
                },
                yankess: "#242A39",
                secondary: {
                    DEFAULT: "#FE8F0D",
                    light: "#FEDF9E",
                    lighten: "#FEF1CE",
                    dark: "#DA7009",
                },
                danger: {
                    DEFAULT: "#BB2033",
                    light: "#F8B2A5",
                },
                "dark-silver": "#6D6D6D",
            },
        },
    },
    plugins: [],
};
