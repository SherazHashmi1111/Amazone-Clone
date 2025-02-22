import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./AuthSlice";
import productsReducer from "./ProductsSlice"; // Import the slice
import productDetailReducer from './ProductDetailsSlice'

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productsReducer,
    productDetail: productDetailReducer
  },
});

export default store;
