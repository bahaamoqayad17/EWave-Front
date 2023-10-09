import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("messages", { data });
      return response.data;
    } catch (err) {
      FireToast("error", err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (data, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.post("messages", data);
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
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      FireToast("success", "Message Sent Successfully");
      state.loading = false;
    });
  },
});

export const { startLoading } = MessageSlice.actions;
export default MessageSlice.reducer;
