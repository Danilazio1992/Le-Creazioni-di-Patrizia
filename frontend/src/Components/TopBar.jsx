import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../cartContext/cartContex";
import { useUi } from "../UiContext/uiContext";

function TopBar() {
  const { dispatch: uiDispatch } = useUi();
  const { itemTotalCartQty } = useCart();
  return (
    <div className="flex flex-row justify-between h-34 w-full bg-gradient-to-b from-amber-900/90 to-amber-50/10 ">
      <ul className="flex flex-row p-2 gap-2 justify-centers text-center">
        <li>
          <NavLink to="/">
            <img className="h-full flex" src={logo} alt="" />
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink className="btn-topbar" to="/">
            Home
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink className="btn-topbar" to="/Product">
            prodotti
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink className="btn-topbar" to="/chisiamo">
            chi siamo?
          </NavLink>
        </li>
        <li className="flex items-center">
          <div
            onClick={() => uiDispatch({ type: "openSideBar" })}
            className="btn-topbar"
          >
            contatti
          </div>
        </li>
        <li className="flex items-center">
          <NavLink /* onClick={() => uiDispatch({ type: "SIGNIN" })} */
            className="btn-topbar"
            to="/account"
          >
            PROVA
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-row p-2 gap-4 items-center justify-center text-center">
        <li className="btn-topbar" onClick={() => uiDispatch({ type: "SPOT" })}>
          Registrati
        </li>
        <li className="btn-topbar">
          <NavLink to="/Login">Accedi</NavLink>
        </li>
        <NavLink className="flex" to="/cart">
          <div className="flex relative group">
            <IoMdCart className=" hover:text-amber-950 text-2xl" />
            <p className="flex justify-center items-center text-center rounded-full text-[0.70rem] p-1 h-[1rem] w-[1rem] bg-red-900 absolute right-[-0.4rem] top-[-0.4rem] ">
              {itemTotalCartQty}
            </p>
            <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg rounded-xl border border-gray-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              {/* CONTENUTO */}
              <div className="p-3 flex flex-col gap-2 text-amber-950">
                <div className="text-sm">Prodotto 1</div>
                <div className="text-sm">Prodotto 2</div>
                <div className="text-sm">Prodotto 3</div>
              </div>
            </div>
          </div>
        </NavLink>
      </ul>
    </div>
  );
}

export default TopBar;
