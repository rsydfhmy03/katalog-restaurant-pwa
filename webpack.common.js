/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    // minimizer: [new TerserPlugin()],
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      // maxSize: 70000,
      maxSize: 250000,
      minChunks: 1,
      maxAsyncRequests: 20,
      maxInitialRequests: 20,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.includes('restaurant-api.dicoding.dev'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'resto-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
      ],
      ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   swDest: './sw.bundle.js',
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ url }) =>
    //         url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'resto',
    //       },
    //     },
    //     {
    //       urlPattern: ({ url }) =>
    //         url.href.startsWith('https://restaurant-api.dicoding.dev/images'),
    //       handler: 'StaleWhileRevalidate',
    //       options: {
    //         cacheName: 'resto',
    //       },
    //     },
    //   ],
    //   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    // }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    // new ImageMinimizerPlugin({
    //   minimizer: {
    //     implementation: ImageMinimizerPlugin.imageminGenerate,
    //     options: {
    //       plugins: [
    //         ['mozjpeg', { quality: 50 }],
    //         ['pngquant', { quality: [0.5, 0.6] }],
    //         ['imagemin-webp', { quality: 50 }],
    //       ],
    //     },
    //   },
    // }),
  ],
};
