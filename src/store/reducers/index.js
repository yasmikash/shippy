import { combineReducers } from "redux";

import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";
import counterReducer from "./counterReducer";

export const reducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  counter: counterReducer,
});
