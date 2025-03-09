import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// API Base URL
const API_URL_DETAIL = "http://localhost:4000/api/v1/product";

  // Fetch products from API
  export const getProductDetail = createAsyncThunk(
    "products/fetchProducts",
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(API_URL_DETAIL + `/${id}`);
        
        
        return response.data; // Ensure API response matches expected structure
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );

  // Initial state
  const productState = {
      product: {},
      loading: false,
      error: null,
    };
  // Create product slice
  const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
        
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  });
  export default productDetailSlice.reducer;
  
  
  