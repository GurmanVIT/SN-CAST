// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const depositData = createAsyncThunk("depositData", async (payload) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const url = `https://web.sparcknet.com/Dashboard/Fund/user_deposit_transations/SN653735`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const depositSlice = createSlice({
  name: "depositReducer",

  initialState: {
    isLoading: false,
    data: null,
  },
  reducers: {
    clearDeposit: (state) => {
      // Reset the data property to an empty array
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(depositData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(depositData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(depositData.rejected, (state) => {
        state.isError = false;
      });
  },
});

export const { clearDeposit } = depositSlice.actions;
export default depositSlice.reducer;
