import { useState } from "react";
import { Outlet } from "react-router-dom";
import CityCard from "../Components/CityCard";
import { useUi } from "../UiContext/uiContext";

function ProductList() {
  const { newData } = useUi();
  const [idHovered, setIdHovered] = useState(-1);

  return (
    <div>
      <h2>ProductList</h2>
      <div>
        <h3>category container</h3>
      </div>
      <div>
        <h3>product filtered container</h3>
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
