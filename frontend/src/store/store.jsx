import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./AuthSlice";
import productsReducer from "./ProductsSlice"; // Import the slice

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productsReducer,
  },
});

export default store;
