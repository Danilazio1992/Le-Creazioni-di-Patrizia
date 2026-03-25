export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};
