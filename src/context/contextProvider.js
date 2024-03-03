import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [isHome, setIsHome] = useState(false);

    return (
        <StateContext.Provider
            value={{
                isHome,
                setIsHome,
            }}
        >
            {children}
        </StateContext.Provider>
        );
};

export const useStateContext = () => useContext(StateContext);