import { useCart } from "../cartContext/cartContex";
import CartProduct from "../Components/CartProduct";
import { useUi } from "../UiContext/uiContext";

function CartTemplate() {
  const { newData } = useUi();
  const { state: cartState } = useCart();
  const map = new Map(newData.map((p) => [p.id, p]));

  const handlePrint = () => {
    if (!cartState.products?.length) {
      console.log("non ci sono prodotti nel carrello");
      return;
    } else {
      const result = cartState.products.map((prod) =>
        newData.find((el) => prod.id === el.id),
      );
      console.log(cartState.products, "sono i prodotti nel carrello");
      console.log(result);
      return;
    }
  };
  // prodotti aggiunti nel carrello creo mappa cosi è piu veloce meno check ogni volta faccio il get tramite l'id fornito
  // poi una guard in caso valore falsy evito l'errore, e poi spreddo il prodotto trovato e ci aggiungo cartQTY
  // e poi metto un filter con valore Boolean cosi ritorna solo i valori thruty
  const cartFull = cartState.products
    .map((item) => {
      const product = map.get(item.id);
      if (!product) return null;

      return {
        ...product,
        cartQty: item.qty,
      };
    })
    .filter(Boolean);

  const cartTotal = cartFull.reduce((acc, product) => {
  return acc + product.price * product.cartQty;
}, 0);

  
  return (
    <div className=" flex flex-col w-screen min-h-96 items-center p-2">
      <nav className="flex flex-col w-[85%] h-fit p-2">
        <ul className="flex flex-row gap-2 uppercase font-extrabold text-amber-950 justify-around">
          <li className="flex w-1/5 justify-center">prodotto</li>
          <li className="flex w-1/5 justify-center"> Descrizione </li>
          <li className="flex w-1/5 justify-center">price</li>
          <li className="flex w-1/5 justify-center">qty</li>
          <li className="flex w-1/5 justify-center">total</li>
        </ul>
        <hr className="flex border border-amber-900 w-full"></hr>
      </nav>
        {cartFull.map((prod) => (
      <section className="flex flex-row p-2 bg-amber-100/50 w-[85%] h-40 gap-2 items-center justify-around text-amber-950">
          <CartProduct key={prod.id} product={prod} />
      </section>
        ))}
      <button
        onClick={() => handlePrint()}
        className="flex justify-center text-center p-4 bg-amber-200 text-amber-900 rounded-lg cursor-pointer"
      >
        stamp
      </button>
      <div className="flex p-2 text-2xl font-extrabold bg-amber-100 text-amber-950 rounded-md flex-col justify-center items-center text-center">
        <h2>Totale</h2>
        <p>{cartTotal.toFixed(2)}€</p>
      </div>
    </div>
  );
}

export default CartTemplate;