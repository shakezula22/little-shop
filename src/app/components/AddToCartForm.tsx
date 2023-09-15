'use client';

import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../store/cart-store/cart-context';

type CartProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default function AddCartButton(props: CartProps) {
  const { addToCart } = useContext(CartContext);
  const [addQuantity, setAddQuantity] = useState('');

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(addQuantity);
    addToCart({
      ...props,
      quantity: +addQuantity,
    });
  };

  return (
    <form className="m-2" onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="quantity">
          QTY
          <input
            type="number"
            id="quantity"
            value={addQuantity}
            onChange={event => setAddQuantity(event.target.value)}
          ></input>
        </label>
      </div>
      <button className="border bg-stone-800 text-stone-300 p-2" type="submit">
        Add to Cart
      </button>
    </form>
  );
}
