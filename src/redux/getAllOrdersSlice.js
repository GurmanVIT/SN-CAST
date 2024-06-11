// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getAllOrdersApi } from "../utils/Constants";

export const getAllOrdersData = createAsyncThunk(
  "getAllOrdersData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + getAllOrdersApi + `?id=${payload}&type=1`;
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const getAllOrdersSlice = createSlice({
  name: "getAllOrdersReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetAllOrders: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllOrdersData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetAllOrders } = getAllOrdersSlice.actions;
export default getAllOrdersSlice.reducer;
