import { createContext, useContext, useReducer } from "react";
import { uiInitialState } from "./uiInitialState";
import { uiReducer } from "./UIReducer";
const uiContext = createContext(null);

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, uiInitialState);

  const value = { state, dispatch };

  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
}

export const useUi = () => {
  const context = useContext(uiContext); // gli context è legato
  if (!context)
    throw new Error("useUi va utilizzato dentro al contesto uiProvider");
  return context;
};
