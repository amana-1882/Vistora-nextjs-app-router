import Navbar from "../navbar/page";
export default function Contact() {
  return (
    <>
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mt-5">
            We would love to hear from you. Get in touch with VISTORA.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>
            <p className="text-gray-600 mt-5 leading-7">
              Have a question about our products or your order?
              Our team is here to help. Send us a message and
              we will get back to you as soon as possible.
            </p>
            <div className="flex items-start gap-4 mt-8">
              <div className="text-3xl">
                📧
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Email
                </h3>
                <p className="text-gray-600">
                  support@vistora.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
              <div className="text-3xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
              <div className="text-3xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Address
                </h3>
                <p className="text-gray-600">
                  VISTORA Shopping Center
                  <br />
                  Kerala, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-6">
              <div className="text-3xl">
                🕒
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-5">
                <label className="block font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg
                  px-4 py-3 outline-none focus:border-black"/>
              </div>
              <div className="mb-5">
                <label className="block font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg
                  px-4 py-3 outline-none focus:border-black"/>
              </div>
              <div className="mb-5">
                <label className="block font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg
                  px-4 py-3 outline-none focus:border-black"/>
              </div>
              <div className="mb-5">
                <label className="block font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg
                  px-4 py-3 outline-none focus:border-black resize-none"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3
                rounded-lg font-semibold hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-5">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                How can I place an order?
              </h3>
              <p className="text-gray-600 mt-2">
                Browse our Products page, select your product,
                and follow the available shopping options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                How can I contact customer support?
              </h3>
              <p className="text-gray-600 mt-2">
                You can contact us using the email address,
                phone number, or contact form above.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                What are your working hours?
              </h3>
              <p className="text-gray-600 mt-2">
                Our support team is available Monday to Saturday,
                from 9:00 AM to 6:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}