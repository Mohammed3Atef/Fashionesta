import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import productDetailsSlice from "./slices/product-details-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    productDetails: productDetailsSlice,
  },
});
