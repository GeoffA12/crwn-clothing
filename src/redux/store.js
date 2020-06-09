/*
We need to apply middleware to our redux store here when setting up our store so that whenever actions get fired,
we can catch them with the redux reducers and pass them to update the redux store and our DOM. 
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// Logger can be viewed as a function which will help us debug redux state updates.
const middlewares = [];

/* Inside of node there's an environment variable for NODE_ENV. Create-react-app will set an    
environment variable for us by default which we can access through the code below. This code    
will allow us to know whether or not or app is being served locally or in production. */
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Creating our new redux persist provider in our application that will allow us to implement local storage
// in our react app
export const persistor = persistStore(store);
