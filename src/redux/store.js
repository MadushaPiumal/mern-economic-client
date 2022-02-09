import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  centreListReducer,
  centreDetailsReducer,
} from "./reducer/centreReducer";
import { itemsListReducer, itemDetailsReducer } from "./reducer/itemReducer";
import { publicDataListReducer } from "./reducer/publicReducer";

const reducer = combineReducers({
  //public
  publicDataList: publicDataListReducer,
  //centre
  centreList: centreListReducer,
  centreDetails: centreDetailsReducer,
  //items
  itemList: itemsListReducer,
  itemDetails: itemDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
