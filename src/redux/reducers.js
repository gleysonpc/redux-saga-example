import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  user: userReducer,
  toastr: toastrReducer
});

export default rootReducer;
