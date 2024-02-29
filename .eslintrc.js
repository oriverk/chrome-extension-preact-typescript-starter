module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['preact', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 1,
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"]
  },
};
