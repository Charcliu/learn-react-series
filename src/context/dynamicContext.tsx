import React, { useContext, useState } from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(
  themes.dark, // 默认值
);

function ThemedButton(props: any) {
  const theme = useContext(ThemeContext);
  return (
    <button {...props} style={{ backgroundColor: theme.background }}>
      Change Theme
    </button>
  );
}

// 一个使用 ThemedButton 的中间组件
function Toolbar(props: any) {
  return <ThemedButton onClick={props.changeTheme}></ThemedButton>;
}

export default function DynamicContext() {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </>
  );
}
