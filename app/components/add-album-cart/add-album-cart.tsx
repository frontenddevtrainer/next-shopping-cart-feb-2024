"use client";

import { AlbumResponse } from "@/app/models/AlbumResponse";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cart";
export interface AddAlbumCartProps {
  album: AlbumResponse;
}

const AddAlbumCart: React.FC<AddAlbumCartProps> = ({ album }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToCart(album));
      }}
      className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300"
    >
      Add to Cart
    </button>
  );
};

export default AddAlbumCart;
