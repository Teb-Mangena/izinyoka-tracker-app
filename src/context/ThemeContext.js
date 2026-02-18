import React, { createContext, useState, useContext } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Detect system preference initially
  const systemPref = Appearance.getColorScheme() === "dark";

  const [darkMode, setDarkMode] = useState(systemPref);

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = {
    darkMode,
    colors: darkMode
      ? {
          background: "#121212",
          text: "#ffffff",
          card: "#1e1e1e",
          primary: "#bb86fc",
        }
      : {
          background: "#f5f5f5",
          text: "#000000",
          card: "#ffffff",
          primary: "#0066cc",
        },
    toggleTheme,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
