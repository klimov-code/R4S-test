module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage'
      }
    ]
  ];
  const plugins = ['@babel/transform-runtime'];

  return {
    presets,
    plugins
  };
};
