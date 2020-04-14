const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.find(rule =>
    rule.test.test('.svg')
  ).exclude = path.resolve(__dirname, '../src/');

  config.module.rules.push({
    test: /.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false
            }
          }
        }
      },
      'url-loader'
    ]
  });

  return config;
};
