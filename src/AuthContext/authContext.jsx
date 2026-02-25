import { createContext, useReducer } from "react";
import authInitialState from "./authInitialState";
import { authReducer } from "./authReducer";

const authContext = createContext(null); // null è il valore inizilializzato che decidiamo di dargli

const logToken = "logToken";

//passiamo children per far si che tutto cio che wrappa viene riportato così come e che i child possano accedere al context
export function authProvider({ children }) {
  const [state, dispatch] = useReducer(authInitialState, authReducer);
  return (
    <authContext.Provider value={value}>
      {" "}
      {/* proprietà value è l'oggetto che passa il a tutti i child wrappati e che ne hanno accesso*/}
      {children} {/* contenuto che viene wrappato */}
    </authContext.Provider>
  );
}
