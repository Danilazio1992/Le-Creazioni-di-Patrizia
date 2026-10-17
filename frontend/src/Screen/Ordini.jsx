import { useAuth } from "../AuthContext/authContext";
import OrderCards from "../Components/OrderCards";
function Ordini() {
  const { state: authState } = useAuth();
  const orders = authState.user?.orders ?? [];
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 w-full h-full">
      {!authState.isAuth ? (
        <p>Accedi per visualizzare i tuoi ordini.</p>
      ) : orders.length > 0 ? (
        orders.map((orderId) => <OrderCards key={orderId} order={orderId} />)
      ) : (
        <p>Non ci sono ordini.</p>
      )}
      <button
        className="flex p-2 bg-amber-950 h-fit w-fit"
        onClick={() => console.log(orders)}
      >
        logga
      </button>
    </div>
  );
}

export default Ordini;
