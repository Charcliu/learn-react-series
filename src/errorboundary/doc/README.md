### 错误边界

错误边界是一种React组件，可以捕获并打印其子组件树的任何位置的JS错误，并渲染备用UI。

**只有Class组件可以成为错误边界组件**

#### 错误边界无法捕获事件处理器内部错误（onClick等）

与render和生命周期方法不同，事件处理不会再组件渲染期间触发。因此，它们抛出异常，React仍然能够知道屏幕显示什么。通常捕获事件处理器错误，我们可以使用try/catch语句。

```Javascript
/**
 * ErrorBoundary 为错误边界组件
 * TriggerError 为正常组件，并在其内部模拟触发错误
 */
<ErrorBoundary>
  <TriggerError></TriggerError>
</ErrorBoundary>

/**
 * 错误边界组件
 * 通过 componentDidCatch 捕获错误 并设置错误信息
 * render方法 根据state值判断渲染正常或异常UI
 */
componentDidCatch(error: any, errorInfo: any) {
  this.setState({
    error: error,
    errorInfo: errorInfo,
  });
}
render() {
  if (this.state.errorInfo) {
    // render error ui
  }
  // Normally, just render children
  return this.props.children;
}
```

#### 错误边界放置位置

- 顶部组件

一旦一个子组件发生错误，整个页面都会渲染为兜底UI

- 包裹单独组件

某些 UI 组件崩溃，其余部分仍然能够交互

**React 16开发，任何未被错误边界捕获的错误将导致整个React组件树被卸载**，翻译过来就是，只要页面发生错误，并且没有设置错误边界进行捕获，整个页面DOM将被清除，展示白屏。