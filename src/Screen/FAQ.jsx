import { useState } from "react";
import { LuChevronDown, LuMail, LuShieldCheck } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const faqs = [
  {
    question: "Come faccio a capire se la bomboniera dal vivo sara davvero come in foto?",
    answer:
      "Cerchiamo di mostrare immagini il piu possibile fedeli, ma se hai dubbi puoi contattarci prima dell'acquisto per chiarire materiali, finiture e stile generale. L'obiettivo e aiutarti a comprare con piu sicurezza, soprattutto se stai scegliendo con attenzione il budget.",
  },
  {
    question: "Ci sono costi nascosti oltre al prezzo che vedo?",
    answer:
      "No, il prezzo deve essere il punto di partenza chiaro. Eventuali personalizzazioni, quantita particolari o richieste extra vanno sempre valutate in modo trasparente prima di confermare, cosi sai bene quanto stai spendendo.",
  },
  {
    question: "Posso ordinare anche se ho un budget limitato?",
    answer:
      "Si, e una delle domande piu comuni. Possiamo orientarti verso soluzioni piu essenziali ma comunque curate, evitando dettagli superflui e mantenendo una resa elegante. L'importante e partire da un budget realistico e dal numero di pezzi.",
  },
  {
    question: "Esiste una quantita minima da ordinare?",
    answer:
      "Dipende dal tipo di bomboniera e dal livello di personalizzazione richiesto. Se hai bisogno di pochi pezzi, conviene chiedere prima conferma cosi puoi capire subito se la soluzione e adatta al tuo evento.",
  },
  {
    question: "Posso personalizzare colori, nastri o confezione?",
    answer:
      "In molti casi si. La personalizzazione puo riguardare dettagli come palette, confezione e finiture, ma viene sempre valutata in modo coerente con il prodotto scelto per evitare un risultato confuso o poco armonioso.",
  },
  {
    question: "Quanto tempo prima devo ordinare?",
    answer:
      "Prima ti muovi, meglio e, soprattutto se vuoi personalizzazioni o se l'evento e in alta stagione. Ordinare con anticipo ti permette di scegliere con calma, confrontare meglio le opzioni e ridurre il rischio di decisioni affrettate.",
  },
  {
    question: "Se ricevo un prodotto danneggiato o diverso da quello atteso, cosa succede?",
    answer:
      "In quel caso la cosa giusta e contattarci subito spiegando il problema. Una comunicazione tempestiva aiuta a capire rapidamente la situazione e a trovare una soluzione nel modo piu corretto possibile.",
  },
  {
    question: "Le bomboniere sono gia pronte oppure vengono preparate su richiesta?",
    answer:
      "Dipende dal prodotto. Alcune soluzioni possono essere piu immediate, altre vengono rifinite o personalizzate in base all'ordine. Per questo e sempre utile verificare i tempi prima di acquistare se hai una data vicina.",
  },
  {
    question: "Come faccio a scegliere senza spendere troppo ma senza fare brutta figura?",
    answer:
      "La scelta migliore di solito non e quella piu costosa, ma quella piu coerente. Conviene puntare su una bomboniera semplice, ben confezionata e visivamente ordinata, invece di aggiungere troppi elementi solo per farla sembrare piu ricca.",
  },
  {
    question: "Posso chiedere consiglio prima di acquistare?",
    answer:
      "Certo. Se sei indeciso, hai paura di sbagliare o vuoi capire quale soluzione rende meglio per il tuo budget, scriverci prima e il modo migliore per acquistare con piu tranquillita.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="flex w-full flex-col items-center bg-[#fff8f1] px-6 py-16 text-amber-950">
      <section className="flex w-full max-w-5xl flex-col gap-6 text-center">
        <span className="mx-auto w-fit rounded-full bg-[#fae5cdc7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
          FAQ
        </span>

        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Domande frequenti prima di acquistare una bomboniera
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-amber-900 md:text-lg">
          Questa pagina e pensata soprattutto per chi compra per la prima volta,
          vuole spendere con attenzione e desidera capire bene cosa sta
          scegliendo prima di confermare un ordine.
        </p>
      </section>

      <section className="mt-12 flex w-full max-w-5xl flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-amber-900/10 bg-[#fae5cdc7] shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold md:text-lg">
                  {faq.question}
                </span>

                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-amber-950 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <LuChevronDown />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-amber-900/10 bg-white/55 px-5 py-5 text-sm leading-7 text-amber-900 md:px-6 md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-14 flex w-full max-w-5xl flex-col gap-6 rounded-[2rem] bg-amber-950 px-6 py-8 text-[#fff8f1] md:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <LuShieldCheck className="text-xl" />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">
              Meglio un dubbio in piu prima, che una scelta sbagliata dopo
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-amber-100 md:text-base">
              Se vuoi capire quale soluzione e piu adatta al tuo budget o hai
              bisogno di un chiarimento prima di acquistare, possiamo aiutarti a
              valutare con piu serenita.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:info@lecreazionidipatrizia.it"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#fff8f1] px-6 py-3 text-sm font-semibold text-amber-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100"
          >
            <LuMail />
            Scrivici via email
          </a>

          <NavLink
            to="/product"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-[#fff8f1] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Vai ai prodotti
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default FAQ;
