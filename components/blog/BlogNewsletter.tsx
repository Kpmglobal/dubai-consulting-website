'use client';

export default function BlogNewsletter() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Get the latest business insights, regulatory updates, and expert advice 
          delivered directly to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
