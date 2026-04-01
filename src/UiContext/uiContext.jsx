import { createContext, useContext, useReducer, useState } from "react";
import { cities } from "../assets/cities";
import { uiInitialState } from "./uiInitialState";
import { uiReducer } from "./UIReducer";
const uiContext = createContext(null);

export function UiProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, uiInitialState);
  const [newData, setNewData] = useState(cities);
  const handleRemove = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };
  const value = { state, dispatch, handleRemove, newData, setNewData };

  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
}

export const useUi = () => {
  const context = useContext(uiContext); // gli lego il context
  if (!context)
    throw new Error("useUi va utilizzato dentro al contesto uiProvider");
  return context;
};
