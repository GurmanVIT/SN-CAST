// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, closeTradeApi } from "../utils/Constants";

export const closeTradeData = createAsyncThunk("closeTradeData", async (payload) => {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const url = ApiBaseUrl + closeTradeApi
        const response = await axios.put(url, payload, config);
        console.log("Response ===> ", response.data)
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const closeTradeSlice = createSlice({
    name: "closeTradeReducer",

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
            .addCase(closeTradeData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(closeTradeData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(closeTradeData.rejected, (state) => {
                state.isError = false;
            });
    },
});

export const { clearCloseTrader } = closeTradeSlice.actions;
export default closeTradeSlice.reducer;
