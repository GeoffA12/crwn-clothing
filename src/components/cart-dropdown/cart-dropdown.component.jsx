import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      
      {
      cartItems.length ? 
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      : 
      <span className="empty-message">Your cart is empty</span>
      }
      <CustomButton onClick={() => history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// The order in which we wrap connect and withRouter matters. WithRouter needs to be the outer higher-order function because 
// we need the connect component to evaluate first, which we'll then pass into the withRouter component. 
export default withRouter(connect(mapStateToProps)(CartDropdown));
