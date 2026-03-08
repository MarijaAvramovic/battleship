module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' },
      modules: 'commonjs',          // ← Change to this! Forces require/exports, which Jest loves
      // OR keep 'false' but add force plugins below if still broken
    }]
  ],
  // Optional: explicitly force destructuring transform if preset-env skips it (rare, but happens in ESM weirdness)
  plugins: [
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-parameters'  // helps with param destructuring
  ]
};
 