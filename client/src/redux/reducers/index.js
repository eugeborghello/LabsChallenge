// ----- ESTADO INICIAL -------
const initialState = {
    cartItems: [],
  };
  
  // localStorage
  
  // ----------- REDUCER ----------------------------------
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ITEM_CART:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.id === item.id);
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.id === existItem.id ? item : x
            ),
          };
        } else {
          return { cartItems: [...state.cartItems, action.payload] };
        }
      case DELETE_ITEM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  