import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartslices",
  initialState: {
    value: 0,
    shopingcart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      let check = state.shopingcart.filter(
        (item) => item.id == action.payload.id
      );

      console.log(check);
      if (!check.length == 0) {
        console.log("exist in the Cart");
      } else {
        state.shopingcart.push(action.payload);
      }
    },
    addmoreitem: (state, action) => {
      let id = action.payload.id;
      let product = state.shopingcart.filter((item) => item.id === id);
      product[0].qty++;
    },

    isincart: (state, action) => {
      let check = state.shopingcart.filter(
        (item) => item.id == action.payload.id
      );

      if (!check.length === 0) {
        return false;
      } else {
        return true;
      }
    },

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addtocart,
  addmoreitem,
  isincart,
} = cartSlice.actions;

export default cartSlice.reducer;
