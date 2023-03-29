import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./dummyjson/reducers";

const middleware = [thunk];

const rootReducer = combineReducers({
  product: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
});

export default store;
