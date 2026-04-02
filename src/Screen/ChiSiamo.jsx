import { NavLink, useNavigate } from "react-router-dom";

function ChiSiamo() {
  const navigate = useNavigate();
  const strengths = [
    {
      title: "Personalizzazione curata",
      text: "Ogni bomboniera può essere adattata allo stile e al tono del tuo evento.",
    },
    {
      title: "Dettagli e materiali",
      text: "Selezioniamo con attenzione confezioni, finiture e accessori per un risultato elegante.",
    },
    {
      title: "Supporto diretto",
      text: "Ti accompagniamo nella scelta con un contatto semplice e chiaro, senza passaggi inutili.",
    },
    {
      title: "Spedizione organizzata",
      text: "Gestiamo gli ordini con attenzione per offrirti tempi e processo il più possibile lineari.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Scegli lo stile",
      text: "Parti dal tipo di evento e dall’atmosfera che vuoi creare.",
    },
    {
      number: "02",
      title: "Personalizza i dettagli",
      text: "Confetti, confezione, colori e finiture vengono adattati alle tue esigenze.",
    },
    {
      number: "03",
      title: "Preparazione dell’ordine",
      text: "Ogni articolo viene controllato e confezionato con cura prima della spedizione.",
    },
    {
      number: "04",
      title: "Ricevi e completa il tuo evento",
      text: "Ti arrivano bomboniere pensate per lasciare un ricordo concreto e ordinato.",
    },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen items-center gap-16 bg-[#fff8f1] text-amber-950 py-16">
      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 w-full max-w-6xl">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="bg-[#fae5cdc7] px-4 py-1 rounded-full text-sm w-fit">
            Chi siamo
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Bomboniere pensate per lasciare un ricordo
          </h1>

          <p className="text-base md:text-lg text-amber-900">
            Realizziamo bomboniere curate, eleganti e personalizzabili per ogni
            occasione, con un approccio semplice e diretto.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <NavLink
              to="/product"
              className="bg-amber-900 text-white px-6 py-2 rounded-xl text-center 
               hover:bg-amber-800 transition-colors duration-300"
            >
              Scopri i prodotti
            </NavLink>

            <NavLink
              to="/contatti"
              className="border border-amber-900 px-6 py-2 rounded-xl text-center 
               hover:bg-amber-900 hover:text-white transition-colors duration-300"
            >
              Contattaci
            </NavLink>
          </div>
        </div>

        <div className="w-full lg:w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full max-w-6xl">
        {strengths.map((item) => (
          <div
            key={item.title}
            className="bg-[#fae5cdc7] p-6 rounded-2xl shadow-sm hover:shadow-xl"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm mt-2 text-amber-900">{item.text}</p>
          </div>
        ))}
      </section>

      {/* STORY */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 w-full max-w-6xl">
        <div className="w-full lg:w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-3xl font-semibold">
            Un approccio semplice e curato
          </h2>

          <p className="text-amber-900">
            Crediamo che una bomboniera debba essere coerente con l’evento. Per
            questo curiamo materiali, estetica e proporzioni in ogni dettaglio.
          </p>

          <p className="text-amber-900">
            L’obiettivo è offrirti una scelta chiara, senza complicazioni, con
            un risultato ordinato ed elegante.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-4xl px-6">
        <div className="bg-amber-950 text-white rounded-3xl p-10 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold">
            Scopri le nostre collezioni
          </h2>

          <p className="text-sm text-amber-100">
            Trova la soluzione più adatta al tuo evento o contattaci per
            personalizzare la tua bomboniera.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row mt-4">
            Vai al catalogo Richiedi info
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChiSiamo;
