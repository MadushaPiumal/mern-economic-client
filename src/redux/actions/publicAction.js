import {
  PRICE_LIST_REQUEST,
  PRICE_LIST_SUCCESS,
  PRICE_LIST_FAIL,
} from "../constants/priceConstants";
import * as api from "../api/index";
import moment from "moment";

export const listPublicData = (itemId, centreId) => async (dispatch) => {
  try {
    dispatch({ type: PRICE_LIST_REQUEST });
    const { data } = await api.PublicDataAPI(itemId, centreId);
    const formated = data?.map((x) => {
      return {
        _id: x._id,
        price: x.price,
        date: moment(x.date).format("MMM-DD"),
      };
    });
    dispatch({
      type: PRICE_LIST_SUCCESS,
      payload: formated,
    });
  } catch (error) {
    dispatch({
      type: PRICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
