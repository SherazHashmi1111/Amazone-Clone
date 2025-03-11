import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL_DETAIL = "http://localhost:4000/api/v1/login";

// Login user function
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email = "", password = "" } = {}, { rejectWithValue }) => {
    try {
      const requestBody = {
        email: email,
        password: password,
      };
      const response = await axios.post(API_URL_DETAIL, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      return response.data; // Ensure API response matches expected structure
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// Register user function
const API_URL = "http://localhost:4000/api/v1/register"; // Replace with your actual backend API

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData);

      const {data} = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial state
const userState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};
// Create product slice
const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
