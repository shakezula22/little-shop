import Link from 'next/link';

type Props = {
  params: {
    productId: string;
  };
};

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export default async function ProductPage({ params }: Props) {
  const item = await getProduct(+params.productId);
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">{item.title}</h1>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>
      <h2>${item.price}</h2>
      <p>{item.description}</p>
    </>
  );
}
