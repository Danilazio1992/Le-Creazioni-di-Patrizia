import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { cities } from "./assets/cities";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
import { useUi } from "./UiContext/uiContext";
function App() {
  const [newData, setNewData] = useState(cities);
  const { state: uiState, dispatch: uiDispatch } = useUi();

  const handleRemove = (id) => {
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };

  useEffect(() => {
    const spotTimer = setTimeout(() => uiDispatch({ type: "spot" }), 10000);
    return () => clearTimeout(spotTimer);
  }, []);

  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      <TopBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
