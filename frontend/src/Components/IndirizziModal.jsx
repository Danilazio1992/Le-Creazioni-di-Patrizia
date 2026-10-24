import { useState } from "react";
import { useUi } from "../UiContext/uiContext";
function IndirizziModal() {
  const { state: uiState, dispatch: uiDispatch } = useUi();
  const [address, setAddress] = useState(uiState.address);
  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <div
      className="fixed flex top-0 left-0 z-50 w-full h-full justify-center items-center font-extrabold bg-black/50"
      onClick={() => uiDispatch({ type: "CLOSE_ADDRESS_MODAL" })}
    >
      <div
        className="flex flex-col gap-2 p-2 w-[80%] h-fit bg-gray-500 rounded-2xl shadow-md shadow-grey-50 items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="flex ">
          Modifica Indirizzo di{" "}
          {address.billingId ? "Fatturazione" : "Spedizione"}
        </h2>
        {Object.entries(address).map(([chiave, valore]) => (
          <div className="flex flex-row w-full h-fit justify-between">
            <p className="uppercase">{chiave}: </p>
            <input
              className="flex p-2 border bg-amber-50/50 rounded-2xl"
              type="text"
              name={chiave}
              id={chiave}
              defaultValue={valore}
              onChange={(e) => handleChange(e)}
            />
          </div>
        ))}
        <button
          className="p-2 h-fit w-fit bg-amber-100/50 rounded-md cursor-pointer"
          onClick={(e) => {
            (e.preventDefault(), console.log(uiState.address));
          }}
        >
          {" "}
          Alert{" "}
        </button>
      </div>
    </div>
  );
}

export default IndirizziModal;
