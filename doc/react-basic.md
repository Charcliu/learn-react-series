# React 基础

### 组件和Props

- 组件名称必须大写字母开头
- 组件的Props不能被更改

### State和生命周期

- 不可直接修改State，应该使用setState
- State异步

```javascript
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

- 多个State 只set其中一个State时，State更新会合并
- 数据向下流动

### 事件处理

- React事件采用小驼峰命名
- JSX语法需要传入一个函数作为事件处理函数，而不是字符串

```html
<!-- 传统HTML -->
<button onclick="activateLasers()">
  Activate Lasers
</button>

<!-- React -->
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

- 不能通过返回false阻止默认行为，必须显示调用preventDefault

```javascript
<!-- 传统HTML -->
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

// React
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

### 条件渲染

- 元素变量
- && 运算符
- 三目运算符
- 阻止组件渲染 render方法返回null

### 列表 && Key

- map
- key作为属性不会传递给组件，只会传递给React，如果需要传递，可以用其他的值代替

### 表单

- 受控组件

### 状态提升

### 组合 vs 继承

- 包含关系 

### 代码分割

- React.Lazy and Suspense
- Loadable Components