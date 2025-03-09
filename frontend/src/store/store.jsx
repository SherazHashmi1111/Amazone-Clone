import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import productDetailReducer from "./ProductDetailSlice";

// Configure store
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productDetailReducer,
  },
});

export default store;
