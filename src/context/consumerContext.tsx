import React, { useState } from 'react';

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

const ThemeContext = React.createContext({
  theme: themes.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default function ConsumerContext() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: () => setTheme(theme === themes.dark ? themes.light : themes.dark) }}
    >
      <Content />
    </ThemeContext.Provider>
  );
}
