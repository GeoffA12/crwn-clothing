/*
We need to apply middleware to our redux store here when setting up our store so that whenever actions get fired,
we can catch them with the redux reducers and pass them to update the redux store and our DOM. 
*/
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

// Logger can be viewed as a function which will help us debug
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
