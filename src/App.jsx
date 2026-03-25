import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { useUi } from "./UiContext/uiContext";
import { useCart } from "./cartContext/cartContex";
function App() {
  const { state: uiState, dispatch: uiDispatch } = useUi();

  useEffect(() => {
    const spotTimer = setTimeout(() => uiDispatch({ type: "spot" }), 10000);
    return () => clearTimeout(spotTimer);
  }, []);
  const { state: cartState, dispatch: cartDispatch } = useCart();
  useEffect(() => console.log(cartState.products), [cartState.products]);
  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      <TopBar />
      <SideBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
