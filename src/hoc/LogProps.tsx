import React from 'react';

/**
 * 高阶组件
 * @param WrappedComponent
 * @returns
 */
function logProps(WrappedComponent: any) {
  class LogProps extends React.Component<any> {
    // 设置HOC名称以便调试
    static displayName: string;

    componentDidUpdate(prevProps: any) {
      console.log('old props', prevProps);
      console.log('new props', this.props);
    }
    render() {
      return <WrappedComponent {...this.props}></WrappedComponent>;
    }
  }

  // 设置HOC名称以便调试
  LogProps.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  return LogProps;
}

// 获取包裹组件名称
function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default logProps;
