import { useState, createContext } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };
export default DarkModeContextProvider;
