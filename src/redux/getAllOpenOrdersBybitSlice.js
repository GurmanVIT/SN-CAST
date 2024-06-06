// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getAllOpenOrdersByBitApi } from "../utils/Constants";

export const getAllOpenOrdersByBitData = createAsyncThunk(
  "getAllOpenOrdersByBitData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url =
        ApiBaseUrl + getAllOpenOrdersByBitApi + `?id=${payload}&type=1`;
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const getAllOpenOrdersByBitSlice = createSlice({
  name: "getAllOpenOrdersByBitReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearGetAllOpenOrdersBybit: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOpenOrdersByBitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOpenOrdersByBitData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllOpenOrdersByBitData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetAllOpenOrdersBybit } =
  getAllOpenOrdersByBitSlice.actions;
export default getAllOpenOrdersByBitSlice.reducer;
