// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, loginApi } from "../utils/Constants";

export const loginData = createAsyncThunk("loginData", async (payload) => {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const url = ApiBaseUrl + loginApi
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const loginSlice = createSlice({
    name: "loginReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearLogin: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(loginData.rejected, (state) => {
                state.isError = false;
            });
    },
});

export const { clearLogin } = loginSlice.actions;
export default loginSlice.reducer;
