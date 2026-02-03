import { useEffect, useState } from "react";
import DotBtn from "./DotBtn";

function SlideShow() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //per gestire un render di caricamento imposto subito true fino alla modifica tramite useEffect
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(current);
  }, [current]);

  const nextSlide = () => {
    if (!data.length) return;
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    if (!data.length) return;
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
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
    <div className="prova flex flex-col bg-amber-50 h-full w-full">
      <div className="flex justify-center p-4 h-96 relative">
        <div className="relative overflow-hidden w-4/5 shadow-md shadow-amber-900 rounded-[10px] ">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {data.map((slide) => (
              <div
                key={slide.id}
                id={slide.id}
                className="flex min-w-full justify-center "
              >
                <img
                  src={slide.img}
                  alt={slide.nome}
                  id={slide.id}
                  className=" w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex  z-10 w-full h-full justify-between items-center">
          <button
            className="flex btn-topbar font-extrabold h-fit w-fit"
            onClick={() => prevSlide()}
          >
            PREV
          </button>
          <button
            className="flex btn-topbar font-extrabold h-fit w-fit"
            onClick={() => nextSlide()}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="flex gap-2 p-2 h-fit justify-center">
        {data.map((el, i) => (
          <div className="flex" key={i + 10}>
            <DotBtn />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
