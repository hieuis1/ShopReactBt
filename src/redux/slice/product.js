import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk("fetch product", () => {
  let data = axios
    .get("https://652382a9f43b179384158611.mockapi.io/shoes")
    .then((data) => {
      return data.data;
    });
  return data;
});
const initialState = {
  listProduct: [],
  cartProduct: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.listProduct = action.payload;
    });
  },
});

export const {} = product.actions;

export default product.reducer;
