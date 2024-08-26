import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  //this reducer is responsible for app store update
  reducer: {
    cart: cartReducer,
  }
});

export default appStore;
