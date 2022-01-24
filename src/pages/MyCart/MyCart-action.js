import * as actionTypes from "../MyCart/MyCart-types";

export const addToCart = (itemID) => {
  return (
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  )
};

export const removeFromCart = (itemID) => {
  return (
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  )
};

export const CountQty = (itemID, value) => {
  return (
    type: actionTypes.COUNT_QTY,
    payload: {
      id: itemID, 
      qty: value
    }
  )
};

export const loadCurrentItem = (item) => {
  return (
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  )
};
