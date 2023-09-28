'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { CartContext } from '../store/cart-store/cart-context';
import Image from 'next/image';
import { indieFlower } from '../utility/fonts';

export default function Cart() {
  const { cartItems, clearCart, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const total = getCartTotal();

  async function handleCheckout() {
    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    const data = await res.json();

    window.location.href = data.url;
  }

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className={`${indieFlower.className} text-6xl`}>Your Cart</h1>
        <div className={`${indieFlower.className} flex gap-4 text-4xl`}>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </div>
      </header>
      <div className="flex flex-col">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="flex justify-between p-2 border bg-white"
          >
            <div className="flex gap-5">
              <div className="relative h-20 w-20">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    fill
                    className="object-contain"
                    alt={item.title}
                  />
                </Link>
              </div>
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
            <div className="flex justify-between w-1/6 h-20 items-center">
              <div className="text-left">${item.price.toFixed(2)}</div>
              <p>x</p>
              <div className="flex items-center h-10">
                <button
                  className="border rounded h-3/4 bg-stone-800 hover:bg-stone-700 text-stone-300 px-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <span className="flex border h-full px-2 items-center text-lg font-medium">
                  {item.quantity}
                </span>
                <button
                  className="border rounded h-3/4 bg-stone-800 hover:bg-stone-700 text-stone-300 px-2"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end border bg-white">
        <div>
          <h4>Cart Total</h4>
          <h2>{total.toFixed(2)}</h2>
        </div>
      </div>
      <div>
        <button
          className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button
          className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
