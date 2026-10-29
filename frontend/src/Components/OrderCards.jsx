import { orders } from "../assets/orders";
import { useAuth } from "../AuthContext/authContext";
import { useUi } from "../UiContext/uiContext";
function OrderCards({ orderId }) {
  const { state: authState } = useAuth();
  const { newData } = useUi();
  let orderFiltered = orders.filter((order) => order.id === orderId)[0];
  let productsOrdered = orderFiltered.prodotti.map((product) => product.id);
  let productFiltered = productsOrdered.map(
    (el) => newData.filter((serverProduct) => serverProduct.id === el)[0],
  );
  return (
    <div className="flex flex-col  bg-amber-900/50  w-[90%] h-96  rounded-lg justify-between items-center shadow-md shadow-amber-950">
      <div className="flex justify-between bg-amber-950/70 p-2 w-full rounded-t-lg font-extrabold">
        <p>Numero Ordine: {orderFiltered.id}</p>
        <p> Ordine Effettuato il: {orderFiltered.data}</p>
      </div>
      <div className="flex flex-row w-full h-fit gap-2 p-2">
        {productFiltered.map((el) => (
          <img
            className="flex rounded-lg w-[10%]  aspect-square"
            src={el.imgUrl}
            key={el.id}
            alt={`${el.name} photo`}
          />
        ))}
      </div>
      <div className="flex w-full justify-end p-2">
        <div className="flex flex-col items-center bg-amber-950/70 rounded-lg p-2 font-bold shadow-md shadow-amber-950">
          <p>Totale Ordine</p>
          <p>
            {orderFiltered.totale}
            {orderFiltered.valuta}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCards;
