import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cart";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
};

// getState
// dispatch

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
