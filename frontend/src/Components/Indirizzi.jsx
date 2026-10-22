import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "../AuthContext/authContext";
function Indirizzi() {
  const { state: authState } = useAuth();
  const indirizziDiFatturazione = authState.user?.indirizzi.fatturazione;
  const indirizziDiSpedizione = authState.user?.indirizzi.spedizione;
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 w-full h-full">
      {!authState.isAuth ? (
        <p>Accedi per visualizzare i tuoi Indirizzi.</p>
      ) : (
        <div className="flex flex-col w-full h-fit p-2  rounded-xl justify-center gap-6 items-center">
          <div className="flex flex-col w-[80%] h-fit rounded-xl justify-between gap-2 bg-amber-900/80 shadow-md shadow-amber-950">
            <div className="flex justify-between  bg-amber-950 rounded-t-xl">
              <h2 className="font-extrabold uppercase p-2">
                Indirizzi di Fatturazione
              </h2>
            </div>
            <div className="w-full h-full flex flex-wrap gap-2 p-2">
              {indirizziDiFatturazione.map((billingAddress, i) => (
                <div key={i} className="relative flex flex-col p-2 bg-amber-200/50 h-fit w-fit rounded-2xl hover:shadow-amber-950 hover:shadow-md">
                  {Object.entries(billingAddress).map(([chiave, valore]) => (
                    <p key={chiave}>{`${chiave.toUpperCase()}: ${valore}`} </p>
                  ))}
                  <button key={"Button "+billingAddress.id} className="absolute top-2 right-2 font-extrabold uppercase p-2 rounded-xl bg-amber-950/80 hover:shadow-sm hover:shadow-amber-950 cursor-pointer hover:bg-amber-100 hover:text-yellow-950">
                    <IoSettingsOutline />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[80%] h-fit rounded-xl justify-between gap-2 bg-amber-900/80 shadow-md shadow-amber-950">
            <div className="flex justify-between  bg-amber-950 rounded-t-xl">
              <h2 className="font-extrabold uppercase p-2">
                Indirizzi di Spedizione
              </h2>
            </div>
            <div className="w-full h-full flex flex-wrap gap-2 p-2">
              {indirizziDiSpedizione.map((shippingAddress, i) => (
                <div key={i} className="relative flex flex-col p-2 bg-amber-200/50 h-fit w-fit rounded-2xl hover:shadow-amber-950 hover:shadow-md">
                  {Object.entries(shippingAddress).map(([chiave, valore]) => (
                    <p key={chiave}>{`${chiave.toUpperCase()}: ${valore}`} </p>
                  ))}
                  <button key={"Button "+shippingAddress.id} className="absolute top-2 right-2 font-extrabold uppercase p-2 rounded-xl bg-amber-950/80 hover:shadow-sm hover:shadow-amber-950 cursor-pointer hover:bg-amber-100 hover:text-yellow-950">
                    <IoSettingsOutline />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={(prev) =>
              console.log(authState.user.indirizzi.fatturazione[0])
            }
            className="justify-center p-2 rounded-2xl bg-amber-950/90 w-fit"
          >
            logga indirizzi
          </button>
        </div>
      )}
    </div>
  );
}

export default Indirizzi;
