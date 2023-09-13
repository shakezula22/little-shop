'use client';

import { ReactNode } from 'react';
import { CartProvider } from './cart-context';

type CartProviderProps = {
  children: ReactNode;
};

export function Provider({ children }: CartProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}
