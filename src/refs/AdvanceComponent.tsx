import React, { useEffect } from 'react';

function logProps(WrappedComponent: any) {
  class LogProps extends React.Component<any, any> {
    componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps);
      console.log('new props', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent forwardedRef={forwardedRef} {...rest}></WrappedComponent>;
    }
  }
  return React.forwardRef((props: any, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

class MyInput extends React.Component<any> {
  render() {
    return <input ref={this.props.forwardedRef} />;
  }
}
const HOCMyInput = logProps(MyInput);

export default function Index() {
  // 创建Ref
  const ref = React.createRef();

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return <HOCMyInput ref={ref} label="Click Me"></HOCMyInput>;
}
