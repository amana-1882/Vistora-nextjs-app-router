import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          VISTORA
        </Link>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-black font-medium">
            About
          </Link>
          <Link
            href="/product"
            className="text-gray-700 hover:text-black font-medium">
            Products
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black font-medium">
            Contact
          </Link>
        </div>
<div className="flex items-center justify-between px-6 py-4 gap-6">
  <Link
    href="/Cart"
    className="rounded-xl bg-black px-7 py-3 text-white">
    Cart
  </Link>
  <Link
    href="/login"
    className="rounded-xl bg-black px-7 py-3 text-white">
    Login
  </Link>
</div>
      </div>
    </nav>
  );
}