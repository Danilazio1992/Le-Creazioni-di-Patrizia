import { useAuth } from "../AuthContext/authContext";
import { orders } from "../assets/orders";
function OrderCards({orderId}) {
  const { state: authState } = useAuth();
  let orderFiltered = orders.filter(order => order.id === orderId)[0]
  return (
    <div className="flex flex-col  bg-amber-900/50  w-[90%] h-96  rounded-lg justify-between items-center shadow-md shadow-amber-950">
      <div className="flex justify-between bg-amber-950/70 p-2 w-full rounded-t-lg font-extrabold">
      <p>
      Numero Ordine: {orderFiltered.id}
      </p>
      <p> {orderFiltered.data}</p>
      </div>
      <div className="flex">
        Centro
      </div>
      <div className="flex w-full justify-end p-2">
        <div className="flex flex-col items-center bg-amber-950/70 rounded-lg p-2 font-bold shadow-md shadow-amber-950">
          <p>Totale Ordine</p>
          <p> {orderFiltered.totale}{orderFiltered.valuta}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderCards;
