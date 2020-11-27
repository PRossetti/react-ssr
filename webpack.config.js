const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const enviroment = process.env.NODE_ENV;
const isProduction = enviroment === 'production';
const isDevelopment = enviroment === 'development';

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'public/[name].css',
  }),
  isProduction ? new UglifyJsPlugin() : f => f,
];

const clientConfig = {
  entry: {
    main: './app/client/main.js',
  },
  devtool: isDevelopment ? 'inline-sourcemap' : false,
  mode: enviroment,
  output: {
    path: __dirname,
    filename: 'public/[name].js',
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          chunks: 'initial',
          name: 'vendor',
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins,
};

module.exports = clientConfig;
