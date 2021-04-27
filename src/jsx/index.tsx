import React from 'react';

/**
 * JSX中使用点语法
 */
const MyComponents = {
  DatePicker: function DatePicker(props: any) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

/**
 * 属性展开
 * @param props
 * @returns
 */
const Button = (props: any) => {
  const { kind, ...other } = props;
  const className = kind === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
  // kind属性安全保留，其他属性通过other传递下去
  return <button className={className} {...other} />;
};

export default function JSX() {
  return (
    <h1>
      <MyComponents.DatePicker color={1 + 2 + 3 + 4}></MyComponents.DatePicker>
      {/* 字符串字面量 */}
      <MyComponents.DatePicker color="blue"></MyComponents.DatePicker>
      <MyComponents.DatePicker color={'blue'}></MyComponents.DatePicker>
      <Button kind="primary" onClick={() => console.log('clicked!')}>
        Hello World!
      </Button>
      {/* start */}
      {/* 布尔类型、Null 以及 Undefined 将会忽略，如需渲染转义为字符串 */}
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>
      {/* end */}
      {/* falsy值显示 */}
      <div>{[].length && <div>{123}</div>}</div>
      {/* 解决falsy值显示 */}
      <div>{[].length > 0 && <div>{123}</div>}</div>
    </h1>
  );
}
