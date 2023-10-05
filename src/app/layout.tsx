import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from './store/cart-store/cart-context';
import { inter, indieFlower } from './utility/fonts';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Little Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-stone-50 text-stone-800 mx-auto p-4`}
      >
        {/* {children} */}
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
