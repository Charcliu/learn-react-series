### 高阶组件

高阶组件主要是React用于复用组件逻辑，基于React组合特性而形成的一种**设计模式**。

**高阶组件 = (入参 : 组件) => { 返回 : 新组件 }**

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

- 举例

```javascript
import React from 'react';

/**
 * 高阶组件
 * @param WarpComponent
 * @returns
 */
function logProps(WarpComponent: any) {
  class LogProps extends React.Component<any> {
    componentDidUpdate(prevProps: any) {
      console.log('old props', prevProps);
      console.log('new props', this.props);
    }
    render() {
      return <WarpComponent {...this.props}></WarpComponent>;
    }
  }
  return LogProps;
}

export default logProps;

/**
 * 使用
 * @param props
 * @returns
 */
function ChildComp(props: any) {
  const { name } = props;
  return <h1>{name}</h1>;
}

const HOCChildComp = LogProps(ChildComp);
```

#### 约定

- HOC透传与自身无关的Props给包裹组件

```javascript
render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
  const { extraProp, ...passThroughProps } = this.props;

  // 将 props 注入到被包装的组件中。
  // 通常为 state 的值或者实例方法。
  const injectedProp = someStateOrInstanceMethod;

  // 将 props 传递给被包装组件
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

- 最大化可组合行（高阶函数）

```javascript
// 而不是这样...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... 你可以编写组合工具函数
// compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```

- 设置HOC名称以便调试

```javascript
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```

#### 注意事项

- 不要在render方法中使用HOC

```javascript
render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}
```

**组件外创建HOC，每次只会创建一次，每次render都是同一个组件，符合预期。**

- Refs不会被传递

**ref和key一样，并不是一个prop，添加ref到返回的组件中，则ref引用指向容器组件，而不是包裹组件。**

***可以通过React.forwardRef进行转发***

- 复制静态方法

包裹组件定义静态方法，当HOC作用于包裹组件时，新组件不会有包裹组件的任何静态方法

```javascript
// 解决方法1 HOC返回新组件前，手动拷贝方法到HOC组件上
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // 必须准确知道应该拷贝哪些方法 :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}

// 解决方法2 使用 hoist-non-react-statics 库自动拷贝所有非 React 静态方法
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```