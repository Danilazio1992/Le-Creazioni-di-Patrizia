import { Outlet } from "react-router-dom";

function LegalMainPage() {
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-2 bg-amber-50">
      LegalMainPage
      <Outlet />
    </div>
  );
}

export default LegalMainPage;
