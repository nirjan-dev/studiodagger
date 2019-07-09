module.exports = {
  parser: '@typescript-eslint/parser', // specifies the eslint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // allows for parsing modern ecmascript features
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off', // disable prop types as we use typescript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    // overrides some typescript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
