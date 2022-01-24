import { combineReducers } from "redux";

import MyCartReducer from "../pages/MyCart/MyCart-reducer";

const rootReducer = combineReducers({
  cart: MyCartReducer,
});

export default rootReducer;