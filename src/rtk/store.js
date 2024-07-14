import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import productDetailsSlice from "./slices/product-details-slice";
import wishlistSlice from "./slices/wishlist-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    productDetails: productDetailsSlice,
    wishList: wishlistSlice,
  },
});
