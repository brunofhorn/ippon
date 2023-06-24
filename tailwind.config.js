/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                bodyShadow: "0px 0px 24px rgba(52, 73, 94, 0.1)",
            },
            fontFamily: {
                nunito: ["Nunito", "cursive"],
            },
            fontSize: {
                xxs: "0.625rem",
            },
            colors: {
                primary: "#34495E",
                primary_hover: "#203347",
                secondary: "#F8C957",
                secondary_hover: "#dbb253",
                black: "#000000",
                black_two: "#1D1D1D",
                black_three: "#595959",
                black_four: "#000014",
                gray: "#969AA3",
                gray_two: "#B9BEC9",
                gray_three: "#DBE2EF",
                gray_four: "#EAF1FF",
                gray_five: "#F2F7FF",
                gray_six: "#5F6165",
                white: "#FFFFFF",
                white_two: "#EDEBEB",
                white_three: "#F9F7F7",
                white_four: "#FFFDFD",
                info: "#95BBED",
                success: "#59B781",
                success_hover: "#3f9663",
                warning: "#F0C268",
                error: "#FF6464",
                error_hover: "#d65353",
            },
            backgroundImage: {
                "gradient-login": "linear-gradient(to top, #000000de, #525153cc), url(/img/bg-login.jpg)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
});
