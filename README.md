# React 及其生态学习

> 本文基于React Version 17.0.2 学习

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

### CRA eslint prettier配置

为什么要配置 eslint、prettier？

- 代码规范、格式检查
- 代码自动格式化
- 统一编码规范
- 等等...

怎么配置？

```javascript
// 1. 安装依赖
/**
 * @typescript-eslint/parser 项目使用 ts 创建，所以需要安装 ts 解析器
 * eslint eslint-plugin-react eslint-plugin-react-hooks 安装 eslint，使项目能够进行语法检查，eslint-plugin-react eslint-plugin-react-hooks分别为eslint插件，能够对react语法和react-hooks语法进行检查
 * prettier eslint-config-prettier eslint-plugin-prettier 安装 prettier，使项目能够进行格式化，eslint-plugin-prettier使prettier作为eslint的插件运行，eslint-config-prettier解决prettier和eslint格式化冲突并以prettier规则为准。
 */
yarn add -D @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
// 2. 创建 eslint 和 prettier 文件
touch .eslintrc.js .prettierrc
// 3. 配置文件
// eslint配置
module.exports = {
  // ts解析器
  parser: '@typescript-eslint/parser',
  // 继承插件推荐检查规则，也可以通过 plugin + rule 自定义规则
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // 自定义规则
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
// prettier配置 主要配置格式化选项
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "semi": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
// 4. 集成vscode
// vscode 安装 eslint和prettier
// vscode 配置
{
  "editor.codeActionsOnSave": {
    // 每次保存的时候将代码按eslint格式进行修复
    "source.fixAll.eslint": true,
    // 老版本语法
    "eslint.autoFixOnSave": true
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false
}
```
完成 eslint prettier vscode配置。