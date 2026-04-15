import { Outlet } from "react-router-dom";

function LegalMainPage() {
  return (
    <div className="flex flex-col w-screen h-fit justify-center items-center gap-2 bg-amber-50 text-amber-950">
      <Outlet />
    </div>
  );
}

export default LegalMainPage;
