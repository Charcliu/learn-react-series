import React, { useContext, useState } from 'react';
import DynamicContext from './dynamicContext';
import ConsumerContext from './consumerContext';
import MultiContext from './multiContext';

/**
 * 创建Context对象
 * 订阅组件读取最近Provider value值
 * 如果Provider没有匹配到，defaultValue才会生效
 */
const ThemeContext = React.createContext('light');
/**
 * 设置React DevTools中context名称
 */
ThemeContext.displayName = 'React-Context-Section';

export default function Context() {
  const [theme, setTheme] = useState<string>('dark');

  return (
    /**
     * 每个Context返回Provider对象，允许消费组件订阅context的变化
     * Provider接收value属性，传递给消费组件
     * 多个Provider可以嵌套使用
     * Provider value变化，内部所有消费组件都会重新渲染
     */
    <ThemeContext.Provider value={theme}>
      <Toolbar></Toolbar>
      <button
        onClick={() => {
          setTheme(new Date().toLocaleString());
        }}
      >
        Modify Theme
      </button>
      <hr></hr>
      <h6>dynamic change context</h6>
      <DynamicContext></DynamicContext>
      <h6>consumer change context</h6>
      <ConsumerContext></ConsumerContext>
      <h6>multi context</h6>
      <MultiContext></MultiContext>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ClassThemedButton></ClassThemedButton>
      <StaticThemedButton></StaticThemedButton>
      <ConsumerThemedButton></ConsumerThemedButton>
      <HooksThemedButton></HooksThemedButton>
    </div>
  );
}

// Class.contextType
class ClassThemedButton extends React.Component {
  render() {
    return <div>{this.context} use class contextType get value</div>;
  }
}
ClassThemedButton.contextType = ThemeContext;

// static grammer
class StaticThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <div>{this.context} use static grammar get value</div>;
  }
}

// Context.Consumer
function ConsumerThemedButton() {
  /**
   * React组件，订阅context变更
   * 需要函数作为子元素
   * 函数接收当前context 并返回React节点
   */
  return <ThemeContext.Consumer>{value => <div>{value} use Context.Consumer get value</div>}</ThemeContext.Consumer>;
}

// React.Hooks
function HooksThemedButton() {
  const context = useContext(ThemeContext);
  return <div>{context} use hooks of useContext get value</div>;
}
