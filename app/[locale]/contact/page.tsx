import React from 'react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocation from '@/components/contact/GoogleMap';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us - KPM Global Services | Dubai Business Consulting',
  description: 'Get in touch with KPM Global Services for professional business consulting, company formation, and legal services in Dubai, UAE. Contact us today for a free consultation.',
  keywords: 'contact KPM Global Services, Dubai business consulting contact, company formation Dubai, legal services UAE contact',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our office in Al Twar, Dubai for a face-to-face consultation about your business needs.
            </p>
          </div>
          <OfficeLocation />
        </div>
      </section>
    </main>
  );
}
