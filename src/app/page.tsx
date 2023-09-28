import Link from 'next/link';
import { indieFlower } from './utility/fonts';

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className={`${indieFlower.className} text-6xl`}>Welcome</h1>
        <div className={`${indieFlower.className} flex gap-4 text-4xl`}>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>
    </>
  );
}
