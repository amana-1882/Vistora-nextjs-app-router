"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
type CartItem = {
id: number;
title: string;
price: number;
image: string;
quantity: number;
};
export default function CartPage() {
const [cartItems, setCartItems] = useState<CartItem[]>([]);
useEffect(() => {
const savedCart = localStorage.getItem("cart");
if (savedCart) {
  setCartItems(JSON.parse(savedCart));
}
}, []);
const updateCart = (items: CartItem[]) => {
setCartItems(items);
localStorage.setItem("cart", JSON.stringify(items));
};
const increaseQuantity = (id: number) => {
updateCart(
cartItems.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};
const decreaseQuantity = (id: number) => {
updateCart(
cartItems
.map((item) =>
item.id === id
? { ...item, quantity: item.quantity - 1 }
: item
)
.filter((item) => item.quantity > 0)
);
};
const removeItem = (id: number) => {
updateCart(cartItems.filter((item) => item.id !== id));
};
const total = cartItems.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);
return ( <main className="min-h-screen bg-gray-100 px-5 py-10"> <div className="mx-auto max-w-6xl"> <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
    {cartItems.length === 0 ? (
      <div className="rounded-xl bg-white p-10 text-center">
        <h2 className="mb-4 text-xl font-semibold">
          Your cart is empty
        </h2>
        <Link
          href="/product"
          className="rounded-lg bg-black px-6 py-3 text-white">
          Continue Shopping
        </Link>
      </div>
    ) : (
      <div className="grid gap-8 md:grid-cols-3">
        <section className="space-y-4 md:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-28 w-28 object-contain"/>
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-600">
                  ₹{(item.price * 85).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded border px-3 py-1">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded border px-3 py-1">
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600">
                Remove
              </button>
            </div>
          ))}
        </section>
        <section className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold">Order Summary</h2>
          <div className="mb-4 flex justify-between">
            <span>Items</span>
            <span>
              {cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </span>
          </div>
          <div className="mb-4 flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <hr className="my-4" />
          <div className="mb-6 flex justify-between font-bold">
            <span>Total</span>
            <span>
              ₹{(total * 85).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <Link
            href="/checkout"
            className="block w-full rounded-lg bg-black py-3 text-center text-white">
            Proceed to Checkout
          </Link>
          <Link
            href="/product"
            className="mt-5 block text-center text-gray-600 hover:underline">
            Continue Shopping
          </Link>
        </section>
      </div>
    )}
  </div>
</main>
);
}
