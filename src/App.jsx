import { useEffect, useState } from "react";
import "./App.css";
import { cities } from "./assets/cities";
import CityCard from "./Components/CityCard";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import TopBar from "./Components/TopBar";

function App() {
  const [newData, setNewData] = useState(cities);
  const [idHovered, setIdHovered] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [isModal, setIsModal] = useState(false);

  /* const a = ((e) =>{ 
  setHovered(!hovered)
  setIdHovered(e.currentTarget.id)
  console.log(`idHovered: ${idhovered}`)
  console.log(`event target: ${e.currentTarget.id}`)
}) */
  const handleRemove = (id) => {
    setNewData((prevData) => prevData.filter((el) => el.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react--course-api.herokuapp.com/api/v1/data/gelateria",
        );
        const data = await response.json();
        console.log(data.data);
      } catch (error) {
        console.error("fetch Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full h-full flex-col bg-[#fae5cdc7]">
      {isModal && <Modal setIsModal={setIsModal} setNewData={setNewData} />}
      <TopBar setIsModal={setIsModal} />
      <section className="">
        <div className="flex flex-wrap gap-4 p-4 w-full justify-center ">
          {newData.map((city) => (
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
      </section>
      <div className="flex"></div>
      <Footer />
    </div>
  );
}

export default App;
