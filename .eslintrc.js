module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    plugins: ['prettier', 'eslint-plugin-prettier'],
    extends: 'eslint:recommended',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs,html,json}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': ['error', { singleQuote: true, tabWidth: 4 }],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
