"use client";
import React from "react";
import Link from "next/link";
import AddToCartButton from "@/app/Cart/Addtocart/page";
export default function ProductCard({ product }: any) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain" />
      </div>
      <div className="p-5">
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>
        <p className="mb-3 text-sm capitalize text-gray-500">
          {product.category}
        </p>
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded bg-green-600 px-2 py-1 text-sm font-semibold text-white">
            {product.rating} ★
          </span>
          <span className="text-sm text-gray-500">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>
        <p className="mb-4 text-2xl font-bold text-gray-900">
          ${product.price}
        </p>
        <div className="flex gap-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-blue-700">
            View Details
          </Link>
          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail,
            }}
            className="w-full rounded-lg bg-black px-4 py-2.5 font-semibold text-white transition hover:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}
