'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

export default function AboutContent() {
  const t = useTranslations();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted Partner in UAE Business Success
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2009, KPM Global Services began with a simple mission: to simplify the
              complex process of business setup in the UAE and provide comprehensive support to
              entrepreneurs and companies looking to establish their presence in this dynamic market.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we've grown from a small consultancy to a full-service business
              solutions provider, helping over 500 companies successfully establish and operate
              in the UAE. Our expertise spans across all aspects of business formation, legal
              compliance, and ongoing operational support.
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">15+ Years of Experience</h3>
                  <p className="text-gray-600">Deep understanding of UAE business regulations and market dynamics</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">500+ Successful Setups</h3>
                  <p className="text-gray-600">Proven track record of helping businesses establish in the UAE</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Multi-Language Support</h3>
                  <p className="text-gray-600">Services available in English, Russian, and Turkish</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">100% Success Rate</h3>
                  <p className="text-gray-600">Committed to ensuring every client achieves their business goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600 p-8">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-4xl font-bold">KPM</span>
                  </div>
                  <p className="font-medium text-xl text-gray-700">KPM Global Services</p>
                  <p className="text-sm text-gray-500">Your Business Success Partner</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
