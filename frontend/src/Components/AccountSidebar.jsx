import { NavLink } from "react-router-dom";
import { accountSections } from "../assets/cities";

function AccountSidebar() {
  const btnLi =
    "flex p-4 text-xs font-extrabold cursor-pointer hover:bg-[#fae5cd] rounded-md hover:text-amber-950 hover:shadow-inner hover:shadow-amber-900/50";
  return (
    <div className="flex flex-col h-100% w-[15%] bg-amber-950 rounded-r-lg p-2 ">
      <ul className="flex flex-col gap-4 h-100% justify-between">
        <h3 className="flex p-2 font-extrabold text-3xl">Account</h3>
        {accountSections.map((el) => (
          <li name={el.section} id={el.section} key={el.section}>
            <NavLink to={el.route} className={btnLi}>
              {el.section.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountSidebar;
