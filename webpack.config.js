const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MediaQuerySplittingPlugin = require('media-query-splitting-plugin');

const rootDir = path.resolve(__dirname, '.');
const PATH_SRC = path.join(__dirname, './src');
const PATH_PUBLIC = path.join(__dirname, './public');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = env => {
  const envKeys = {};
  Object.keys(env).forEach(elm => {
    envKeys[`process.env.${elm}`] = JSON.stringify(env[elm]);
  });
  const { environment } = env;
  // const isProduction = environment === "production";
  const isDevelopment = environment === 'development';
  return {
    context: rootDir,
    mode: environment,
    entry: [path.join(PATH_SRC, './app.js')],
    output: {
      path: PATH_DIST,
      filename: 'js/[name].[hash].js',
    },
    devServer: {
      contentBase: PATH_DIST,
      host: 'localhost',
      port: 8080,
      historyApiFallback: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: { outputPath: 'assets/images/' },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.scss', '.css'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(PATH_PUBLIC, './index.html'),
        minify: {
          removeComments: true,
          collapseWhiteSpace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minfyCSS: true,
          minifyURLs: true,
        },
      }),
      new CopyPlugin([{ from: 'public/assets', to: 'assets' }]),
      new MiniCssExtractPlugin({
        filename: isDevelopment
          ? 'assets/css/[name].css'
          : 'assets/css/[name].[hash].css',
        chunkFilename: isDevelopment
          ? 'assets/css/[id].css'
          : 'assets/css/[id].[hash].css',
      }),
      // new MediaQuerySplittingPlugin({
      //   media: {
      //     mobileEnd: 568,
      //     tabletPortraitEnd: 768,
      //     tabletLandscapeEnd: 1024,
      //   },
      //   splitTablet: true,
      //   minify: true,
      //   units: 'px',
      // }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
