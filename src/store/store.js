import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productDashboardSlice from "./ProductDashboardStore/ProductDashboardSlice";
import productSlice from "./ProductSlice";
import productCategoriesSlice from "./ProductDashboardStore/ProductCategoriesSlice";
import loginSlice from "./LoginSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice,
        ALL_PRODUCT: productDashboardSlice,
        PRODUCT: productSlice,
        ALL_CATEGORIES: productCategoriesSlice,
        LOGIN: loginSlice
    }
})

export default store