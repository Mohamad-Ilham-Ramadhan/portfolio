import { combineReducers } from "redux";
function initialReducer(state = {}, action) {
  switch (action.type) {
    case "INIT":
      return action.value;
    default:
      return state;
  }
}

const reducer = combineReducers({ initialReducer });

export default reducer;
