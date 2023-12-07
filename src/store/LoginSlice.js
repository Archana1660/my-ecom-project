import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

const initialState = {
    loginData: {},
    status: 'idle'
}

const loginSlice = createSlice({
    name: 'LOGIN',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLoginDetail.pending, (state) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getLoginDetail.fulfilled, (state, action) => {
                state.status = StatusCode.IDLE;
                state.loginData = action.payload
            })
            .addCase(getLoginDetail.rejected, (state) => {
                state.status = StatusCode.ERROR
            })
    }
})

export default loginSlice.reducer

export const getLoginDetail = createAsyncThunk(
    'LOGIN_DATA/POST', async (data) => {
        const config = {
            method: 'post',
            headers: {
                'Authorization': '',
                'Content-Type': ''
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('https://fakestoreapi.com/auth/login', config) // API doesn't work at the moment
        //dummy success login to allow login for all user
        let token;
        if (response.status !== 200) {
            token = { token: true }
        }
        // const result = await response.json()
        const result = token
        return result
    }
)