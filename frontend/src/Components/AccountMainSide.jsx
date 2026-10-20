import { Outlet } from "react-router-dom";
import { fakeUsers } from "../assets/fakeUsers";
import { useAuth } from "../AuthContext/authContext";
function AccountMainSide() {
  let user = fakeUsers.find((el) => el.email === "daniele@test.com");
  const { dispatch: authDispatch } = useAuth();
  return (
    <div className="flex flex-col w-full h-full p-10 items-center">
      <Outlet />
      <button
        className="flex p-2 bg-amber-950 h-fit w-fit"
        onClick={() =>
          authDispatch({ type: "LOGIN_SUCCESS", payload: { user } })
        }
      >
        logga
      </button>
    </div>
  );
}

export default AccountMainSide;
