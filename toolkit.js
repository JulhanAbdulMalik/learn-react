import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
// Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state) => {
    state.status = true;
  });
});

// Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("Create Store: ", store.getState());

// Subscribe
store.subscribe(() => {
  console.log("Subscribe: ", store.getState());
});

// Dispatch
store.dispatch(addToCart({ id: 1, name: "Product 1" }));
store.dispatch(login());
