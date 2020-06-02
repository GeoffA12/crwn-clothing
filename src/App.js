import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    /* Route from react dom router needs three paramters as we see here.
    1. Exact (Boolean): Does the path parameter specified need to be exactly equal when in the browser?
    2. Path: What is the path to the URL of the HTML page (React app) we want to display? 
    3. Component: What is the name of the component that we want to display at the specified URL path? 
    Switch will let us match a path to a route and then ONLY render the route that's specified with the path.
    Switch gives us more control over our routing.  
    */
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
