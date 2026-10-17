import { Outlet } from "react-router-dom";

function AccountMainSide() {
  return (
    <div className="flex flex-col w-full h-full">
      <Outlet />
    </div>
  );
}

export default AccountMainSide;
