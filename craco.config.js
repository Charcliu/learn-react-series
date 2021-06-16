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
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: '@tencent/tsign-component-library', // 转换组件库的名字
          libraryDirectory: 'dist/components', // 转换的路径
          camel2DashComponentName: false, // 设置为 false 来阻止组件名称的转换
        },
      ],
    ],
  },
};
