export function uiReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      console.log("apro modale");
      return { ...state, isModal: true };
    case "closeModal":
      return { ...state, isModal: false, modalContent: null };
    case "SPOT":
      return { ...state, isModal: true, modalContent: "SPOT" };
    case "openSideBar":
      return { ...state, isSideBar: true };
    case "closeSideBar":
      return { ...state, isSideBar: false };
    default:
      return state; //return default sempre state cosi che in caso di azione non riconosciuta non si rompe l'app
  }
}
