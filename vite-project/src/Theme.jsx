import React, { createContext, useContext, useState } from 'react';

const ChangeThemeContext = createContext();

export function ThemeChanger({ children }) {
  const [AlterTheme, setAlterTheme] = useState(false);

  const changeTheme = () => {
    setAlterTheme((oldTheme) => !oldTheme);
  };

  return (
    <ChangeThemeContext.Provider value={{ AlterTheme, changeTheme }}>
      {children}
    </ChangeThemeContext.Provider>
  );
}

export function useBlackTheme() {
  return useContext(ChangeThemeContext);
}
