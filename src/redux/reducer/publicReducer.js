import {
    PRICE_LIST_REQUEST,
    PRICE_LIST_SUCCESS,
    PRICE_LIST_FAIL,    
  } from "../constants/priceConstants"; 
  export const publicDataListReducer = (state = { publicData: [] }, action) => {
    switch (action.type) {
      case PRICE_LIST_REQUEST:
        return { loading: true, publicData: [] };
      case PRICE_LIST_SUCCESS:
        return { loading: false, publicData: action.payload };
      case PRICE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }; 