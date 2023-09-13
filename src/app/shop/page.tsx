import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

export default async function Shop() {
  const products = await getProducts();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Shop</h1>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-2">
        {products.map((item: Product) => (
          <Link href={`/products/${item.id}`}>
            <div className="border bg-white">
              <div>{item.title}</div>
              <div>{item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
