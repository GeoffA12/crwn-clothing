import CartActionTypes from "./cart.types";

// Notice that we don't pass in a payload to our redux action like we did with the user action. This is because
// the payload field is optional and we're not even using the action.payload in the reducer function
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export default addItem;
