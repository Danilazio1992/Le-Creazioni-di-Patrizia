import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext/authContext.jsx";
import { CartProvider } from "./cartContext/cartContex.jsx";
import "./index.css";
import { UiProvider } from "./UiContext/uiContext.jsx";
//BrowserRouter Permette url + navigazione e viene installato da react-router-dom quindi abilita useRoute Link e NavLink Navigate ecc...
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <UiProvider>
            <App />
          </UiProvider>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
