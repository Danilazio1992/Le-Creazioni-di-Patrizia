export function uiReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isModal: true };
    case "closeModal":
      return { ...state, isModal: false, modalContent: null };
    case "OPEN_ADDRESS_MODAL":
      return {...state, isAddressModal: true, address: action.payload};
    case "CLOSE_ADDRESS_MODAL":
      return {...state, isAddressModal: false};
    case "SPOT":
      return { ...state, isModal: true, modalContent: "SPOT" };
    case "SIGNIN":
      return {...state, isModal: true, modalContent: "SIGNIN"};
    case "openSideBar":
      return { ...state, isSideBar: true };
    case "closeSideBar":
      return { ...state, isSideBar: false };
    default:
      return state; //return default sempre state cosi che in caso di azione non riconosciuta non si rompe l'app
  }
}
