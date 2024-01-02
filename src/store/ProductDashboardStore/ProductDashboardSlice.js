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
                state.data = action.payload //stores the message used in Error object
                state.status = StatusCode.ERROR
            })
    }
})

export default productDashboardSlice.reducer

export const getProducts = createAsyncThunk(
    'PRODUCT/get',
    async (category, { rejectWithValue }) => {
        try {
            let allCategoryURL = 'https://fakestoreapi.com/products';
            let categoriesURL = `https://fakestoreapi.com/products/category/${category}`;
            let apiURL = category ? categoriesURL : allCategoryURL;
            let response = await fetch(apiURL);

            if (!response.ok) {
                throw new Error('Could not fetch the products!');
            }

            let result = await response.json();

            // Handle the case where the result array is empty
            if (result.length === 0) {
                throw new Error('No product found!');
            }

            return result;
        } catch (error) {
            // Use rejectWithValue to pass error information to the reducer
            return rejectWithValue(error.message);
        }
    }
);
