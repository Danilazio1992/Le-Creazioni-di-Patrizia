import { createContext, useContext, useReducer } from "react";
import { cartInitialState } from "./cartInitialState";
import { cartReducer } from "./cartReducer";

const cartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const itemTotalCartQty = state.products.reduce((acc, product) => {
    return acc + product.qty;
  }, 0);
  const addToCart = (e, city) => {
    const exist = state.products.find((el) => el.id === city.id);
    if (exist && exist.qty === city.qtyInStock) {
      alert("Quantità non disponibile in magazzino");
    }
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "ADD_TO_CART", payload: city });
  };

  /*  const productMap = new Map()
  const cartTotal = []
  const cartCount = state.products.reduce((acc,prod) => {
    const product= map.get(prod.id)
    return 
  } ) */
  const value = { state, dispatch, itemTotalCartQty, addToCart };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(cartContext);
  if (!context)
    throw new Error("useCart va utilizzato dentro alc ontesto CartProvider");
  return context;
};
