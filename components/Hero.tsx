'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20 animate-pulse delay-2000"></div>

      <div className="relative z-10 container-custom text-center px-4">
        {/* Company Logo/Brand */}
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Professional Business Consulting & Company Formation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            in Dubai, UAE
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
            <Phone className="w-5 h-5 text-primary-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold text-gray-900">+971-552490091</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
            <Mail className="w-5 h-5 text-primary-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-900">info@kpmglobal.ae</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
            <Clock className="w-5 h-5 text-primary-600" />
            <div className="text-left">
              <p className="text-sm text-gray-500">Working Hours</p>
              <p className="font-semibold text-gray-900">Mon-Fri: 10AM-6PM</p>
              <p className="text-xs text-gray-500">UTC/GMT +4</p>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href={`/${locale}/contact`}
            className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          
          <Link 
            href={`/${locale}/services`}
            className="btn-secondary text-lg px-8 py-4"
          >
            View Our Services
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Companies Formed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Saturday Notice */}
        <div className="mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg max-w-md mx-auto">
          <p className="text-primary-800 font-medium">
            📅 Saturday: Appointments Only
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
