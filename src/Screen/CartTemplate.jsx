import { useEffect, useState } from "react";
import { TiMinus, TiPlus, TiTrash } from "react-icons/ti";
function CartTemplate() {
  let productPrice = 20.19;
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(qty * productPrice);
  const handleAddQty = () => {
    setQty((prev) => prev + 1);
  };
  const handleLessQty = () => {
    if (qty <= 1) {
      return;
    } else {
      setQty((prev) => prev - 1);
    }
  };
  useEffect(() => {
    setTotal(qty * productPrice);
  }, [qty]);

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
      <section className="flex flex-row p-2 bg-amber-100/50 w-[85%] h-40 gap-2 items-center justify-around text-amber-950">
        <div className="flex w-1/5 justify-center">
          <div className="flex w-28 h-28 aspect-square bg-amber-950"></div>
        </div>
        <div className="flex w-1/5 justify-center"> descrizione prodotto </div>
        <div className="flex w-1/5 justify-center"> {productPrice}€ </div>
        <div className="flex w-1/5 items-center gap-2 justify-center">
          <TiPlus
            onClick={() => setQty((prev) => prev + 1)}
            className=" text-green-700 cursor-pointer hover:bg-amber-950/10 rounded-2xl transition-transform hover:translate-y-[-0.5px]"
          />
          {qty}
          <TiMinus
            onClick={() => handleLessQty()}
            className=" text-red-900 cursor-pointer hover:bg-amber-950/10 rounded-2xl transition-transform hover:translate-y-[-0.5px]"
          />
        </div>
        <div className="flex w-1/5 justify-center">
          {total.toFixed(2)}€{" "}
          <TiTrash className="flex text-2xl w-1/5 justify-center" />
        </div>
      </section>
    </div>
  );
}

export default CartTemplate;
