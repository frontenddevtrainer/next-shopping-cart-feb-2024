import { AlbumResponse } from "@/app/models/AlbumResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { placeorderRequest } from "../thunk/placeorder";

export interface CartState {
  items: AlbumResponse[];
  placeorder: {
    loading: boolean;
    data: any;
    error: any;
  };
}
const initialState: CartState = {
  items: [],
  placeorder: {
    loading: false,
    data: null,
    error: null,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AlbumResponse>) => {
      state.items.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(placeorderRequest.pending, (state)=>{
      state.placeorder.loading = true;
    }),
    builder.addCase(placeorderRequest.fulfilled, (state, action)=>{
      state.placeorder.loading = false;
      state.placeorder.data = action.payload;
    }),
    builder.addCase(placeorderRequest.rejected, (state, action)=>{
      state.placeorder.loading = false;
      state.placeorder.error = action.payload;
    })
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
