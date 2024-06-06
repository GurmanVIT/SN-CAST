// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ApiBaseUrl,
  getAllOrderByBitApi,
  getAllOrdersApi,
} from "../utils/Constants";

export const getAllOrdersByBitData = createAsyncThunk(
  "getAllOrdersByBitData",
  async (payload) => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      const url = ApiBaseUrl + getAllOrderByBitApi + `?id=${payload}&type=1`;
      const response = await axios.get(url, config);
      console.log("Response orders ===> ", response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const getAllOrdersByBitSlice = createSlice({
  name: "getAllOrdersByBitReducer",

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
      .addCase(getAllOrdersByBitData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrdersByBitData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllOrdersByBitData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearGetAllOrders } = getAllOrdersByBitSlice.actions;
export default getAllOrdersByBitSlice.reducer;
