import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function TopBar({ dispatch }) {
  return (
    <div className="flex flex-row justify-between h-34 w-full bg-gradient-to-b from-amber-900/90 to-amber-50/10 ">
      <ul className="flex flex-row justify-items-end p-2 gap-2">
        <NavLink to="/">
          <img className="h-full flex" src={logo} alt="" />
        </NavLink>
        <li
          className="btn-topbar"
          onClick={() => dispatch({ type: "openModal" })}
        >
          Home
        </li>
        <li
          className="btn-topbar"
          onClick={() => dispatch({ type: "openSideBar" })}
        >
          prodotti
        </li>
        <NavLink to="/Product">
          <li className="btn-topbar">chi siamo?</li>
        </NavLink>
        <li className="btn-topbar"> contatti</li>
      </ul>
      <ul className="flex flex-row p-2 gap-4 items-center justify-center text-center">
        <li className="btn-topbar">Registrati</li>
        <li className="btn-topbar">Accedi</li>
      </ul>
    </div>
  );
}

export default TopBar;
