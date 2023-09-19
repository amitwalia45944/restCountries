import React, { createContext, useContext, useState } from 'react';

const DarkThemeContext = createContext();

export function DarkThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkTheme() {
  return useContext(DarkThemeContext);
}
