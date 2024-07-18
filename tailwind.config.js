/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#141414",
                secondary: "#1e1e1e",
            },
            fontFamily: {
                alphacentauri: ["AlphaCentauri"],
            },
        },
    },
    plugins: [],
};
