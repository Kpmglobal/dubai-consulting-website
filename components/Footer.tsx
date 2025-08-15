'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.resources'), href: `/${locale}/resources` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ];

  const services = [
    { name: 'Company Formation', href: `/${locale}/services/company-formation` },
    { name: 'Legal Services', href: `/${locale}/services/legal-services` },
    { name: 'Tax & Accounting', href: `/${locale}/services/tax-accounting` },
    { name: 'Visa Services', href: `/${locale}/services/visa-services` },
    { name: 'Banking Solutions', href: `/${locale}/services/banking` },
    { name: 'Business Consulting', href: `/${locale}/services/consulting` },
  ];

  const resources = [
    { name: 'Business Guides', href: `/${locale}/resources` },
    { name: 'Legal Updates', href: `/${locale}/resources` },
    { name: 'Tax Information', href: `/${locale}/resources` },
    { name: 'Visa Requirements', href: `/${locale}/resources` },
    { name: 'Market Insights', href: `/${locale}/resources` },
  ];

  const company = [
    { name: 'About Us', href: `/${locale}/about` },
    { name: 'Our Team', href: `/${locale}/about` },
    { name: 'Careers', href: `/${locale}/about` },
    { name: 'Privacy Policy', href: `/${locale}/legal/privacy` },
    { name: 'Terms of Service', href: `/${locale}/legal/terms` },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="md" variant="white" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional business consulting and company formation services in Dubai, UAE. 
              We help entrepreneurs and businesses establish and grow their presence in the UAE market.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white font-medium">+971-552490091</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">info@kpmglobal.ae</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Working Hours</p>
                  <p className="text-white font-medium">Mon-Fri: 10:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 text-sm">UTC/GMT +4 hours</p>
                  <p className="text-gray-400 text-sm">Saturday: Appointments Only</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">Al Twar, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest business insights, legal updates, and market trends in the UAE.
            </p>
            <div className="max-w-md mx-auto flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-l-lg border-0 text-gray-900 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900" 
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} KPM Global Services. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
