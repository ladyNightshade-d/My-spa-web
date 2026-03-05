import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  // Visitor name is shared across pages
  const [visitorName, setVisitorName] = useState("Guest");

  return (
    <AppContext.Provider value={{ visitorName, setVisitorName }}>
      {children}
    </AppContext.Provider>
  );
}