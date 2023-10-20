import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";
import filterReducer from "./slice/filterProduct";
import cartReducer from "./slice/cart";
export const store = configureStore({
  reducer: {
    listProduct: productReducer,
    listFilter: filterReducer,
    cart: cartReducer,
  },
});
