"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};
type CartItem = CartProduct & {
  quantity: number;
};
export default function AddToCartButton({
  product,
  className,
}: {
  product: CartProduct;
  className: string;
}) {
  const [message, setMessage] = useState("");
  const router = useRouter();
  function addProduct() {
    try {
      const savedCart = window.localStorage.getItem("cart");
      const cart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];
      if (!Array.isArray(cart)) {
        throw new Error("The saved cart is invalid.");
      }
      const existingItem = cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      setMessage("Added to cart");
      router.push("/Cart");
    } catch (error) {
      console.error("Unable to add this product to the cart.", error);
      setMessage("Could not add to cart. Please try again.");
    }
  }
  return (
    <div className="flex-1">
      <button type="button" onClick={addProduct} className={className}>
        Add to Cart
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {message}
      </span>
    </div>
  );
}
