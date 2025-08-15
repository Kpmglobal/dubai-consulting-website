'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About KPM Global Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our journey, mission, and the dedicated team behind KPM Global Services. 
            We're committed to helping businesses thrive in the UAE market.
          </p>
        </div>
      </div>
    </section>
  );
}
