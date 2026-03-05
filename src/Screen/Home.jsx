import { Link } from "react-router-dom";
import Modal from "../Components/Modal";
import { useUi } from "../UiContext/uiContext";
import { useAuth } from "../AuthContext/authContext";

function Home() {
  const { state: uiState, dispatch: uiDispatch } = useUi();
  const { state: authState, dispatch: authDispatch } = useAuth()
  return (
    <div className="flex w-full h-96 justify-center items-center">
      <h1 className="flex text-amber-950 font-extrabold text-4xl text-shadow-xl text-shadow-amber-950 p-2">
        Home
      </h1>
      <Link
        to="*"
        className=" flex bg-red-950 rounded-md p-2  hover:bg-amber-600"
      >
        naviga
      </Link>
      {uiState.isModal && <Modal />}
      <button
        className="flex p-2 rounded-md bg-amber-950/50  hover:bg-amber-600 "
        onClick={() => uiDispatch({ type: "OPEN_MODAL" })}
      >
        apri modale
      </button>

      { authState.isAuth &&
      <button
      className="flex p-2 rounded-md bg-amber-950/50  hover:bg-amber-600 "
      onClick={() => console.log(authState)}
      >
        logga state
      </button>
      }
    </div>
  );
}

export default Home;
