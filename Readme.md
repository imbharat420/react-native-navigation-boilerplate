-   yarn add -D prettier eslint-plugin-react eslint-plugin-prettier eslint-config-prettier eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest
-   yarn add -D typescript @types/react @types/react-native
-   yarn add -D eslint-plugin-import
-   yarn add -D babel-plugin-module-resolver

`.eslintrc.js`
```js
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
```

`tsconfig.json`
```json
{
  "extends": "@tsconfig/react-native/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@styles/*": ["src/styles/*"],
      "@components/*": ["src/components*"],
      "@screens/*": ["src/screens/*"],
      "@svg/*": ["src/assets/svg/*"],
      "@img/*": ["src/assets/img/*"],
      "@utils/*": ["src/utils/*"],
      "@hooks/*": ["src/hooks/*"],
      "@store/*": ["src/store/*"],
    },
    "resolveJsonModule": true
  }
}
```


`babel.config.js`
```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@styles': './src/styles',
          '@svg': './src/assets/svg',
          '@img': './src/assets/img',
        },
      },
    ],
  ],
};
```

-   yarn add -D husky lint-staged
-   yarn husky add .husky/pre-commit "yarn lint”
-   yarn add -D @commitlint/cli @commitlint/config-conventional


 `commitlint.config.js`
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', 
        'ci', 
        'docs',
        'feat',
        'fix', 

        'perf', 
        'refactor', 
        'revert', 
        'style', 
        'test', 
      ],
    ],
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
```