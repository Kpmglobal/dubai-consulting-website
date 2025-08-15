'use client';

export default function ServicePricing() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that best fits your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-soft border-2 border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
            <div className="text-3xl font-bold text-primary-600 mb-6">AED 2,500</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Basic setup assistance
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Document preparation
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Government submission
              </li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
            <div className="text-3xl font-bold text-primary-600 mb-6">AED 4,500</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Everything in Basic
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Bank account assistance
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Ongoing support
              </li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-soft border-2 border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium</h3>
            <div className="text-3xl font-bold text-primary-600 mb-6">AED 7,500</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Everything in Professional
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Tax planning
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                Dedicated consultant
              </li>
            </ul>
            <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
