'use client';

import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al Mansouri',
      position: 'CEO & Founder',
      company: 'TechStart Dubai',
      content: 'KPM Global Services made our business setup process incredibly smooth. Their expertise in UAE regulations saved us months of research and paperwork. Highly recommended!',
      rating: 5,
      avatar: '/avatars/ahmed.jpg',
      service: 'Company Formation'
    },
    {
      id: 2,
      name: 'Elena Petrova',
      position: 'Legal Director',
      company: 'EuroTrade Solutions',
      content: 'The team at KPM Global Services provided exceptional legal guidance during our expansion. Their knowledge of international business law is outstanding.',
      rating: 5,
      avatar: '/avatars/elena.jpg',
      service: 'Legal Services'
    },
    {
      id: 3,
      name: 'Mehmet Yilmaz',
      position: 'Managing Director',
      company: 'Construction Pro UAE',
      content: 'Setting up our construction company in Dubai was seamless thanks to KPM Global Services. They handled everything from licensing to visa applications.',
      rating: 5,
      avatar: '/avatars/mehmet.jpg',
      service: 'Business Setup & Visas'
    },
    {
      id: 4,
      name: 'Fatima Al Zahra',
      position: 'Finance Manager',
      company: 'Gulf Investments Ltd',
      content: 'KPM Global Services guided us through complex investment regulations. Their strategic advice helped us maximize our returns in the UAE market.',
      rating: 5,
      avatar: '/avatars/fatima.jpg',
      service: 'Investment Advisory'
    },
    {
      id: 5,
      name: 'David Chen',
      position: 'Operations Director',
      company: 'Asia-Pacific Trading',
      content: 'From company formation to operational setup, KPM Global Services provided comprehensive support. Their team is professional and responsive.',
      rating: 5,
      avatar: '/avatars/david.jpg',
      service: 'Business Consulting'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what entrepreneurs and business leaders say about working with KPM Global Services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Service Tag */}
              <div className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied entrepreneurs who chose KPM Global Services.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
