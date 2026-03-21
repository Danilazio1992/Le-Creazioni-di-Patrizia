import { useState } from "react";
import { Outlet } from "react-router-dom";
import CityCard from "../Components/CityCard";
import { useUi } from "../UiContext/uiContext";

function ProductList() {
  const { newData } = useUi();
  const [idHovered, setIdHovered] = useState(-1);

  return (
    <div className="flex flex-col justify-center text-amber-900">
      <h2 className="flex justify-center">ProductList</h2>
      <ul></ul>
      <div className="flex justify-center">
        <h3>category container</h3>
      </div>
      <h3 className="flex justify-center">product filtered container</h3>
      <div className=" flex flex-col">
        <div className="flex flex-wrap gap-4 p-4 w-full justify-center ">
          {newData
            .filter((el, i) => i < 10)
            .map((city) => (
              <CityCard
                city={city}
                key={city.id}
                idHovered={idHovered}
                setIdHovered={setIdHovered}
              />
            ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProductList;
