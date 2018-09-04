'use strict';
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var env = process.env.NODE_ENV;
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var reduxExternal = {
  root: 'Redux',
  commonjs2: 'redux',
  commonjs: 'redux',
  amd: 'redux'
};

var reactReduxExternal = {
  root: 'ReactRedux',
  commonjs2: 'react-redux',
  commonjs: 'react-redux',
  amd: 'react-redux'
};

var config = {
  externals: {
    react: reactExternal,
    redux: reduxExternal,
    'react-redux': reactReduxExternal
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader : 'css-loader',
            options:
            {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader : 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader : 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader : 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties",
            ]
          }
        }
      }
    ]
  },
  output: {
    library: 'ReduxStarterUi',
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.chunk.css"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'production') {
  config.mode = 'production';

  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      })
    ]
  };
}

module.exports = config;
