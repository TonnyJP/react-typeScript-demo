import React from "react";
import { theme } from "./theme";

export const ThemeContext = React.createContext(theme);

type  ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContextProvider: React.FC<React.PropsWithChildren<ThemeContextProviderProps>> = ({children}) => {

    return <ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>
}