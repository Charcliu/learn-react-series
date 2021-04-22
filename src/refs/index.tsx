import React, { useEffect } from 'react';
import AdvanceComponent from './AdvanceComponent';

export default function Index() {
  // 创建Ref
  const ref = React.createRef<HTMLInputElement>();

  useEffect(() => {
    console.log(ref.current);
    ref.current?.focus();
  }, [ref]);

  return (
    <>
      <RefInput ref={ref}></RefInput>
      <AdvanceComponent></AdvanceComponent>
    </>
  );
}

// 通过React.forWardRef转发
const RefInput = React.forwardRef(function CharcliuForwardRef(props, ref) {
  return <MyInput myRef={ref}></MyInput>;
});

// 获取父组件传递的Ref
function MyInput(props: any) {
  const { myRef } = props;
  return <input ref={myRef} />;
}
