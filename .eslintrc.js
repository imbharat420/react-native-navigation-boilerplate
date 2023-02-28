module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-native', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-uses-react': 1,
    'arrow-body-style': ['error'],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
