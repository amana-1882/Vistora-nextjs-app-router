import ProductCard from "../components/product-card/ProductCard";
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.products;
}
export default async function Products() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Product List
        </h1>
        <p className="mb-8 text-gray-500">
          Explore our latest products
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}/>
          ))}
        </div>
      </div>
    </main>
  );
}
