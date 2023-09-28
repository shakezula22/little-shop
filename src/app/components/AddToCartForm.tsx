'use client';

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../store/cart-store/cart-context';

type CartProps = {
  item: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  };
};

export default function AddCartButton(props: CartProps) {
  const { addToCart } = useContext(CartContext);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    addToCart({ ...props.item, quantity: 1 });
  };

  return (
    <form className="absolute bottom-1 left-1 m-2" onSubmit={onSubmitHandler}>
      <button
        className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2"
        type="submit"
      >
        + Add to Cart
      </button>
    </form>
  );
}
