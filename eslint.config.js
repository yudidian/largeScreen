import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    ignores: [
      'public',
      'dist*',
    ],
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
          allowedNames: ['self'], // Allow `const self = this`; `[]` by default
        },
      ],
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      'vue/block-order': ['error', {
        order: ['route', 'script', 'template', 'style'],
      }],
    },
  },
)
