import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "1. Titolare del sito",
    paragraphs: [
      "Il presente sito e gestito da Le Creazioni di Patrizia. I dati identificativi completi del titolare, inclusi denominazione o ragione sociale, sede legale, partita IVA, recapiti diretti e indirizzo PEC, devono essere riportati in modo aggiornato nelle presenti condizioni e nelle ulteriori informative legali del sito.",
      "Prima della pubblicazione definitiva, sostituisci i riferimenti generici con i dati reali dell'impresa, perche trasparenza e identificazione del professionista sono obblighi rilevanti nell'e-commerce.",
    ],
  },
  {
    title: "2. Ambito di applicazione",
    paragraphs: [
      "I presenti Termini e condizioni d'uso disciplinano l'accesso, la navigazione e l'utilizzo del sito web Le Creazioni di Patrizia da parte degli utenti. L'utilizzo del sito implica l'accettazione delle presenti condizioni, nella versione pubblicata al momento della consultazione.",
      "Per gli acquisti online trovano inoltre applicazione le Condizioni di vendita, che disciplinano in modo specifico ordini, prezzi, pagamenti, spedizioni, diritto di recesso e garanzia legale. In caso di contrasto, per la fase di acquisto prevalgono le Condizioni di vendita e le norme inderogabili applicabili ai consumatori.",
    ],
  },
  {
    title: "3. Finalita del sito e natura delle informazioni",
    paragraphs: [
      "Il sito ha finalita informative e commerciali e consente di presentare prodotti, collezioni, immagini, descrizioni, contenuti editoriali e, ove attivato, funzioni di contatto o acquisto.",
      "Le informazioni pubblicate sul sito sono fornite con la massima cura, ma possono contenere errori materiali, omissioni, refusi, imprecisioni grafiche o aggiornamenti non ancora recepiti. Il titolare si riserva il diritto di correggere, modificare, aggiornare o rimuovere contenuti, prezzi, descrizioni, immagini, disponibilita e caratteristiche dei prodotti in qualsiasi momento, fermo restando quanto previsto dalla legge per gli ordini gia validamente conclusi.",
    ],
  },
  {
    title: "4. Immagini, colori e rappresentazione dei prodotti",
    paragraphs: [
      "Le immagini pubblicate sul sito hanno funzione illustrativa e promozionale. Pur essendo selezionate con attenzione, la resa cromatica, la percezione delle texture, delle finiture e delle proporzioni puo variare in base al dispositivo utilizzato, alle impostazioni dello schermo, alla luce e alla natura artigianale del prodotto.",
      "Eventuali lievi differenze non essenziali tra rappresentazione fotografica e prodotto finale, se non incidono sulla conformita del bene rispetto a quanto contrattualmente promesso, non costituiscono di per se inadempimento. Restano comunque fermi i diritti del consumatore in caso di prodotto non conforme, difettoso o diverso da quanto acquistato.",
    ],
  },
  {
    title: "5. Disponibilita dei prodotti e ordini",
    paragraphs: [
      "La presenza di un prodotto sul sito non costituisce di per se offerta al pubblico vincolante in ogni caso, ma invito a formulare una proposta d'acquisto, salvo ove diversamente specificato. La conclusione del contratto avviene solo nei tempi e nei modi indicati nelle Condizioni di vendita o nella conferma d'ordine del venditore.",
      "La disponibilita dei prodotti deve intendersi soggetta a verifica effettiva, soprattutto in presenza di lavorazioni artigianali, personalizzazioni, limiti di magazzino, approvvigionamento materiali, picchi stagionali o circostanze non prevedibili. In caso di indisponibilita sopravvenuta, il cliente sara informato secondo le modalita previste dalla normativa applicabile.",
    ],
  },
  {
    title: "6. Uso corretto del sito",
    paragraphs: [
      "L'utente si impegna a utilizzare il sito in modo lecito, corretto e conforme alla normativa vigente, senza compiere attivita che possano compromettere la sicurezza, l'integrita, il funzionamento, la disponibilita o la reputazione del sito e del titolare.",
      "A titolo esemplificativo, e vietato utilizzare il sito per introdurre virus o codice malevolo, tentare accessi non autorizzati, interferire con i sistemi informatici, copiare contenuti in modo sistematico, utilizzare strumenti automatizzati di scraping non autorizzati o svolgere attivita fraudolente, ingannevoli o lesive dei diritti altrui.",
    ],
  },
  {
    title: "7. Account, moduli e comunicazioni dell'utente",
    paragraphs: [
      "Qualora il sito consenta la creazione di account, l'invio di richieste o la compilazione di moduli, l'utente garantisce che i dati forniti siano veritieri, aggiornati, completi e riferiti a se medesimo o a soggetto legittimato.",
      "Il titolare si riserva la facolta di sospendere o disattivare account, richieste o interazioni manifestamente abusive, fraudolente, false, illecite o incompatibili con il corretto utilizzo del servizio, nel rispetto della normativa applicabile e senza pregiudizio per gli ulteriori rimedi previsti dalla legge.",
    ],
  },
  {
    title: "8. Proprieta intellettuale",
    paragraphs: [
      "Salvo ove diversamente indicato, tutti i contenuti presenti sul sito, inclusi a titolo esemplificativo testi, fotografie, layout, elementi grafici, segni distintivi, logo, illustrazioni, cataloghi, descrizioni e materiali promozionali, sono protetti dalla normativa in materia di proprieta intellettuale e industriale e restano nella disponibilita del titolare o dei rispettivi aventi diritto.",
      "Non e consentita la riproduzione, distribuzione, modifica, pubblicazione, estrazione, riutilizzo o sfruttamento dei contenuti, totale o parziale, per finalita commerciali o non personali, senza preventiva autorizzazione scritta del titolare, salvo i limiti inderogabili di legge.",
    ],
  },
  {
    title: "9. Link esterni e servizi di terzi",
    paragraphs: [
      "Il sito puo contenere collegamenti a siti, piattaforme, servizi, social network o contenuti di terzi. Tali collegamenti hanno funzione informativa o di facilitazione della navigazione e non implicano approvazione, controllo continuativo o assunzione di responsabilita da parte del titolare per contenuti, politiche, disponibilita o pratiche dei terzi.",
      "L'utente che accede a servizi esterni lo fa sotto la propria responsabilita, nel rispetto delle condizioni d'uso e delle informative privacy del relativo fornitore.",
    ],
  },
  {
    title: "10. Limitazioni di responsabilita",
    paragraphs: [
      "Nei limiti consentiti dalla legge, il titolare non potra essere ritenuto responsabile per interruzioni temporanee del sito, indisponibilita dei servizi, malfunzionamenti tecnici, incompatibilita con dispositivi o browser dell'utente, errori dipendenti da cause di forza maggiore, eventi esterni, attacchi informatici, guasti di rete o attivita di manutenzione.",
      "Il titolare non esclude ne limita la responsabilita nei casi in cui tale esclusione o limitazione non sia consentita dalla legge, inclusi i diritti inderogabili del consumatore, la garanzia legale di conformita ove applicabile e la responsabilita per dolo o colpa grave nei casi previsti dall'ordinamento.",
    ],
  },
  {
    title: "11. Personalizzazioni e prodotti artigianali",
    paragraphs: [
      "Per i prodotti artigianali e per quelli personalizzati possono esistere variazioni non sostanziali dovute alla lavorazione manuale, alla disponibilita dei materiali, alla resa del supporto o alla natura stessa della personalizzazione richiesta, pur nel rispetto delle caratteristiche essenziali concordate.",
      "Il cliente e tenuto a verificare con attenzione prima della conferma dell'ordine eventuali indicazioni personalizzate, nomi, date, colori o altre specifiche richieste. Errori imputabili a istruzioni inesatte o incomplete fornite dal cliente non possono essere automaticamente posti a carico del venditore, salvo quanto diversamente previsto dalla legge o concordato per iscritto.",
    ],
  },
  {
    title: "12. Privacy, cookie e dati personali",
    paragraphs: [
      "Il trattamento dei dati personali dell'utente e disciplinato dalla Privacy Policy e, ove necessario, dalla Cookie Policy del sito, che costituiscono parte integrante del quadro informativo reso all'utente.",
      "Le presenti condizioni non sostituiscono gli adempimenti previsti dalla normativa in materia di protezione dei dati personali. Prima della pubblicazione definitiva verifica che privacy e cookie policy siano complete, aggiornate e coerenti con gli strumenti effettivamente utilizzati sul sito.",
    ],
  },
  {
    title: "13. Legge applicabile e foro competente",
    paragraphs: [
      "Le presenti condizioni sono regolate dalla legge italiana, fatti salvi i diritti inderogabili riconosciuti ai consumatori dalla normativa dello Stato di residenza abituale, ove applicabile.",
      "Per le controversie con consumatori resta fermo il foro inderogabile del luogo di residenza o domicilio del consumatore, se previsto dalla legge. Per i rapporti con soggetti non qualificabili come consumatori potra essere previsto il foro esclusivo del luogo in cui ha sede il titolare, da completare con il dato corretto prima della pubblicazione.",
    ],
  },
  {
    title: "14. Modifiche delle condizioni",
    paragraphs: [
      "Il titolare si riserva il diritto di modificare in qualsiasi momento i presenti Termini e condizioni d'uso, pubblicandone sul sito la versione aggiornata. Le modifiche producono effetti dalla data di pubblicazione, salvo diverso obbligo di legge o diversa indicazione espressa.",
      "Per gli ordini gia conclusi restano ferme le condizioni applicabili al momento della conclusione del relativo contratto, salvo modifiche imposte dalla legge o espressamente accettate dalle parti.",
    ],
  },
];

function TerminiCondizioniUso() {
  return (
    <main className="flex w-full flex-col items-center gap-12 bg-[#fff8f1] px-6 py-16 text-amber-950">
      <section className="flex max-w-4xl flex-col gap-4 text-center">
        <span className="mx-auto w-fit rounded-full bg-[#fae5cdc7] px-4 py-1 text-sm">
          Termini e condizioni d'uso
        </span>

        <h1 className="text-3xl font-semibold md:text-4xl">
          Regole di utilizzo del sito
        </h1>

        <p className="text-amber-900">
          Questa pagina disciplina l'utilizzo del sito web Le Creazioni di
          Patrizia e contiene clausole pensate per rafforzare la tutela
          dell'azienda nel rispetto della normativa italiana ed europea
          applicabile ai consumatori.
        </p>
      </section>

      <section className="flex w-full max-w-4xl flex-col gap-4 rounded-2xl bg-[#fae5cdc7] p-6">
        <h2 className="text-lg font-semibold">Nota importante</h2>
        <p className="text-sm leading-7 text-amber-900">
          Il testo qui sotto e strutturato per essere piu protettivo possibile
          per il business senza inserire clausole manifestamente vessatorie o
          facilmente contestabili. Prima della pubblicazione definitiva vanno
          completati i dati dell'impresa e, se il sito andra davvero online per
          vendite al consumatore, e consigliabile una verifica legale finale.
        </p>
      </section>

      <section className="flex w-full max-w-4xl flex-col gap-5">
        {sections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-amber-900">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </section>

      <section className="flex w-full max-w-4xl flex-col gap-4 rounded-2xl bg-amber-950 p-8 text-center text-white">
        <h2 className="text-2xl font-semibold">Hai bisogno di altre pagine legali?</h2>

        <p className="text-sm leading-7 text-amber-100">
          Posso anche trasformare in modo coerente e piu solido le Condizioni
          di vendita e la pagina Spedizioni e pagamenti, cosi il blocco legale
          del sito smette di essere generico e diventa davvero utilizzabile.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NavLink
            to="/legal/condizioni-di-vendita"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-amber-950 transition hover:bg-amber-100"
          >
            Vai alle condizioni di vendita
          </NavLink>

          <NavLink
            to="/legal/diritto-di-recesso"
            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Vedi il diritto di recesso
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default TerminiCondizioniUso;
