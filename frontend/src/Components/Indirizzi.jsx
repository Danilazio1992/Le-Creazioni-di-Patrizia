import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from "../AuthContext/authContext";
function Indirizzi() {
  const { state: authState } = useAuth();
  const indirizziDiFatturazione = authState.user.indirizzi.fatturazione;
  const indirizziDiSpedizione = authState.user.indirizzi.spedizione;
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 w-full h-full">
      {!authState.isAuth ? (
        <p>Accedi per visualizzare i tuoi Indirizzi.</p>
      ) : (
        <div className="flex flex-col w-full h-fit p-2  rounded-xl justify-center gap-2 items-center">
          <div className="flex flex-col w-[80%] bg-amber-950 h-fit rounded-xl p-2 justify-between">
            <div className="flex justify-betweenp-2">
              <h2 className="font-extrabold uppercase p-2">
                Indirizzi di Fatturazione
              </h2>
            </div>
            <div className="w-full h-full flex flex-wrap gap-2">
              {indirizziDiFatturazione.map((billingAddres) => (
                <div className="relative flex flex-col p-2 bg-amber-300/20 h-fit w-fit rounded-2xl">
                  {Object.entries(billingAddres).map(([chiave, valore]) => (
                    <p key={chiave}>{`${chiave.toUpperCase()}: ${valore}`} </p>
                  ))}
                  <button className="absolute top-2 right-2 font-extrabold uppercase p-2 rounded-xl bg-amber-950/80 hover:shadow-sm hover:shadow-amber-950 cursor-pointer hover:bg-amber-100 hover:text-yellow-950">
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
