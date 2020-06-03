import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from "react-router-dom";
/*
Auth is a package that will let us store the state of our authenticated user on the app state 
so that we can pass it into react components that need the user data.
*/
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    /*
    We don't want to have to manually fetch data from the backend every time the user has been authenticated.
    We don;t want to have to re-mount the entire applciation every time someone is authenticated. So we can  
    include auth package from firebase in our componentDidMount() to prevent this.
    */
    auth.onAuthStateChanged((user) => {
      /*This will also give us user session storage persistence out of the box thanks to firebase */
      this.setState({
        currentUser: user,
      });
      console.log(user);
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
