### 性能优化

- 使用生产版本发布应用

如果使用CRA创建工程，直接通过yarn build即可获得生产版本

- 虚拟化列表

长列表在有限时间内只渲染有限内容 [react-window](https://react-window.vercel.app/#/examples/list/fixed-size)

- 避免重新渲染

1. shouldComponentUpdate 自定义判断是否更新
2. 继承PureComponent React进行浅比较决定是否更新