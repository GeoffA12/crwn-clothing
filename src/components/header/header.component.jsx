import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import "./header.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/original.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// Advanced syntax to destructure nested objects represented as our app state.
/*
This is identical to writing: 
const mapStateToProps = (state) =>({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
})
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

/*
What we're essentially doing here is using the higher-order component connect to 'connect' our Header component
state to props that we can pass into our reducers. After a user action is fired our Header component will now
have access to currentUser object as props. 
*/
export default connect(mapStateToProps)(Header);
