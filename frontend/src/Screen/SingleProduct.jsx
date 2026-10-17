import { useParams } from "react-router-dom";
import { useUi } from "../UiContext/uiContext";
import { useCart } from "../cartContext/cartContex";

function SingleProduct() {
  const { id } = useParams();
  const { newData } = useUi();
  const city = newData.filter((el) => el.id == id)[0];
  const { addToCart } = useCart();
  return (
    <div className="w-full flex justify-center h-screen">
      <div className=" flex w-[90%] justify-center bg-amber-50 text-amber-950">
        <div className="flex flex-row h-96 p-2 gap-0.5 items-center">
          <div className="flex aspect-square h-full bg-amber-300 items-center justify-center rounded-md">
            <img
              className="flex w-full h-full"
              src={city.imgUrl}
              alt={`${city.name} photo`}
            />
          </div>
          <div className="flex bg-amber-200 w-fit justify-center h-full rounded-md">
            <ul className="flex flex-col justify-between h-full w-full ">
              <li
                className="flex aspect-square p-2 rounded-md justify-center items-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${city.imgUrl})` }}
              ></li>
              <li className="flex aspect-square p-2 bg-blue-200 rounded-md justify-center items-center ">
                immagine
              </li>
              <li className="flex aspect-square p-2 bg-blue-200 rounded-md justify-center items-center ">
                immagine
              </li>
              <li className="flex aspect-square p-2 bg-blue-200 rounded-md justify-center items-center ">
                immagine
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 w-full rounded-md p-2">
          <h2>{city.name}</h2>
          <hr />
          <div>{city.description}</div>
          <button
            onClick={(e) => addToCart(e, city)}
            className="flex p-2 rounded-md bg-amber-50 border border-amber-300 text-amber-950 cursor pointer hover:bg-amber-300"
          >
            Aggiungi Al Carrello
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
