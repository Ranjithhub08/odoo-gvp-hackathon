import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Context files export both components and hooks — downgrade to warn
      'react-refresh/only-export-components': 'warn',
      // react-hooks v7 new rule: setState in effect is a common pattern for hydration
      'react-hooks/set-state-in-effect': 'warn',
      // react-hooks v7 new rule
      'react-hooks/no-deriving-state-in-effects': 'warn',
    },
  },
])
