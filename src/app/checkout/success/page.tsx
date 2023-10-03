import Link from 'next/link';
import { indieFlower } from '@/app/utility/fonts';

export default function SuccessPage() {
  return (
    <div className="flex flex-col w-screen h-screen m-5 justify-center items-center">
      <header></header>
      <div className="">
        <h1 className={` ${indieFlower.className} text-5xl p-10`}>
          Thank You For Your Purchase!
        </h1>
        <div className="flex justify-center">
          <Link href="/" passHref>
            <button className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
