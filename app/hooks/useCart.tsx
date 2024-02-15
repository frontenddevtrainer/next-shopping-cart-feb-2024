"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";

export interface CartContext {
  items: any[];
  clearCart(): void;
  addItem(item: any): void;
  removeItem(id: number): void;
}

const contextDefault: CartContext = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
};

interface ProviderProp {
  children: ReactNode;
}

export const Context = createContext<CartContext>(contextDefault);

const CartProvider: React.FC<ProviderProp> = ({ children }) => {
  const [items, setItems] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems((prevState: any) => {
      return [...prevState, item];
    });
  };

  const removeItem = (id: number) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <Context.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </Context.Provider>
  );
};

const useCartContext = () => useContext(Context);

export { CartProvider, useCartContext };
