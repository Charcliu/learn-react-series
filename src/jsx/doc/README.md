### JSX

JSX是React.createElement(component, props, ...children)函数的语法糖。

- React 必须在作用域内

```javascript
// 虽然 React 和 CustomButton 并没有被直接使用，但还是需要导入
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```

- JSX中使用点语法

```javascript
const MyComponents = {
  DatePicker: function DatePicker(props: any) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

...
  return (
    <h1>
      <MyComponents.DatePicker color="blue"></MyComponents.DatePicker>
    </h1>
  );
...
```

- 用户自定义组件必须以大写字母开头
- 运行时选择类型

```javascript
// Error
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。
  return <components[props.storyType] story={props.story} />;
}

// Right
function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```


