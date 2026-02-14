import { useReducer, useState } from "react";
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
  const [isModal, setIsModal] = useState(false);

  const initialState = {
    newData: cities,
    idHovered: null,
    hovered: false,
    isModal: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "openModal":
        console.log("apro modale");
        return { ...state, isModal: true };
      case "closeModal":
        return { ...state, isModal: false };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRemove = (id) => {
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };

  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      {state.isModal && <Modal dispatch={dispatch} setNewData={setNewData} />}
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
      <button
        type="button"
        className="btn-topbar"
        onClick={() => dispatch({ type: "openModal" })}
      >
        DIOCANE
      </button>
      <Dropdown />

      <Footer />
    </div>
  );
}

export default App;
