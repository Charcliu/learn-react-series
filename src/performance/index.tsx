import React, { useState, useEffect, useRef } from 'react';

class Component extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  /**
   * 优化渲染，只有在奇数时渲染
   * @param nextProps
   * @param nextState
   * @returns
   * React已经封装好了PureComponent，进行浅比较已决定是否更新渲染
   */
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log('--- start ---');
    console.log(nextProps, nextState);
    console.log('--- end ---');

    if (nextProps.content % 2 !== 0) {
      return true;
    }
    return false;
  }

  render() {
    return <h1>{this.props.content}</h1>;
  }
}

export default function Performance() {
  const [number, setNumber] = useState<number>(1);
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, [number]);

  return (
    <h1>
      <Component content={number}></Component>
    </h1>
  );
}
