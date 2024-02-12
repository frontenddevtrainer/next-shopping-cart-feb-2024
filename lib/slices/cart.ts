import { AlbumResponse } from "@/app/models/AlbumResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: AlbumResponse[];
}
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AlbumResponse>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
