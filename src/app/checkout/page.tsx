import Link from "next/link";
export default function CheckoutPage() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-gray-100 px-5 py-12">
      <section className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Vistora checkout
        </p>
        <h1 className="text-3xl font-bold text-gray-900">
          Checkout is coming soon
        </h1>
        <p className="mt-4 leading-7 text-gray-600">
          Your cart is saved. Online checkout is not available yet.
        </p>
        <Link
          href="/Cart"
          className="mt-8 inline-flex rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
          Return to cart
        </Link>
      </section>
    </main>
  );
}
