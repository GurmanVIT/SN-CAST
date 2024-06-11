// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, updateProfileApi } from "../utils/Constants";

export const updateProfileData = createAsyncThunk("updateProfileData", async (payload) => {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const url = ApiBaseUrl + updateProfileApi
        const response = await axios.put(url, payload, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const updateProfileSlice = createSlice({
    name: "updateProfileReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearUpdateProfile: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(updateProfileData.rejected, (state) => {
                state.isError = false;
            });
    },
});

export const { clearUpdateProfile } = updateProfileSlice.actions;
export default updateProfileSlice.reducer;
