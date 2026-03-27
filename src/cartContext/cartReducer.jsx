export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.products.find(el => el.id === action.payload.id);
      if(exist){
        return {
          ...state, products:state.products.map(el=> el.id === action.payload.id ? {...el, qty:el.qty + 1}: el) 
          // qua sfrutto il check exist per avviare un map che mi ritorna un array da assegnare a products con ogni elemento che trova e quando trova quello con lo stesso id lo ritorna aumentano di 1 qty il check magazzino lo faccio durante UI-UX   
        }
      }
              return {
          ...state,
          products: [...state.products, {id:action.payload.id, qty:1}],
        };
      case "REMOVE_FROM_CART":
        return{
          ...state,
          products: state.products.filter(el => el.id !== action.payload.id)
        }

    default:
      return state;
  }
};
