### Fragments

我们知道，React Render方法渲染的时候，必须只有一个根组件，在某些时候，我们需要为多个组件包裹一层，满足一个根组件的需求，但是又不能影响代码结构。如下

- 存在问题

```javascript
function Index(){
  return <table>
    <tr>
    </tr>
  </table>
}

// 报错，react render方法不允许存在多个根
function TdItem(){
  return <td>1</td>
  <td>2</td>
}
```

- 尝试解决

```javascript
function Index(){
  return <table>
    <tr>
    </tr>
  </table>
}

// 添加div为根元素，包裹td
function TdItem() {
  return (
    <div>
      <td>1</td>
      <td>2</td>
    </div>
  );
}

// 渲染结果如下，破坏table结构

<table>
  <tr>
    <div>
      <td>1</td>
      <td>2</td>
    </div>
  </tr>
</table>
```

#### 解决

- 方法一 React.Fragment

```javascript
function TdItem() {
  return (
    <React.Fragment>
      <td>1</td>
      <td>2</td>
    </React.Fragment>
  );
}
```

- 方法二 <></>

```javascript
function TdItem() {
  return (
    <>
      <td>1</td>
      <td>2</td>
    </>
  );
}
```

**区别**

<React.Fragment>可以接受key属性，也是唯一可接收的属性。
<></>不支持key或者属性。