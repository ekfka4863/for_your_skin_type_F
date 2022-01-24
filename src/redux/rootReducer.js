import { combineReducers } from "redux";

import MyCartReducer from "../pages/MyCart/MyCart-reducer";

const rootReducer = combineReducers({
  // map으로 api에서 cards 전부 불러오기 ... 
  cart: MyCartReducer,
});

export default rootReducer;