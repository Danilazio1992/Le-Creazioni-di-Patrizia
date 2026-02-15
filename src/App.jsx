import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { cities } from "./assets/cities";
import CityCard from "./Components/CityCard";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import SlideShow from "./Components/SlideShow";
import TopBar from "./Components/TopBar";

function App() {
  const [newData, setNewData] = useState(cities);
  const [idHovered, setIdHovered] = useState(null);
  const [hovered, setHovered] = useState(false);

  const initialState = {
    newData: cities,
    idHovered: null,
    hovered: false,
    isModal: false,
    modalContent: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "openModal":
        console.log("apro modale");
        return { ...state, isModal: true };
      case "closeModal":
        return { ...state, isModal: false, modalContent: null };
      case "spot":
        return { ...state, isModal: true, modalContent: "Spot" };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRemove = (id) => {
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };

  useEffect(() => {
    const spotTimer = setTimeout(() => dispatch({ type: "spot" }), 10000);
    return () => clearTimeout(spotTimer);
  }, []);

  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      {state.isModal && (
        <Modal dispatch={dispatch} setNewData={setNewData} state={state} />
      )}
      <TopBar dispatch={dispatch} />
      {/* <SideBar /> */}

      <div className="flex flex-wrap gap-4 p-4 w-full justify-center ">
        {newData
          .filter((el, i) => i < 10)
          .map((city) => (
            <CityCard
              city={city}
              key={city.id}
              handleRemove={handleRemove}
              hovered={hovered}
              setHovered={setHovered}
              idHovered={idHovered}
              setIdHovered={setIdHovered}
            />
          ))}
      </div>
      <SlideShow />
      <Dropdown />

      <Footer />
    </div>
  );
}

export default App;
