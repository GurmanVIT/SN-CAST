// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, getAllOpenOrdersApi } from "../utils/Constants";

export const getAllOpenOrdersData = createAsyncThunk("getAllOpenOrdersData", async (payload) => {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const url = ApiBaseUrl + getAllOpenOrdersApi + `?id=${payload}&type=1`
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const getAllOpenOrdersSlice = createSlice({
    name: "getAllOpenOrdersReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearGetAllOpenOrders: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllOpenOrdersData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllOpenOrdersData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getAllOpenOrdersData.rejected, (state) => {
                state.isError = false;
            });
    },
});

export const { clearGetAllOpenOrders } = getAllOpenOrdersSlice.actions;
export default getAllOpenOrdersSlice.reducer;
