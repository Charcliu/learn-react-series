### Refs转发

转发父组件Ref到其子组件的方式，返回React组件。**（相当于给传入React.createRef的React组件透传ref属性，并返回一个React组件）**

- 创建ref

```javascript
export default function Index() {
  // 创建Ref
  const ref = React.createRef<HTMLInputElement>();

  useEffect(() => {
    console.log(ref.current);
    ref.current?.focus();
  }, [ref]);

  return <RefInput ref={ref}></RefInput>;
}
```

- 通过forWardRef转发

```javascript
// 通过React.forWardRef转发
// eslint-disable-next-line react/display-name
const RefInput = React.forwardRef((props, ref) => <MyInput myRef={ref}></MyInput>);
```

- 获取父组件传递的ref

```javascript
// 获取父组件传递的Ref
function MyInput(props: any) {
  const { myRef } = props;
  return <input ref={myRef} />;
}
```

**注意**

ref和key一样不能通过props传递下去，只有在React.forwardRef定义组件时存在。