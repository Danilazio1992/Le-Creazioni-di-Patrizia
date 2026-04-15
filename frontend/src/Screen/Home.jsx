import {
  LuArrowRight,
  LuClock3,
  LuGift,
  LuHeartHandshake,
  LuPackageCheck,
  LuPenTool,
  LuRibbon,
  LuSparkles,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal";
import { useUi } from "../UiContext/uiContext";

const highlights = [
  {
    icon: LuGift,
    title: "Collezioni con identita",
    text: "Ogni proposta nasce per trasmettere eleganza, cura e un ricordo autentico del tuo evento.",
  },
  {
    icon: LuPenTool,
    title: "Dettagli personalizzati",
    text: "Colori, finiture e confezione vengono armonizzati con gusto, senza soluzioni standardizzate.",
  },
  {
    icon: LuHeartHandshake,
    title: "Supporto diretto",
    text: "Ti accompagniamo nella scelta con un confronto semplice, chiaro e sempre orientato al risultato.",
  },
  {
    icon: LuPackageCheck,
    title: "Preparazione ordinata",
    text: "Dalla selezione al confezionamento, ogni passaggio e pensato per arrivare pronto e coerente.",
  },
];

const steps = [
  {
    number: "01",
    title: "Ascolto e ispirazione",
    text: "Raccogliamo stile, occasione e atmosfera per proporti una direzione visiva coerente.",
  },
  {
    number: "02",
    title: "Composizione artigianale",
    text: "Accostiamo materiali, nastri e dettagli con una logica estetica pulita e raffinata.",
  },
  {
    number: "03",
    title: "Consegna pronta per emozionare",
    text: "Ricevi una bomboniera che sembra pensata apposta per quel momento, non presa da catalogo.",
  },
];

function Home() {
  const { state: uiState } = useUi();

  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden bg-[#fae5cdc7] text-amber-950">
      {uiState.isModal && <Modal />}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="artisan-orb artisan-orb-one" />
        <div className="artisan-orb artisan-orb-two" />
        <div className="artisan-orb artisan-orb-three" />
      </div>

      <section className="relative flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-12 lg:flex-row lg:items-center lg:px-10 lg:pt-20">
        <div className="artisanal-reveal flex max-w-2xl flex-col gap-6">
          <span className="w-fit rounded-full border border-amber-900/10 bg-[#fff8f1]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] shadow-sm backdrop-blur-sm">
            Le Creazioni di Patrizia
          </span>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-800">
              Bomboniere artigianali
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
              La delicatezza di un gesto fatto a mano, con un&apos;immagine
              professionale e senza tempo.
            </h1>

            <p className="max-w-xl text-base leading-8 text-amber-900 md:text-lg">
              Creiamo bomboniere eleganti, curate nei materiali e pensate per
              far percepire il valore dell&apos;evento fin dal primo sguardo.
              Ogni dettaglio racconta una manifattura attenta, mai impersonale.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <NavLink
              to="/product"
              className="artisan-sheen inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-950 px-7 py-3.5 text-sm font-semibold text-[#fff8f1] shadow-[0_16px_40px_-20px_rgba(69,26,3,0.8)] transition duration-200 hover:-translate-y-0.5 hover:bg-amber-900"
            >
              Scopri il catalogo
              <LuArrowRight className="text-base" />
            </NavLink>

            <NavLink
              to="/chisiamo"
              className="inline-flex items-center justify-center rounded-2xl border border-amber-900/20 bg-[#fff8f1]/60 px-7 py-3.5 text-sm font-semibold text-amber-950 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/40 hover:bg-white"
            >
              Il nostro stile
            </NavLink>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-amber-900/10 bg-[#fff8f1]/70 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-3xl font-semibold">100%</p>
              <p className="mt-1 text-sm text-amber-900">
                attenzione a finiture, confezione e armonia visiva
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/10 bg-[#fff8f1]/70 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-3xl font-semibold">Su misura</p>
              <p className="mt-1 text-sm text-amber-900">
                per matrimoni, battesimi, comunioni ed eventi speciali
              </p>
            </div>

            <div className="rounded-2xl border border-amber-900/10 bg-[#fff8f1]/70 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-3xl font-semibold">Diretto</p>
              <p className="mt-1 text-sm text-amber-900">
                dialogo semplice e umano, senza passaggi inutili
              </p>
            </div>
          </div>
        </div>

        <div className="artisanal-reveal-delay relative flex w-full justify-center lg:justify-end">
          <div className="artisan-frame relative w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/60 bg-[#fff8f1]/80 p-3 shadow-[0_35px_80px_-35px_rgba(120,53,15,0.55)]">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                alt="Bomboniera elegante con dettagli artigianali"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-[#fff8f1]/10" />
            </div>
          </div>

          <div className="artisan-float absolute -left-2 top-8 max-w-[220px] rounded-[1.4rem] border border-white/70 bg-[#fff8f1]/85 p-4 shadow-[0_20px_45px_-30px_rgba(120,53,15,0.75)] backdrop-blur-md sm:left-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                <LuRibbon />
              </span>
              <div>
                <p className="text-sm font-semibold">Finiture curate</p>
                <p className="text-xs text-amber-800">
                  nastri, texture e tono coordinato
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-amber-900">
              Un impatto raffinato che resta elegante anche da vicino.
            </p>
          </div>

          <div className="artisan-float-delayed absolute -bottom-6 right-1 max-w-[240px] rounded-[1.4rem] border border-amber-950/10 bg-amber-950 p-5 text-[#fff8f1] shadow-[0_24px_50px_-28px_rgba(69,26,3,0.9)] sm:right-4">
            <div className="mb-3 flex items-center gap-2 text-amber-200">
              <LuSparkles />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                Effetto wow
              </p>
            </div>
            <p className="text-sm leading-6 text-amber-100">
              Professionale nella presentazione, caldo e autentico nella
              percezione.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid w-full max-w-7xl gap-5 px-6 pb-20 lg:grid-cols-4 lg:px-10">
        {highlights.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-[1.75rem] border border-amber-900/10 bg-[#fff8f1]/75 p-6 shadow-[0_18px_50px_-38px_rgba(120,53,15,0.85)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(120,53,15,0.6)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-900 transition duration-300 group-hover:scale-110 group-hover:bg-amber-200">
              <Icon />
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-amber-900">{text}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 grid w-full max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="artisan-panel flex flex-col gap-6 rounded-[2rem] p-8 md:p-10">
          <span className="w-fit rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900">
            Il valore artigianale
          </span>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
            Non vendiamo solo un oggetto, ma il modo in cui un ricordo prende
            forma.
          </h2>

          <p className="max-w-2xl text-base leading-8 text-amber-900">
            La sensazione che vogliamo trasmettere e quella di un lavoro fatto
            con mano ferma, gusto equilibrato e attenzione sincera. Per questo
            ogni combinazione viene pensata per risultare armoniosa, raffinata e
            mai eccessiva.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3 text-amber-900">
                <LuClock3 className="text-xl" />
                <h3 className="font-semibold">Tempi gestiti con ordine</h3>
              </div>
              <p className="text-sm leading-7 text-amber-900">
                Una preparazione curata permette di arrivare all&apos;evento con
                tranquillita e senza sorprese.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3 text-amber-900">
                <LuSparkles className="text-xl" />
                <h3 className="font-semibold">Presenza scenica delicata</h3>
              </div>
              <p className="text-sm leading-7 text-amber-900">
                Texture morbide, palette calde e dettagli ben dosati per un
                effetto elegante e memorabile.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <article className="overflow-hidden rounded-[2rem] border border-white/60 bg-[#fff8f1]/85 p-4 shadow-[0_24px_60px_-35px_rgba(120,53,15,0.55)]">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
                alt="Confezione raffinata per una bomboniera artigianale"
                className="h-[260px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 to-transparent" />
            </div>
          </article>

          <article className="rounded-[2rem] bg-amber-950 p-8 text-[#fff8f1] shadow-[0_24px_60px_-35px_rgba(69,26,3,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">
              Firma visiva
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              Un'estetica morbida, calda e riconoscibile in ogni collezione.
            </h3>
            <p className="mt-4 text-sm leading-7 text-amber-100">
              La palette del sito resta protagonista anche nella home: crema,
              ambra, marrone profondo e punti luce chiari per evocare eleganza
              artigianale senza perdere pulizia.
            </p>
          </article>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2.25rem] border border-amber-900/10 bg-[#fff8f1]/80 p-8 shadow-[0_24px_60px_-38px_rgba(120,53,15,0.65)] backdrop-blur-sm md:p-10">
          <div className="mb-10 flex max-w-2xl flex-col gap-4">
            <span className="w-fit rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-amber-900">
              Il processo
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Un percorso chiaro, con la leggerezza di qualcosa fatto bene.
            </h2>
            <p className="text-base leading-8 text-amber-900">
              La parte professionale e quella artigianale convivono proprio qui:
              organizzazione pulita fuori, sensibilita nei dettagli dentro.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[1.8rem] border border-amber-900/10 bg-white/80 p-6 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-lg font-semibold text-amber-900">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-amber-900">
                  {step.text}
                </p>
                <div className="artisan-line absolute bottom-0 left-0 h-1 w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-5xl px-6 pb-24 lg:px-10">
        <div className="artisan-cta relative overflow-hidden rounded-[2.2rem] bg-amber-950 px-8 py-12 text-center text-[#fff8f1] shadow-[0_34px_80px_-40px_rgba(69,26,3,0.95)] md:px-12">
          <div className="relative z-10 flex flex-col items-center gap-5">
            <span className="rounded-full border border-amber-200/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100">
              Inizia da qui
            </span>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Dai al tuo evento una bomboniera che sappia di cura, eleganza e
              manifattura vera.
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-amber-100 md:text-base">
              Esplora le collezioni oppure scopri meglio il nostro approccio: la
              nuova home ti accompagna con piu atmosfera, piu gerarchia e un
              tono piu professionale senza tradire l&apos;anima artigianale del
              brand.
            </p>

            <div className="flex flex-col gap-4 pt-3 sm:flex-row">
              <NavLink
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fff8f1] px-7 py-3.5 text-sm font-semibold text-amber-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
              >
                Vai ai prodotti
                <LuArrowRight />
              </NavLink>

              <NavLink
                to="/chisiamo"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#fff8f1] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Approfondisci il brand
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
