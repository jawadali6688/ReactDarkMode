import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState("light");

  // Function to switch to dark mode


  // Provide the theme and functions to the context
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
