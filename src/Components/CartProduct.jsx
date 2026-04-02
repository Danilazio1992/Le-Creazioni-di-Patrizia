import { useEffect, useState } from "react";
import { TiMinus, TiPlus, TiTrash } from "react-icons/ti";
import { useCart } from "../cartContext/cartContex";

function CartProduct({ qty, product: { id, price, description, cartQty } }) {
  const { dispatch: cartDispatch } = useCart();
  const [total, setTotal] = useState(qty * price);

  useEffect(() => {
    setTotal(qty * price);
  }, [qty, price]);

  return (
    <>
      <div className="flex w-1/5 justify-center">
        <div className="flex w-28 h-28 aspect-square bg-amber-950"></div>
      </div>
      <div className="flex w-1/5 justify-center"> {description} </div>
      <div className="flex w-1/5 justify-center"> {price}€ </div>
      <div className="flex w-1/5 items-center gap-2 justify-center">
        <TiPlus
          onClick={() => cartDispatch({ type: "INCREMENT_QTY", payload: id })}
          className=" text-green-700 cursor-pointer hover:bg-amber-950/10 rounded-2xl transition-transform hover:translate-y-[-0.5px]"
        />
        {cartQty}
        <TiMinus
          onClick={() => cartDispatch({ type: "DECREMENT_QTY", payload: id })}
          className=" text-red-900 cursor-pointer hover:bg-amber-950/10 rounded-2xl transition-transform hover:translate-y-[-0.5px]"
        />
      </div>
      <div className="flex w-1/5 justify-center">
        {total.toFixed(2)}€{" "}
        <TiTrash className="flex text-2xl w-1/5 justify-center" />
      </div>
    </>
  );
}

export default CartProduct;
