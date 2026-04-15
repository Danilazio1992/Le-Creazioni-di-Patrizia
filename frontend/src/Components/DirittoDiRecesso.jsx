import { NavLink } from "react-router-dom";
function DirittoDiRecesso() {
  return (
    <main className="flex flex-col items-center w-screen h-fit bg-[#fff8f1] text-amber-950 px-6 py-16 gap-12">
      <section className="flex flex-col gap-4 max-w-4xl text-center">
        <span className="bg-[#fae5cdc7] px-4 py-1 rounded-full text-sm w-fit mx-auto">
          Diritto di recesso
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold">
          Informazioni su resi e rimborsi
        </h1>

        <p className="text-amber-900">
          Ai sensi degli artt. 52 e seguenti del D.Lgs. 206/2005 (Codice del
          Consumo), il cliente consumatore ha diritto di recedere dall’acquisto
          entro 14 giorni.
        </p>
      </section>

      <section className="flex flex-col w-full max-w-3xl bg-white rounded-2xl p-6 shadow-sm gap-4">
        <h2 className="font-semibold text-lg">
          Condizioni per esercitare il recesso
        </h2>

        <ul className="flex flex-col gap-2 text-sm text-amber-900 list-disc pl-5">
          <li>
            Il termine per esercitare il recesso è di 14 giorni dalla consegna
            del bene.
          </li>
          <li>
            Il prodotto deve essere restituito integro, non utilizzato e
            completo di confezione originale.
          </li>
          <li>
            Il cliente è responsabile della diminuzione del valore del bene
            derivante da un uso diverso da quello necessario.
          </li>
          <li>Le spese di restituzione sono a carico del cliente.</li>
        </ul>
      </section>

      <section className="flex flex-col w-full max-w-3xl bg-[#fae5cdc7] p-6 rounded-2xl gap-4">
        <h2 className="font-semibold">Esclusioni dal diritto di recesso</h2>

        <p className="text-sm text-amber-900">
          Ai sensi dell’art. 59 del Codice del Consumo, il diritto di recesso è
          escluso nei seguenti casi:
        </p>

        <ul className="text-sm text-amber-900 list-disc pl-5 flex flex-col gap-2">
          <li>beni confezionati su misura o chiaramente personalizzati;</li>
          <li>beni che rischiano di deteriorarsi o scadere rapidamente;</li>
          <li>
            beni sigillati che non si prestano a essere restituiti per motivi
            igienici, se aperti.
          </li>
        </ul>
      </section>
      <section className="flex flex-col w-full max-w-3xl gap-6">
        <h2 className="text-xl font-semibold text-center">
          Come esercitare il diritto di recesso
        </h2>

        {[
          {
            n: "01",
            t: "Invio comunicazione",
            d: "Il cliente deve comunicare la volontà di recedere tramite email a [INSERISCI EMAIL], indicando numero ordine e dati anagrafici.",
          },
          {
            n: "02",
            t: "Autorizzazione al reso",
            d: "Il venditore fornirà le istruzioni per la restituzione del prodotto.",
          },
          {
            n: "03",
            t: "Restituzione del prodotto",
            d: "Il bene deve essere spedito entro 14 giorni dalla comunicazione di recesso.",
          },
          {
            n: "04",
            t: "Rimborso",
            d: "Il rimborso verrà effettuato entro 14 giorni dalla ricezione del reso e verifica dello stato del prodotto.",
          },
        ].map((step) => (
          <div
            key={step.n}
            className="flex flex-row gap-4 bg-white p-6 rounded-2xl shadow-sm"
          >
            <span className="font-bold text-amber-900">{step.n}</span>

            <div className="flex flex-col">
              <h3 className="font-medium">{step.t}</h3>
              <p className="text-sm text-amber-900">{step.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col w-full max-w-3xl bg-white p-6 rounded-2xl gap-4 shadow-sm">
        <h2 className="font-semibold">Modalità di rimborso</h2>

        <p className="text-sm text-amber-900">
          Il rimborso sarà effettuato utilizzando lo stesso mezzo di pagamento
          utilizzato dal cliente, salvo diverso accordo espresso.
        </p>

        <p className="text-sm text-amber-900">
          Il venditore può sospendere il rimborso fino al ricevimento dei beni
          oppure fino alla prova dell’avvenuta spedizione.
        </p>
      </section>

      <section className="flex flex-col items-center text-center gap-4">
        <h2 className="text-xl font-semibold">Hai bisogno di assistenza?</h2>

        <div className="flex gap-4 flex-col sm:flex-row">
          <NavLink
            to="/contatti"
            className="bg-amber-900 text-white px-6 py-3 rounded-xl 
                       hover:bg-amber-800 hover:scale-105 transition-all duration-300"
          >
            Contattaci
          </NavLink>

          <NavLink
            to="/prodotti"
            className="border border-amber-900 px-6 py-3 rounded-xl 
                       hover:bg-amber-900 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Torna al catalogo
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default DirittoDiRecesso;
