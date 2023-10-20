import { createSlice } from "@reduxjs/toolkit";
import product from "./product";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      let index = state.cart.findIndex((item) => item.id == id);
      if (index < 0) {
        state.cart.push({ ...action.payload, quantityShop: 1 });
        toast.success("Add product to cart");
      } else {
        state.cart[index].quantityShop++;
        toast.success("Increase quantity by 1");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      let data = state.cart.filter((item) => item.id != id);
      state.cart = data;
      toast.success("Remove product successfully");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      let index = state.cart.findIndex((item) => item.id == id);
      state.cart[index].quantityShop++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      let index = state.cart.findIndex((item) => item.id == id);
      if (state.cart[index].quantityShop == 1) {
        let data = state.cart.filter((item) => item.id != id);
        state.cart = data;
      } else {
        state.cart[index].quantityShop--;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addCartDetail: (state, action) => {
      const { item, quantity } = action.payload;
      let index = state.cart.findIndex((ele) => ele.id == item.id);
      if (index < 0) {
        state.cart.push({ ...item, quantityShop: quantity });
        toast.success("Add product to cart");
      } else {
        state.cart[index].quantityShop += quantity;
        toast.success("Increase quantity");
      }
    },
    countTotal: (state, action) => {
      let sum = 0;
      state.cart.forEach((element) => {
        sum += element.quantityShop * element.price;
      });
      state.total = sum;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  removeCart,
  addCartDetail,
  countTotal,
} = cart.actions;

export default cart.reducer;
