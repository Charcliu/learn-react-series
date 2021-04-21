# React Context 章节

### 什么是Context

Context提供无需为每层组件手动添加Props，就能在组件间进行数据传递的方法。

### 使用场景

- 我们都知道React单向数据流，父组件通过Props传递值到子组件，随着应用的复杂度越来越来，嵌套层级越来越多，我们需要每层都传递Props，复杂难以维护
- 项目中一些公共数据的共享，如（登录用户、主题等），我们需要不断地状态提升 + 层层传递才能发满足需求

这个时候Context来帮助我们解决问题了。Context对于订阅它的组件数来讲是一个“全局”数据，不用层层传递，即可在子组件获取共享数据内容。

### 如何使用

可以参考 src/context/index.tsx 中的使用

#### 创建Context

```javascript
/**
 * 创建Context对象
 * 订阅组件读取最近Provider value值
 * 如果Provider没有匹配到，defaultValue才会生效
 */
const ThemeContext = React.createContext('light');
/**
 * 设置React DevTools中context名称
 */
ThemeContext.displayName = 'React-Context-Section';
```

#### 读取Context

四种获取Context内容的方式

- Class组件设置contextType

```javascript
class ClassThemedButton extends React.Component {
  render() {
    return <div>{this.context} use class contextType get value</div>;
  }
}
ClassThemedButton.contextType = ThemeContext;
```

- 通过实验性语法Static获取

```javascript
class StaticThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <div>{this.context} use static grammar get value</div>;
  }
}
```

- Context.consumer获取

```javascript
function ConsumerThemedButton() {
  /**
   * React组件，订阅context变更
   * 需要函数作为子元素
   * 函数接收当前context 并返回React节点
   */
  return <ThemeContext.Consumer>{value => <div>{value} use Context.Consumer get value</div>}</ThemeContext.Consumer>;
}
```

- React Hooks获取

```javascript
// React.Hooks
function HooksThemedButton() {
  const context = useContext(ThemeContext);
  return <div>{context} use hooks of useContext get value</div>;
}
```

