'use client';

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-custom text-center">
        <h2 className="text-responsive-lg font-bold text-white mb-6">
          Ready to Start Your Business in Dubai?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your business goals and discover how our expert team can help 
          you achieve success in the UAE market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
