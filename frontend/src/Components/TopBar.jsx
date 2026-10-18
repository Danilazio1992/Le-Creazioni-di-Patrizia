import { IoMdCart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../cartContext/cartContex";
import { useUi } from "../UiContext/uiContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Prodotti" },
  { to: "/chisiamo", label: "Chi siamo" },
  { to: "/account/mainSection", label: "Account" },
];
const linkStyle =
  "inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#fae5cd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800";

function TopBar() {
  const { dispatch: uiDispatch } = useUi();
  const { itemTotalCartQty } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-900/10 bg-[#fff8f1] text-amber-950 shadow-[0_4px_24px_rgba(69,26,3,0.05)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-1 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          aria-label="Le Creazioni di Patrizia - Home"
          className="shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800"
        >
          <img
            className="h-20 w-36 object-contain sm:h-24 sm:w-44"
            src={logo}
            alt="Le Creazioni di Patrizia"
          />
        </NavLink>
        <nav
          aria-label="Navigazione principale"
          className="order-3 w-full border-t border-amber-900/10 pt-2 xl:order-0 xl:w-auto xl:border-0 xl:pt-0"
        >
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `${linkStyle} ${isActive ? "bg-[#fae5cd] text-amber-950" : "text-amber-950/75"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => uiDispatch({ type: "openSideBar" })}
                className={`${linkStyle} cursor-pointer text-amber-950/75`}
              >
                Contatti
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <NavLink to="/Login" className={`${linkStyle} hidden sm:inline-flex`}>
            Accedi
          </NavLink>
          <button
            type="button"
            onClick={() => uiDispatch({ type: "SPOT" })}
            className="group inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-full bg-amber-950 px-5 py-3 text-sm font-bold text-[#fff8f1] shadow-md shadow-amber-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-900 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800 motion-reduce:transform-none"
          >
            Registrati
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              &rarr;
            </span>
          </button>
          <NavLink
            to="/cart"
            aria-label={`Carrello, ${itemTotalCartQty} articoli`}
            className="relative ml-1 inline-flex size-11 items-center justify-center rounded-full border border-amber-900/15 bg-[#fae5cd]/40 transition-colors hover:bg-[#fae5cd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800"
          >
            <IoMdCart className="text-2xl" />
            <span className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-amber-950 px-1 text-[0.65rem] leading-5 font-bold text-[#fff8f1] ring-2 ring-[#fff8f1]">
              {itemTotalCartQty}
            </span>
          </NavLink>
        </div>
        <NavLink
          to="/Login"
          className={`${linkStyle} order-4 w-full sm:hidden`}
        >
          Accedi
        </NavLink>
      </div>
    </header>
  );
}
export default TopBar;
