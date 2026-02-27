import { useState } from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { cities } from "./assets/cities";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
function App() {
  const [newData, setNewData] = useState(cities);
  const [idHovered, setIdHovered] = useState(null);
  const [hovered, setHovered] = useState(false);

  /*
  const handleRemove = (id) => {
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };

  useEffect(() => {
    const spotTimer = setTimeout(() => dispatch({ type: "spot" }), 10000);
    return () => clearTimeout(spotTimer);
  }, []);
 */
  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      {/* {state.isModal && (
        <Modal dispatch={dispatch} setNewData={setNewData} state={state} />
      )} */}
      <TopBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
