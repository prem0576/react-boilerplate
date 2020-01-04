// babel.config.js
const presets = [
  [
    '@babel/preset-env',
    {
      // Pass a config object to the preset
      debug: true, // Output the targets/plugins used when compiling
      // configure how @babel/preset-env handles pollyfills from core-js
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-react',
];

const plugins = ['@babel/plugin-proposal-class-properties'];

// Exports a config object
module.exports = { presets, plugins };

// use: {
//   loader: 'babel-loader',
//   options: {
//     presets: [
//       [
//         '@babel/preset-env',
//         {
//           debug: true,
//           useBuiltIns: 'usage',
//           corejs: 3,
//         },
//       ],
//       '@babel/preset-react',
//     ],
//   },
// },
