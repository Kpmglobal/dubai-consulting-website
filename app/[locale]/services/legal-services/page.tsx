import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Scale, FileText, Shield, Users, Building2, CheckCircle, Clock, DollarSign, ArrowRight, Gavel, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function LegalServicesPage() {
  const legalServices = [
    {
      title: 'Contract Drafting & Review',
      description: 'Professional contract drafting, review, and negotiation services for all business agreements.',
      features: [
        'Commercial contracts',
        'Employment agreements',
        'Partnership agreements',
        'Service level agreements',
        'Non-disclosure agreements',
        'Distribution agreements'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 3,000',
      icon: FileText
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure your business operates within UAE legal framework and regulatory requirements.',
      features: [
        'Corporate governance',
        'Regulatory reporting',
        'Compliance audits',
        'Policy development',
        'Risk assessment',
        'Training programs'
      ],
      duration: '2-4 weeks',
      startingPrice: 'AED 5,000',
      icon: Shield
    },
    {
      title: 'Dispute Resolution',
      description: 'Expert legal representation and mediation services for business disputes and conflicts.',
      features: [
        'Commercial litigation',
        'Arbitration services',
        'Mediation support',
        'Contract disputes',
        'Employment disputes',
        'Debt recovery'
      ],
      duration: 'Varies',
      startingPrice: 'AED 8,000',
      icon: Gavel
    },
    {
      title: 'Intellectual Property',
      description: 'Protect your intellectual property rights with comprehensive IP legal services.',
      features: [
        'Trademark registration',
        'Patent applications',
        'Copyright protection',
        'IP licensing',
        'Infringement cases',
        'IP strategy'
      ],
      duration: '3-6 months',
      startingPrice: 'AED 4,000',
      icon: BookOpen
    },
    {
      title: 'Employment Law',
      description: 'Navigate UAE employment law with expert guidance and compliance support.',
      features: [
        'Employment contracts',
        'Workplace policies',
        'Labor disputes',
        'Visa compliance',
        'Termination procedures',
        'Employee handbooks'
      ],
      duration: '1-3 weeks',
      startingPrice: 'AED 2,500',
      icon: Users
    },
    {
      title: 'Corporate Governance',
      description: 'Establish robust corporate governance frameworks and compliance structures.',
      features: [
        'Board structure',
        'Corporate policies',
        'Risk management',
        'Audit committees',
        'Compliance frameworks',
        'Governance training'
      ],
      duration: '4-6 weeks',
      startingPrice: 'AED 6,000',
      icon: Building2
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your legal requirements and objectives',
      duration: '1 day',
      icon: Users
    },
    {
      step: 2,
      title: 'Legal Assessment',
      description: 'Comprehensive assessment of your current legal situation and needs',
      duration: '3-5 days',
      icon: BookOpen
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'Develop customized legal strategy and action plan',
      duration: '1 week',
      icon: Shield
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Execute legal strategy with ongoing support and guidance',
      duration: 'Varies',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Monitoring & Compliance',
      description: 'Ongoing monitoring and compliance support',
      duration: 'Ongoing',
      icon: Scale
    }
  ]

  const benefits = [
    {
      title: 'Expert Legal Team',
      description: 'Access to experienced lawyers specializing in UAE business law',
      icon: Users
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Transparent pricing and value-driven legal services',
      icon: DollarSign
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of UAE legal framework and regulations',
      icon: Building2
    },
    {
      title: 'Proactive Approach',
      description: 'Prevent legal issues before they become problems',
      icon: Shield
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock legal support when you need it most',
      icon: Clock
    },
    {
      title: 'Multilingual Service',
      description: 'Legal services in English, Arabic, Russian, and Turkish',
      icon: FileText
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Legal Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Legal Services for Your Business
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Navigate the complex legal landscape of the UAE with our comprehensive legal services. 
              From contracts to compliance, we ensure your business operates within the law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Legal Consultation
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a full spectrum of legal services to protect your business interests and ensure compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalServices.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-200 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-lg font-bold text-secondary-600">
                      {service.startingPrice}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="btn-secondary w-full text-center"
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
              Our Legal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your legal needs are met efficiently and effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center p-8">
                  <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-secondary-300" />
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
              Why Choose Our Legal Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional legal services with a focus on your business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Legal Support for Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert legal team is here to protect your business interests and ensure compliance 
            with UAE regulations. Get the legal support you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Legal Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary-900">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
