import React, { createContext } from "react";
import { ContextType } from "./types";

export const GlobalContext = createContext<ContextType | null>(null)

interface Props {
    children: React.ReactNode
    value: ContextType
}

function GlobalContextProvider({ children, value }: Props) {
    console.log("Context: ", value);
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;
