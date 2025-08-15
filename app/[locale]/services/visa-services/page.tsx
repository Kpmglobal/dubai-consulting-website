import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Plane, Users, Building2, CheckCircle, Clock, DollarSign, ArrowRight, FileText, Shield, Globe, TrendingUp, Home } from 'lucide-react'
import Link from 'next/link'

export default function VisaServicesPage() {
  const visaTypes = [
    {
      title: 'Investor Visa',
      description: 'Visa for investors looking to establish or expand business operations in the UAE.',
      features: [
        'Property investment visa',
        'Business investment visa',
        'Golden Visa eligibility',
        'Long-term residency',
        'Family sponsorship',
        'Business ownership rights'
      ],
      duration: '2-4 weeks',
      startingPrice: 'AED 15,000',
      icon: TrendingUp
    },
    {
      title: 'Employment Visa',
      description: 'Work visas for professionals employed by UAE companies.',
      features: [
        'Skilled worker visas',
        'Professional visas',
        'Labor card processing',
        'Work permit renewal',
        'Visa transfer services',
        'Exit/re-entry permits'
      ],
      duration: '1-3 weeks',
      startingPrice: 'AED 8,000',
      icon: Users
    },
    {
      title: 'Family Visa',
      description: 'Family reunification visas for spouses, children, and dependents.',
      features: [
        'Spouse visa',
        'Children visa',
        'Parent visa',
        'Dependent visa',
        'Family residence permit',
        'Visa renewal services'
      ],
      duration: '2-3 weeks',
      startingPrice: 'AED 6,000',
      icon: Home
    },
    {
      title: 'Tourist Visa Extension',
      description: 'Extend your stay in the UAE with tourist visa extension services.',
      features: [
        'Visa extension processing',
        'Multiple entry visas',
        'Express processing',
        'Document assistance',
        'Compliance support',
        'Travel coordination'
      ],
      duration: '3-5 days',
      startingPrice: 'AED 2,500',
      icon: Plane
    },
    {
      title: 'Golden Visa',
      description: 'Premium long-term residency for investors, entrepreneurs, and professionals.',
      features: [
        '10-year residency',
        'Multiple entry privileges',
        'Family sponsorship',
        'Business ownership',
        'Tax benefits',
        'Premium services'
      ],
      duration: '4-8 weeks',
      startingPrice: 'AED 25,000',
      icon: Globe
    },
    {
      title: 'Visa Renewal Services',
      description: 'Comprehensive visa renewal and maintenance services.',
      features: [
        'Visa renewal processing',
        'Document updates',
        'Compliance checks',
        'Status maintenance',
        'Extension services',
        'Ongoing support'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 3,000',
      icon: FileText
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Visa Assessment',
      description: 'Evaluate your eligibility and determine the best visa type for your needs',
      duration: '1 day',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Gather and prepare all required documents for visa application',
      duration: '3-5 days',
      icon: Shield
    },
    {
      step: 3,
      title: 'Application Submission',
      description: 'Submit visa application to relevant authorities with proper documentation',
      duration: '1-2 days',
      icon: Building2
    },
    {
      step: 4,
      title: 'Processing & Approval',
      description: 'Monitor application progress and handle any additional requirements',
      duration: '1-4 weeks',
      icon: Clock
    },
    {
      step: 5,
      title: 'Visa Issuance',
      description: 'Receive visa and coordinate travel arrangements if needed',
      duration: '1-2 days',
      icon: CheckCircle
    },
    {
      step: 6,
      title: 'Post-Arrival Support',
      description: 'Assistance with arrival procedures and ongoing visa maintenance',
      duration: 'Ongoing',
      icon: Users
    }
  ]

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Specialized visa consultants with deep UAE immigration knowledge',
      icon: Users
    },
    {
      title: 'Fast Processing',
      description: 'Expedited processing times with priority handling',
      icon: Clock
    },
    {
      title: 'Document Support',
      description: 'Complete assistance with document preparation and verification',
      icon: FileText
    },
    {
      title: 'Compliance Assurance',
      description: 'Ensure full compliance with UAE immigration regulations',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support throughout the visa process',
      icon: Globe
    },
    {
      title: 'Success Guarantee',
      description: 'High success rate with comprehensive support and guidance',
      icon: CheckCircle
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-secondary-800 to-accent-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Visa Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Visa Services for UAE
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Navigate UAE immigration with confidence. Our expert team provides comprehensive 
              visa services for investors, professionals, and families looking to establish residence in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Visa Consultation
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Visa Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of visa services to meet all your UAE immigration needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <visa.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{visa.title}</h3>
                  <p className="text-gray-600 mb-6">{visa.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {visa.duration}
                    </div>
                    <div className="text-lg font-bold text-primary-600">
                      {visa.startingPrice}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Visa Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your visa application is processed efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center p-8">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Visa Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional visa services with a focus on your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your UAE Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert visa team is here to help you navigate the immigration process and 
            establish your presence in the UAE. Get the visa support you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Visa Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
