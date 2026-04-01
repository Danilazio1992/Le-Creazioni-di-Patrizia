function CartProduct({ qty, id }) {
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
    setTotal(qty * price);
  }, [qty]);

  return (
    <>
      <div className="flex w-1/5 justify-center">
        <div className="flex w-28 h-28 aspect-square bg-amber-950"></div>
      </div>
      <div className="flex w-1/5 justify-center"> descrizione prodotto </div>
      <div className="flex w-1/5 justify-center"> {price}€ </div>
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
    </>
  );
}

export default CartProduct;
