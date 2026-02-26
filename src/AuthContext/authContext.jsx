import { createContext, useContext, useReducer } from "react";
import authInitialState from "./authInitialState";
import { authReducer } from "./AuthReducer";

const authContext = createContext(null); // null è il valore inizilializzato che decidiamo di dargli

const logToken = "logToken";

//passiamo children per far si che tutto cio che wrappa viene riportato così come e che i child possano accedere al context
export function authProvider({ children }) {
  const [state, dispatch] = useReducer(authInitialState, authReducer);

  const value = {
    state,
    dispatch,
  };

  return (
    <authContext.Provider value={value}>
      {/* proprietà value è l'oggetto che passa il a tutti i child wrappati e che ne hanno accesso*/}
      {children} {/* contenuto che viene wrappato */}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(authContext); // gli context è legato authContext
  if (!context) throw new Error("useAuth va utilizzato dentro al contesto AuthProvider");
  return context 
}

/* 
esempio di utilizzo

lo importo dentro il componente che mi interessa destrutturazione
  const{state,dispatch} = useAuth() //sarebbe value (variabile) alla quale abbiamo assegnato quello che abbiamo ricavato dal reducer (state,dispatch)
  cosi che il componente possa accedere direttamente al reducer e lo stato del contesto
*/