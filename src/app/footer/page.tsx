import React from 'react'
function footer() {
  return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold">
            VISTORA
          </h2>
          <p className="text-gray-400 mt-3">
            Elevate your everyday.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Products</a>
            <a href="/contact">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2026 VISTORA. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
export default footer