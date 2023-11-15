import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../../utils/StatusCode";

const initialState = {
    data: [],
    status: StatusCode.IDLE
}

const productDashboardSlice = createSlice({
    name: 'ALL_PRODUCT',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = StatusCode.IDLE
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
})

export default productDashboardSlice.reducer

export const getProducts = createAsyncThunk(
    'PRODUCT/get',
    async (category) => {
        console.log({ category })
        let allCategoryURL = 'https://fakestoreapi.com/products'
        let categoriesURL = `https://fakestoreapi.com/products/category/${category}`
        let apiURL = category ? categoriesURL : allCategoryURL;
        let respose = await fetch(apiURL)
        let result = await respose.json()
        console.log(result)
        return result
    }
)