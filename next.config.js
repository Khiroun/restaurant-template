/** @type {import('next').NextConfig} */
const CompressionPlugin = require("compression-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  webpack: function (config) {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
      })
    );

    return config;
  },
  ...nextConfig,
};
