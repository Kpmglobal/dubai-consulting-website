'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useScrollAnimation, scrollAnimationClasses } from '@/hooks/useScrollAnimation'
import { Building2, Scale, Calculator, Plane, TrendingUp, Users, ArrowRight } from 'lucide-react'

const Services: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation()
  const t = useTranslations()
  const locale = useLocale()

  const services = [
    {
      icon: Building2,
      title: t('services.businessSetup.title'),
      description: t('services.businessSetup.description'),
      href: `/${locale}/services/company-formation`
    },
    {
      icon: Scale,
      title: t('services.legalServices.title'),
      description: t('services.legalServices.description'),
      href: `/${locale}/services/legal-services`
    },
    {
      icon: Calculator,
      title: t('services.taxAccounting.title'),
      description: t('services.taxAccounting.description'),
      href: `/${locale}/services/tax-accounting`
    },
    {
      icon: Plane,
      title: t('services.visaServices.title'),
      description: t('services.visaServices.description'),
      href: `/${locale}/services/visa-services`
    },
    {
      icon: TrendingUp,
      title: t('services.investment.title'),
      description: t('services.investment.description'),
      href: `/${locale}/services/investment`
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      href: `/${locale}/services/consulting`
    }
  ]

  return (
    <section ref={elementRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 ${scrollAnimationClasses.fadeInUp(isVisible)}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('services.sectionTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.sectionDescription')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card hover:shadow-xl transition-all duration-300 group ${scrollAnimationClasses.fadeInUp(isVisible, index * 100)}`}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`text-center mt-16 ${scrollAnimationClasses.fadeInUp(isVisible, 600)}`}>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('services.ctaTitle')}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('services.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="btn-primary group hover:scale-105 transition-transform duration-300"
              >
                {t('services.ctaButton')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="btn-outline group hover:scale-105 transition-transform duration-300"
              >
                {t('services.viewAllButton')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
