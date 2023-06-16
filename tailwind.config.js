/** @type {import('tailwindcss').Config} */
module.exports = {
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
                primary: "#F8C957",
                primaryHover: "#e0af3c",
                secondary: "#34495E",
                secondaryHover: "#213244",
                danger: "#FF6464",
                dangerHover: "#c62b2b",
                success: "#59B781",
                successHover: "#3a9660",
                textBlack: "#000014",
                defaultGray: "#B9BEC9",
                disabled: "#DBE2EF",
                badgeGray: "#EDEBEB",
                badgeWhiteGray: "#F9F7F7",
                textBadge: "#595959",
                darkBlue: "#34495E",
                background: "#F2F7FF",
                iceWhite: "#EAF1FF",
                whiteSideBar: "#FFFDFD",
                darkGray: "#1D1D1D",
                whiteGray: "#5F6165",
            },
            backgroundImage: {
                "gradient-login": "linear-gradient(to top, #000000de, #525153cc), url(/img/bg-login.jpg)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
