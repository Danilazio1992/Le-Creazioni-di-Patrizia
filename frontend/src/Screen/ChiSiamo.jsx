import {
  LuArrowRight,
  LuClock3,
  LuGem,
  LuHeartHandshake,
  LuLeaf,
  LuPenTool,
  LuRibbon,
  LuSparkles,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

const values = [
  {
    icon: LuPenTool,
    title: "Cura compositiva",
    text: "Ogni bomboniera viene pensata come un insieme armonioso di materiali, proporzioni e finiture.",
  },
  {
    icon: LuRibbon,
    title: "Dettagli che contano",
    text: "Nastri, confezioni e accessori non sono riempitivi, ma parte del carattere del prodotto.",
  },
  {
    icon: LuHeartHandshake,
    title: "Rapporto diretto",
    text: "Preferiamo un confronto semplice e sincero, per aiutarti a scegliere senza complicazioni.",
  },
  {
    icon: LuClock3,
    title: "Ordine nel processo",
    text: "La parte artigianale resta autentica, ma viene gestita con attenzione e metodo.",
  },
];

const pillars = [
  {
    title: "Eleganza sobria",
    text: "Cerchiamo equilibrio e pulizia, evitando eccessi e privilegiando un gusto senza tempo.",
  },
  {
    title: "Impronta artigianale",
    text: "Ci piace far percepire che dietro ogni scelta c'e una mano, una sensibilita e un'intenzione.",
  },
  {
    title: "Personalizzazione coerente",
    text: "Adattiamo il prodotto all'evento senza perdere identita estetica e armonia visiva.",
  },
];

const storySteps = [
  {
    number: "01",
    title: "Ascoltiamo il tono dell'evento",
    text: "Prima di proporre, capiamo atmosfera, stile e tipo di ricordo che vuoi lasciare.",
  },
  {
    number: "02",
    title: "Costruiamo una proposta con carattere",
    text: "Materiali, colori e dettagli vengono accostati per ottenere una bomboniera ordinata e riconoscibile.",
  },
  {
    number: "03",
    title: "Rifiniamo finche tutto e coerente",
    text: "La differenza spesso sta nelle sfumature: equilibrio, ritmo visivo e sensazione finale.",
  },
];

function ChiSiamo() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#fff0e1] py-16 text-amber-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="artisan-orb artisan-orb-one" />
        <div className="artisan-orb artisan-orb-two" />
        <div className="artisan-orb artisan-orb-three" />
      </div>

      <section className="relative flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 lg:flex-row lg:items-center lg:px-10">
        <div className="artisanal-reveal flex max-w-2xl flex-col gap-6">
          <span className="w-fit rounded-full border border-amber-900/10 bg-[#fff8f1]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] shadow-sm backdrop-blur-sm">
            Chi siamo
          </span>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-800">
              Identita del brand
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
              La nostra idea di bomboniera nasce dall'incontro tra gesto
              artigianale e immagine raffinata.
            </h1>

            <p className="max-w-xl text-base leading-8 text-amber-900 md:text-lg">
              Le Creazioni di Patrizia racconta un modo di lavorare delicato,
              curato e concreto. Cerchiamo un'estetica calda, elegante e
              coerente, capace di far sentire il valore umano dietro ogni
              composizione.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <NavLink
              to="/product"
              className="artisan-sheen inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-950 px-7 py-3.5 text-sm font-semibold text-[#fff8f1] shadow-[0_16px_40px_-20px_rgba(69,26,3,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-amber-900"
            >
              Scopri le collezioni
              <LuArrowRight className="text-base" />
            </NavLink>

            <a
              href="mailto:info@lecreazionidipatrizia.it"
              className="inline-flex items-center justify-center rounded-2xl border border-amber-900/20 bg-[#fff8f1]/60 px-7 py-3.5 text-sm font-semibold text-amber-950 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/40 hover:bg-white"
            >
              Scrivici direttamente
            </a>
          </div>
        </div>

        <div className="artisanal-reveal-delay relative flex w-full justify-center lg:justify-end">
          <div className="artisan-frame relative w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-white/60 bg-[#fff8f1]/80 p-3 shadow-[0_35px_80px_-35px_rgba(120,53,15,0.55)]">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80"
                alt="Dettagli artigianali di una bomboniera elegante"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/35 via-transparent to-[#fff8f1]/10" />
            </div>
          </div>

          <div className="artisan-float absolute -left-2 top-10 max-w-[230px] rounded-[1.4rem] border border-white/70 bg-[#fff8f1]/85 p-4 shadow-[0_20px_45px_-30px_rgba(120,53,15,0.75)] backdrop-blur-md sm:left-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                <LuGem />
              </span>
              <div>
                <p className="text-sm font-semibold">Scelta consapevole</p>
                <p className="text-xs text-amber-800">
                  materiali e dettagli in dialogo
                </p>
              </div>
            </div>
            <p className="text-sm leading-6 text-amber-900">
              Vogliamo che il risultato appaia curato senza perdere naturalezza.
            </p>
          </div>

          <div className="artisan-float-delayed absolute -bottom-6 right-1 max-w-[250px] rounded-[1.4rem] border border-amber-950/10 bg-amber-950 p-5 text-[#fff8f1] shadow-[0_24px_50px_-28px_rgba(69,26,3,0.9)] sm:right-4">
            <div className="mb-3 flex items-center gap-2 text-amber-200">
              <LuSparkles />
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                Sensazione finale
              </p>
            </div>
            <p className="text-sm leading-6 text-amber-100">
              Un ricordo che comunica valore, misura e attenzione autentica.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 grid w-full max-w-7xl gap-5 px-6 pb-20 lg:grid-cols-4 lg:px-10">
        {values.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-[1.75rem] border border-amber-900/10 bg-[#fff8f1]/78 p-6 shadow-[0_18px_50px_-38px_rgba(120,53,15,0.85)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(120,53,15,0.6)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-900 transition duration-300 group-hover:scale-110 group-hover:bg-amber-200">
              <Icon />
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-amber-900">{text}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 grid w-full max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="grid gap-6">
          <article className="overflow-hidden rounded-[2rem] border border-white/60 bg-[#fff8f1]/85 p-4 shadow-[0_24px_60px_-35px_rgba(120,53,15,0.55)]">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
                alt="Bomboniere confezionate con cura artigianale"
                className="h-[260px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 to-transparent" />
            </div>
          </article>

          <article className="rounded-[2rem] bg-amber-950 p-8 text-[#fff8f1] shadow-[0_24px_60px_-35px_rgba(69,26,3,0.9)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">
              Il nostro sguardo
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">
              Crediamo che una bomboniera debba completare l'evento, non solo
              riempire un tavolo.
            </h3>
            <p className="mt-4 text-sm leading-7 text-amber-100">
              Per questo lavoriamo sul tono generale del ricordo: deve essere
              elegante da vedere, piacevole da toccare e coerente con il
              momento che rappresenta.
            </p>
          </article>
        </div>

        <div className="artisan-panel flex flex-col gap-6 rounded-[2rem] p-8 md:p-10">
          <span className="w-fit rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900">
            Il nostro approccio
          </span>

          <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
            Ci guida un'idea semplice: rendere il ricordo speciale senza farlo
            sembrare costruito.
          </h2>

          <p className="max-w-2xl text-base leading-8 text-amber-900">
            Lavoriamo per ottenere una bellezza equilibrata, fatta di dettagli
            scelti bene e mai messi a caso. La componente artigianale non e un
            vezzo estetico: e il modo in cui diamo carattere, calore e
            riconoscibilita a ogni proposta.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-white/70 p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-3 text-amber-900">
                  <LuLeaf className="text-xl" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-amber-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2.25rem] border border-amber-900/10 bg-[#fff8f1]/80 p-8 shadow-[0_24px_60px_-38px_rgba(120,53,15,0.65)] backdrop-blur-sm md:p-10">
          <div className="mb-10 flex max-w-2xl flex-col gap-4">
            <span className="w-fit rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-amber-900">
              Come lavoriamo
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Dietro ogni composizione c'e un percorso preciso, ma leggero nella
              percezione finale.
            </h2>
            <p className="text-base leading-8 text-amber-900">
              Vogliamo che chi riceve la bomboniera noti l'armonia, non la
              fatica. Per questo il lavoro vero succede nella selezione, nel
              dosaggio e nella rifinitura.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {storySteps.map((step) => (
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

      <section className="relative z-10 w-full max-w-5xl px-6 lg:px-10">
        <div className="artisan-cta relative overflow-hidden rounded-[2.2rem] bg-amber-950 px-8 py-12 text-center text-[#fff8f1] shadow-[0_34px_80px_-40px_rgba(69,26,3,0.95)] md:px-12">
          <div className="relative z-10 flex flex-col items-center gap-5">
            <span className="rounded-full border border-amber-200/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100">
              Continua il percorso
            </span>

            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Se ti ritrovi in questo stile, il prossimo passo e vedere come si
              traduce nelle nostre collezioni.
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-amber-100 md:text-base">
              Abbiamo portato anche qui lo stesso tono della home: piu
              atmosfera, piu autorevolezza visiva e un racconto piu chiaro del
              lato artigianale del brand.
            </p>

            <div className="flex flex-col gap-4 pt-3 sm:flex-row">
              <NavLink
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fff8f1] px-7 py-3.5 text-sm font-semibold text-amber-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
              >
                Vai ai prodotti
                <LuArrowRight />
              </NavLink>

              <a
                href="mailto:info@lecreazionidipatrizia.it"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#fff8f1] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Richiedi informazioni
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChiSiamo;
