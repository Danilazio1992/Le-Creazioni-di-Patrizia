import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useUi } from "../UiContext/uiContext";
import { useCart } from "../cartContext/cartContex";

function TopBar() {
  const { dispatch: uiDispatch } = useUi();
  const {itemTotalCartQty}= useCart()
  return (
    <div className="flex flex-row justify-between h-34 w-full bg-gradient-to-b from-amber-900/90 to-amber-50/10 ">
      <ul className="flex flex-row justify-items-end p-2 gap-2">
        <NavLink to="/">
          <img className="h-full flex" src={logo} alt="" />
        </NavLink>
        <NavLink className="btn-topbar" to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="btn-topbar" to="/Product">
          <li>prodotti</li>
        </NavLink>
        <NavLink className="btn-topbar" to="/chisiamo">
          <li>chi siamo?</li>
        </NavLink>
        <li
          onClick={() => uiDispatch({ type: "openSideBar" })}
          className="btn-topbar"
        >
          {" "}
          contatti
        </li>
      </ul>
      <ul className="flex flex-row p-2 gap-4 items-center justify-center text-center">
        <li className="btn-topbar">Registrati</li>
        <NavLink to="/Login">
          <li className="btn-topbar">Accedi</li>
        </NavLink>
        <NavLink className="flex" to="/cart">
        <div className="flex relative group">          
          <IoMdCart className=" hover:text-amber-950 text-2xl" />
          <p className="flex justify-center items-center text-center rounded-full text-[0.70rem] p-1 h-[1rem] w-[1rem] bg-red-900 absolute right-[-0.4rem] top-[-0.4rem] ">{itemTotalCartQty}</p>
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
