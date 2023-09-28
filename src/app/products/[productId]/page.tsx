import AddCartButton from '@/app/components/AddToCartForm';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="h-screen">
      <header className="flex justify-between items-center mb-4 py-5">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-5 p-5 h-4/6">
        <div className="relative">
          <Image
            src={item.image}
            fill
            className="object-contain"
            priority
            alt={item.title}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{item.title}</h1>

          <h2>${item.price.toFixed(2)}</h2>
          <p>{item.description}</p>
          <div className="relative p-2 w-full h-16">
            <AddCartButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
