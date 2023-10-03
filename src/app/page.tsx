import Link from 'next/link';
import { indieFlower } from './utility/fonts';
import Image from 'next/image';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-10 mt-5">
        <h1 className={`${indieFlower.className} text-6xl`}>Welcome</h1>
        <NavBar />
      </header>
      <div
        className={`${indieFlower.className} flex flex-col h-[70rem] w-auto`}
      >
        <div className="w-full h-1/3 relative overflow-hidden">
          <Image
            src="/shopping.jpg"
            alt="woman with shopping bags"
            fill
            className="object-cover"
            priority
          />
          <span
            className={`${indieFlower.className} absolute top-10 left-10 text-4xl`}
          >
            Shop Your Favorites!
          </span>
        </div>
        <div className="flex justify-around items-center w-full bg-stone-800 text-stone-50 h-2/5 my-5 pt-3">
          <Link
            href="/shop/electronics"
            className="flex flex-col h-full justify-center py-2 text-center"
          >
            <div className="bg-blue-100 w-64 h-80 relative my-2 peer">
              <Image
                src="/electronics.jpg"
                alt="electronics"
                fill
                className="object-cover hover:scale-110"
              />
            </div>
            <span className="text-4xl py-3 mt-2 peer-hover:scale-125 hover:scale-125">
              Electronics
            </span>
          </Link>
          <Link
            href="/shop/jewelery"
            className="flex flex-col h-full justify-center py-2 text-center"
          >
            <div className="bg-blue-100 w-64 h-80 relative my-2 peer">
              <Image
                src="/jewelery.jpg"
                alt="silver necklace"
                fill
                className="object-cover hover:scale-110"
              />
            </div>
            <span className="text-4xl py-3 mt-2 peer-hover:scale-125 hover:scale-125">
              Jewelery
            </span>
          </Link>
          <Link
            href="/shop/men's clothing"
            className="flex flex-col h-full justify-center py-2 text-center"
          >
            <div className="bg-blue-100 w-64 h-80 relative my-2 peer">
              <Image
                src="/mens-clothes.jpg"
                alt="man in black clothes"
                fill
                className="object-cover hover:scale-110"
              />
            </div>
            <span className="text-4xl py-3 mt-2 peer-hover:scale-125 hover:scale-125">
              Men's Clothing
            </span>
          </Link>

          <Link
            href="/shop/women's clothing"
            className="flex flex-col h-full justify-center py-2 text-center"
          >
            <div className=" bg-blue-100 w-64 h-80 relative my-2 peer">
              <Image
                src="/womens-clothes.jpg"
                alt="women in black shirt"
                fill
                className="object-cover hover:scale-110"
              />
            </div>
            <span className="text-4xl py-3 mt-2 peer-hover:scale-125 hover:scale-125">
              Women's Clothing
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
