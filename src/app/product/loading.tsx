function ProductCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl bg-white shadow-md" >
      <div className="h-64 animate-pulse bg-gray-200" />
      <div className="space-y-4 p-5">
        <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="h-8 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="flex gap-2 pt-1">
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
export default function Loading() {
  return (
    <main
      className="min-h-screen bg-gray-100 px-6 py-10"
      aria-busy="true"
      aria-label="Loading products">
      <div className="mx-auto max-w-7xl">
        <div aria-hidden="true" className="mb-8 space-y-3">
          <div className="h-9 w-56 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-64 animate-pulse rounded bg-gray-200" />
        </div>
        <p className="sr-only" role="status">
          Loading products...
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
