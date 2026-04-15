import authInitialState from "./authInitialState";

export const authReducer = (state, action) => {
  //action.type (prende l'oggetto passato)
  switch (action.type) {
    case "AUTH_LOADING":
      return { ...state, isLoading: true };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
        isLoading: false,
        error: null,
      };

    case "LOGOUT":
      return authInitialState;

    case "AUTH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
