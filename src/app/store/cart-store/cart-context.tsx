'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  cartItems: CartProduct[];
  addToCart: (item: CartProduct) => void;
  removeFromCart: (item: CartProduct) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

export type CartProduct = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
};

export const CartContext = createContext({} as CartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  useEffect(() => {
    const localStorageStr = localStorage.getItem('cartItems');
    if (localStorageStr) {
      setCartItems(JSON.parse(localStorageStr));
    } else {
      setCartItems([]);
    }
  }, []);

  const addToCart = (item: CartProduct) => {
    const isItemInCart = cartItems.find(cartItem => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  const removeFromCart = (item: CartProduct) => {
    const isItemInCart = cartItems.find(cartItem => cartItem.id === item.id);

    if (isItemInCart?.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
