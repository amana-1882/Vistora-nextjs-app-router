import Navbar from "./navbar/page";
import image from "./images/photo.png";
export default function Home() {
  return (
    <>
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src={image.src}
            alt="VISTORA"
            className="mx-auto w-full max-w-5xl h-auto rounded-lg shadow-lg"/>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-10">
            Welcome to VISTORA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 max-w-2xl mx-auto">
            Elevate your everyday style with premium products,
            modern designs, and quality you can trust.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/product"
              className="bg-black text-white px-8 py-3 rounded-lg
              hover:bg-gray-800 transition">
              Shop Now
            </a>
            <a
              href="/about"
              className="border border-black px-8 py-3 rounded-lg
              hover:bg-black hover:text-white transition">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose VISTORA?
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            At VISTORA, we bring together style, quality, and convenience
            to create a better shopping experience. Explore our collection
            and find products that fit your lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold">
                Premium Quality
              </h3>
              <p className="text-gray-600 mt-3">
                Carefully selected products made with quality and style
                in mind.
              </p>
            </div>
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-3">
                Get your favorite products delivered quickly and safely
                to your doorstep.
              </p>
            </div>
            <div className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 mt-3">
                We focus on providing a simple and enjoyable shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 text-center mt-3">
            Find something perfect for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-white p-8 rounded-xl text-center shadow hover:shadow-xl transition">
              <div className="text-5xl">👕</div>
              <h3 className="text-xl font-bold mt-4">
                Fashion
              </h3>
              <p className="text-gray-500 mt-2">
                Discover the latest styles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow hover:shadow-xl transition">
              <div className="text-5xl">💻</div>
              <h3 className="text-xl font-bold mt-4">
                Electronics
              </h3>
              <p className="text-gray-500 mt-2">
                Smart products for modern life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow hover:shadow-xl transition">
              <div className="text-5xl">🏠</div>
              <h3 className="text-xl font-bold mt-4">
                Home
              </h3>
              <p className="text-gray-500 mt-2">
                Make your home more beautiful.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow hover:shadow-xl transition">
              <div className="text-5xl">🐾</div>
              <h3 className="text-xl font-bold mt-4">
                Pet Care
              </h3>
              <p className="text-gray-500 mt-2">
                Everything your pets need.
              </p>
            </div>
          </div>
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
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-3 mt-7">    
          </div>
        </div>
      </section>
    </>
  );
}