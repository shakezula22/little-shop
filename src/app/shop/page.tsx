import Link from 'next/link';
import AddCartButton from '../components/AddToCartForm';
import Image from 'next/image';
import { indieFlower } from '../utility/fonts';
import NavBar from '../components/NavBar';

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
  if (!res.ok) throw new Error('failed to fetch products');
  return res.json();
}

export default async function Shop() {
  const products = await getProducts();
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center text-center mb-10 md:mb-5 mt-5 px-5">
        <h1 className={`${indieFlower.className} mb-5 text-6xl`}>Shop All</h1>
        <NavBar />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((item: Product) => (
          <div
            key={item.id}
            className="relative border flex flex-col bg-white pl-6 pr-2 hover:scale-95 hover:shadow-lg"
          >
            <Link href={`/products/${item.id}`}>
              <div className="flex flex-col items-center my-5 ">
                <div className="px-2 pt-2 pb-1 relative w-44 h-44 lg:w-64 lg:h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    className="object-contain"
                    alt={item.title}
                    sizes="100vw"
                  ></Image>
                </div>
                <div className="p-2">
                  <h2 className="font-semibold">{item.title}</h2>
                  <h3 className=" pt-1 pb-4">${item.price.toFixed(2)}</h3>
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
