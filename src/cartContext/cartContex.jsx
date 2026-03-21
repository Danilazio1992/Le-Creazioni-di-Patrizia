import { createContext, useContext, useReducer } from "react";
import { cartInitialState } from "./cartInitialState";
import { cartReducer } from "./cartReducer";

const cartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const value = { state, dispatch };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context)
    throw new Error("useCart va utilizzato dentro alc ontesto CartProvider");
  return context;
};
