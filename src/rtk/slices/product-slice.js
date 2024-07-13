import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch(
      "https://api.easy-orders.net/api/v1/external-apps/products",
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

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      return actions.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
