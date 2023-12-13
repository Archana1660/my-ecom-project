import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../../utils/StatusCode";
const initialState = { data: [], status: 'idle' }

const productCategoriesSlice = createSlice({
    name: 'ALL_CATEGORIES',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductCategories.pending, (state, action) => {
                state.status = + StatusCode.LOADING
            })
            .addCase(getAllProductCategories.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.LOADING
            })
            .addCase(getAllProductCategories.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
})

export default productCategoriesSlice.reducer

export const getAllProductCategories = createAsyncThunk('productCategories/getAllProductCategories', async () => {
    let respose = await fetch('https://fakestoreapi.com/products/categories')
    let result = await respose.json()
    return result
})
