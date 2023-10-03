import Link from 'next/link';
import AddCartButton from '@/app/components/AddToCartForm';
import Image from 'next/image';
import { indieFlower } from '@/app/utility/fonts';
import NavBar from '@/app/components/NavBar';

type Props = {
  params: {
    categories: string;
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

async function getProducts(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.json();
}

export default async function ShopByCategory({ params }: Props) {
  const products = await getProducts(params.categories);
  return (
    <>
      <header className="flex justify-between items-center mt-5 mb-6">
        <h1 className={`${indieFlower.className} text-6xl`}>
          {decodeURIComponent(params.categories)}
        </h1>
        <NavBar />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((item: Product) => (
          <div
            key={item.id}
            className="relative border flex flex-col bg-white p-4 hover:scale-95 hover:shadow-lg"
          >
            <Link href={`/products/${item.id}`}>
              <div className="my-5">
                <div className="px-2 pt-2 pb-1 relative w-64 h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    className="object-contain"
                    alt={item.title}
                  ></Image>
                </div>
                <div className="p-2">
                  <h2 className="font-semibold">{item.title}</h2>
                  <h3>${item.price.toFixed(2)}</h3>
                </div>
              </div>
            </Link>
            <div className="mt-5 static">
              <AddCartButton item={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
