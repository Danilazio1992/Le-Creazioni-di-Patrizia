import { useEffect, useState } from "react";
import DotBtn from "./DotBtn";

function SlideShow() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //per gestire un render di caricamento imposto subito true fino alla modifica tramite useEffect
  const [current,setCurrent] = useState(0)

  const next = () =>{
    if (!data.length) return;
    setCurrent((prev) => (prev + 1) % data.length)
  }

  const prev = () =>{
    if (!data.length) return;
    setCurrent((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    )}
  useEffect(() => {
    const richiestaDati = async () => {
      try {
        setIsLoading(true); //attivo il caricamento
        const rispostaServer = await fetch(
          "https://react--course-api.herokuapp.com/api/v1/data/gelateria",
        ); //stai dicendo chiedi i dati a questa API e aspetta il risultato
        // // Verifica manuale dello stato HTTP (fetch non lancia errori per 404/500)
        if (!rispostaServer.ok) {
          throw new Error(`Errore HTTP: ${rispostaServer.status}`);
        }
        const datiRicevuti = await rispostaServer.json(); //dopo che ho ricevuto i dati gli sto dicendo ok elabora il json e rendilo utilizzabile e aspetta il risultato
        setData(datiRicevuti.data);
        setIsLoading(false);
      } catch (error) {
        console.error("fetch Error", error);
        setIsLoading(true);
      }
    };
    richiestaDati();
  }, []);

  return (
    <div className="flex w-min-full  mx-auto bg-amber-800 h-fit p-2 gap-2 flex-col">
      {isLoading ? <p>caricamento</p> : <p>finito</p>}
      <div className="overflow-hidden h-64">

      <div className="flex  h-fit p-2 gap-2 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        
      
        {data
          .map((city) => (
            <div
            key={city.id}
            id={city.id}
            className="flex h-fit w-[100%] bg-amber-50  justify-center"
            >
              <img
                src={city.img}
                alt={city.nome}
                id={city.id}
                className="flex aspect-[4/3] w-[100%]"
                />
            </div>
          ))}
      </div>

      <div className="flex gap-2 p-2 h-full justify-center">
        {data
          .map((el, i) => (
            <div className="flex" key={i + 10}>
              <DotBtn />
            </div>
          ))}
      </div>
          </div> {/* qui */}
      <div className="flex justify-between mt-4">
        <button onClick={()=>prev} className="btn-topbar">
          Prev
        </button>
        <button onClick={()=>next} className="btn-topbar">
          Next
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
