module.exports = {
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta'
    ],
    env: {
      cjs: {
        presets: [
          ['@babel/preset-env', { targets: { node: '8' }, modules: 'commonjs' }]
        ],
        plugins: ['@babel/plugin-transform-destructuring']
      },
      mjs: {
        presets: [
          ['@babel/preset-env', { targets: { esmodules: true }, modules: false }]
        ]
      }
    }
  }
  