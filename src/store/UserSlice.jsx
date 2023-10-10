import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";
import { closeModal } from "./RootSlice";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const response = await axios.get("/users", { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.put(`/users/${item._id}`, item);
      dispatch(closeModal(true));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(`/users/${item._id}`, item);
      dispatch(fetchUsers());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: null,
  count: 0,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.count = action.payload.count;
      state.loading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      FireToast("success", "User updated successfully");
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      FireToast("warning", "User Deleted successfully");
    });
  },
});

export const { startLoading } = UserSlice.actions;

export default UserSlice.reducer;
