import {
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_FAILED,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_FAILED,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  CART_RESET_SUCCESS,
} from "./actionType";

const initialState = {
  cart: [],
  loading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    case GET_CART_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true,
      };
    case REMOVE_CART_ITEM_REQUEST: {
      return {
        ...state,
        loading: true,
        isError: false,
      };
    }
    case REMOVE_CART_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        isError: false,
        cart: payload,
      };
    }
    case REMOVE_CART_ITEM_FAILED: {
      return {
        ...state,
        loading: false,
        isError: true,
      };
    }
    case UPDATE_CART_REQUEST: {
      return {
        ...state,
        loading: true,
        isError: false,
      };
    }
    case UPDATE_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        isError: false,
        cart: payload,
      };
    }
    case UPDATE_CART_FAILED: {
      return {
        ...state,
        loading: false,
        isError: true,
      };
    }
    case CART_RESET_SUCCESS: {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};
