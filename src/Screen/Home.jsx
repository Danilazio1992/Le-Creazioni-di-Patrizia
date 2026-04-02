import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext/authContext";
import Modal from "../Components/Modal";
import { useUi } from "../UiContext/uiContext";

function Home() {
  const { state: uiState, dispatch: uiDispatch } = useUi();
  const { state: authState, dispatch: authDispatch } = useAuth();
  return (
    <div className="flex flex-col w-screen h-fit justify-center items-center">
      <h1 className="flex text-amber-950 font-extrabold text-4xl text-shadow-xl text-shadow-amber-950 p-2">
        Home
      </h1>
      <Link
        to="*"
        className=" flex bg-red-950 rounded-md p-2  hover:bg-amber-600"
      >
        naviga
      </Link>
      {uiState.isModal && <Modal />}
      <button
        className="flex p-2 rounded-md bg-amber-950/50  hover:bg-amber-600 "
        onClick={() => uiDispatch({ type: "OPEN_MODAL" })}
      >
        apri modale
      </button>

      {authState.isAuth && (
        <button
          className="flex p-2 rounded-md bg-amber-950/50  hover:bg-amber-600 "
          onClick={() => console.log(authState)}
        >
          logga state
        </button>
      )}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-16 w-full max-w-6xl">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="bg-[#fae5cdc7] px-4 py-1 rounded-full text-sm w-fit">
            Bomboniere personalizzate
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Trasforma un evento in un ricordo concreto
          </h1>

          <p className="text-base md:text-lg text-amber-900">
            Bomboniere curate nei dettagli, personalizzabili e pronte a
            valorizzare il tuo evento senza complicazioni.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <NavLink
              to="/prodotti"
              className="bg-amber-900 text-white px-6 py-3 rounded-xl text-center 
                         hover:bg-amber-800 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Scopri il catalogo
            </NavLink>

            <NavLink
              to="/contatti"
              className="border border-amber-900 px-6 py-3 rounded-xl text-center 
                         hover:bg-amber-900 hover:text-white hover:scale-105 transition-all duration-300"
            >
              Richiedi personalizzazione
            </NavLink>
          </div>
        </div>

        <div className="w-full lg:w-[450px] h-[320px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TRUST / BENEFIT */}
      <section className="flex flex-col md:flex-row gap-6 px-6 py-10 w-full max-w-6xl">
        {[
          "Personalizzazione reale",
          "Materiali selezionati",
          "Supporto diretto",
          "Spedizione affidabile",
        ].map((text) => (
          <div
            key={text}
            className="flex-1 bg-[#fae5cdc7] p-6 rounded-2xl shadow-sm flex flex-col gap-2"
          >
            <h3 className="font-semibold">{text}</h3>
            <p className="text-sm text-amber-900">
              Processo semplice e risultato coerente con il tuo evento.
            </p>
          </div>
        ))}
      </section>

      {/* VALUE HOOK */}
      <section className="flex flex-col items-center text-center gap-6 px-6 py-16 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Non è solo una bomboniera
        </h2>

        <p className="text-amber-900 max-w-2xl">
          È il dettaglio che resta. Ogni scelta è pensata per lasciare un
          ricordo ordinato, elegante e coerente con il tuo evento.
        </p>

        <NavLink
          to="/prodotti"
          className="bg-amber-900 text-white px-8 py-3 rounded-xl 
                     hover:bg-amber-800 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Vedi le collezioni
        </NavLink>
      </section>

      {/* PROCESS */}
      <section className="flex flex-col gap-8 px-6 py-16 w-full max-w-6xl text-amber-950">
        {[
          { n: "01", t: "Scegli lo stile" },
          { n: "02", t: "Personalizza i dettagli" },
          { n: "03", t: "Preparazione ordine" },
          { n: "04", t: "Ricevi e completa" },
        ].map((step) => (
          <div
            key={step.n}
            className="flex flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-sm"
          >
            <span className="text-2xl font-bold text-amber-900">{step.n}</span>

            <h3 className="font-medium">{step.t}</h3>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="flex flex-col items-center text-center gap-6 px-6 py-16 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold">
          Inizia ora a creare il tuo evento
        </h2>

        <p className="text-amber-900">
          Scegli dal catalogo oppure contattaci per una soluzione su misura.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <NavLink
            to="/prodotti"
            className="bg-amber-900 text-white px-6 py-3 rounded-xl 
                       hover:bg-amber-800 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Vai al catalogo
          </NavLink>

          <NavLink
            to="/contatti"
            className="border border-amber-900 px-6 py-3 rounded-xl 
                       hover:bg-amber-900 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contattaci
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;
