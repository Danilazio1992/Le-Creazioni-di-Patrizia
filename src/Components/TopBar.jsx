function TopBar({ dispatch }) {
  return (
    <div className="flex flex-row justify-between h-14 w-full bg-gradient-to-bl from-violet-400 to-fuchsia-500 ">
      <ul className="flex flex-row justify-items-end p-2 gap-2">
        <li
          className="btn-topbar"
          onClick={() => dispatch({ type: "openModal" })}
        >
          Home
        </li>
        <li className="btn-topbar">prodotti</li>
        <li className="btn-topbar">chi siamo?</li>
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
