import Navbar from "../navbar/page";
export default function About() {
  return (
    <>
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About VISTORA
          </h1>
          <p className="text-xl text-gray-600 mt-6">
            Elevate your everyday with quality, style, and convenience.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-7">
                VISTORA is a modern online shopping platform created
                to make your shopping experience simple, convenient,
                and enjoyable.
              </p>
              <p className="text-gray-600 leading-7 mt-5">
                We bring together a wide range of products in one place,
                helping customers discover products that match their
                lifestyle and everyday needs.
              </p>
              <p className="text-gray-600 leading-7 mt-5">
                Our goal is to provide quality products, an easy-to-use
                shopping experience, and reliable service for every
                customer.
              </p>
            </div>
            <div className="bg-black text-white rounded-2xl p-10">
              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>
              <p className="text-gray-300 mt-5 leading-7">
                Our mission is to make online shopping easier by
                providing customers with quality products, modern
                designs, and a smooth shopping experience.
              </p>
              <p className="text-gray-300 mt-5 leading-7">
                We believe that shopping should be simple,
                accessible, and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose VISTORA?
          </h2>
          <p className="text-gray-600 mt-4">
            We focus on creating a better shopping experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl">
                ✨
              </div>
              <h3 className="text-xl font-bold mt-5">
                Quality Products
              </h3>
              <p className="text-gray-600 mt-3">
                Discover products selected with quality and
                customer satisfaction in mind.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl">
                🛍️
              </div>
              <h3 className="text-xl font-bold mt-5">
                Easy Shopping
              </h3>
              <p className="text-gray-600 mt-3">
                Browse products and find what you need
                through a simple shopping experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-5xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold mt-5">
                Customer First
              </h3>
              <p className="text-gray-600 mt-3">
                We aim to make every customer's shopping
                journey comfortable and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Vision
          </h2>
          <p className="text-gray-600 text-lg leading-8 mt-6">
            We envision VISTORA as a trusted destination for
            modern online shopping, connecting customers with
            products that add value to their everyday lives.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Elevate Your Everyday
          </h2>
          <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
            Explore our latest collection and discover products
            designed to make every day a little better.
          </p>
          <a
            href="/product"
            className="inline-block mt-8 bg-white text-black
            px-8 py-3 rounded-lg font-semibold
            hover:bg-gray-200 transition">
            Explore Products
          </a>
        </div>
      </section>
    </>
  );
}