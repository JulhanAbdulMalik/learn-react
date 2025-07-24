import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("Create Store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Subscribe: ", store.getState());
});

// Dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 2, name: "Product 2" }));
