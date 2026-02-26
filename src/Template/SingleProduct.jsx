function SingleProduct() {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex w-[90%] justify-center bg-amber-50 text-amber-950">
        <div className="flex flex-row h-96 p-2 gap-0.5 items-center">
          <div className="flex aspect-square h-full bg-amber-300 items-center justify-center rounded-md">
            MAIN immagine
          </div>
          <div className="flex bg-amber-200 w-fit justify-center h-full rounded-md">
            <ul className="flex flex-col justify-between h-full w-full ">
              <li className="flex aspect-square p-2 bg-blue-200 rounded-md justify-center items-center ">
                immagine
              </li>
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
        <div className="bg-red-700/50 w-full">scheda Tecnica</div>
      </div>
    </div>
  );
}

export default SingleProduct;
