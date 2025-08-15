'use client';

export default function TeamSection() {
  return (
    <section className="section-padding bg-white" id="team">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of professionals brings together decades of experience in UAE business 
            law, finance, and international business development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Ahmed Al Rashid', role: 'Managing Director', expertise: 'Business Strategy & UAE Regulations' },
            { name: 'Elena Petrova', role: 'Legal Director', expertise: 'International Business Law' },
            { name: 'Mehmet Yilmaz', role: 'Financial Director', expertise: 'Tax Planning & Accounting' }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
