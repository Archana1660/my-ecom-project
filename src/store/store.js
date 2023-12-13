import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productDashboardSlice from "./ProductDashboardStore/ProductDashboardSlice";
import allProductDashboardSlice from "./ProductDashboardStore/AllProductDashboardSlice";
import productSlice from "./ProductSlice";
import productCategoriesSlice from "./ProductDashboardStore/ProductCategorieNameSlice";
import loginSlice from "./LoginSlice";

const store = configureStore({
    reducer: {
        CART: CartSlice,
        ALL_TYPES_OF_PRODUCT: allProductDashboardSlice,
        ALL_PRODUCT: productDashboardSlice,
        PRODUCT: productSlice,
        ALL_CATEGORIES: productCategoriesSlice,
        LOGIN: loginSlice
    }
})

export default store