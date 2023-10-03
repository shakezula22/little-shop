import Link from 'next/link';
import { indieFlower } from '../utility/fonts';

export default function NavBar() {
  return (
    <div className={`${indieFlower.className} flex gap-4 text-4xl`}>
      <Link href="/" className="hover:scale-125">
        Home
      </Link>
      <Link href="/shop" className="hover:scale-125">
        Shop
      </Link>
      <Link href="/cart" className="hover:scale-125">
        Cart
      </Link>
    </div>
  );
}
