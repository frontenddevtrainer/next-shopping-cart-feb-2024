"use client";
import { AlbumResponse } from "@/app/models/AlbumResponse";
import { useAppSelector } from "@/lib/hooks";

const AlbumPage: React.FC = ({}) => {
  const items = useAppSelector((state) => {
    return state.cart.items;
  });

  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item) => {
          console.log(item)
          return <li>{item.album?.name}</li>;
        })}
    </>
  );
};
export default AlbumPage;
