import { NavLink } from "react-router-dom";

const sections = [
  {
    title: "1. Oggetto e ambito di applicazione",
    paragraphs: [
      "Le presenti Condizioni di vendita disciplinano la vendita a distanza dei prodotti offerti tramite il sito Le Creazioni di Patrizia. Esse si applicano agli acquisti effettuati dagli utenti tramite il sito, salvo quanto diversamente concordato per iscritto.",
      "Le presenti condizioni si applicano nei limiti compatibili con la normativa italiana ed europea vigente e devono essere lette congiuntamente ai Termini e condizioni d'uso, alla Privacy Policy, alla Cookie Policy e, ove applicabile, all'informativa sul diritto di recesso.",
    ],
  },
  {
    title: "2. Identificazione del venditore",
    paragraphs: [
      "Il venditore e Le Creazioni di Patrizia. Prima della pubblicazione definitiva di questa pagina e necessario inserire i dati completi dell'impresa: denominazione o ragione sociale, sede, partita IVA, recapito email, PEC, eventuale numero REA e ogni altro dato obbligatorio ai sensi della normativa applicabile.",
    ],
  },
  {
    title: "3. Informazioni sui prodotti",
    paragraphs: [
      "Le descrizioni, le immagini, le schede tecniche, le indicazioni di colore, confezione, dimensione, accessori e personalizzazione dei prodotti sono predisposte con la massima cura, ma possono non riprodurre in modo perfettamente fedele ogni singolo dettaglio del prodotto artigianale finale.",
      "Le immagini hanno valore illustrativo. Lievi differenze non sostanziali dovute alla lavorazione manuale, alla disponibilita dei materiali, alla resa fotografica o alla visualizzazione su dispositivi diversi non costituiscono di per se vizio o non conformita, fermo restando il diritto del consumatore a ricevere un prodotto conforme a quanto contrattualmente promesso.",
    ],
  },
  {
    title: "4. Disponibilita dei prodotti",
    paragraphs: [
      "La disponibilita indicata sul sito deve intendersi non vincolante fino alla conferma dell'ordine da parte del venditore. In particolare, per prodotti artigianali, personalizzati o soggetti a lavorazioni manuali, la disponibilita puo dipendere da materiali, tempistiche produttive, picchi stagionali o cause non prevedibili.",
      "Il venditore si riserva la facolta di non accettare o di non poter evadere un ordine in caso di indisponibilita sopravvenuta, errore evidente nelle informazioni di prodotto o nel prezzo, problemi tecnici, impossibilita di approvvigionamento o altre cause oggettive. In tali casi, l'utente sara informato e, se il pagamento e gia stato ricevuto, verra disposto il rimborso secondo le modalita applicabili.",
    ],
  },
  {
    title: "5. Prezzi, imposte e costi accessori",
    paragraphs: [
      "I prezzi pubblicati sul sito devono intendersi in euro e, salvo ove diversamente indicato, comprensivi o meno di IVA secondo quanto riportato nella scheda prodotto e nel riepilogo d'acquisto. Le eventuali spese di spedizione, costi accessori o servizi opzionali devono essere chiaramente indicati prima della conclusione dell'ordine.",
      "Il venditore si riserva il diritto di modificare i prezzi in qualsiasi momento. Le modifiche non si applicano agli ordini gia confermati dal venditore, salvo il caso di errore materiale manifesto e riconoscibile nel prezzo, nel qual caso il venditore potra contattare il cliente per una correzione o annullare l'ordine con rimborso delle somme eventualmente gia versate.",
      "Non possono essere addebitati al consumatore costi ulteriori preimpostati o non espressamente accettati. Eventuali maggiorazioni legate a particolari metodi di pagamento sono ammesse solo nei limiti consentiti dalla legge.",
    ],
  },
  {
    title: "6. Modalita di conclusione del contratto",
    paragraphs: [
      "L'invio dell'ordine da parte del cliente costituisce proposta di acquisto. Il contratto si intende concluso solo quando il venditore invia una espressa conferma d'ordine o comunque esegue l'ordine mediante accettazione non equivoca, secondo il flusso tecnico effettivamente implementato sul sito.",
      "La semplice ricezione automatica della richiesta d'ordine o della presa in carico tecnica non equivale di per se ad accettazione dell'ordine, specialmente in presenza di controlli su disponibilita, congruita dei dati, personalizzazioni, verifica del pagamento o controlli antifrode.",
    ],
  },
  {
    title: "7. Pagamenti e sicurezza delle transazioni",
    paragraphs: [
      "Il pagamento puo essere effettuato esclusivamente con i metodi indicati sul sito al momento dell'acquisto. L'addebito, l'autorizzazione o la prenotazione dell'importo seguono le regole del prestatore di servizi di pagamento o del circuito utilizzato.",
      "Salvo ove il venditore gestisca direttamente il pagamento, le transazioni elettroniche vengono processate tramite fornitori terzi specializzati. Il venditore non memorizza necessariamente i dati completi della carta o dello strumento di pagamento, se non nei limiti strettamente necessari e in conformita alla disciplina applicabile. In caso di malfunzionamenti, indisponibilita, interruzioni o errori imputabili ai sistemi del provider di pagamento, del circuito bancario o di autenticazione forte, il venditore non risponde per i disservizi tecnici direttamente imputabili a tali soggetti, fermo restando il dovere di collaborare in buona fede per la gestione del caso.",
      "Il venditore si riserva la facolta di sospendere la lavorazione dell'ordine o di non accettarlo in presenza di pagamenti non autorizzati, rifiutati, revocati, segnalati come anomali, potenzialmente fraudolenti, incoerenti con i dati dell'ordine o non andati a buon fine. In tali ipotesi il cliente potra essere contattato per ulteriori verifiche o per proporre un metodo di pagamento alternativo.",
      "Se un importo viene soltanto autorizzato o prenotato e l'ordine non viene confermato, lo svincolo dei fondi dipende anche dai tempi tecnici dell'istituto emittente o del provider di pagamento. Se l'importo e gia stato effettivamente incassato senza conclusione del contratto, il venditore provvedera al rimborso senza ingiustificato ritardo, compatibilmente con i tempi tecnici del circuito utilizzato.",
    ],
  },
  {
    title: "8. Verifiche antifrode e rifiuto dell'ordine",
    paragraphs: [
      "Per esigenze di sicurezza e prevenzione delle frodi, il venditore puo effettuare controlli sui dati dell'ordine, sul metodo di pagamento, sull'identita del cliente o sulla coerenza delle informazioni inserite. Tali verifiche possono comportare sospensione temporanea dell'evasione.",
      "Il venditore si riserva il diritto di rifiutare ordini anomali, incompleti, sospetti, provenienti da soggetti con precedenti contestazioni abusive o comunque tali da esporre l'azienda a rischio economico, logistico o reputazionale non ragionevole, nel rispetto della normativa applicabile e degli obblighi di buona fede.",
    ],
  },
  {
    title: "9. Personalizzazioni e istruzioni del cliente",
    paragraphs: [
      "Per gli ordini personalizzati il cliente e tenuto a verificare con massima attenzione nomi, date, colori, testi, quantita, preferenze di confezione e ogni altra specifica inserita. La conferma dei dati da parte del cliente vale come presa d'atto delle scelte comunicate.",
      "Salvo errore imputabile al venditore, eventuali difformita dipendenti da indicazioni inesatte, incomplete, tardive o contraddittorie fornite dal cliente non possono essere poste automaticamente a carico del venditore. I prodotti personalizzati o realizzati su misura possono essere esclusi dal diritto di recesso nei casi previsti dalla legge.",
    ],
  },
  {
    title: "10. Spedizione, consegna e tempi",
    paragraphs: [
      "I tempi di spedizione o consegna eventualmente indicati sul sito hanno natura indicativa, salvo espressa diversa pattuizione. Nel caso di vendita a consumatori, in assenza di diverso accordo il venditore e tenuto a consegnare i beni senza ritardo ingiustificato e comunque entro il termine massimo previsto dalla normativa applicabile.",
      "I tempi di consegna possono subire variazioni per cause indipendenti dalla volonta del venditore, tra cui ritardi dei corrieri, eventi atmosferici, scioperi, festivita, blocchi logistici, controlli di sicurezza, errori di recapito, indisponibilita del destinatario o cause di forza maggiore.",
      "Il cliente e responsabile della correttezza e completezza dell'indirizzo di spedizione, del nominativo e dei riferimenti necessari alla consegna. Il venditore non risponde dei ritardi, dei costi aggiuntivi o della mancata consegna dovuti a dati errati o incompleti forniti dal cliente. Eventuali spese di giacenza, riconsegna, cambio indirizzo o rientro merce imputabili al cliente possono essere poste a suo carico, se preventivamente previste o ragionevolmente conseguenti al suo comportamento.",
    ],
  },
  {
    title: "11. Trasferimento del rischio e danni da trasporto",
    paragraphs: [
      "Nei contratti con consumatori, il rischio di perdita o danneggiamento dei beni resta in capo al venditore fino al momento in cui il consumatore, o un terzo da lui designato diverso dal vettore, entra materialmente in possesso dei beni, salvo il caso in cui il vettore sia stato scelto autonomamente dal consumatore e tale opzione non sia stata proposta dal venditore.",
      "Il cliente e invitato a verificare al momento della consegna l'integrita esterna del collo e a segnalare tempestivamente eventuali anomalie, riserva di controllo o danni apparenti, anche documentandoli. Tale collaborazione facilita la gestione della pratica con il corriere ma non limita i diritti inderogabili del consumatore nei confronti del venditore in caso di bene danneggiato durante il trasporto.",
    ],
  },
  {
    title: "12. Mancata consegna, assenza del destinatario e giacenza",
    paragraphs: [
      "In caso di assenza del destinatario, mancato ritiro, indirizzo non corretto, recapito impossibile, ripetuti tentativi di consegna andati a vuoto o decorrenza dei termini di giacenza, il venditore puo sospendere l'ordine, richiedere costi aggiuntivi necessari alla nuova spedizione o, nei casi piu gravi, risolvere il contratto trattenendo o richiedendo i costi direttamente sostenuti e non recuperabili, nei limiti consentiti dalla legge.",
      "Resta fermo che, se il problema e imputabile al venditore o al vettore da lui incaricato e non al cliente, il cliente mantiene i rimedi previsti dalla legge.",
    ],
  },
  {
    title: "13. Diritto di recesso",
    paragraphs: [
      "Il diritto di recesso del consumatore, ove applicabile, e disciplinato dalla normativa vigente e dall'apposita pagina dedicata sul sito. In linea generale, il consumatore puo recedere entro 14 giorni, salvo le eccezioni di legge.",
      "Ai sensi della normativa applicabile, il diritto di recesso puo essere escluso per beni confezionati su misura o chiaramente personalizzati e negli altri casi previsti dalla legge. Prima dell'acquisto il cliente e invitato a verificare se il prodotto rientra in una categoria esclusa dal recesso.",
    ],
  },
  {
    title: "14. Garanzia legale di conformita",
    paragraphs: [
      "Per i clienti consumatori si applica la garanzia legale di conformita prevista dalla normativa vigente. In presenza di difetti di conformita, il cliente ha diritto ai rimedi previsti dalla legge, secondo i relativi presupposti e limiti.",
      "La garanzia non copre danni o difetti derivanti da uso improprio, normale usura, conservazione non corretta, urti, manomissioni, modifiche non autorizzate, istruzioni errate del cliente o cause esterne non imputabili al venditore.",
    ],
  },
  {
    title: "15. Limitazioni di responsabilita del venditore",
    paragraphs: [
      "Nei limiti consentiti dalla legge, il venditore non risponde di ritardi o inadempimenti causati da eventi di forza maggiore, indisponibilita non prevedibili dei materiali, blocchi logistici, guasti di piattaforme esterne, interruzioni dei servizi di pagamento, sospensioni di rete, misure di sicurezza, provvedimenti dell'autorita o altri eventi ragionevolmente fuori dal proprio controllo.",
      "Il venditore non esclude ne limita in alcun modo la responsabilita nei casi in cui cio non sia consentito dalla legge, inclusi i diritti inderogabili del consumatore, la responsabilita per dolo o colpa grave e gli obblighi relativi alla consegna di beni conformi al contratto.",
    ],
  },
  {
    title: "16. Reclami e assistenza",
    paragraphs: [
      "Eventuali reclami, contestazioni o richieste di assistenza devono essere inviati ai recapiti indicati dal venditore, allegando, ove possibile, numero d'ordine, descrizione del problema e documentazione utile, inclusa documentazione fotografica in caso di danni o difformita visibili.",
      "Il venditore si impegna a gestire le segnalazioni entro tempi ragionevoli compatibili con la natura della richiesta e con l'eventuale necessita di verifiche tecniche o logistiche.",
    ],
  },
  {
    title: "17. Legge applicabile e foro competente",
    paragraphs: [
      "Le presenti Condizioni di vendita sono regolate dalla legge italiana, fatti salvi i diritti inderogabili eventualmente riconosciuti al consumatore dalla normativa del proprio Stato di residenza abituale.",
      "Per le controversie con consumatori resta fermo il foro inderogabile previsto dalla legge. Per i rapporti con clienti non qualificabili come consumatori puo essere previsto il foro esclusivo del luogo in cui ha sede il venditore, da completare con il dato corretto in sede di pubblicazione definitiva.",
    ],
  },
];

function CondizioniVendita() {
  return (
    <main className="flex w-full flex-col items-center gap-12 bg-[#fff8f1] px-6 py-16 text-amber-950">
      <section className="flex max-w-4xl flex-col gap-4 text-center">
        <span className="mx-auto w-fit rounded-full bg-[#fae5cdc7] px-4 py-1 text-sm">
          Condizioni di vendita
        </span>

        <h1 className="text-3xl font-semibold md:text-4xl">
          Regole applicabili agli acquisti online
        </h1>

        <p className="text-amber-900">
          Questo testo e pensato per dare una struttura piu solida e piu
          protettiva possibile alla vendita online di prodotti artigianali,
          mantenendo pero le tutele inderogabili previste per il cliente
          consumatore.
        </p>
      </section>

      <section className="flex w-full max-w-4xl flex-col gap-4 rounded-2xl bg-[#fae5cdc7] p-6">
        <h2 className="text-lg font-semibold">Attenzione prima della pubblicazione</h2>
        <p className="text-sm leading-7 text-amber-900">
          Questa pagina contiene la struttura giuridica piu utile per proteggere
          il business su ordini, pagamenti, spedizioni, tentativi di frode,
          giacenze, indirizzi errati, prodotti personalizzati e indisponibilita
          sopravvenute. Prima di metterla online completa i dati dell'impresa e
          verifica che i flussi reali di checkout, pagamento e spedizione del
          sito coincidano davvero con quanto dichiarato.
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
        <h2 className="text-2xl font-semibold">Pagine collegate</h2>

        <p className="text-sm leading-7 text-amber-100">
          Per un impianto legale coerente conviene mantenere allineati anche
          Termini d'uso, diritto di recesso, spedizioni e pagamenti, privacy e
          cookie policy.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NavLink
            to="/legal/termini-e-condizioni-d-uso"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-amber-950 transition hover:bg-amber-100"
          >
            Vai ai termini d'uso
          </NavLink>

          <NavLink
            to="/legal/diritto-di-recesso"
            className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Vedi il recesso
          </NavLink>
        </div>
      </section>
    </main>
  );
}

export default CondizioniVendita;
