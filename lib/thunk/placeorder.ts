import { createAsyncThunk } from "@reduxjs/toolkit";

export const placeorderRequest = createAsyncThunk<any, any>(
  "cart/PlaceOrder",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Network error");
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
