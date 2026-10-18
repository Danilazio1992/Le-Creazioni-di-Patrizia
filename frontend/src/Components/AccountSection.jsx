import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/authContext";
import { accountSections } from "../assets/cities";
function AccountSection() {
  const { state: authState } = useAuth();
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-2 w-full h-full">
      {!authState.isAuth ? (
        <p>Accedi per visualizzare i tuoi ordini.</p>
      ) : (
        <ul className="flex flex-wrap gap-4 justify-around">
          {accountSections.map((el) => (
            <NavLink
              key={el.section}
              to={el.route}
              className={
                "flex w-[30%] h-40 p-2 bg-amber-950/50 rounded-lg justify-center items-center"
              }
            >
              {el.section}
            </NavLink>
          ))}
        </ul>
      )}
      <button
        className="flex p-2 bg-amber-950 h-fit w-fit"
        onClick={() => console.log("orders")}
      >
        logga
      </button>
    </div>
  );
}

export default AccountSection;
