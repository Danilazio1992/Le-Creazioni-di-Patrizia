function Signin() {
  return (
    <section
      aria-labelledby="signin-title"
      className="min-w-0 w-full h-full bg-[#fae5cd] px-4 py-10 text-amber-950  "
    >
      <div className="mx-auto min-w-0 w-full max-w-3xl ">
        <header className="mb-8 max-w-xl sm:mb-10">
          <p className="inline-block border-l-2 border-amber-700/50 pl-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-800">
            Le Creazioni di Patrizia
          </p>
          <h1
            id="signin-title"
            className="mt-5 text-balance font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl"
          >
            Crea il tuo account
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-sm leading-7 text-amber-900/75 sm:text-base">
            Un piccolo spazio per i tuoi momenti speciali. Inserisci i tuoi dati
            per registrarti.
          </p>
        </header>
        {/* Collega qui lo stato e gli handler del tuo useReducer. */}
        <form
          aria-labelledby="signin-title"
          className="min-w-0 w-full space-y-9 rounded-2xl border border-white/80 bg-[#fffcf8] p-5 shadow-[0_16px_56px_-24px_rgba(91,49,21,0.22)] ring-1 ring-amber-900/8 sm:space-y-10 sm:rounded-3xl sm:p-9 lg:p-10"
        >
          <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
            <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
              Dati personali
            </legend>
            <div className="mt-3 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Mario"
                  autoComplete="given-name"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="cognome"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Cognome
                </label>
                <input
                  id="cognome"
                  name="cognome"
                  type="text"
                  placeholder="Rossi"
                  autoComplete="family-name"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="birthday"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Data di nascita
                </label>
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  autoComplete="bday"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="codice_Fiscale"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Codice fiscale
                </label>
                <input
                  id="codice_Fiscale"
                  name="codice_Fiscale"
                  type="text"
                  placeholder="RSSMRA80A01H501U"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="telefono_mobile"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Cellulare
                </label>
                <input
                  id="telefono_mobile"
                  name="telefono_mobile"
                  type="tel"
                  placeholder="+39 333 1234567"
                  autoComplete="mobile tel"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="telefono_Fisso"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Telefono fisso (facoltativo)
                </label>
                <input
                  id="telefono_Fisso"
                  name="telefono_Fisso"
                  type="tel"
                  placeholder="06 1234567"
                  autoComplete="home tel"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
            <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
              Indirizzo
            </legend>
            <div className="mt-3 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="via"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Via o piazza
                </label>
                <input
                  id="via"
                  name="via"
                  type="text"
                  placeholder="Via dei Fiori"
                  autoComplete="address-line1"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="civico"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Numero civico
                </label>
                <input
                  id="civico"
                  name="civico"
                  type="text"
                  placeholder="12"
                  autoComplete="address-line2"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="cap"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  CAP
                </label>
                <input
                  id="cap"
                  name="cap"
                  type="text"
                  placeholder="00100"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
            <div className="mt-6 flex min-w-0 items-start gap-3 rounded-xl border border-amber-900/10 bg-amber-50/70 p-4">
              <input
                id="indirizzo_spedizione"
                name="indirizzo_spedizione"
                type="checkbox"
                defaultChecked
                className="mt-0.5 size-5 shrink-0 cursor-pointer accent-amber-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
              />
              <label
                htmlFor="indirizzo_spedizione"
                className="min-w-0 cursor-pointer text-sm leading-6 text-amber-950/80"
              >
                Usa questo indirizzo anche per la spedizione.
              </label>
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
            <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
              Il tuo account
            </legend>
            <div className="mt-3 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="nome_visualizzato"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Nome visualizzato
                </label>
                <input
                  id="nome_visualizzato"
                  name="nome_visualizzato"
                  type="text"
                  placeholder="Come vuoi essere chiamato"
                  autoComplete="nickname"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mario@esempio.it"
                  autoComplete="email"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Scegli una password"
                  autoComplete="new-password"
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
          </fieldset>
          <footer className="flex min-w-0 flex-col-reverse gap-5 border-t border-amber-900/12 pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="min-w-0 text-center text-sm leading-6 text-amber-900/75 sm:text-left">
              Hai già un account?{" "}
              <a
                href="/login"
                className="rounded font-semibold text-amber-950 underline decoration-amber-900/30 underline-offset-4 transition-colors hover:text-amber-700 hover:decoration-amber-700 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
              >
                Accedi
              </a>
            </p>
            {/* Cambia in submit quando colleghi la gestione del form. */}
            <button
              type="button"
              className="inline-flex min-h-12 w-full min-w-0 max-w-full items-center justify-center rounded-lg border border-amber-950/10 bg-amber-900 px-8 py-3 text-center text-sm font-semibold leading-6 text-amber-50 shadow-sm transition-[background-color,box-shadow] duration-150 hover:bg-amber-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 active:bg-amber-950 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none sm:w-auto"
            >
              Crea account
            </button>
          </footer>
        </form>
      </div>
    </section>
  );
}

export default Signin;
