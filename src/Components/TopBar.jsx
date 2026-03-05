import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {useUi} from "../UiContext/uiContext"
function TopBar() {
  const {dispatch: uiDispatch } = useUi() 
  return (
    <div className="flex flex-row justify-between h-34 w-full bg-gradient-to-b from-amber-900/90 to-amber-50/10 ">
      <ul className="flex flex-row justify-items-end p-2 gap-2">
        <NavLink to="/">
          <img className="h-full flex" src={logo} alt="" />
        </NavLink>
        <li
          className="btn-topbar"
          onClick={() => uiDispatch({ type: "OPEN_MODAL" })}
        >
          Home
        </li>
        <NavLink to="/Product">
          <li
            className="btn-topbar"
          >
            prodotti
          </li>
        </NavLink>
        <NavLink to="/chisiamo">
          <li className="btn-topbar">chi siamo?</li>
        </NavLink>
        <li onClick={() => uiDispatch({ type: "openSideBar" })} className="btn-topbar"> contatti</li>
      </ul>
      <ul className="flex flex-row p-2 gap-4 items-center justify-center text-center">
        <li className="btn-topbar">Registrati</li>
        <NavLink to="/Login">
        <li className="btn-topbar">Accedi</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default TopBar;
