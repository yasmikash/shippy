import axios from "axios";

import { ACTION_TYPES } from "../action-types";

export const fetchItems = () => async (dispatch, getState) => {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
  );

  dispatch({
    type: ACTION_TYPES.FETCH_ITEMS,
    payload: data,
  });
};

export const addToCart = (item) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CART,
    payload: item,
  };
};

export const incrementCount = () => {
  return {
    type: ACTION_TYPES.INCREMENT_COUNT,
  };
};
