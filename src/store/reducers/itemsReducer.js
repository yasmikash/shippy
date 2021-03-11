import { ACTION_TYPES } from "../action-types";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ITEMS:
      return action.payload;
    case ACTION_TYPES.ADD_TO_CART:
      return state.filter((item) => item.id !== action.payload.id);
    case ACTION_TYPES.REMOVE_FROM_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default itemsReducer;
