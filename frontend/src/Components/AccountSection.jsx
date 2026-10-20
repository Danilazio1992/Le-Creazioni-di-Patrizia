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
        <ul className="flex flex-wrap gap-4 w-[80%] justify-center font-bold uppercase">
          {accountSections.map(({ section, route, icon: Icon }) => (
            <NavLink
              key={section}
              to={route}
              className={
                "flex flex-col gap-2 w-[24%] aspect-square p-2 bg-amber-950/50 rounded-xl justify-center items-center hover:shadow-md hover:shadow-amber-950"
              }
            >
              <Icon className="flex size-10" />
              <p className="flex">{section}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccountSection;
