module.exports = function(api) {
  api.cache(true);
  
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.0.0',
        // CMSDS scripts will add this property when compiling for ESM, otherwise will compile in CommonJS
        // modules: false
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
};
