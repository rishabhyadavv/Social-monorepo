const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
require('dotenv').config();

module.exports = function override(config, env) {
  if (!config.devServer) {
    config.devServer = {};
  }

  config.devServer.allowedHosts = ['localhost'];
  config.devServer.static = {
    directory: path.join(__dirname, 'public'),
  };
  config.devServer.compress = true;
  config.devServer.port = 3000; // Ensure this port matches your desired port

  config.devServer.https = {
    key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt')),
  };

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src', 'components'), // Alias for the components folder
      '@enums': path.resolve(__dirname, 'src', 'enums'), // Alias for the enums folder
      '@styles': path.resolve(__dirname, 'src', 'styles'),

    }
  };

  config.plugins = [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ];

  return config;
};
