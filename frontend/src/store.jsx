import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL = "http://localhost:4000/api/v1/products";

// Fetch products from API
export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);

      return response.data; // Ensure API response matches expected structure
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
  productCount: 0,
};

// Create product slice
const productSlice = createSlice({
  name: "products",
  initialState,
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
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use `rejectWithValue` for better error messages
      });
  },
});

// Configure store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
