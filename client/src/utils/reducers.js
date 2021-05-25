import { useReducer } from "react";
import {
  ADD_TO_LIST, 
  UPDATE_LIST, 
  CLEAR_LIST, 
  REMOVE_FROM_LIST,
  UPDATE_STORE, 
  REMOVE_STORE
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        products: [...action.lists],
      };

    case ADD_TO_LIST:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case REMOVE_FROM_LIST:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case CLEAR_LIST:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case UPDATE_STORE:
      return {
        ...state,
        stores: [action.stores],
      };

    case REMOVE_STORE:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}