/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // app 기반이면 src/app 포함하도록
    ],
    theme: {
        extend: {
            fontFamily: {
                geist: ['var(--font-geist-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
