/*
The state will be passed to the reducer when the action is fired. However, when the action is fired for the 
first time, the action will be null because redux doesn't know of any current state in our app.
*/
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// Pass INITIAL_STATE as a default value here. If state is ever undefined (I.E. when our app is loaded and the action)
// is fired), then the default value used for state is set to the object INITIAL_STATE.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        // We need to spread because we should remember that the rest of the state object will be passed
        // into our reducer. Our whole object here will be sent to the root reducer.
        ...state,
        currentUser: action.payload,
      };
    /* Every reducer that we define in redux will get all actions by default. Therefore, we use default here
        as a catch all when the action passed in isn't equal to a value where we want to update the user state
        in our DOM.*/
    default:
      return state;
  }
};

export default userReducer;
