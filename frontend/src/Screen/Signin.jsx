import { useEffect, useReducer } from "react";
const formInitialState = {
  values: {
    id: 0,
    typeOfAccount: "privato",
    name: "",
    cognome: "",
    email: "",
    password: "",
    role: "",
    birthday: "",
    codice_Fiscale: "",
    mobile_phone: "",
    orders: [],
    fatturazione: {},
    spedizione: {},
    newsletter: true,
    privacy: false,
    shippingAddress: true,
  },
  errors: {},
};

function registrationFormReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.finalValue,
        },
      };
    case "RESET_FIELD":
      return { ...state, isModal: false, modalContent: null };
    case "TYPE_OF_ACCOUNT":
      return {
        ...state,
        values: { ...state.values, typeOfAccount: action.payload.finalValue },
      };
    case "UPDATE_ADDRESS_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.payload.typeOfAddress]: {
            ...state.values[action.payload.typeOfAddress],
            [action.payload.name]: action.payload.finalValue,
          },
        },
      };

    default:
      return state; //return default sempre state cosi che in caso di azione non riconosciuta non si rompe l'app
  }
}

function Signin() {
  const [state, dispatch] = useReducer(
    registrationFormReducer,
    formInitialState,
  );
  useEffect(() => {
    console.log(state.values.typeOfAccount);

    return () => {
      // Funzione di cleanup (opzionale)
    };
  }, [state.values.typeOfAccount]);
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const finalValue = type === "checkbox" ? checked : value;
    const emailInvalidCharsRegex = /[^a-zA-Z0-9._%+-@]/;
    const passwordInvalidCharsRegex =
      // eslint-disable-next-line no-useless-escape
      /[^a-zA-Z0-9!@#$%^&*()_\-+=\[\]{};:'",.<>/?|\\]/;
    if (name === "email" && emailInvalidCharsRegex.test(finalValue)) {
      console.log("invalid");
      return;
    }
    if (name === "password" && passwordInvalidCharsRegex.test(finalValue)) {
      return;
    }
    dispatch({ type: "UPDATE_FIELD", payload: { name, finalValue } });
  };
  const handleAddressChange = (e, typeOfAddress) => {
    const { name, type, checked, value } = e.target;
    const finalValue = type === "checkbox" ? checked : value;
    dispatch({
      type: "UPDATE_ADDRESS_FIELD",
      payload: { name, finalValue, typeOfAddress },
    });
  };
  return (
    <section
      aria-labelledby="signin-title"
      className="min-w-0 w-full h-full bg-[#fae5cd] px-4 py-10 text-amber-950 overflow-auto "
    >
      <div className="mx-auto min-w-0 w-full max-w-3xl  ">
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
            <div className="min-w-0 flex gap-6">
              <div className="flex justify-center items-center text-center gap-6 ">
                <input
                  type="radio"
                  name="typeOfAccount"
                  id="radioA"
                  value="privato"
                  checked={state.values.typeOfAccount === "privato"}
                  onClick={(e) => handleChange(e)}
                />
                <label htmlFor="radioA" className=" flex ">
                  Privato
                </label>
                <input
                  type="radio"
                  name="typeOfAccount"
                  id="radioP"
                  value="azienda"
                  checked={state.values.typeOfAccount === "azienda"}
                  onClick={(e) => handleChange(e)}
                />
                <label htmlFor="radioP" className=" flex ">
                  {" "}
                  Azienda{" "}
                </label>
              </div>
            </div>
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
                  id="name"
                  name="name"
                  type="text"
                  value={state.values.name}
                  placeholder="Mario"
                  autoComplete="given-name"
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {state.values.typeOfAccount === "privato" ? (
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
                    autoComplete="tax-id"
                    onChange={(e) => handleChange(e)}
                    className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                  />
                </div>
              ) : (
                <>
                  <div className="min-w-0">
                    <label
                      htmlFor="nome_azienda"
                      className="block text-sm font-medium leading-5 text-amber-950/85"
                    >
                      Nome Azienda
                    </label>
                    <input
                      id="nome_azienda"
                      name="nome_azienda"
                      type="text"
                      placeholder="ROSSI S.R.L."
                      autoComplete="organization"
                      onChange={(e) => handleChange(e)}
                      className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="partita_iva"
                      className="block text-sm font-medium leading-5 text-amber-950/85"
                    >
                      Partita IVA
                    </label>
                    <input
                      id="partita_iva"
                      name="partita_iva"
                      type="text"
                      placeholder="IT17602901005"
                      autoComplete="vat"
                      onChange={(e) => handleChange(e)}
                      className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="codice_univoco"
                      className="block text-sm font-medium leading-5 text-amber-950/85"
                    >
                      Codice Univoco
                    </label>
                    <input
                      id="codice_univoco"
                      name="codice_univoco"
                      type="text"
                      placeholder="USAL8PV"
                      onChange={(e) => handleChange(e)}
                      className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <label
                      htmlFor="pec"
                      className="block text-sm font-medium leading-5 text-amber-950/85"
                    >
                      PEC
                    </label>
                    <input
                      id="pec"
                      name="pec"
                      type="text"
                      placeholder="rossi@pec.com"
                      autoComplete="email"
                      onChange={(e) => handleChange(e)}
                      className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                    />
                  </div>
                </>
              )}

              <div className="min-w-0">
                <label
                  htmlFor="mobile_phone"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Telefono
                </label>
                <input
                  id="mobile_phone"
                  name="mobile_phone"
                  type="tel"
                  placeholder="+39 333 1234567"
                  autoComplete="mobile tel"
                  onChange={(e) => handleChange(e)}
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
            <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
              Indirizzo di Fatturazione
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="via"
                  className="block text-sm font-medium leading-5 text-amber-950/85"
                >
                  Località
                </label>
                <input
                  id="localita"
                  name="localita"
                  type="text"
                  placeholder="Roma"
                  autoComplete="address-level2"
                  onChange={(e) => handleChange(e)}
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
            <div className="mt-6 flex min-w-0 items-start gap-3 rounded-xl border border-amber-900/10 bg-amber-50/70 p-4">
              <input
                id="shippingAddres"
                name="shippingAddress"
                type="checkbox"
                checked={state.values.shippingAddress}
                onChange={(e) => handleChange(e)}
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
          {!state.values.shippingAddress && (
            <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
              <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
                Indirizzo di Spedizione
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
                    onChange={(e) => handleAddressChange(e, "spedizione")}

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
                    onChange={(e) => handleAddressChange(e, "spedizione")}
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
                    onChange={(e) => handleAddressChange(e, "spedizione")}
                    className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                  />
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="via"
                    className="block text-sm font-medium leading-5 text-amber-950/85"
                  >
                    Località
                  </label>
                  <input
                    id="localita"
                    name="localita"
                    type="text"
                    placeholder="Roma"
                    autoComplete="address-level2"
                    onChange={(e) => handleAddressChange(e, "spedizione")}
                    className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                  />
                </div>
              </div>
            </fieldset>
          )}
          <fieldset className="min-w-0 border-t border-amber-900/12 pt-5">
            <legend className="max-w-full pr-4 text-lg font-semibold tracking-tight text-amber-950">
              Il tuo account
            </legend>
            <div className="mt-3 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
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
                  value={state.values.email}
                  autoComplete="email"
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                  className="mt-2 block min-h-12 min-w-0 w-full max-w-full rounded-lg border border-amber-900/20 bg-white px-3.5 py-3 text-base leading-6 text-amber-950 shadow-xs transition-[border-color,box-shadow] duration-150 placeholder:text-stone-500 hover:border-amber-900/40 focus-visible:border-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/20 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-500 motion-reduce:transition-none"
                />
              </div>
            </div>
          </fieldset>
          <div className="mt-6 flex flex-col gap-4 rounded-xl border border-amber-900/10 bg-amber-50/70 p-4">
            {/* NEWSLETTER (Opzionale) */}
            <div className="flex min-w-0 items-start gap-3">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                checked={state.values.newsletter}
                onChange={(e) => handleChange(e)}
                className="mt-0.5 size-5 shrink-0 cursor-pointer accent-amber-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 required"
              />
              <label
                htmlFor="newsletter"
                className="min-w-0 cursor-pointer text-sm leading-6 text-amber-950/80 "
              >
                Iscriviti alla Newsletter per ricevere aggiornamenti e offerte.
              </label>
            </div>

            {/* PRIVACY POLICY (Obbligatorio) */}
            <div className="flex min-w-0 items-start gap-3">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                checked={state.values.privacyPolicy}
                onChange={(e) => handleChange(e)}
                className="mt-0.5 size-5 shrink-0 cursor-pointer accent-amber-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
              />
              <label
                htmlFor="privacy"
                className="min-w-0 cursor-pointer text-sm leading-6 text-amber-950/80"
              >
                Dichiaro di aver letto e accettato la{" "}
                <a
                  href="/privacy"
                  className="underline font-medium hover:text-amber-900"
                >
                  Privacy Policy
                </a>{" "}
                per il trattamento dei miei dati personali.{" "}
                <span className="text-red-600">*</span>
              </label>
            </div>
          </div>
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
              onClick={() => console.log(state.values)}
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
