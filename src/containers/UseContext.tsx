// @ts-ignore
// todo add example for useContext from official documentation

import React from 'react';

// Create a Context
export const AppContext = React.createContext({
  authenticated: true,
  lang: 'en',
  theme: 'dark'
});
// It returns an object with 2 values:
// { Provider, Consumer }

export function UseContext() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return <AppContext.Provider value={{
    lang: 'de',
    authenticated: true,
    theme: 'light'
  }}>
    <Header/>
  </AppContext.Provider>
}

const Header = () => {
  return <AppContext.Consumer>
    {
      ({authenticated}) => {
        if (authenticated) {
          return <h1>Logged in!</h1>
        }
        return <h1>You need to sign in</h1>
      }
    }
  </AppContext.Consumer>
}
