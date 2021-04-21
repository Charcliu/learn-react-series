import React from 'react';

const ThemeContext = React.createContext('light');
export default function Context() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton></ThemedButton>
    </div>
  );
}

function ThemedButton() {
  return <button>{123}</button>;
}
