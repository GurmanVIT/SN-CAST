// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, closeTradeApi } from "../utils/Constants";

export const closeTradeByBitData = createAsyncThunk(
  "closeTradeByBitData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + closeTradeApi;
      const response = await axios.put(url, payload, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const closeTradeByBitSlice = createSlice({
  name: "closeTradeByBitReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearCloseTrader: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(closeTradeByBitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(closeTradeByBitData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(closeTradeByBitData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearCloseTrader } = closeTradeByBitSlice.actions;
export default closeTradeByBitSlice.reducer;
