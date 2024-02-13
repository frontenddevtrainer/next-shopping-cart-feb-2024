"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { placeorderRequest } from "@/lib/thunk/placeorder";

const AlbumPage: React.FC = ({}) => {
  const items = useAppSelector((state) => {
    return state.cart.items;
  });

  const dispatch = useAppDispatch();

  function placeorder(){
    dispatch(placeorderRequest(items))
  }

  return (
    <>
      <div className="p-10">
        {items &&
          items.length > 0 &&
          items.map((item) => {
            console.log(item);
            return <li>{item.album?.name}</li>;
          })}
          <button className="bg-grey border p-2" onClick={placeorder}>Place order</button>
      </div>
    </>
  );
};
export default AlbumPage;
