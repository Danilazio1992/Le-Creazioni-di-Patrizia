import { useLocation } from "react-router-dom";

function LegalTemplate() {
  const location = useLocation();
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-2 bg-amber-50">
      LegalTemplate
      <button
        onClick={() =>
          console.log(location.pathname.split("/").filter((el) => el != false))
        }
        className="p-2 bg-amber-800 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-amber-300 hover:bg-amber-950 hover:text-amber-100 "
      >
        legal template
      </button>
    </div>
  );
}

export default LegalTemplate;
