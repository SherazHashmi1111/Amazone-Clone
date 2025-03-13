import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Login user function
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email = "", password = "" } = {}, { rejectWithValue }) => {
    try {
      const API_URL_DETAIL = "http://localhost:4000/api/v1/login";
      const response = await axios.post(API_URL_DETAIL, { email, password }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ Include cookies for authentication
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// ✅ Load user function (Fixed)
export const loadUser = createAsyncThunk(
  "user/load",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/me", {
        withCredentials: true, // ✅ Fix: Ensure cookies are sent
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// ✅ Register user function (No changes needed)
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const API_URL = "http://localhost:4000/api/v1/register";
      let requestBody = new FormData();
      requestBody.append("name", formData.name);
      requestBody.append("email", formData.email);
      requestBody.append("password", formData.password);

      if (formData.avatar) {
        const base64Avatar = await convertToBase64(formData.avatar);
        requestBody.append("avatar", base64Avatar);
      }

      const { data } = await axios.post(API_URL, requestBody, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Initial state
const userState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};

// ✅ Redux Slice with Fixes
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
        state.user = action.payload; // ✅ Store user data
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
        state.user = action.payload; // ✅ Store user data
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; // ✅ Store user data
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
