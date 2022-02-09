import {
  CENTRE_LIST_REQUEST,
  CENTRE_LIST_SUCCESS,
  CENTRE_LIST_FAIL,
  CENTRE_DETAILS_REQUEST,
  CENTRE_DETAILS_SUCCESS,
  CENTRE_DETAILS_FAIL,
} from "../constants/centreConstants";
import * as api from "../api/index";

export const listCentres = () => async (dispatch) => {
  try {
    dispatch({ type: CENTRE_LIST_REQUEST });

    const { data } = await api.listCentreAPI();

    dispatch({
      type: CENTRE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTRE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCertreDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CENTRE_DETAILS_REQUEST });

    // const { data } = await axios.get(`/api/admin/centres/${id}`);
    const { data } = await api.CertreDetailsAPI(id);

    dispatch({
      type: CENTRE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTRE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPriceByCertreAndDate = (id,date) => async (dispatch) => {
  try {
    dispatch({ type: CENTRE_DETAILS_REQUEST });

    const { data } = await api.CertreDetailsToDateAPI(id,date);

    dispatch({
      type: CENTRE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTRE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPriceByproduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: CENTRE_DETAILS_REQUEST });

    const { data } = await api.getPriceByProductID(id);

    dispatch({
      type: CENTRE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTRE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterCertreDetails = (id,date,search) => async (dispatch) => {
  try {
    dispatch({ type: CENTRE_DETAILS_REQUEST });
    
    const { data } = await api.FilterDetailsAPI(id,date,search);

    dispatch({
      type: CENTRE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTRE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
