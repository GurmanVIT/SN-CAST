// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, cancelOrderByBitApi } from "../utils/Constants";

export const cancelOrderByBitData = createAsyncThunk(
  "cancelOrderByBitData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + cancelOrderByBitApi;
      const response = await axios.put(url, payload, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const cancelOrderByBitSlice = createSlice({
  name: "cancelOrderByBitReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearCancelOrder: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cancelOrderByBitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelOrderByBitData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(cancelOrderByBitData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearCancelOrder } = cancelOrderByBitSlice.actions;
export default cancelOrderByBitSlice.reducer;
