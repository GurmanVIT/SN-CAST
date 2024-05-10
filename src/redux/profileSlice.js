// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiBaseUrl, profileApi } from "../utils/Constants";

export const profileData = createAsyncThunk("profileData", async (payload) => {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        };
        const url = ApiBaseUrl + profileApi + `?user_id=${payload}`
        console.log("url ===>", url)
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const profileSlice = createSlice({
    name: "profileReducer",

    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        clearProfile: (state) => {
            // Reset the data property to an empty array
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(profileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(profileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(profileData.rejected, (state) => {
                state.isError = false;
            });
    },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
