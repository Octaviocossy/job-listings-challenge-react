module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'dot-notation': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'es5',
        singleQuote: true,
        endOfLine: 'auto',
        tabWidth: 2,
        semi: true,
      },
    ],
  },
};
