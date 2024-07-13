import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    const res = await fetch(
      `https://api.easy-orders.net/api/v1/external-apps/products/${productId}`,
      {
        headers: {
          "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
        },
      }
    );
    const data = await res.json();
    return data;
  }
);

const productDetailsSlice = createSlice({
  initialState: [],
  name: "productDetailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
