import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducers";
/*
What we'll get with this import is the localStorage object we can use in the users browser.
*/
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryReducer from "../redux/directory/directory.reducer";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";

// Setting up local storage with our redux reducers and global store
const persistConfig = {
  // We want to persist data from our app with the div id of 'root'
  key: "root",
  storage,
  // whiteList is an array property containing the string names of any reducer we want to persist.
  // Our userReducer is already being persisted by firebase so there's no reason to add to array here.
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// This higher order function will return a modified version of our root reducer with a persistConfig object
// wrapped around it.
export default persistReducer(persistConfig, rootReducer);
