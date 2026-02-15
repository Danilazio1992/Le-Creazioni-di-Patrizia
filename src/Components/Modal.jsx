import CreateCardForm from "./CreateCardForm";
function Modal({ dispatch, setNewData, state }) {
  return (
    <div
      className="flex fixed bg-gray-950/40 z-100 h-screen w-screen top-0 left-0 justify-center items-center "
      onClick={() => dispatch({ type: "closeModal" })}
    >
      <div
        className="relative flex flex-col h-[75%] w-[80%] bg-white justify-center shadow-md shadow-amber-900 rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-center text-center absolute top-2">
          <h1 className="w-fit justify-center flex font-extrabold text-amber-950 h-fit p-2 border-2 border-amber-700 bg-amber-300 rounded-lg">
            sono una modale
          </h1>
        </div>
        <button
          className=" bg-amber-300 flex absolute w-fit h-fit p-2 font-extrabold text-amber-950 border-2 border-amber-700 rounded-lg top-2 right-2"
          onClick={() => dispatch({ type: "closeModal" })}
        >
          X
        </button>
        {state.modalContent === "Spot" ? (
          <div className="bg-red-600 w-[80%] h-[80%]">porco dio</div>
        ) : (
          <CreateCardForm setNewData={setNewData} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

export default Modal;
