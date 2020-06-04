import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  // When writing actions make sure we set the correct type that mirrors the case value in corresponding
  // reducer (user.reducer.js)
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
