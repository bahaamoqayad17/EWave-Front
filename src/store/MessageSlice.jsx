import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";
import Router from "next/router";

export const fetchMessages = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/messages", { data });
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const addMessage = createAsyncThunk(
  "auth/loginPay",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/messages", data);
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  messages: [],
  loading: false,
  count: 0,
};

const MessageSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.count = action.payload.count;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      FireToast("success", "Message Sent Successfully");
    });
  },
});

export default MessageSlice.reducer;
