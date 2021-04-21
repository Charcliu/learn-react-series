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

