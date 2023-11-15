import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

const initialState = {
    productData: {},
    status: 'idle'
}

const productSlice = createSlice({
    name: 'PRODUCT',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductDetail.pending, (state, action) => {
                state.status = StatusCode.LOADING
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.status = StatusCode.IDLE;
                state.productData = action.payload
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.status = StatusCode.ERROR
            })
    }
})

export default productSlice.reducer

export const getProductDetail = createAsyncThunk(
    'PRODUCT_DETAIL/GET', async (id) => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await data.json();
        return result
    }
)
