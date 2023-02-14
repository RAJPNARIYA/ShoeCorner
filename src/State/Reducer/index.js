import Cartdata from "./Cardata";
import { combineReducers } from "redux";

const allReducer = combineReducers({ cartData: Cartdata });

const rootReducer = (state, action) => {
  return allReducer(state, action);
};

export default rootReducer;
