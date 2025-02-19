import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("http://localhost:4000/api/v1/products");
  return response.data; // Assuming response.data is an array of products
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {}, // No reducers needed for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
