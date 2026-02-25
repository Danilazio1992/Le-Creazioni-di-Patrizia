const authInitialState = {
  user: null,
  isAuth: false, //cambia dinamicamente se abbiamo fatto l'accesso o no
  isLoading: false, //in caso di avvio richiesta API attiva lo stato cosi che a seconda della condizione abbiamo un ritorno corretto di cosa ci farà vedere
  isError: null, //in caso di errore tramite il fetch o altro andiamo a cambiare con il giusto dispatch
};

export default authInitialState;
