import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/app/Cart/Addtocart/page";
type Props = {
  params: Promise<{
    productId: string;
  }>;
};
async function getProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}
export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  const product = await getProduct(productId);
  if (!product) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/product"
          className="mb-6 inline-block rounded-lg bg-gray-800 px-5 py-2 text-white hover:bg-gray-700">
          ← Back to Products
        </Link>
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
          <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-10">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[450px] max-w-full object-contain"/>
          </div>
          <div className="p-8">
            <p className="mb-3 text-sm font-semibold uppercase text-blue-600">
              {product.category}
            </p>
            {product.brand && (
              <p className="mb-2 text-sm text-gray-500">
                Brand: {product.brand}
              </p>
            )}
            <h1 className="mb-5 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded bg-green-600 px-3 py-1 font-semibold text-white">
                {product.rating} ★
              </span>
              <span className="text-gray-500">
                {product.reviews?.length || 0} reviews
              </span>
            </div>
            <p className="mb-2 text-4xl font-bold text-gray-900">
              ${product.price}
            </p>
            {product.discountPercentage && (
              <p className="mb-6 text-green-600">
                {product.discountPercentage}% OFF
              </p>
            )}
            {/* Description */}
            <h2 className="mb-3 text-xl font-bold text-gray-800">
              Product Description
            </h2>
            <p className="mb-8 leading-7 text-gray-600">
              {product.description}
            </p>
            <p className="mb-6 font-semibold text-gray-700">
              Stock: {product.stock}
            </p>
            <div className="flex gap-4">
              <AddToCartButton
                product={{
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.thumbnail,
                }}
                className="w-full rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"/>
              <button className="flex-1 rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
