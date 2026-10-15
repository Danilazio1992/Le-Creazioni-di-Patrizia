function AccountSidebar() {
  const accountSections = [
    "ordini",
    "documenti",
    "richieste",
    "profilo",
    "indirizzi",
    "sicurezza",
  ];
  const btnLi =
    "flex p-4 text-xs font-extrabold cursor-pointer hover:bg-[#fae5cd] rounded-md hover:text-amber-950 hover:shadow-inner hover:shadow-amber-900/50";
  return (
    <div className="flex flex-col h-full w-[15%] bg-amber-600 rounded-r-lg p-2 ">
      <h3 className="flex p-2 font-extrabold text-3xl">Account</h3>
      <ul className="flex flex-col gap-4">
        {accountSections.map((el) => (
          <li className={btnLi} name={el} id={el} key={el}>
            {el.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountSidebar;
