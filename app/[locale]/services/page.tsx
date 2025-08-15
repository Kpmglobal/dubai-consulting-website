'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Building2, Scale, Calculator, Plane, TrendingUp, Users, ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function ServicesPage() {
  const t = useTranslations()
  const locale = useLocale()

  const services = [
    {
      icon: Building2,
      title: t('services.businessSetup.title'),
      subtitle: 'Establish your business presence in Dubai',
      description: 'Comprehensive business setup services including mainland and free zone company formation, licensing, and operational setup.',
      features: [
        'Mainland Company Formation',
        'Free Zone Company Setup',
        'Offshore Company Formation',
        'Business Licensing',
        'Office Setup & Registration',
        'Corporate Bank Account Opening'
      ],
      duration: '2-4 weeks',
      startingPrice: 'AED 15,000',
      href: `/${locale}/services/company-formation`
    },
    {
      icon: Scale,
      title: t('services.legalServices.title'),
      subtitle: 'Expert legal guidance for your business',
      description: 'Comprehensive legal support including contract drafting, compliance, dispute resolution, and intellectual property protection.',
      features: [
        'Contract Drafting & Review',
        'Regulatory Compliance',
        'Dispute Resolution',
        'Intellectual Property',
        'Employment Law',
        'Corporate Governance'
      ],
      duration: '1-3 weeks',
      startingPrice: 'AED 8,000',
      href: `/${locale}/services/legal-services`
    },
    {
      icon: Calculator,
      title: t('services.taxAccounting.title'),
      subtitle: 'Financial compliance and optimization',
      description: 'Professional tax planning, VAT registration, accounting services, and financial optimization for UAE businesses.',
      features: [
        'Corporate Tax Planning',
        'VAT Registration & Filing',
        'Bookkeeping Services',
        'Audit & Assurance',
        'Payroll Management',
        'Financial Reporting'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 5,000',
      href: `/${locale}/services/tax-accounting`
    },
    {
      icon: Plane,
      title: t('services.visaServices.title'),
      subtitle: 'Streamlined visa solutions',
      description: 'Comprehensive visa services for entrepreneurs, employees, and families looking to establish residence in the UAE.',
      features: [
        'Investor Visa',
        'Employment Visa',
        'Family Visa',
        'Tourist Visa Extension',
        'Golden Visa',
        'Visa Renewal Services'
      ],
      duration: '2-6 weeks',
      startingPrice: 'AED 12,000',
      href: `/${locale}/services/visa-services`
    },
    {
      icon: TrendingUp,
      title: t('services.investment.title'),
      subtitle: 'Strategic investment opportunities',
      description: 'Expert guidance on investment opportunities in real estate, stocks, private equity, and other investment vehicles in the UAE.',
      features: [
        'Real Estate Investment',
        'Stock Market Investment',
        'Private Equity',
        'Mutual Funds',
        'Investment Portfolio Management',
        'Risk Assessment'
      ],
      duration: '1-4 weeks',
      startingPrice: 'AED 10,000',
      href: `/${locale}/services/investment`
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      subtitle: 'Strategic business guidance',
      description: 'Strategic consulting services to optimize operations, expand markets, and achieve sustainable growth in the UAE market.',
      features: [
        'Market Entry Strategy',
        'Business Process Optimization',
        'Digital Transformation',
        'Growth Strategy',
        'Performance Management',
        'Change Management'
      ],
      duration: '2-8 weeks',
      startingPrice: 'AED 20,000',
      href: `/${locale}/services/consulting`
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.sectionTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.sectionDescription')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-lg text-primary-600 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>From {service.startingPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('services.ctaTitle')}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {t('services.ctaDescription')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
            >
              {t('services.ctaButton')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
