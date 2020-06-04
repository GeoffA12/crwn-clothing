import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/*
This is known as a redux selector. A selector is what happens when we take in the whole state object, 
and then we pull off a small slice of the state. We get the cart items from our redux store, pull of the cartItems
array, and then reduce the array to get a small piece of state. 
*/
const mapStateToProps = ({ cart: { cartItems } }) => ({
  // Perofrmance hit here: reduce() will always be called, even when the cartItems previous array state
  // is the exact same as the next cartItems array state. Reduce() method has no knowledge of whether or not
  // the state has actually updated or not so this method will be fired even in events where we're not updating
  // cartItem state. We don't want to re-render this component every time state changes and the component
  // doesn't need to care about the state.
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
