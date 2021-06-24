/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { whenProd } = require('@craco/craco');
const CracoAlias = require('craco-alias');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    plugins: [...whenProd(() => [new BundleAnalyzerPlugin()], [])],
  },
};
