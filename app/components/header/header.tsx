"use client";
import { useState } from "react";
import HeaderPopup from "../header-popup/header-popup";
// import { useAppSelector } from "@/lib/hooks"
import Link from "next/link";
import usePopupState from "@/app/hooks/usePopupState";

import { useCartContext } from "@/app/hooks/useCart";
const Header = () => {
  const [showPopup, setShowPopup] = usePopupState(false);
  const { items } = useCartContext();

  // Redux
  // const cartItems = useAppSelector(({ cart })=>{
  //   return cart.items
  // })

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">
        <Link href={"/"}>Music Store</Link>
      </h1>
      <div className="flex items-center">
        <Link href="/cart" className="mr-6">
          <span className="material-icons"> shopping_cart</span>
          {/* Redux */}
          {/* {cartItems.length} */}
          {items.length}
        </Link>

        <div className="relative inline-block text-left">
          <button
            onClick={() => {
              setShowPopup(!showPopup);
            }}
            type="button"
            className="inline-flex items-center"
          >
            <span className="material-icons"> account_circle </span>
            <span className="ml-2">Profile</span>
            <span className="material-icons"> arrow_drop_down </span>
          </button>
          {showPopup && <HeaderPopup />}
        </div>
      </div>
    </header>
  );
};

export default Header;
