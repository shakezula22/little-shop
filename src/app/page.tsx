import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Welcome</h1>
        <div className="flex gap-4">
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>
    </>
  );
}
