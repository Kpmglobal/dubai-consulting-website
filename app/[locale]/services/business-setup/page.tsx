import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Building2, CheckCircle, Clock, DollarSign, Users, Globe, Shield, ArrowRight, FileText, Banknote, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function BusinessSetupPage() {
  const services = [
    {
      title: 'Mainland Company Formation',
      description: 'Establish your business in Dubai mainland with full market access and local presence.',
      features: [
        '100% ownership for foreign investors',
        'Access to local and international markets',
        'Ability to trade directly with local companies',
        'No restrictions on business activities',
        'Local sponsor partnership available'
      ],
      duration: '3-4 weeks',
      startingPrice: 'AED 25,000',
      icon: Building2
    },
    {
      title: 'Free Zone Company Setup',
      description: 'Set up in Dubai\'s prestigious free zones with tax benefits and streamlined processes.',
      features: [
        '100% foreign ownership',
        'Zero corporate and personal tax',
        'Full repatriation of capital and profits',
        'Modern office facilities available',
        'Streamlined licensing process'
      ],
      duration: '2-3 weeks',
      startingPrice: 'AED 15,000',
      icon: Globe
    },
    {
      title: 'Offshore Company Formation',
      description: 'International business structure with privacy and tax optimization benefits.',
      features: [
        'Complete privacy and confidentiality',
        'No local tax obligations',
        'Minimal reporting requirements',
        'International banking access',
        'Asset protection benefits'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 8,000',
      icon: Shield
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We assess your business needs and recommend the optimal company structure.',
      icon: Users
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'We prepare and organize all required documents for company registration.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'We submit your application to the relevant authorities and track progress.',
      icon: ArrowRight
    },
    {
      step: '04',
      title: 'Company Registration',
      description: 'Once approved, we complete the registration and obtain your business license.',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Bank Account Setup',
      description: 'We assist with corporate bank account opening and financial setup.',
      icon: Banknote
    },
    {
      step: '06',
      title: 'Operational Setup',
      description: 'We help with office setup, visa applications, and operational requirements.',
      icon: Building2
    }
  ]

  const requirements = [
    'Passport copy of all shareholders',
    'Proof of address',
    'Business plan',
    'Bank reference letter',
    'Professional CV',
    'NOC from current employer (if applicable)'
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Business Setup Services</span>
              </div>
              <h1 className="text-responsive-xl font-bold text-gray-900 mb-6">
                Business Setup in Dubai
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Establish your business presence in Dubai with our comprehensive setup services. 
                From mainland to free zone, we handle all legal requirements and ensure a smooth setup process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get Free Consultation
                </Link>
                <button className="btn-outline">
                  Download Guide
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Building2 className="w-16 h-16 text-primary-600" />
                    </div>
                    <p className="font-medium">Dubai Business Setup</p>
                    <p className="text-sm">Professional & Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our Business Setup Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the business structure that best fits your needs and goals in the UAE market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{service.startingPrice}</span>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our 6-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've streamlined the business setup process to make it as simple and efficient as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-soft text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
                Required Documents
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                To ensure a smooth business setup process, please prepare the following documents. 
                Our team will guide you through any additional requirements based on your specific business type.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Start Your Application
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dubai?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Strategic location between East and West</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">100% foreign ownership allowed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Zero corporate and personal tax</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Modern infrastructure and facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Access to global markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold text-white mb-6">
            Ready to Start Your Business in Dubai?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful entrepreneurs who have established their businesses in Dubai 
            with our expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Free Consultation
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Download Free Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
