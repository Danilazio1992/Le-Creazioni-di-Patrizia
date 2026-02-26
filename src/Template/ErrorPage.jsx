import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate(); //serve a rendirizzare  tramite click ad un certo path/ percorso url che abbiamo linkato in precedenza navigate(-1) torna indietro di un path in caso di nested path
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center gap-10">
      <h1 className="flex text-amber-950 font-extrabold text-4xl text-shadow-xl text-shadow-amber-950 p-2">
        Pagina Non Trovata
      </h1>
      <button
        className=" flex bg-red-950 rounded-md p-2 items-center justify-center hover:bg-amber-950/80 cursor-pointer hover:transition-transform hover:translate-y-[-0.1rem] shadow-2xl hover:ease-in"
        onClick={() => navigate(-1)}
      >
        Torna alla Home
      </button>
    </div>
  );
}

export default ErrorPage;
