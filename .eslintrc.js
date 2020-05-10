module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', {
      'extensions': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js':  'never',
        'jsx': 'never',
        'ts':  'never',
        'tsx': 'never',
        'mjs': 'never',
      },
    ],
  },
};
