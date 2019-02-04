module.exports = ({ config }) => {
  // mode has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  if (config.mode === 'DEVELOPMENT') {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    });
  }

  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
      },
      require.resolve('sass-loader')
    ],
  });

  // Return the altered config
  return config;
};
