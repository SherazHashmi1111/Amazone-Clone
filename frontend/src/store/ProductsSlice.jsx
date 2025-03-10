import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL

// Fetch products from API
export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ keyword = "", page = 1, value=[0, 10000], category } = {}, { rejectWithValue }) => {
    let API_URL = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${value[0]}&price[lte]=${[value[1]]}`;
    
    if(category){
       API_URL = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${page}&price[gte]=${value[0]}&price[lte]=${[value[1]]}&category=${category}`;

    }
    
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


// Initial state
const initialProductsState = {
  products: [],
  loading: false,
  error: null,
  productCount: 0,
  filterProductsCount:0,
  resultPerPage:0
};
const productSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {}, // No need for empty `getProducts`
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new request
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.productCount = action.payload.productCount;
        state.resultPerPage = action.payload.resultPerPage;
        state.filterProductsCount = action.payload.filterProductsCount;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use `rejectWithValue` for better error messages
      });
  },
});

export default productSlice.reducer;
