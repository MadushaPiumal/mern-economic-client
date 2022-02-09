import {
  CENTRE_LIST_REQUEST,
  CENTRE_LIST_SUCCESS,
  CENTRE_LIST_FAIL,
  CENTRE_DETAILS_REQUEST,
  CENTRE_DETAILS_SUCCESS,
  CENTRE_DETAILS_FAIL,
} from "../constants/centreConstants";

export const centreListReducer = (state = { centres: [] }, action) => {
  switch (action.type) {
    case CENTRE_LIST_REQUEST:
      return { loading: true, centres: [] };
    case CENTRE_LIST_SUCCESS:
      return { loading: false, centres: action.payload };
    case CENTRE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const centreDetailsReducer = (state = { centreDetails: [] }, action) => {
  switch (action.type) {
    case CENTRE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case CENTRE_DETAILS_SUCCESS:
      return { loading: false, centreDetails: action.payload };
    case CENTRE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
