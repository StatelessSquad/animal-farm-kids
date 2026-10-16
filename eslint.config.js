import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist', 'node_modules']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parserTs
    },
    plugins: {
      '@typescript-eslint': pluginTs
    }
  },
  ...pluginTs.configs['flat/recommended']
];
