### CRA alias 配置
[cra](https://create-react-app.dev/docs/getting-started/)创建项目默认封装好webpack相关配置，本工程使用craco进行webpack配置的修改。

开发过程中避免不了多层级目录，我们需要进行别名配置，使项目易于维护和扩展，避免过长的路径path

- 遇到的坑

```javascript
"compilerOptions": {
  "baseUrl": './src',
  "paths": {
    "@context/*" : ["./context/*"]
  }
}
```
我们直接在tsconfig中配置路径别名，会发现当我们yarn start项目的时候，paths会自动**移除**，让我很崩溃。[CRA导入组件](https://create-react-app.dev/docs/importing-a-component)，文档中只设置了baseUrl，没有说明paths如何配置。通过查阅文档得到结论，cra项目中paths是只读的。所以需要我们曲线救国，使用其他的方式实现。

- 实现

[craco-alias](https://github.com/risenforces/craco-alias)文档中，有标准的实现方式，具体如下

```javascript
// step 1: 安装依赖
yarn add -D craco-alias
// step 2: 创建 tsconfig.paths.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@context/*" : ["./context/*"]
    }
  }
}
// step 3: 修改 tsconfig.json
{
  "compilerOptions": { ... },
  ...
  // 继承 tsconfig.paths.json 中配置的别名
  "extends": "./tsconfig.paths.json",
}
// step 4: 创建&编辑craco.config.js文件 配置 webpack 别名
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // One of "options", "jsconfig", "tsconfig"
        source: 'tsconfig',
        // A base url for aliases.
        baseUrl: './src',
        // 当 source 配置为 tsconfig 时生效，获取 tsconfigPath 路径下配置的别名
        // A path to tsconfig file Only, required when source is set to "tsconfig"
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
```
CRA + craco 配置 alias 完成。

