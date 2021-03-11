import { ACTION_TYPES } from "../action-types";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return [...state, action.payload];
    case ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default cartReducer;
