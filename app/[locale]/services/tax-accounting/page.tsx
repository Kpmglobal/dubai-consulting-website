import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calculator, FileText, Shield, Users, Building2, CheckCircle, Clock, DollarSign, ArrowRight, TrendingUp, BookOpen, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function TaxAccountingPage() {
  const taxServices = [
    {
      title: 'Corporate Tax Planning',
      description: 'Strategic tax planning to minimize your corporate tax liability and optimize your business structure.',
      features: [
        'Tax-efficient business structures',
        'Transfer pricing strategies',
        'Tax loss optimization',
        'International tax planning',
        'Tax compliance reviews',
        'Tax audit support'
      ],
      duration: '2-4 weeks',
      startingPrice: 'AED 8,000',
      icon: Calculator
    },
    {
      title: 'VAT Registration & Filing',
      description: 'Complete VAT services including registration, monthly filing, and compliance management.',
      features: [
        'VAT registration',
        'Monthly VAT returns',
        'VAT compliance audits',
        'Input tax recovery',
        'VAT advisory services',
        'Penalty avoidance'
      ],
      duration: '1-2 weeks',
      startingPrice: 'AED 3,000',
      icon: FileText
    },
    {
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping services to maintain accurate financial records and ensure compliance.',
      features: [
        'Daily transaction recording',
        'Bank reconciliation',
        'Accounts payable/receivable',
        'General ledger maintenance',
        'Financial reporting',
        'Document management'
      ],
      duration: 'Ongoing',
      startingPrice: 'AED 2,500/month',
      icon: BookOpen
    },
    {
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services to ensure financial accuracy and regulatory compliance.',
      features: [
        'Financial statement audits',
        'Internal control reviews',
        'Compliance audits',
        'Risk assessments',
        'Audit planning',
        'Follow-up support'
      ],
      duration: '4-8 weeks',
      startingPrice: 'AED 15,000',
      icon: Shield
    },
    {
      title: 'Payroll Management',
      description: 'Complete payroll processing including salary calculations, tax deductions, and compliance.',
      features: [
        'Salary calculations',
        'Tax deductions',
        'Social security',
        'Leave management',
        'Payroll reports',
        'Compliance filing'
      ],
      duration: 'Ongoing',
      startingPrice: 'AED 1,500/month',
      icon: Users
    },
    {
      title: 'Financial Reporting',
      description: 'Comprehensive financial reporting services for better business decision-making.',
      features: [
        'Monthly financial statements',
        'Management reports',
        'Cash flow analysis',
        'Budget vs. actual',
        'KPI dashboards',
        'Board presentations'
      ],
      duration: 'Monthly',
      startingPrice: 'AED 2,000/month',
      icon: BarChart3
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Financial Assessment',
      description: 'Comprehensive review of your current financial situation and requirements',
      duration: '1 week',
      icon: Calculator
    },
    {
      step: 2,
      title: 'Service Planning',
      description: 'Develop customized service plan based on your business needs',
      duration: '3-5 days',
      icon: FileText
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Set up systems and begin providing services according to plan',
      duration: '1-2 weeks',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Continuous service delivery with regular reviews and updates',
      duration: 'Ongoing',
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified accountants and tax specialists with UAE expertise',
      icon: Users
    },
    {
      title: 'Cost Savings',
      description: 'Optimize tax positions and reduce compliance costs',
      icon: DollarSign
    },
    {
      title: 'Compliance Assurance',
      description: 'Ensure full compliance with UAE tax and accounting regulations',
      icon: Shield
    },
    {
      title: 'Real-time Support',
      description: 'Access to expert advice whenever you need it',
      icon: Clock
    },
    {
      title: 'Technology Integration',
      description: 'Modern accounting software and automation solutions',
      icon: Building2
    },
    {
      title: 'Strategic Insights',
      description: 'Financial analysis to support business growth decisions',
      icon: TrendingUp
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-900 via-accent-800 to-primary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Tax & Accounting Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Tax & Accounting Services
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Navigate UAE tax regulations with confidence. Our expert team provides comprehensive 
              tax planning, accounting, and compliance services to optimize your business finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Financial Consultation
              </Link>
              <Link 
                href="/services" 
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tax planning to bookkeeping, we provide all the financial services your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxServices.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-200 transition-colors">
                    <service.icon className="w-8 h-8 text-accent-600" />
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
                    <div className="text-lg font-bold text-accent-600">
                      {service.startingPrice}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="btn-accent w-full text-center"
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
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your financial needs are met efficiently
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center p-8">
                  <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-accent-300" />
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
              Why Choose Our Financial Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional financial services with a focus on your business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-900 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Business Finances?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert financial team is here to help you navigate tax regulations, maintain 
            accurate records, and optimize your business finances for growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Financial Consultation
            </Link>
            <Link href="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-accent-900">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
