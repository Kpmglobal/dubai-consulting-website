import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TrendingUp, Building2, BarChart3, Users, CheckCircle, Clock, DollarSign, ArrowRight, FileText, Shield, Globe, Home, PieChart } from 'lucide-react'
import Link from 'next/link'

export default function InvestmentPage() {
  const investmentServices = [
    {
      title: 'Real Estate Investment',
      description: 'Strategic real estate investment opportunities in Dubai\'s booming property market.',
      features: [
        'Residential properties',
        'Commercial real estate',
        'Off-plan investments',
        'Property management',
        'Rental yield optimization',
        'Exit strategy planning'
      ],
      duration: '2-6 months',
      startingPrice: 'AED 500,000',
      icon: Home
    },
    {
      title: 'Stock Market Investment',
      description: 'Professional stock market investment services with portfolio diversification strategies.',
      features: [
        'Portfolio analysis',
        'Stock selection',
        'Risk management',
        'Market timing',
        'Dividend strategies',
        'Performance tracking'
      ],
      duration: 'Ongoing',
      startingPrice: 'AED 50,000',
      icon: BarChart3
    },
    {
      title: 'Private Equity',
      description: 'Access to exclusive private equity opportunities in high-growth UAE companies.',
      features: [
        'Deal sourcing',
        'Due diligence',
        'Investment structuring',
        'Value creation',
        'Exit planning',
        'Co-investment opportunities'
      ],
      duration: '3-7 years',
      startingPrice: 'AED 1,000,000',
      icon: TrendingUp
    },
    {
      title: 'Mutual Funds',
      description: 'Diversified investment portfolios through professionally managed mutual funds.',
      features: [
        'Fund selection',
        'Asset allocation',
        'Risk assessment',
        'Regular rebalancing',
        'Tax optimization',
        'Performance monitoring'
      ],
      duration: 'Ongoing',
      startingPrice: 'AED 25,000',
      icon: PieChart
    },
    {
      title: 'Investment Portfolio Management',
      description: 'Comprehensive portfolio management services tailored to your investment goals.',
      features: [
        'Goal-based planning',
        'Asset allocation',
        'Risk management',
        'Regular rebalancing',
        'Performance reporting',
        'Tax optimization'
      ],
      duration: 'Ongoing',
      startingPrice: 'AED 100,000',
      icon: Building2
    },
    {
      title: 'Risk Assessment & Planning',
      description: 'Comprehensive risk assessment and investment planning for optimal returns.',
      features: [
        'Risk profiling',
        'Investment planning',
        'Portfolio optimization',
        'Stress testing',
        'Scenario analysis',
        'Regular reviews'
      ],
      duration: '2-4 weeks',
      startingPrice: 'AED 15,000',
      icon: Shield
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Investment Assessment',
      description: 'Comprehensive evaluation of your financial situation and investment objectives',
      duration: '1 week',
      icon: FileText
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Develop customized investment strategy based on your goals and risk tolerance',
      duration: '2 weeks',
      icon: TrendingUp
    },
    {
      step: 3,
      title: 'Portfolio Construction',
      description: 'Build diversified investment portfolio aligned with your strategy',
      duration: '1-2 weeks',
      icon: PieChart
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Execute investment strategy with ongoing monitoring and adjustments',
      duration: 'Ongoing',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Performance Review',
      description: 'Regular performance reviews and portfolio rebalancing',
      duration: 'Quarterly',
      icon: BarChart3
    }
  ]

  const benefits = [
    {
      title: 'Expert Advisors',
      description: 'Certified investment professionals with deep market knowledge',
      icon: Users
    },
    {
      title: 'Diversified Opportunities',
      description: 'Access to wide range of investment options across asset classes',
      icon: Globe
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies',
      icon: Shield
    },
    {
      title: 'Performance Tracking',
      description: 'Regular monitoring and reporting on investment performance',
      icon: BarChart3
    },
    {
      title: 'Tax Optimization',
      description: 'Tax-efficient investment strategies to maximize returns',
      icon: DollarSign
    },
    {
      title: 'Personalized Service',
      description: 'Tailored investment solutions based on your unique goals',
      icon: FileText
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-900 via-primary-800 to-secondary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Investment Services
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategic Investment Opportunities in Dubai
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Discover lucrative investment opportunities in one of the world\'s fastest-growing markets. 
              Our expert team provides comprehensive investment services to help you build wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary text-lg px-8 py-4"
              >
                Get Investment Consultation
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

      {/* Investment Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of investment services to help you achieve your financial goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentServices.map((service, index) => (
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
              Our Investment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your investment success
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
              Why Choose Our Investment Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional investment services with a focus on your financial success
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
            Ready to Start Building Your Wealth?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our expert investment team is here to help you discover opportunities and build 
            a diversified portfolio for long-term financial success in the UAE market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Investment Consultation
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
