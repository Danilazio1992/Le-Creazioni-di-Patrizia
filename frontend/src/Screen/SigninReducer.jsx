export const formInitialState = {
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

export function registrationFormReducer(state, action) {
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
