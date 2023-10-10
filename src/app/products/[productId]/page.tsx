import AddCartButton from '@/app/components/AddToCartForm';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';

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
    <div className="flex flex-col md:h-screen items-center">
      <header className="flex justify-between items-center mb-4 py-5">
        <NavBar />
      </header>
      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 my-5 p-5 h-[800px] sm:h-4/6">
        <div className="flex justify-center w-full pt-5 bg-white">
          <div className="h-64 w-64 relative">
            <Image
              src={item.image}
              fill
              className="object-contain"
              priority
              alt={item.title}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold mt-3">{item.title}</h1>

          <h2>${item.price.toFixed(2)}</h2>
          <p>{item.description}</p>
          <div className="relative w-full h-16">
            <AddCartButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}
