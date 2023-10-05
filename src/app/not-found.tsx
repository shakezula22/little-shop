import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-[40rem] p-5 relative">
      <Image
        src="/error.jpg"
        alt="plant in vase"
        fill
        className="object-cover"
      />
      <div className="absolute flex flex-col items-center top-40 right-40">
        <h1 className="text-6xl py-5">Page Not Found</h1>
        <Link href="/" passHref>
          <button className="border rounded bg-stone-800 hover:bg-stone-700 text-stone-300 p-2">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
