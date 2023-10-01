module.exports = {
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        'postcss-preset-env': {
            features: { 'nesting-rules': false },
        },
    },
}
