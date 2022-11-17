module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    // https://nextjs.org/docs/basic-features/eslint
    'next/core-web-vitals',

    // https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    // Covered by `next/core-web-vitals`
    // 'plugin:react-hooks/recommended',

    // https://github.com/prettier/eslint-config-prettier
    'plugin:prettier/recommended',
  ],

  plugins: [
    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    '@typescript-eslint',
  ],

  rules: {
    // Stylings
    'linebreak-style': ['error', 'unix'],

    // Cleanliness
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // React Specific
    'react/default-props-match-prop-types': 'error',
    'react/prop-types': 'off',
  },
};
