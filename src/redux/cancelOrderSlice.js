// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, cancelOrderApi } from "../utils/Constants";

export const cancelOrderData = createAsyncThunk(
  "cancelOrderData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + cancelOrderApi;
      const response = await axios.put(url, payload, config);
      console.log("Response ===> ", response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const cancelOrderSlice = createSlice({
  name: "cancelOrderReducer",

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
      .addCase(cancelOrderData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelOrderData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(cancelOrderData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearCancelOrder } = cancelOrderSlice.actions;
export default cancelOrderSlice.reducer;
