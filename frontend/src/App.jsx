import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { useUi } from "./UiContext/uiContext";
function App() {
  const { state: uiState, dispatch: uiDispatch } = useUi();

  useEffect(() => {
    const spotTimer = setTimeout(() => uiDispatch({ type: "spot" }), 10000);
    return () => clearTimeout(spotTimer);
  }, []);
  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      <TopBar />
      <SideBar />
      {uiState.isModal && <Modal />}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
