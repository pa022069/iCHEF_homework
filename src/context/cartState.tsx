import { createContext, useContext, useState, ReactNode } from "react";

type CartItems = Record<string, number>;

type TCartContext = {
  cart: CartItems;
  addToCart: (id: string, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<TCartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItems>({});

  const addToCart = (id: string, quantity: number = 1) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + quantity,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart 必須在 CartProvider 內使用");
  }
  return context;
};
