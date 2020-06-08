import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

/*
Auth is a package that will let us store the state of our authenticated user on the app state 
so that we can pass it into react components that need the user data.
*/
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    /*
    We don't want to have to manually fetch data from the backend every time the user has been authenticated.
    We don;t want to have to re-mount the entire applciation every time someone is authenticated. So we can  
    include auth package from firebase in our componentDidMount() to prevent this.
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      /*This will also give us user session storage persistence out of the box thanks to firebase */
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  /* Unsubscribe the user form our application to avoid memory leaks in the applciation.
   */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      /* Route from react dom router needs three paramters as we see here.
      1. Exact (Boolean): Does the path parameter specified need to be exactly equal when in the browser?
      2. Path: What is the path to the URL of the HTML page (React app) we want to display? 
      3. Component: What is the name of the component that we want to display at the specified URL path? 
      Switch will let us match a path to a route and then ONLY render the route that's specified with the path.
      Switch gives us more control over our routing.  
      */
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* Here our shop page is being nested in a route. Therefore we get access to 
          match location and history objects in the ShopPage component.  */}
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          {/* render is a javascript parameter to react router that we can use to tell react
          router which component we want to render on the page. */}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
/*
Function that will receive a dispatch and return an object where the props name is whatever prop that we     
want to pass in that will dispatch the new action that we're trying to invoke, which is setCurrentUser(). 
*/
const mapDispatchToProps = (dispatch) => ({
  // Dispatch is a way for redux to know that whatever object is passed is an action object that will be
  // passed to every reducer. Here we're invoking setCurrentUser action by passing in user
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

/*
Unlike in Header.component.jsx where our first argument of connect() took mapStateToProps, we don't need 
this anymore because we don't need access to currentUser in our App component. Outside of passing currentUser 
to the Header component, App doesn't need to care about state of currentUser. So we can include null as our      
first argument here. 
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
