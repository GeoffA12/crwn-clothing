/*
We need to apply middleware to our redux store here when setting up our store so that whenever actions get fired,
we can catch them with the redux reducers and pass them to update the redux store and our DOM. 
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// Logger can be viewed as a function which will help us debug redux state updates.
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Creating our new redux persist provider in our application that will allow us to implement local storage
// in our react app
export const persistor = persistStore(store);
