'use client';

export default function ValuesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape our relationships with clients, 
            partners, and the community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Excellence', description: 'We strive for excellence in every service we provide.' },
            { title: 'Integrity', description: 'Honesty and transparency are the foundation of our business relationships.' },
            { title: 'Partnership', description: 'We view our relationship with clients as a long-term partnership.' },
            { title: 'Innovation', description: 'We continuously innovate our services and processes.' },
            { title: 'Results', description: 'We are committed to delivering measurable results.' },
            { title: 'Trust', description: 'Building and maintaining trust is central to our approach.' }
          ].map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
