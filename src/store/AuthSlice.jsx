import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";
import Router from "next/router";

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("users/login", data);
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginPay = createAsyncThunk(
  "auth/loginPay",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());

    try {
      const response = await axios.post("users/login", data);
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.post("users/register", data);
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      FireToast("success", "Login Success");
      Router.push("/admin");
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginPay.fulfilled, (state, action) => {
      FireToast("success", "Login Success");
      Router.push(
        `http://ewaveonline.com:4040/api/v1/payments/paymentPage?id=${action.payload.data.user._id}&discount=15`
      );
      state.loading = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      FireToast("success", "Register Success");
      Router.push(
        `http://ewaveonline.com:4040/api/v1/payments/paymentPage?id=${action.payload.data.user._id}&discount=15`
      );
      state.loading = false;
    });
    builder.addCase(loginPay.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { startLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
