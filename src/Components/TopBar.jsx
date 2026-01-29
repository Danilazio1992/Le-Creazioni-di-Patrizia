let liBtnClass = `flex item-center p-2 bg-gradient-to-bl from-amber-400 to-amber-700 rounded-lg `;

function TopBar({ setIsModal }) {
  return (
    <div className="flex flex-row justify-between h-14 w-full bg-gradient-to-bl from-violet-400 to-fuchsia-500 ">
      <ul className="flex flex-row justify-items-end p-2 gap-2">
        <li className="btn-topbar" onClick={() => setIsModal(true)}>
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
