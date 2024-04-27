import React, { createContext, useContext } from "react";

const ThemesContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
})
export const ThemesProvider = ThemesContext.Provider

export default function useTheme(){
    return useContext(ThemesContext)
}