import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFilter: [],
};

const filterProduct = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH: (state, action) => {
      const { product, search } = action.payload;
      if (search != "") {
        let data = product.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        state.listFilter = data;
      } else {
        state.listFilter = product;
      }
    },
    SORT_ITEM: (state, action) => {
      const { product, sort } = action.payload;
      let newData = [];
      if (sort == "") {
        newData = product;
      }
      if (sort == "low") {
        newData = product.slice().sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort == "high") {
        newData = product.slice().sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort == "a-z") {
        newData = product.slice().sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort == "z-a") {
        newData = product.slice().sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      state.listFilter = newData;
    },
  },
});

export const { FILTER_BY_SEARCH, SORT_ITEM } = filterProduct.actions;

export default filterProduct.reducer;
