import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem: (state, action) => {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
    // },

    addItem: (state, action) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(obj => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    clearItem: state => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
