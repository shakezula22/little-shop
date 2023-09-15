'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import { CartContext } from '../store/cart-store/cart-context';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

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
        <h1 className="text-2xl">Your Cart</h1>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-2">
        {cartItems.map(item => (
          <Link key={item.id} href={`/products/${item.id}`}>
            <div className="border bg-white">
              <div>{item.title}</div>
              <div>{item.price}</div>
            </div>
          </Link>
        ))}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
