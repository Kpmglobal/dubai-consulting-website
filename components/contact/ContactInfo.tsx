'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Al Twar, Dubai, UAE',
      description: 'Located in the vibrant Al Twar district of Dubai'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+971-552490091',
      description: 'Available during business hours for inquiries'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@kpmglobal.ae',
      description: 'We respond within 2 hours during business hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday to Friday: 10:00 AM - 6:00 PM',
      description: 'UTC/GMT +4 hours, Saturday: Appointments Only'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Contact Information
        </h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {info.title}
                </h3>
                <p className="text-primary-600 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Business Hours
        </h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-medium">10:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-medium">Appointments Only</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="font-medium">Closed</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-800">
            <strong>Note:</strong> All times are in UTC/GMT +4 hours (Dubai time)
          </p>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Need Immediate Assistance?</h3>
        </div>
        <p className="text-primary-100 mb-4">
          For urgent inquiries or immediate consultation, please call us directly or send us an email.
        </p>
        <div className="space-y-2">
          <a 
            href="tel:+971-552490091"
            className="flex items-center space-x-2 text-white hover:text-primary-100 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>+971-552490091</span>
          </a>
          <a 
            href="mailto:info@kpmglobal.ae"
            className="flex items-center space-x-2 text-white hover:text-primary-100 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>info@kpmglobal.ae</span>
          </a>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          About KPM Global Services
        </h3>
        <p className="text-gray-600 mb-4">
          We are a leading business consulting firm in Dubai, specializing in company formation, 
          legal services, and business setup for entrepreneurs and companies looking to establish 
          their presence in the UAE.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Experience:</span>
            <p className="text-gray-600">15+ Years</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Companies Formed:</span>
            <p className="text-gray-600">500+</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Success Rate:</span>
            <p className="text-gray-600">100%</p>
          </div>
          <div>
            <span className="font-medium text-gray-700">Languages:</span>
            <p className="text-gray-600">EN, RU, TR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
