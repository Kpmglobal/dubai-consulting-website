import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Building2, CheckCircle, Clock, DollarSign, Users, Globe, Shield, TrendingUp, ArrowRight, FileText, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CompanyFormationPage() {
  const formationTypes = [
    {
      title: 'Mainland Company Formation',
      description: 'Establish your business in Dubai mainland with full market access',
      features: [
        '100% foreign ownership allowed',
        'Full market access across UAE',
        'No corporate tax for eligible businesses',
        'Direct government support',
        'Flexible office location options'
      ],
      duration: '2-3 weeks',
      startingPrice: 'AED 18,000',
      icon: Building2
    },
    {
      title: 'Free Zone Company Formation',
      description: 'Set up in Dubai\'s prestigious free zones with tax benefits',
      features: [
        '100% foreign ownership',
        'Zero corporate tax',
        'Zero personal income tax',
        'Customs duty exemptions',
        'Repatriation of capital and profits'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 12,000',
      icon: Globe
    },
    {
      title: 'Offshore Company Formation',
      description: 'International business structure with privacy and tax benefits',
      features: [
        'Complete privacy protection',
        'No local taxation',
        'International banking access',
        'Asset protection',
        'Flexible ownership structure'
      ],
      duration: '1 week',
      startingPrice: 'AED 8,000',
      icon: Shield
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your business requirements and goals',
      duration: '1 day',
      icon: Users
    },
    {
      step: 2,
      title: 'Business Structure Selection',
      description: 'Choose the optimal business structure based on your needs and budget',
      duration: '2-3 days',
      icon: Building2
    },
    {
      step: 3,
      title: 'Document Preparation',
      description: 'Prepare and authenticate all required legal documents',
      duration: '3-5 days',
      icon: FileText
    },
    {
      step: 4,
      title: 'Government Submissions',
      description: 'Submit applications to relevant government authorities',
      duration: '5-10 days',
      icon: Shield
    },
    {
      step: 5,
      title: 'License Issuance',
      description: 'Receive your business license and registration documents',
      duration: '2-3 days',
      icon: CheckCircle
    },
    {
      step: 6,
      title: 'Post-Setup Support',
      description: 'Ongoing support for banking, visas, and operational requirements',
      duration: 'Ongoing',
      icon: TrendingUp
    }
  ]

  const requiredDocuments = [
    'Passport copy (valid for 6+ months)',
    'Residence visa copy (if applicable)',
    'NOC from current sponsor (if applicable)',
    'Business plan and description',
    'Financial statements (if applicable)',
    'Professional qualifications (for specific activities)',
    'Bank reference letter',
    'Proof of address in home country'
  ]

  const benefits = [
    {
      title: 'Tax Benefits',
      description: 'Enjoy zero corporate tax, zero personal income tax, and double taxation avoidance agreements',
      icon: DollarSign
    },
    {
      title: '100% Ownership',
      description: 'Full ownership control without requiring local partners or sponsors',
      icon: Users
    },
    {
      title: 'Strategic Location',
      description: 'Access to major markets in Europe, Asia, and Africa with excellent connectivity',
      icon: MapPin
    },
    {
      title: 'Government Support',
      description: 'Strong government support for business growth and innovation',
      icon: Shield
    },
    {
      title: 'Modern Infrastructure',
      description: 'World-class infrastructure, technology, and business facilities',
      icon: Building2
    },
    {
      title: 'Talent Pool',
      description: 'Access to diverse, skilled workforce from around the world',
      icon: Users
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Business Setup Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Company Formation in Dubai
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Establish your business presence in Dubai with our comprehensive company formation services. 
              Choose from mainland, free zone, or offshore structures tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Free Consultation
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

      {/* Formation Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Company Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer three main types of company formation to suit different business needs and objectives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formationTypes.map((type, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <type.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {type.duration}
                    </div>
                    <div className="text-lg font-bold text-primary-600">
                      {type.startingPrice}
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
              Our 6-Step Formation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make company formation simple and efficient with our proven step-by-step process
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

      {/* Required Documents */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600">
                Prepare these documents to expedite your company formation process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don't have all documents ready? We can help you obtain them!
              </p>
              <Link href="/contact" className="btn-primary">
                Get Document Assistance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dubai for Company Formation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dubai offers unparalleled advantages for international business expansion
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
            Ready to Start Your Business in Dubai?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert team will guide you through every step of the company formation process, 
            ensuring a smooth and successful setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
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
