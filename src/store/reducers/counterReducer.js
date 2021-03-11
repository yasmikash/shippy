import { ACTION_TYPES } from "../action-types";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_COUNT:
      return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
