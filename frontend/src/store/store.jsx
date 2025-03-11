import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import productDetailReducer from "./ProductDetailSlice";
import userSlice from "./UserSlice";

// Configure store
const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productDetailReducer,
    user: userSlice
  }
});

export default store;
