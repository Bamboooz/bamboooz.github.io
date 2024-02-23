/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,tsx,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#141414",
            },
            fontFamily: {
                "alphacentauri": ["AlphaCentauri"],
            },
            boxShadow: {
                "star": "0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1)",
            },
        },
    },
    plugins: [
        require("tailwindcss-animation-delay"),
    ],
}
