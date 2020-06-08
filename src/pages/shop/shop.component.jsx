// import React from "react";
// import { Route } from "react-router-dom";
// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";

// const ShopPage = ({ match }) => {
//   console.log(match.path);
//   return (
//     <div className="shop-page">
//       {/* What we want is our collection to dynamically pluck off the right category from our reducer
//     so that it knows which webpage to display when a user is browsing on the shop page and they click
//     on a category. Math.path can be thought of as the current URL we're at when this component is rendered*/}
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       {/* This code will allow us to access categoryId as a parameter as a match when */}
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
