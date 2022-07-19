const config = {
    content: [
        './content/**/*.md',
        './{templates,static}/**/*.html',
    ],

    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
        function({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],

    mode: 'jit',

    darkMode: 'class',
}

module.exports = config;
