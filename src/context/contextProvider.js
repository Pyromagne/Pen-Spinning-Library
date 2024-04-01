import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isHome, setIsHome] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= 768 && window.innerHeight <= 1024
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768 && window.innerHeight <= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StateContext.Provider
            value={{
                isHome,
                setIsHome,
                isMobile
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);