'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Ready to start your business journey in Dubai? Our expert team at KPM Global Services 
            is here to help you navigate the process and achieve your business goals in the UAE.
          </p>
          
          {/* Contact Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Phone className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-gray-900">+971-552490091</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Mail className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-900">info@kpmglobal.ae</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <MapPin className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-900">Dubai, UAE</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Hours</p>
              <p className="font-semibold text-gray-900">Mon-Fri 10AM-6PM</p>
            </div>
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-primary-800 font-medium">
              📅 Saturday: Appointments Only | UTC/GMT +4 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
