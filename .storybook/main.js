var path = require('path');
var toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  presets: [
    {
      name: 'storybook-addon-deps/preset',
      options: {
        exclude: /^@babel/,
      },
    },
  ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.find((rule) => rule.test.test('.svg')).exclude = path.resolve(__dirname, '../src/');

    config.module.rules.push({
      test: /.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: true,
                },
                {
                  removeUselessStrokeAndFill: true,
                },
              ],
            },
          },
        },
        'url-loader',
      ],
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        '@emotion/styled': toPath('node_modules/@emotion/styled'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    };

    return config;
  },
};
