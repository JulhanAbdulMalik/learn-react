import { legacy_createStore } from "redux";

// Reducer / Pembuat
const cartReducer = (
  state = { cart: [{ id: 1, name: "Product 1" }] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store / Toko
const store = legacy_createStore(cartReducer);
console.log("Create Store: ", store.getState());

// Subscribe / Berlangganan
store.subscribe(() => {
  console.log("Subscribe: ", store.getState());
});

// Dispatch / Menugaskan
const action1 = { type: "ADD_TO_CART", payload: { id: 2, name: "Product 2" } };
store.dispatch(action1);
