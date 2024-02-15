"use client";

import { AlbumResponse } from "@/app/models/AlbumResponse";
// import { useAppDispatch } from "@/lib/hooks";
// import { addToCart } from "@/lib/slices/cart";
import { useCartContext } from "@/app/hooks/useCart";
export interface AddAlbumCartProps {
  album: AlbumResponse;
}

const AddAlbumCart: React.FC<AddAlbumCartProps> = ({ album }) => {
  // Redux
  // const dispatch = useAppDispatch();
  const { addItem, removeItem, clearCart } = useCartContext();

  return (
    <>
      <button
        onClick={() => {
          // Redux
          // dispatch(addToCart(album));
          addItem(album);
        }}
        className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300"
      >
        Add to Cart
      </button>

      <button onClick={()=>{
        clearCart()
      }}>Remove</button>
    </>
  );
};

export default AddAlbumCart;
