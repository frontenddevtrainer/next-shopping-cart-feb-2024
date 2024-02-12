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
    addToCart: (state, payload: PayloadAction<AlbumResponse>) => {
      state.items.push(payload as unknown as AlbumResponse);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
