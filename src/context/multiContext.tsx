import React, { createContext } from 'react';

const ThemeContext = createContext('light');
const UserContext = createContext({ name: 'Guest' });

export default function MultiContext() {
  return (
    <ThemeContext.Provider value={'light'}>
      <UserContext.Provider value={{ name: 'Guest' }}>
        <Layout></Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return <Content></Content>;
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <h6>
              {theme}, {JSON.stringify(user)}
            </h6>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
