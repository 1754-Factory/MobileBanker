import { combineReducers } from "redux";

import application from "./application";
import microLoans from "./microLoans";

const rootReducer = combineReducers({
  application,
  microLoans,
});

export default rootReducer;
